var cacheName = 'pwaTeste+-v1.0';

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

        './icons/logo_228x185.png',
        './icons/logo_512x512.png',
        './icons/logo_48x48.png',
        './icons/logo_72x72.png',
        './icons/logo_96x96.png',
        './icons/logo_144x144.png',
        './icons/logo_192x192.png',


        './images/bg.webp',
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