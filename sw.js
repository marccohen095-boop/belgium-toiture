const CACHE_NAME = 'belgium-toiture-v5';
const ASSETS = [
  './',
  './index.html',
  './outil-surface-toiture.html',
  './manifest.webmanifest',
  './assets/brand/belgium-energy-logo.png',
  './assets/brand/belgium-toiture-icon.png',
  './assets/brand/icon-192.png',
  './assets/roof-coverings/01-eternit-ondule.png',
  './assets/roof-coverings/02-eternit-amiante-losange-triangle.png',
  './assets/roof-coverings/03-bac-zinc-ondule.png',
  './assets/roof-coverings/04-bac-acier-nervure.png',
  './assets/roof-coverings/05-bac-acier-trapezoidal.png',
  './assets/roof-coverings/06-plaque-fibro-ciment-plate.png',
  './assets/roof-coverings/07-plaque-fibro-ciment-ondulee.png',
  './assets/roof-coverings/08-bac-acier-imitation-tuile.png',
  './assets/roof-coverings/09-panneau-sandwich-toiture.png',
  './assets/roof-coverings/10-bac-aluminium-nervure.png',
  './assets/roof-coverings/top-01-tuile-tempete-44.png',
  './assets/roof-coverings/top-02-tuile-du-nord-44.png',
  './assets/roof-coverings/top-03-panne-tfp.png',
  './assets/roof-coverings/top-04-actua-10.png',
  './assets/roof-coverings/top-05-tuile-plate-301-17x27.png',
  './assets/roof-coverings/top-06-tuile-romane-1-2.png',
  './assets/roof-coverings/top-07-tuile-beton-double-romane.png',
  './assets/roof-coverings/top-08-ardoise-fibres-ciment-40x24.png',
  './assets/roof-coverings/top-09-ardoise-fibres-ciment-60x30.png',
  './assets/roof-coverings/top-10-ardoise-naturelle-32x22.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
