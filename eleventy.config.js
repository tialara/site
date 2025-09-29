import { IdAttributePlugin, InputPathToUrlTransformPlugin, HtmlBasePlugin } from '@11ty/eleventy'
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'
import navigation from '@11ty/eleventy-navigation'
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img'
import rss from '@11ty/eleventy-plugin-rss'
import { minify as htmlMinify } from 'html-minifier-terser'

export default function (eleventyConfig) {
  // Configurações de desempenho
  eleventyConfig.setDataDeepMerge(true) // Deep merge para front matter

  // Cache busting para assets
  eleventyConfig.setUseGitIgnore(false)

  // Otimização de assets estáticos
  eleventyConfig.addPassthroughCopy({
    'src/assets': 'assets',
    'src/favicon.ico': '/favicon.ico',
    'site.webmanifest': '/site.webmanifest',
    'sw.js': '/sw.js',
  })

  // Adicionar watch para arquivos de template adicionais
  eleventyConfig.addWatchTarget('robots.txt')
  eleventyConfig.addWatchTarget('site.webmanifest')
  eleventyConfig.addWatchTarget('sw.js')

  // Monitorar mudanças
  eleventyConfig.addWatchTarget('src/assets')
  eleventyConfig.addWatchTarget('src/styles')

  // Ativar cache em produção
  if (process.env.ELEVENTY_ENV === 'production') {
    // Add cache control headers
    eleventyConfig.setBrowserSyncConfig({
      middleware: function(req, res, next) {
        // Cache static assets for 1 year
        if (req.url.match(/^\/(assets|styles|js)\/.*\.(jpg|jpeg|png|webp|avif|css|js)$/)) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
        // Cache HTML for 1 hour
        else if (req.url.match(/\.html$/) || req.url === '/') {
          res.setHeader('Cache-Control', 'public, max-age=3600');
        }
        next();
      },
      files: './dist/**/*',
      open: false,
      notify: false,
      ghostMode: false,
      ui: false,
      logLevel: 'silent',
    })
  }

  // Process CSS with PostCSS (Tailwind + Autoprefixer)
  eleventyConfig.addTemplateFormats('css')
  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: async function (inputContent, inputPath) {
      const postcss = await import('postcss')
      const autoprefixer = await import('autoprefixer')
      const tailwindcss = await import('tailwindcss')

      return async () => {
        // Process with PostCSS (Tailwind + Autoprefixer)
        const postcssResult = await postcss
          .default([tailwindcss.default(), autoprefixer.default()])
          .process(inputContent, { from: inputPath })

        return postcssResult.css
      }
    },
  })

  // Shortcodes and filters
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`)
  eleventyConfig.addFilter('isoDate', (value) => new Date(value).toISOString())
  eleventyConfig.addFilter('strip', (value = '') => String(value).trim())

  // Official plugins
  eleventyConfig.addPlugin(syntaxHighlight, { preAttributes: { tabindex: 0 } })
  eleventyConfig.addPlugin(navigation)
  eleventyConfig.addPlugin(HtmlBasePlugin)
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin)
  eleventyConfig.addPlugin(rss)

  // Image optimization
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ['avif', 'webp', 'auto'],
    failOnError: false,
    defaultAttributes: {
      loading: 'lazy',
      decoding: 'async',
    },
    filenameFormat: function(id, src, width, format) {
      const extension = format === 'jpeg' ? 'jpg' : format;
      return `${id}-${width}w.${extension}`;
    },
    urlPath: '/assets/images/',
    widths: [24, 48, 96, 128, 256, 384, 512, 768, 1024, null],
    minimumWidth: 24,
    maximumWidth: 1024,
  })

  // Bundles for CSS and JS
  eleventyConfig.addBundle('css', {
    toFileDirectory: 'dist',
    bundleHtmlContentFromSelector: 'style',
  })
  eleventyConfig.addBundle('js', {
    toFileDirectory: 'dist',
    bundleHtmlContentFromSelector: 'script',
  })

  // Minify HTML only in production
  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', async (content, outputPath) => {
      if (outputPath && outputPath.endsWith('.html')) {
        return await htmlMinify(content, {
          collapseWhitespace: true,
          removeComments: true,
          useShortDoctype: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          minifyCSS: true,
          minifyJS: true,
        })
      }
      return content
    })
  }

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
    },
    templateFormats: ['md', 'liquid'],
    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'liquid',
    serverOptions: {
      port: 8080,
      showVersion: true,
    },
  }
}
