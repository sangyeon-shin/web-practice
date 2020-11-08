/**
 *
 *	[SOW] Offline : Service Worker
 *
 *	@author 		Dorin Grigoras
 *					www.stepofweb.com
 *
 *	@Dependency 	-
 *	@Usage 			$.SOW.core.service_worker.init();
 *					Make your website availble when offline!
 * 
 *
 **/
;(function ($) {
	'use strict';


	/**
	 *
	 *	@vars
	 *
	 *
	 **/
	var scriptInfo 		= 'SOW Offline : Service Worker';


	$.SOW.core.service_worker = {


		/**
		 *
		 *	@config
		 *
		 *
		 **/
		config: {
			enable: 	true,
			scope: 		'/sw.js',
			jspath: 	'/'
		},


		/**
		 *
		 *	@init
		 * 	
		 *
		 **/
		init: function (selector, config) {

			if($.SOW.core.service_worker.config.enable !== true || $.SOW.globals.elBody.attr('data-sw-ignore') == 'true')
				return;

			var __config 			= $.SOW.helper.check_var(config);
			this.config 			= (__config !== null) ? $.extend({}, this.config, __config) : this.config;

			// ServiceWorker is a progressive technology. 
			// Ignore unsupported browsers
			if('serviceWorker' in navigator) {

				navigator.serviceWorker.register($.SOW.core.service_worker.config.jspath, {scope: $.SOW.core.service_worker.config.scope}).then((reg) => {

					// -- * --
					$.SOW.helper.consoleLog('Init : ' + scriptInfo);
					$.SOW.helper.consoleLog('[Service Worker] Registration succeeded. Scope is ' + reg.scope, 'background:#def3cf; color: #4a7e20; font-weight: bold; font-size: 13px;');
					// -- * --
				
				}).catch((error) => {

					// -- * --
					$.SOW.helper.consoleLog('Init : ' + scriptInfo);
					$.SOW.helper.consoleLog('[Service Worker] Registration failed with ' + error, 'color: #ff0000;');
					// -- * --

				});

			} else {

				// -- * --
				$.SOW.helper.consoleLog('Init : ' + scriptInfo);
				$.SOW.helper.consoleLog('[Service Worker] Not supported by this browser!', 'color: #ff0000;');
				// -- * --

			}


			// no chaining
			return null;

		}

	};


})(jQuery);