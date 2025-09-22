# WARP.md

## 📦 Projeto

- Static site com **Eleventy (11ty) v3**
- **pnpm** como package manager (`pnpm-lock.yaml` presente)
- Código em `src/`, build em `dist/`
- `src/assets` → passthrough copy

---

## 🔧 Pré-requisitos

- **Node.js 18+**
- **pnpm** instalado

---

## 🚀 Setup

```sh
pnpm install
pnpm exec eleventy --version # opcional
```

## 🖥️ Desenvolvimento

```sh
pnpm dev               # inicia em http://localhost:8080
pnpm dev -- --port=3000
```

## 🏗️ Build

```sh
pnpm build             # gera dist/ com minificação
pnpm exec serve dist   # opcional: servir local
```

## 🎨 Código

```sh
pnpm format            # formata
pnpm format:check      # verifica formatação (CI)
pnpm lint              # alias do format:check
```

## 📂 Estrutura

```txt
src/                → código
src/_includes/      → layouts/includes
src/assets/         → arquivos estáticos
dist/               → build
.eleventy.js        → config
```

## 🛠️ Tarefas comuns

- Nova página/post → `src/`
- Novo asset → `src/assets/`
- Atualizar deps → `pnpm up -Lri`

## ❗ Troubleshooting

```sh
pnpm dev -- --port=3001             # porta em uso
rm -rf node_modules pnpm-lock.yaml && pnpm install  # reset deps
node -v                             # verificar versão
```

## 🌱 Git workflow

```sh
git checkout -b feat/short-desc
# alterações...
git add -A
git commit -m "feat: short desc"
git push -u origin feat/short-desc
```

**Log rápido:**

```sh
git --no-pager log --oneline --decorate -n 30
```

## 🚢 Deploy

1. Build: `pnpm build`
2. Deploy `dist/` em Netlify, GitHub Pages, Cloudflare Pages, nginx, etc.

## 🔒 Secrets

- Não requer `.env` por padrão
- Se usar, já está `.gitignore` configurado
