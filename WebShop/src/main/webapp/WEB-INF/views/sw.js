/**
*
* 	:: Smarty :: Service Worker
* 	:: Cache  :: Activated by sow.service_worker.js
* 	:: Author :: [Dorin Grigoras] [www.stepofweb.com]
*	/documentation/plugins-sow-service-worker.html
*
* 	defaults:
	$.SOW.core.service_worker.init({
		enable: 	true,
		jspath: 	'/sw.js',
		scope: 		'/'
	});
*
* -- -- -- -- --
*				
* 				The cache is more than strong! :) Sometimes don't want to 
* 				refresh even with Application->Update on reload. 
* 				You need to remove workers & clear storage sometimes.
*
* 				https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
* 				Just update the cache paths and you should be all set!
*
* -- -- -- -- --
*
*				NOTE: is recommended that sw.js to not be cached by the server.
* 				"cache-control: public, max-age=0, must-revalidate"
*
* 				Quick Nginx Example:
				location /sw.js {
					alias /var/www/website/sw.js;
					add_header Cache-Control "no-cache";
					proxy_cache_bypass $http_pragma;
					proxy_cache_revalidate on;
					expires off;
					access_log off;
				}
*
* -- -- -- -- --
**/
const debug 		= true;								// console info. Always false on production!
const version     	= "3.0.0"; 							// cache version : change to invalidate the cache
const cacheName   	= 'smarty-${version}'; 				// cache name, can be anything
const homePage 		= 'index.html'; 					// empty for dynamic pages
const offlinePage 	= 'index.html'; 					// 'offline.html' displayed on offline error
const cacheExclude 	= [ 								// exclude folders/subfolers (URI parts) from cache (separated by comma)
						// ...
					  ];
					  
const cacheFiles = [
		'/', /* :: base :: */

		/* :: homepage :: */
		'/index.html',

		/* :: fonts */
		'/assets/fonts/flaticon/Flaticon.eot',
		'/assets/fonts/flaticon/Flaticon.svg',
		'/assets/fonts/flaticon/Flaticon.ttf',
		'/assets/fonts/flaticon/Flaticon.woff',
		'/assets/fonts/flaticon/Flaticon.woff2',

		/* :: css assets :: */
		'/assets/css/core.min.css',
		'/assets/css/vendor_bundle.min.css',
		'/assets/css/vendor.leaflet.min.css', 	// map

		/* :: js assets :: */
		'/assets/js/core.min.js',
		'/assets/js/vendor_bundle.min.js',
		'/assets/js/vendor.leaflet.min.js', 	// map

		/* :: smarty : documentation :: */
		'/documentation/',

		/* :: sw itself :: */
		'/sw.js'
	];




/* :: INSTALL CACHE :: */
self.addEventListener('install', e => {
	e.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll(cacheFiles).then(() => self.skipWaiting());
		})
	);
});




/* :: ACTIVATE :: */
self.addEventListener('activate', event => {
	event.waitUntil(self.clients.claim());
});




/* :: FETCH :: */
self.addEventListener('fetch', function(event) {

	/*
		Exclude directories/URL segments
	*/
	for(var i = 0; i < cacheExclude.length; ++i) {

		 if(event.request.url.match(cacheExclude[i])) {

		 	if(debug === true)
		 		console.log('[Service Worker] Excluded From Cache: ' + cacheExclude[i]);
		 	
		 	return;
		 }

	};


	event.respondWith(caches.match(event.request).then(function(response) {

		if(response) {

			if(debug === true)
				console.log('[Service Worker] Found ', event.request.url, ' in cache');

			return response;
		}


		if(debug === true)
			console.log('[Service Worker] Network request for ', event.request.url);


		return fetch(event.request).then(function(response) {

			if (response.status === 404)
				return caches.match(homePage);

			return caches.open(cacheName).then(function(cache) {
				cache.put(event.request.url, response.clone());
				return response;
			})

		})

	}).catch(function(error) {

		if(debug === true)
			console.log('[Service Worker] Error, ', error);

		return caches.match(offlinePage);

	}))
});
