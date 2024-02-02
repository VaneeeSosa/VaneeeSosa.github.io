const CACHE_NAME = 'mi-cache';
const urlsToCache = [
    '/',
    '/index.html',
    '/estilos.css',
    '/formulario.js',
    '/fondoTarea.png',
    '/fondoMovil2.png',
    '/images/AAAAAAA.jpeg',
    '/images/LaLaLa.jpeg'
 ];
 

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch(error => console.error('Error al añadir al caché:', error));
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
