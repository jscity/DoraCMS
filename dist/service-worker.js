/**
 * Copyright 2016 Google Inc. All rights reserved.
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

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/static/css/admin.82d1383.css","3034d1872de17385909b9747ff4f7a4c"],["/static/img/401.089007e.gif","089007e721e1f22809c0313b670a36f1"],["/static/img/404.a57b6f3.png","a57b6f31fa77c50f14d756711dea4158"],["/static/img/element-icons.173084b.ttf","173084b474ede2f0b6de4894793e453d"],["/static/img/element-icons.66650e1.woff","66650e122bbb5101a3716a3008512f42"],["/static/js/0.413cb30.js","8a3e4101bd718cdcfea58e9b8afd12e2"],["/static/js/1.4a621d0.js","989657209a8cf6708f1d3c3f5306f0eb"],["/static/js/10.495482c.js","4c7cdc73ee8e391118cd565ecc9f3e65"],["/static/js/11.17c2b60.js","a338a3ca2089241d398345bbf76be8ac"],["/static/js/12.c9bdcdb.js","d9962ff140a60536000a9435b8a538a6"],["/static/js/13.c857ab0.js","13ec757d3d0f8bf77ff0918c7c6d6694"],["/static/js/14.6b66b7e.js","ac634d154ce57995e70074423c009793"],["/static/js/15.3d33b29.js","f2019b427a01e5accedb8dba705df4c6"],["/static/js/16.255a750.js","a145b1f12062e489f427b543d8d12af8"],["/static/js/17.9258fe0.js","3de4abb7024537c32fac1170ae83a467"],["/static/js/18.005f4f3.js","d98de6b38fc2a8d65d4f40d8a1b247ae"],["/static/js/19.c6efab0.js","b2d1c0193b01ebdcc587d445a886468a"],["/static/js/2.f53e8fd.js","ef556c06151ca9d3e2b6b7305570a238"],["/static/js/20.eee876f.js","1241955b1340dfaaacc542805d0c7e04"],["/static/js/21.5c2fe08.js","12e27ace50231194b41c445ca7bea105"],["/static/js/22.5c47549.js","613900c8217a4cb0b482b5c3b51c884d"],["/static/js/23.a4b0451.js","526e0395c748bed15624b5cda2da9b7a"],["/static/js/24.ddcd2e8.js","a0f7549b0b164f0ddef15208b6a9b700"],["/static/js/25.2e63ea9.js","9069c13afdd36692bb525be59f4f14e1"],["/static/js/26.cae7d29.js","ab0e23003119e0bac98221f4c943c07d"],["/static/js/27.e081859.js","81fe8e39cefd1208ed8fdc1b17a0a80f"],["/static/js/28.c26fdfd.js","f7653113781bd343a707f5d791327736"],["/static/js/29.78b91bc.js","5d37826db1d2068099a7718ec87d98f9"],["/static/js/3.1a1dd25.js","ebff607c5f5e56c487d365b9db085326"],["/static/js/30.5537b8b.js","eb47af85c579a71e837b4154fb63c930"],["/static/js/31.b9f712d.js","7d6951e8bc5f5c291adbd15d904611bd"],["/static/js/32.a7c7f21.js","096b8e2c0481bbae5d71e4364e5806e3"],["/static/js/33.117fe75.js","7a97042fc0f9d7e9cd66662b864dd3b8"],["/static/js/34.30fc7b6.js","5c824d8260691b169b45a0c742f8b2b7"],["/static/js/35.37c63b4.js","ce0b039109a97863bb874b0e99c67d8b"],["/static/js/36.a34a985.js","49f7ad7e9aaf99d2284fe9416d9f6578"],["/static/js/37.58aaac4.js","85e1c3c339753bd7873fc1e07f3f3771"],["/static/js/38.c2af171.js","0dbbb1bcf3169dfe8ac7540048e79675"],["/static/js/39.e2d3382.js","85e80cd81b86390b24e1ec0c84580578"],["/static/js/4.e309832.js","9c49268ee899a479fc6a0ed31ac3fb5c"],["/static/js/40.4ad6c12.js","55ec4279f2c05a7eb51e3ea5c2f34429"],["/static/js/41.e2613c4.js","3fbddda8fe9df1fd1581725a6b7503ce"],["/static/js/42.78660ff.js","d3f2685b72cefe8081443c35f761fc72"],["/static/js/43.b640663.js","0558b1873e6d102a99505c33342381e0"],["/static/js/44.370600a.js","b31c0bd03fd9fbe09441867b75ed3099"],["/static/js/45.fcde13b.js","dd999a85ab67195ead06f60f5ee43918"],["/static/js/46.60bedb2.js","d0caa14bec982cae2194b78fe3e44a65"],["/static/js/47.17cfa3a.js","1fc35b62cc2b03603e45cc7df839a587"],["/static/js/48.8b8e4b6.js","0b97172ea3c8f5ad7828f944b7e8e68f"],["/static/js/49.700d6d4.js","e32e036907ba02bded10e45c9ddfca03"],["/static/js/5.43b167f.js","545bada774a400c84a95c053aa6e8950"],["/static/js/50.e068ed4.js","a8b245f9c4ff7243b00b3e9389759d62"],["/static/js/51.8955521.js","657222eb7ec920d1e9db927a509933cc"],["/static/js/52.85b51e3.js","60bd21e68c75bc0182124dd1f44955a2"],["/static/js/53.6273ae6.js","a2495a1ffc8353b6ac8e40dab91771d3"],["/static/js/54.a07e62d.js","a07aebf987eeced4cb43e5fa1873550b"],["/static/js/55.0276f37.js","44371a41c6689c34ac178434cb8e17c1"],["/static/js/56.1cddd1e.js","3b45db96d72254be20f182248abf1be2"],["/static/js/57.9bfc903.js","44e57aa3a023d64c076cd7e627071bb2"],["/static/js/58.7b81840.js","74e9a8412b49b786fc3a218720ef961a"],["/static/js/59.0a96d61.js","99a06080c800d6241811cafbd01e2213"],["/static/js/6.d456f05.js","48d32b45b7d7af3f2ebbc4c6caf8412f"],["/static/js/60.d5411ef.js","7db7ca03640e4c1f33a1ad7501e90d33"],["/static/js/7.71e0014.js","fe14eb81b0335c71573178ca85d2c4e3"],["/static/js/8.f5c30d9.js","8fbb1e76a4add28644d6095ed05783ef"],["/static/js/9.49d1e2f.js","fe72bf610a001e32d70e14f737978dbc"],["/static/js/admin.4a52af4.js","a45af3f75009bd0f1f3b74f6c1d43b9e"],["/static/js/manifest.2942f10.js","36fd3d63ed5600eb2ab5b195c2d439c9"],["/static/js/vendor.b883984.js","8d6cee908a792b8faf20c413a76bde54"]];
var cacheName = 'sw-precache-v3-doracms-vue2-ssr-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

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


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







