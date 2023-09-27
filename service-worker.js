var cacheName = 'testeib';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './sobrenos.html',
        './traders.html',
        './contato.html',

        './css/fontawesome-all.min.css',
        './js/main.css',
        './js/breakpoints.min.js',
        './js/browser.min.js',
        './js/jquery.min.js',
        './js/jquery.scrollex.min.js',
        './js/jquery.scrolly.min.js',
        './js/main.js',
        './js/util.js',

        './icons/logo_228x228.png',
        './icons/logo_512x512.png',
        './icons/logo_144x144.png',

        './images/overlay.png',
        './images/pic01.webp',
        './images/pic02.webp',
        './images/pic03.webp',
        './images/pic04.webp',
        './images/pic05.webp',
        './images/pic06.webp',
        './images/pic07.webp',
        './images/pic08.webp',
        './images/pic09.webp',
        './images/pic10.webp',
        './images/pic11.webp',
        './images/pic12.webp',
        './images/pic13.webp',
        
        
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});