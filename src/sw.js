(global => {
  'use strict';

  // Load the sw-toolbox library.
  importScripts('../bower_components/sw-toolbox/sw-toolbox.js');

   // Turn on debug logging, visible in the Developer Tools' console.
  global.toolbox.options.debug = true;
  toolbox.cache.name['my-cache'];
  toolbox.cache.maxEntries = 100;
  toolbox.cache.maxAgeSeconds = 86400;

  
  toolbox.router.get('/index.html', global.toolbox.cacheFirst, {
       cache: {
         name: 'my-cache'
       }

    });


   toolbox.router.get('/sw.js', global.toolbox.cacheFirst, {
       cache: {
         name: 'my-cache'
       }

    });


  toolbox.router.get(/^https:\/\/crossorigin.me\//
  , 
  global.toolbox.cacheFirst, {
  cache: {
      name: 'my-cache'
    }
  });

  toolbox.router.get(/^http:\/\/googleapis.com\//
  , 
  global.toolbox.cacheFirst, {
    cache: {
      name: 'my-cache'
    }
  });


var myDefaultRequestHandler = function(request, values, options) {
  return toolbox.router.get('/(.*)', 
    global.toolbox.cacheFirst, {
      cache: {
       name: 'my-cache'
     }
  });
}



toolbox.router.default = myDefaultRequestHandler;

  // Ensure that our service worker takes control of the page as soon as possible.
  //global.addEventListener('install', event => event.waitUntil(global.skipWaiting()));
  global.addEventListener('install', function(event) {
    global.toolbox.options.debug = true;
  event.waitUntil(
  caches.open('my-cache').then(function(cache) {
        // Important to `return` the promise here to have `skipWaiting()`
        // fire after the cache has been updated.
        return cache.addAll([
         '/index.html', '/sw.js',
         'https://crossorigin.me/https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css',
         'https://crossorigin.me/https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css',
         'https://crossorigin.me/https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',
         'https://crossorigin.me/https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js',

         'http://localhost:3000/app/components/navbar/navbar.html',

         'http://localhost:3000/assets/images/carlos.jpeg',
         'http://localhost:3000/assets/images/marie.jpeg',
         'http://localhost:3000/assets/images/old-soldier.jpeg',
         'http://localhost:3000/assets/images/tam-quan.jpeg',
         'http://localhost:3000/assets/images/treadStone-grounds.jpeg',
         'http://localhost:3000/assets/images/treadstone-property.jpeg',
         'http://localhost:3000/assets/images/alex-conklin.jpeg',
         'http://localhost:3000/assets/images/Jason-Bourne-Medusa-Chameleon.jpeg'

        ]);
    }).then(function() {
      // `skipWaiting()` forces the waiting ServiceWorker to become the
      // active ServiceWorker, triggering the `onactivate` event.
      // Together with `Clients.claim()` this allows a worker to take effect
      // immediately in the client(s).
      return self.skipWaiting();
    
    })
  );
});
  global.addEventListener('activate', event => event.waitUntil(global.clients.claim()));
  
})(self);