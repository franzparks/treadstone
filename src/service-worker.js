/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

'use strict';



var PrecacheConfig = [["/app/components/404/error.controller.js","155a56a2d6cadb662e20bb66e1e25614"],["/app/components/404/error.html","b8c2d4adb3910f010dde4c701f863d1c"],["/app/components/about/about.controller.js","3b182aac8e4915145477b96f2663436c"],["/app/components/about/about.html","dc06dba1d042e80f83ad8154467aefcc"],["/app/components/about/about.service.js","b7389ebd35ec2857205ea23ade103c50"],["/app/components/contact/contact.controller.js","918a9072ffb7c860bd161f5782976054"],["/app/components/contact/contact.html","15472974e50ae0a0aff08c4ee1abb29c"],["/app/components/faq/faq.controller.js","d1b65e0f0faf11e5f6826f04c9b6c38b"],["/app/components/faq/faq.html","6a6396e3505d47253f1ac82050e73e5d"],["/app/components/faq/faq.service.js","20c38c938500a0a2fdff43a733c8f18b"],["/app/components/navbar/navbar.css","37c1f7fb5f33ea45643e0d8b06e67d7f"],["/app/components/navbar/navbar.html","f2ca712917d9c6650ef46440447716ff"],["/app/components/pricing/pricing.controller.js","77f6be727728d9b2f4c323b37eb1f077"],["/app/components/pricing/pricing.html","df978f3a6ca5dae615a7239a5929854b"],["/app/components/pricing/pricing.service.js","6679c14912d3f6bcfec327ec9e0dd7c0"],["/app/components/services/services.controller.js","aa44c470ba7794c48aa7b29af9d4078e"],["/app/components/services/services.html","8c0b317768709172205270a5ca4d41e1"],["/app/components/signup/signup.controller.js","cc737f181d2d028cb6c3606fa9b70883"],["/app/components/signup/signup.html","6467a035da7e94effd564c40ee6317cc"],["/app/components/signup/signup.service.js","c5ff2a0df06e75b564b4b0a3b861ffca"],["/app/index.config.js","23960c24b4a4d80589d77c849b441d4d"],["/app/index.constants.js","b03fc41f235e89925214471e129258a2"],["/app/index.css","75e17704e03a2f06033c246476fe532e"],["/app/index.module.js","7b042b8e78bf2f0358d6ca64ff32a8f9"],["/app/index.route.js","3a60f903770510d9975519fc19f37ea4"],["/app/index.run.js","3c9c783bd1a52d2cab6358a3227477b0"],["/app/lib/service-worker-registration.js","aaa7fe03aab8202b9d137f2d9a9a1183"],["/app/main/main.controller.js","b2761b68b1e0562bd5a7f8fbf41e16a4"],["/app/main/main.controller.spec.js","d28b3c0796db53c36aa72b59398e78e3"],["/app/main/main.html","1dda8cb12af3dcff720dcbfd1792355a"],["/app/main/main.service.js","4f3b9d2cce9df079d758e3abd1f41c13"],["/assets/images/1200_300.png","bc0c8b5e595e45038ac9516ff81357d2"],["/assets/images/500_300.png","e143beb51738688b48254715d0493820"],["/assets/images/750_450.png","89e37cd446aec3a8f80e92177a32e990"],["/assets/images/Jason-Bourne-Medusa-Chameleon.jpeg","6f044dd7affacb66f220cd979e8778eb"],["/assets/images/alex-conklin.jpeg","153ce9fc54f18227a1ec2ac98d9bd108"],["/assets/images/angular.png","13574a0dc4855fc1ade190fb6b5c7cb6"],["/assets/images/bootstrap.png","7fc21d49480cd11f01b23a18dde54932"],["/assets/images/browsersync.png","2c3251013744d6bec863443986cb7a1b"],["/assets/images/carlos.jpeg","eaa84f87d8d353911aff5c68482a0564"],["/assets/images/gulp.png","27717cc3d783a4a8afcdffee7db25116"],["/assets/images/icon.png","084944ead65014b02ec0a991dec002f9"],["/assets/images/icon192.png","2c25c3b842b9d1b341f166da89008040"],["/assets/images/icon256.png","2c25c3b842b9d1b341f166da89008040"],["/assets/images/icon512.png","2c25c3b842b9d1b341f166da89008040"],["/assets/images/jasmine.png","d96af69cad252a6740ba97c75ee33c70"],["/assets/images/karma.png","219cdd78fd1c12e17a13f130cdad7466"],["/assets/images/marie.jpeg","3185a9f00de1c979982605e3d1fa0bb5"],["/assets/images/old-soldier.jpeg","774039fd8a14c185c13829e23f77d39e"],["/assets/images/protractor.png","3d84ec423d508481a7749b22295f9ee6"],["/assets/images/signup.service.js","c5ff2a0df06e75b564b4b0a3b861ffca"],["/assets/images/tam-quan.jpeg","64c68ebdc88a84a30923f331dbe7214a"],["/assets/images/treadstone-grounds.jpeg","c5f5d43601f353b2793e3b1cc67baccf"],["/assets/images/treadstone-property.jpeg","fe7aecdc27d52435416bc6c9da5fe6e8"],["/assets/images/ui-bootstrap.png","9e86d1f85d0f5fe4e656290e46d6e25d"],["/assets/images/wombosi.jpeg","e30ad3cdc9f01b0eea7d45eac59fa4a2"],["/assets/images/yeoman.png","42092f929161dae9c08a21bfb46ece4d"],["/index.html","3da1d4b22317fe2580b4f855637e7360"],["/service-worker.js","546b444950ec89a11adbb565e7bbab85"]];
var CacheNamePrefix = 'sw-precache-v1-treadstone-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var populateCurrentCacheNames = function (precacheConfig, cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl, ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) == -1;
        }).map(function(cacheName) {
          var url = new URL(CurrentCacheNamesToAbsoluteUrl[cacheName]);
          // Put in a cache-busting parameter to ensure we're caching a fresh response.
          if (url.search) {
            url.search += '&';
          }
          url.search += 'sw-precache=' + now;
          var urlWithCacheBusting = url.toString();

          console.log('Adding URL "%s" to cache named "%s"', urlWithCacheBusting, cacheName);
          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request.clone()).then(function(response) {
              if (response.status == 200) {
                return cache.put(request, response);
              } else {
                console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                  urlWithCacheBusting, response.status);
                // Get rid of the empty cache if we can't add a successful response to it.
                return caches.delete(cacheName);
              }
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) == 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            console.log('Deleting out-of-date cache "%s"', cacheName);
            return caches.delete(cacheName);
          })
        )
      });
    }).then(function() {
      if (typeof self.skipWaiting == 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim == 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command == 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method == 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    if (cacheName) {
      event.respondWith(
        // We can't call cache.match(event.request) since the entry in the cache will contain the
        // cache-busting parameter. Instead, rely on the fact that each cache should only have one
        // entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              return response || fetch(event.request).catch(function(e) {
                console.error('Fetch for "%s" failed: %O', urlWithoutIgnoredParameters, e);
              });
            });
          });
        }).catch(function(e) {
          console.error('Couldn\'t serve response for "%s" from cache: %O', urlWithoutIgnoredParameters, e);
          return fetch(event.request);
        })
      );
    }
  }
});

