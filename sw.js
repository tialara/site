// Nome do cache
const CACHE_NAME = 'tia-lara-cache-v1'

// Arquivos para armazenar em cache
const urlsToCache = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/assets/logo.png',
  '/assets/images/og-image.jpg',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZg.ttf',
  'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuL_MZg.ttf',
  'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI-DMZg.ttf',
  'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuEMZg.ttf',
]

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  // Realiza a instalação do service worker
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    })
  )
})

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  // Remove caches antigos
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    })
  )
})

// Estratégia de cache: Cache First, com fallback para rede
self.addEventListener('fetch', (event) => {
  // Ignora requisições de navegadores (chrome-extension, etc)
  if (!(event.request.url.indexOf('http') === 0)) return

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Retorna a resposta em cache se encontrada
      if (response) {
        return response
      }

      // Se não estiver em cache, busca na rede e armazena para uso futuro
      return fetch(event.request).then((response) => {
        // Verifica se a resposta é válida
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response
        }

        // Clona a resposta para armazenar em cache
        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          // Armazena a resposta em cache
          cache.put(event.request, responseToCache)
        })

        return response
      })
    })
  )
})

// Atualização em segundo plano
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
