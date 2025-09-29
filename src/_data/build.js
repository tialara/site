import { execSync } from 'node:child_process'
import { DateTime } from 'luxon'
import { existsSync, readFileSync } from 'node:fs'

function readGit(cmd) {
  try {
    return execSync(cmd, { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim()
  } catch {
    return null
  }
}

function normalizeRepoUrl(remote) {
  if (!remote) return null
  let url = remote.trim()
  // git@github.com:user/repo.git -> https://github.com/user/repo
  url = url.replace(/^git@github.com:/, 'https://github.com/')
  // Keep https form consistent and strip .git
  url = url.replace(/^https?:\/\/github.com\//, 'https://github.com/')
  url = url.replace(/\.git$/, '')
  return url
}

function getCommitInfo() {
  // Prefer Git CLI
  let hash = readGit('git rev-parse --short=7 HEAD')
  let iso = readGit('git log -1 --format=%cI')

  // Fallbacks for CI (Netlify)
  if (!hash) {
    hash = process.env.COMMIT_REF || process.env.HEAD || process.env.GIT_COMMIT || null
    if (hash) hash = String(hash).slice(0, 7)
  }
  if (!iso) {
    // Netlify não fornece COMMIT_TIMESTAMP por padrão; use SOURCE_DATE_EPOCH se existir
    const fromEnv = process.env.COMMIT_TIMESTAMP || process.env.SOURCE_DATE_EPOCH
    if (fromEnv) {
      // Se for epoch (número), converte
      const n = Number(fromEnv)
      if (!Number.isNaN(n) && n > 0) iso = new Date(n * 1000).toISOString()
      else iso = new Date(fromEnv).toISOString()
    }
  }

  // Repo URL
  let remote = readGit('git remote get-url origin')
  if (!remote) {
    // fallback tentando ler .git/config em build local (caso git remoto indisponível)
    try {
      if (existsSync('.git/config')) {
        const cfg = readFileSync('.git/config', 'utf8')
        const m = cfg.match(/url\s*=\s*(.+)/)
        if (m) remote = m[1].trim()
      }
    } catch {}
  }
  const repoUrl = normalizeRepoUrl(remote)

  return { hash, iso, repoUrl }
}

export default function () {
  const { hash, iso, repoUrl } = getCommitInfo()

  // Format date for pt-BR and São Paulo timezone in "dd/MM/yyyy HH:mm"
  let formattedDate = null
  if (iso) {
    try {
      formattedDate = DateTime.fromISO(iso, { zone: 'America/Sao_Paulo' })
        .setLocale('pt-BR')
        .toFormat('dd/LL/yyyy HH:mm')
      // .toFormat("dd/LL/yyyy HH:mm");
    } catch {
      try {
        formattedDate = new Date(iso).toLocaleString('pt-BR', {
          timeZone: 'America/Sao_Paulo',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        })
      } catch {}
    }
  }

  const shortHash = hash ? String(hash).slice(0, 7) : null
  const commitUrl = repoUrl && shortHash ? `${repoUrl}/commit/${shortHash}` : null

  return {
    shortHash,
    isoDate: iso || null,
    formattedDate: formattedDate || null,
    commitUrl,
  }
}
