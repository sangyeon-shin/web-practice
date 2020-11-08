/**
 *
 *	[SOW] Google Font
 *
 *	@author 		Dorin Grigoras
 *					www.stepofweb.com
 *
 *	@Dependency 	-
 *	@Usage			$.SOW.core.gfont.init('[data-gfont]');
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
	var scriptInfo 		= 'SOW Google Font';


	$.SOW.core.gfont = {


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
			this.config 			= (__config !== null) ? $.extend({}, this.config, __config) : this.config;


			if(jQuery(this.selector).length < 1)
				return;


			// -- * --
			$.SOW.helper.consoleLog('Init : ' + scriptInfo);
			// -- * --


			// 1. Has no selector
			if(!this.selector) {
				$.SOW.core.gfont.process($('[data-gfont]'));
				return this.collection;
			}

			// 2. Has selector
			return this.collection.each(function() {
				
				$.SOW.core.gfont.process($(this));

			});

		},



		/**
		 *
		 *	@process
		 * 	
		 *
		 **/
		process: function(_this) {

			if(_this.hasClass('js-gfontified'))
				return;


			var _font = _this.data('gfont') 	|| '',
				_wght = _this.data('wght') 		|| '300;400;500',
				_dspl = _this.data('display') 	|| 'swap';


			if(_font == '')
				return;

			_this.addClass('js-gfontified');
			var _gfont 		= _font.replace(/ /g, '+');
			var _cssID 		= _font.replace(/ /g, '_').toLowerCase();
			var _rand 		= $.SOW.helper.randomStr(3, 'L');
			var _lnk 		= 'https://fonts.googleapis.com/css2?family='+_gfont+':wght@'+_wght+'&display='+_dspl;
			var _el 		= jQuery('head #'+_cssID);

			if(_el.length > 0) {
				var _class = _el.data('class');
				_this.addClass(_class);
				return;
			}

			jQuery('head').append('<link id="'+_cssID+'" data-class="gfont_'+_rand+'" href="'+_lnk+'" rel="stylesheet">')
						  .append('<style type="text/css">'
									  + ".gfont_"+_rand+"{font-family: '"+_font+"',sans-serif!important;}"
								  +'</style>');

			_this.addClass("gfont_"+_rand);

		},


	};


})(jQuery);