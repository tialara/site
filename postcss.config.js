// Configuração do PostCSS com otimizações
const isProduction = process.env.NODE_ENV === 'production'

export default {
  plugins: {
    // Adiciona prefixos de fornecedor automaticamente
    autoprefixer: {},

    // Configuração do Tailwind CSS
    '@tailwindcss/postcss': {},

    // Minificação em produção
    ...(isProduction
      ? {
          cssnano: {
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                },
                // Desativa a redução de calc() para evitar problemas com CSS custom properties
                calc: false,
              },
            ],
          },
          'css-declaration-sorter': {
            order: 'concentric-css',
          },
          'postcss-sort-media-queries': {},
        }
      : {}),
  },
}
