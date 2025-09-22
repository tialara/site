module.exports = function (eleventyConfig) {
  // Deep merge para dados globais/front matter
  eleventyConfig.setDataDeepMerge(true)

  // Copiar assets e observar alterações durante o dev
  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addWatchTarget('src/assets')


  // Shortcodes e filtros utilitários
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`)
  eleventyConfig.addFilter('isoDate', (value) => new Date(value).toISOString())
  eleventyConfig.addFilter('strip', (value) => (value ?? '').toString().trim())

  // Minificação de HTML apenas em produção
  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', async (content, outputPath) => {
      if (outputPath && outputPath.endsWith('.html')) {
        const { minify } = require('html-minifier-terser')
        return await minify(content, {
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
    // Formatos e engines
    templateFormats: ['md', 'liquid'],
    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'liquid',
    // Server (Eleventy v3)
    serverOptions: {
      port: 8080,
      showVersion: true,
    },
  }
}
