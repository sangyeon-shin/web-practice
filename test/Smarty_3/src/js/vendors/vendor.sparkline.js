/**
 *
 *	[SOW] Sparkline Chart
 *
 *	@author 		Dorin Grigoras
 *					www.stepofweb.com
 *
 *	@Dependencies 	-
 *	@Usage 			$.SOW.vendor.sparkline.init('.sparkline');
 *
 * 	@Ajax Support 	YES
 *
 * 	Vendor: 		https://github.com/gwatts/jquery.sparkline
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
	var scriptInfo 					= 'Vendor Sparkline Chart';

	$.SOW.vendor.sparkline = {


		/**
		 *
		 *	@config
		 *
		 *
		 **/
		config: {},



		/**
		 *
		 *	@collection
		 *
		 *
		 **/
		collection: $(),



		/**
		 *
		 *	@init
		 *
		 *
		 **/
		init: function (selector, config) {


			var __selector 			= $.SOW.helper.__selector(selector);
			var __config 			= $.SOW.helper.check_var(config);

			this.selector 			= __selector[0]; 	// '#selector'
			this.collection 		= __selector[1]; 	// $('#selector')
			this.selector_orig 		= __selector[2]; 	// $('#selector') // without ajax container prefix
			this.config 			= (__config !== null) ? $.extend({}, this.config, __config) : this.config;



			// Check Vendor ; dymanically load if missing (should be external)
			// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			if(this.selector != '') {
				if(jQuery(this.selector).length < 1)
					return null;
			}

			if (!jQuery().sparkline) {

				var paths = $.SOW.helper.vendorLogicPaths('sparkline');
				if(paths['path_js'] == '') {
					$.SOW.helper.consoleLog('Vendor Missing : ' + scriptInfo);
					return null;
				}

				$.SOW.helper.loadScript([paths['path_js']], false, true).done(function() {

					if (!jQuery().sparkline) {
						$.SOW.helper.consoleLog('Vendor Missing : ' + scriptInfo);
						return null;
					}

					// self reinit, external js loaded!
					$.SOW.vendor.sparkline.init(selector, config);
					return null;

				});

				return null;
			}
			// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
				


			// -- * --
			$.SOW.helper.consoleLog('Init : ' + scriptInfo);
			// -- * --


			// 1. Has no selector
			if(!this.selector) {
				$.SOW.vendor.sparkline.process($('.sparkline'));
				return $('.sparkline');
			}

			// 2. Has selector
			return this.collection.each(function() {
				
				$.SOW.vendor.sparkline.process($(this));

			});

		},





		/**
		 *
		 *	@process
		 *
		 *
		 **/
		process: function(_this) {


			if(_this.hasClass('js-spaklineified'))
				return;


			// https://omnipotent.net/jquery.sparkline/#s-docs
			_this.addClass('js-spaklineified').sparkline('html', {
					enableTagOptions: true,
					tagOptionPrefix: 'spark',
					disableHiddenCheck: true,
			}); 

		},

	};


})(jQuery);