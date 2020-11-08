/**
 *
 *	[SOW] Stepofweb Controller
 *
 *	@author Dorin Grigoras
 *			www.stepofweb.com
 *
 *	@version 1.1.0


 	@globals

 		$.SOW.globals.direction 						'ltr|rtl'
 		$.SOW.globals.width 							actual width 	(updated on resize)
 		$.SOW.globals.height 							actual height 	(updated on resize)
 		$.SOW.globals.is_mobile 						true|false
 		$.SOW.globals.is_modern_browser 				true if modern
 		$.SOW.globals.is_admin 							true|false 		(admin layout)
 		$.SOW.globals.breakpoints.[sm|ms|lg|xl] 		bootstrap default breakpoints
 		$.SOW.globals.elBody 							body element
 		$.SOW.globals.elHeader 							header element
 		$.SOW.globals.elAside 							main sidebar element

 	@functions	
 		$.SOW.reinit('#container') 						reinit plugins for a specific ajax container; see also:

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
	 var _v = '1.1.0';


	$.SOW = {


		/**
		 *
		 *	@init
		 *
		 *
		 **/
		init: function () {

			/**
				
				None, Strict and Lax Parameters
				1. None
					If you use the ‘None’ value, this allows cookies to be 
					sent to requests issued by third parties. You have to make 
					sure to add the secure attribute alongside setting SameSite=None.

				2. Strict
					If you use the ‘Strict’ value, the cookies will not be sent when 
					a third party issues the requests. In some cases, this option might 
					negatively impact your browsing experience. For example, if a website 
					you visit by clicking on a link has the SameSite=Strict attribute set, 
					the website might request you to log in again, since the cookie won’t 
					be sent along with the request.

				3. Lax
					If you use the ‘Lax’ value, this allows cookies to be sent if the third 
					party issues a GET request that causes a Top Level Navigation, which 
					means that the request will change the address bar. Only those requests 
					allow the cookie to be sent with the ‘Lax’ value.

			**/ 	document.cookie = 'cross-site-cookie=sow; ' + $.SOW.globals.cookie_secure + ';path=/';
			// -- --



			// Debug infos
			// https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing/
			if(window.performance) {

				var __start = new Date().getTime();
				window.onload = function() {

					if($.SOW.config.sow__debug_enable === true) {

						var __now 		= new Date().getTime();
						var pageNav 	= performance.getEntriesByType("navigation")[0];
						var pagePaint 	= performance.getEntriesByType('paint');

						$.SOW.helper.consoleLog('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
						$.SOW.helper.consoleLog('+ PAGE DISPLAY: ' + (__now - __start) + ' milliseconds', 'color: #6dbb30; font-size: 13px;');
						$.SOW.helper.consoleLog('+ DOM RENDERING:', 'color: #6dbb30; font-size: 13px;');

						if(pagePaint) {
							pagePaint.forEach( (performanceEntry, i, entries) => {
								$.SOW.helper.consoleLog('     - ' + performanceEntry.name + ' was ' + performanceEntry.startTime + ' milliseconds', 'color: #6dbb30; font-size: 13px;');
							});
						}

						$.SOW.helper.consoleLog('+ Depends on user hardware! First load is always expensive, next loads are using the cache! ', 'color: #999999; font-size: 12px;');

						if(pageNav) {
							$.SOW.helper.consoleLog('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
							$.SOW.helper.consoleLog('+ DNS Lookup time: ' + (pageNav.domainLookupEnd - pageNav.domainLookupStart) + ' seconds', 'color: #6dbb30; font-size: 13px;');
							$.SOW.helper.consoleLog('+ Connection time: ' + (pageNav.connectEnd - pageNav.connectStart) + ' milliseconds', 'color: #6dbb30; font-size: 13px;');
							$.SOW.helper.consoleLog('+ Cache Seek: ' + (pageNav.responseEnd - pageNav.fetchStart) + ' milliseconds', 'color: #6dbb30; font-size: 13px;');
							$.SOW.helper.consoleLog('+ Compression Ratio: ' + (pageNav.decodedBodySize / pageNav.encodedBodySize), 'color: #6dbb30; font-size: 13px;');
							$.SOW.helper.consoleLog('+ Download Time: ' + (pageNav.responseEnd - pageNav.requestStart) + ' milliseconds', 'color: #6dbb30; font-size: 13px;');
						}
						
						$.SOW.helper.consoleLog('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

					}
				}

			}



			$(document).ready(function() {

				/* 

					Check if debug is enabled
					Should be disabled on production!

				*/
				if($.SOW.config.sow__debug_enable === true) {

					$.SOW.helper.consoleLog('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
					$.SOW.helper.consoleLog('+ CONSOLE DEBUG ENABLED : gulp.config.settings.js', 'color: #ff0000; font-size: 13px;');
					$.SOW.helper.consoleLog('+ SOW Controller : ' + _v, 'color: #ff0000; font-size: 13px;');
					$.SOW.helper.consoleLog('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

				}

				// on load
				$.SOW.globals.js_location 	= $.SOW.helper.jsLocation();
				$.SOW.globals.css_location 	= $.SOW.helper.cssLocation();
				$.SOW.onresize();



				/*
				
					1. 	Check for bootstrap
						:: 	Part of bundle file! 
							vendor_bundle.min.js

				*/
				if(typeof $().emulateTransitionEnd === 'function') {
					$.SOW.reinit(); /* first init ; ajax callable */
					return;
				}



				/*
				
					1. 	Bundle not loaded
						:: 	Load it! And init!
							vendor_bundle.min.js

				*/
				// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
				$.SOW.helper.loadScript([$.SOW.globals.js_location + 'vendor_bundle.min.js'], false, true).done(function() {
					$.SOW.helper.consoleLog('Vendor Bunde: Dynamically loaded!');
					$.SOW.reinit(); /* first init ; ajax callable */
				});
				// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

			});

		},



		/**
		 *
		 *	@globals
		 *	SOW Config
		 *
		 **/
		globals: {

			direction 			: $('body').css('direction'), 	/* rtl | ltr */
			width 				: $(window).width(), 			/* window width, updated on resize */
			height 				: $(window).height(), 			/* window height, updated on resize */
			is_modern_browser 	: ('querySelector' in document && 'localStorage' in window && 'addEventListener' in window), 	/* `true` if modern */
			is_mobile 			: ($(window).width() < 993) 			? true : false,
			is_admin 			: $('body').hasClass('layout-admin') 	? true : false,
			ajax_container 		: 'body', 						/* DO NOT USE THIS IN YOUR SCRIPT, IS EXCLUSIVELY USED BY REINIT() FUNCTION */
			page_first_load 	: true, 						/* set by reinit() to false after first load - used by ajax */
			js_location 		: '',							/* javascripts location, used to dinamicaly load js scripts */
			css_location 		: '',							/* javascripts location, used to dinamicaly load css */
			cookie_secure 		: 'SameSite=None; secure',		/* New Google Secure Cookie */

			/* bootstrap breakpoints */
			breakpoints 	: {
				'sm': 576,
				'md': 768,
				'lg': 992,
				'xl': 1200
			},

			/* 
				Most used only!
				Cache once : Use everywhere 
			*/
			elBody			: $('body'),
			elHeader		: ($('#header').length > 0) 	? $('#header') 		: null,
			elAside			: ($('#aside-main').length > 0) ? $('#aside-main') 	: null,

		},


		/**
		 *
		 *	@vanilla
		 *	jQuery replacements [vanillajs]
		 *
		 **/
		vanilla: {},



		/**
		 *
		 *	@core
		 *	SOW Core Plugins
		 *
		 **/
		core: {},



		/**
		 *
		 *	@vendor
		 *	Vendor Plugins [separated by SOW]
		 *
		 **/
		vendor: {},



		/**
		 *
		 *	@helper
		 *	SOW Helpers
		 *
		 **/
		helper: {},



		/**
		 *
		 *	@custom
		 *	My Custom [optional]
		 *
		 **/
		custom: {},



		/**
		 *
		 *	@resize
		 *	Window Resize
		 *
		 **/
		onresize: function() {

			// On Resize
			jQuery(window).resize(function() {

				if(window.afterResizeApp)
					clearTimeout(window.afterResizeApp);

				window.afterResizeApp = setTimeout(function() {


					/** Window Width **/
					$.SOW.globals.width 	= jQuery(window).width();

					/** Window Height **/
					$.SOW.globals.height 	= jQuery(window).height();

					/** Is Mobile **/
					$.SOW.globals.is_mobile = ($(window).width() < 993) ? true : false;


				}, 150);

			});

		},



		/**
		 *
		 *	@reinit
		 *	Ajax Callable
		 *
		 **/
		reinit: function(ajax_container) {

			/*
				For each Ajax call, we temporarily set the ajax container as global
				After reinit, we reset back the ajax container as 'body'
			*/
			$.SOW.globals.ajax_container = $.SOW.helper.check_var(ajax_container) || 'body';


			/** Bootstrap Toasts **/ 
			$($.SOW.globals.ajax_container + ' .toast').toast('show');


			/** Bootstrap Tooltip **/ 
			$($.SOW.globals.ajax_container + " [data-toggle=tooltip]," + $.SOW.globals.ajax_container + " [data-tooltip]").tooltip('dispose').tooltip({
				container: ($.SOW.globals.ajax_container == 'body') ? 'html' : $.SOW.globals.ajax_container /* fixing wired positioning! */
			});


			/** Bootstrap Popover **/
			$($.SOW.globals.ajax_container + ' [data-toggle="popover"]').popover({
				container: ($.SOW.globals.ajax_container == 'body') ? 'html' : $.SOW.globals.ajax_container /* fixing wired positioning! */
			});


			/** Bootstrap Carousel **/
			$($.SOW.globals.ajax_container + ' .carousel').carousel('dispose').carousel({
				direction: 	($.SOW.globals.direction == 'ltr') ? 'right' : 'left'
			});

			/** Bootstrap Scrollspy **/
			$('[data-spy="scroll"]').each(function () {
				$(this).scrollspy('refresh');
			});



			/*

				Autoinit plugins
				Specified in Config

			*/
			// for (var index = 0; index < $.SOW.config.autoinit.length; ++index) {
			for (var index in $.SOW.config.autoinit) {

				// Not first page load, skip if plugin do not allow reinit by ajax
				if($.SOW.globals.page_first_load === false && $.SOW.config.autoinit[index][3] === false)
					continue;

				$.SOW.helper.executeFunctionByName(
						$.SOW.config.autoinit[index][0], 	// script
						window, 
						$.SOW.config.autoinit[index][1], 	// selector
						$.SOW.config.autoinit[index][2]);	// config

			}


			/*
				
				Reserved for emergencies!
				Called for each ajax container!

				global_callback = function(ajax_container) {
					...
				}

			*/
			if(typeof global_callback === 'function')
				$.SOW.helper.executeFunctionByName('global_callback', window, $.SOW.globals.ajax_container);


			/*
				Page classic preloader : first load only!
			*/
			if($.SOW.globals.page_first_load === true) {

				jQuery('#page_preload').fadeOut(1000, function() {
					jQuery(this).remove();
				});

			}

			// First page load finished!
			// Any future reinit() calls are Ajax!
			$.SOW.globals.page_first_load 	= false;
			$.SOW.globals.ajax_container 	= 'body'; // reset

		},


	};



	/**
	 *
	 *	Init this
	 *
	 *
	 **/
	$.SOW.init();

})(jQuery);