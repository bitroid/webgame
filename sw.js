const CACHE_NAME = 'brick-breaker-v1';
const urlsToCache = [
  '/webgame/',
  '/webgame/index.html',
  '/webgame/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});