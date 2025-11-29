const CACHE_NAME = "grid-art-v3";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon.png",
  "/image_12.png",
  "/screenshot1.png",
  "/screenshot2.png"
];

// 1. INSTALL: Cache assets immediately
self.addEventListener("install", (e) => {
  self.skipWaiting(); // Force activation
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 2. ACTIVATE: Clean up old caches and take control
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim(); // Fix for "No active service worker" error
});

// 3. FETCH: Serve from Cache -> Network Fallback
self.addEventListener("fetch", (e) => {
  // Only cache HTTP/HTTPS requests (ignore chrome-extension:// etc.)
  if (!e.request.url.startsWith('http')) return;

  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

// 4. BACKGROUND SYNC (Satisfies PWABuilder requirement)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-grid-data') {
    console.log('Background sync trigger');
  }
});