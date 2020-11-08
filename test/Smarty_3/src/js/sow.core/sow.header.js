/**
 *
 *	[SOW] Header
 *
 *	@author 		Dorin Grigoras
 *					www.stepofweb.com
 *
 *	@Dependency 	-
 *	@Usage			$.SOW.core.header.init();
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
	var scriptInfo 			= 'SOW Header';

	window._headerID 		= '#header';
	window.lastScrollTop 	= 0;



	$.SOW.core.header = {


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


			if(!$.SOW.globals.elHeader)
				return;


			/** 
				1. HEADER : STICKY/FIXED
			**/
			if($.SOW.globals.elBody.hasClass('header-sticky'))
				$.SOW.core.header.header_sticky();


			/** 
				2. HEADER : REVEAL ON SCROLL 
			**/
			else if($.SOW.globals.elBody.hasClass('header-scroll-reveal'))
				$.SOW.core.header.header_scroll_reveal();


			/** 
				3. HEADER & ASIDE : HORIZONTAL NAVIGATION
			**/	$.SOW.core.header.horizontal_nav();


			/** 
				4. HEADER TOGGLE
			**/	$.SOW.core.header.header_toggle();


			/** 
				5. HEADER SCROLLTO : NAVBAR CLOSE
			**/	$.SOW.core.header.header_onepagenav();


			// -- * --
			$.SOW.helper.consoleLog('Init : ' + scriptInfo);
			// -- * --


		},




		/**
		 *
		 *	1. HEADER : STICKY/FIXED
		 * 	
		 *
		 **/
		header_sticky: function() {

			// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
			// Oct. 08. 2019
			// EVERYTHING REPLCACED WITH FLEX & CSS position: sticky;
			// Not fully supported (IE, etc) but is ok for admin!
			// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
			// [v3.0.0] Stop on admin!
			// Curently not used!
			// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
			if($.SOW.globals.elBody.hasClass('layout-admin'))
				return;
			// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

			if($.SOW.globals.elHeader.length < 1)
				return;

			var _headerEl_H 	= $.SOW.globals.elHeader.outerHeight() || 0,
				_diff 			= 0;


			if($.SOW.globals.elBody.hasClass('layout-boxed')) 
				_diff = _headerEl_H / 2 || 0;

			/* 

				1. add header spacing
				2. add header-fixed class

			*/	$.SOW.globals.elBody.addClass('header-fixed');
			

			// admin : padding top instead of spacer
			if($.SOW.globals.elBody.hasClass('layout-admin aside-sticky')) {

				jQuery('#middle').css({"padding-top":_headerEl_H + _diff + parseInt(jQuery('#middle').css('padding-top'))});

			} else {

				jQuery('#js_header_spacer').remove();
				// '#wrapper>'+window._headerID+', body>'+window._headerID
				jQuery(window._headerID).after('<div id="js_header_spacer" style="height:'+(_headerEl_H + _diff)+'px"><!-- spacer added by header js --></div>');

			}


			// -- -- -- --





			/* 

				.header-sticky + .header-over
				all what we do here is to apply body.user-scrolled-down if user scolled down
				so we can apply a CSS background-color to the header (else, will be buggy - transparent header on scroll down)

			*/
			if($.SOW.globals.elBody.hasClass('header-over') && jQuery(this).scrollTop() > 0)
				$.SOW.globals.elBody.addClass('user-scrolled-down');


			// stop! no need for scroll assist!
			if(!$.SOW.globals.elBody.hasClass('header-over') && jQuery('#top_bar').length < 1)
				return;







			/*
				
				1. on scroll down - hide #top_bar to make little more space (and show on scroll up)
				2. add|remove .user-scrolled-down - used together with .header-over
		
			*/
			var 
				top_bar_present 	= jQuery('#top_bar').length,
				top_bar_height 		= (top_bar_present > 0) ? jQuery('#top_bar').outerHeight() : 0,
				top_bar_js_ignore 	= false,
				delta 				= 5,
				didScroll;

			jQuery(window).scroll(function(event) {
				didScroll = true;
			});


			// check for js ignore (if true, do not hide #top_bar on scroll)
			if(top_bar_present > 0) {
				if(jQuery('#top_bar').hasClass('js-ignore'))
					var top_bar_js_ignore = true;
			}


			setInterval(function() {
				if(didScroll) {
					$.SOW.core.header.header_sticky__hasScrolled(_headerEl_H, delta, top_bar_present, top_bar_height, top_bar_js_ignore);
					didScroll = false;
				}
			}, 100);



			// On first load!
			$.SOW.core.header.header_sticky__hasScrolled(_headerEl_H, delta, top_bar_present, top_bar_height, top_bar_js_ignore);
			// -- -- -- -- --

		},
			header_sticky__hasScrolled: function(_headerEl_H, delta, top_bar_present, top_bar_height, top_bar_js_ignore) {
				var st = document.scrollingElement.scrollTop;

				// ADD distinct class - used by transparent header
				if(st < 1) {
					$.SOW.globals.elBody.removeClass('user-scrolled-down');
				} else {
					$.SOW.globals.elBody.addClass('user-scrolled-down');
				}


				if(top_bar_present > 0 && top_bar_js_ignore === false) {

					// Make sure they scroll more than delta
					if(Math.abs(window.lastScrollTop - st) <= delta)
						return;


					if(st > window.lastScrollTop && st > _headerEl_H){

						// Scroll Down
						$.SOW.globals.elHeader.css({"margin-top":"-"+top_bar_height+"px"});

					} else {

						// Scroll Up
						if(st + jQuery(window).height() < jQuery(document).height()) {
							$.SOW.globals.elHeader.css({"margin-top":""});
						}

					}
		
					window.lastScrollTop = st;

				}

			},





		/**
		 *
		 *	2. HEADER : REVEAL ON SCROLL 
		 * 	
		 *
		 **/
		header_scroll_reveal: function() {


			/** HEADER : REVEAL
				1. Hide Header on on scroll down
				2. Show Header on on scroll up
			** ************************************/
			if($.SOW.globals.elHeader.length > 0) {

				var _headerEl_H 	= $.SOW.globals.elHeader.outerHeight() || 0,
					_diff 			= 0,
					lastScrollTop 	= 0,
					delta 			= 5,
					didScroll;


				if($.SOW.globals.elBody.hasClass('layout-boxed')) 
					_diff = _headerEl_H / 2 || 0;

				/* 

					1. add header spacing
					2. add header-fixed class

				*/

				jQuery('#js_header_spacer').remove();
				// // '#wrapper>'+window._headerID+', body>'+window._headerID
				jQuery(window._headerID).after('<div id="js_header_spacer" style="height:'+(_headerEl_H + _diff)+'px"><!-- spacer added by header js --></div>');

				$.SOW.globals.elBody.addClass('header-fixed');
				jQuery('body>'+window._headerID).addClass('header-fixed');

				// on load : according to .header-over
				if($.SOW.globals.elBody.hasClass('header-over') && jQuery(this).scrollTop() > 0) {
					$.SOW.globals.elBody.addClass('user-scrolled-down');
					jQuery(window._headerID).addClass('header-down');
					lastScrollTop = jQuery(this).scrollTop(); // avoid jumping
				} else {
					$.SOW.globals.elBody.addClass('header-is-on-top');
				}

				// -- -- -- --


				jQuery(window).scroll(function(event) {
					didScroll = true;
				});

				setInterval(function() {
					if(didScroll) {
						$.SOW.core.header.header_scroll_reveal__hasScrolled(_headerEl_H, delta);
						didScroll = false;
					}
				}, 100);

			}

		},

			header_scroll_reveal__hasScrolled: function(_headerEl_H, delta) {
				var st = document.scrollingElement.scrollTop;

				// ADD distinct class - used by transparent header
				if(st < 1) {
					$.SOW.globals.elBody.addClass('header-is-on-top').removeClass('user-scrolled-down');
				} else {
					$.SOW.globals.elBody.addClass('user-scrolled-down');
				}

				// Make sure they scroll more than delta
				if(Math.abs(window.lastScrollTop - st) <= delta)
					return;

				if(st > window.lastScrollTop && st > _headerEl_H){

					// Scroll Down
					$.SOW.globals.elHeader.removeClass('header-down').addClass('header-up');
					$.SOW.globals.elBody.removeClass('header-is-on-top');

				} else {

					// Scroll Up
					if(st + jQuery(window).height() < jQuery(document).height()) {
						$.SOW.globals.elHeader.removeClass('header-up').addClass('header-down');
					}

				}

				window.lastScrollTop = st;
			},


		/**
		 *
		 *	3. HEADER & ASIDE : HORIZONTAL NAVIGATION
		 * 	
		 *
		 **/
		horizontal_nav: function() {


			if(jQuery("nav.horizontal-nav").length < 1)
				return;



			// CONTENT MAIN MENU
			if(jQuery("section nav.horizontal-nav").length > 0) {

				var _diffWidth 	= (jQuery("section .container").width() - jQuery('section nav.horizontal-nav').width()),
					_navHeight 	= jQuery("section nav.horizontal-nav").height();

				// Submenu widh & height
				jQuery("section nav.horizontal-nav>div>ul>li.main-nav-expanded>.main-nav-submenu").css({"width":_diffWidth+"px"});
				//jQuery("section nav.horizontal-nav>div>ul>li>.main-nav-submenu").css({"min-height":_navHeight+"px"});

				// SUBMENUS
				jQuery("section nav.horizontal-nav>div>ul>li").on("click", function(e) {
					var _this = jQuery(this);

					if(!jQuery('div', _this).hasClass('main-nav-open')) {
						jQuery("section nav.horizontal-nav>div>ul>li>.main-nav-submenu").removeClass('main-nav-open');
					}

					jQuery('div', _this).toggleClass('main-nav-open');
				});

			}






			// HEADER MAIN MENU
			var _hdiffWidth 	= jQuery(window._headerID+" .container").width() - 278,
				_hdiffHeight 	= jQuery(window._headerID+" nav.horizontal-nav").height();

			// Submenu widh & height
			jQuery(window._headerID+" nav.horizontal-nav>div>ul>li>.main-nav-submenu").css({"min-height":_hdiffHeight+"px"});
			jQuery(window._headerID+" nav.horizontal-nav>div>ul>li.main-nav-expanded>.main-nav-submenu").css({"width":_hdiffWidth+"px"});

			// SUBMENUS
			jQuery(window._headerID+" nav.horizontal-nav>div>ul>li").on("click", function(e) {
				var _this = jQuery(this);

				if(!jQuery('div', _this).hasClass('main-nav-open')) {
					jQuery(window._headerID+" nav.horizontal-nav>div>ul>li>.main-nav-submenu").removeClass('main-nav-open');
				}

				jQuery('div', _this).toggleClass('main-nav-open');
			});



			// HEADER MAIN MENU
			if(window.width > 960) { //  desktop|tablet

				jQuery("button.main-nav-horizontal").mouseover(function(e) {
					e.preventDefault();

					$.SOW.core.header._initMainNav();

				});


			} else { // mobile

				jQuery("button.main-nav-horizontal").on("click", function(e) {
					e.preventDefault();

					$.SOW.core.header._initMainNav();

				});

			}

	        $.SOW.globals.elBody.on('click', 'button.main-nav-horizontal, nav.horizontal-nav', function (e) {
	            e.stopPropagation();
	        });

	        jQuery("button.main-nav-horizontal, "+window._headerID+" nav.horizontal-nav").mouseover(function(e) {
	        	 e.stopPropagation();
	        });


			jQuery(document).on("click", function() {

				$.SOW.core.header._hideMainNav();

			});



			// Menu Click
			jQuery("nav.horizontal-nav>div>ul>li a").on("click", function(e) {
				var _href = jQuery(this).attr('href');

				if(_href == '#') {
					e.preventDefault();
				}
			});
		},

			_initMainNav: function() {

				// remove overlay first, no matter what
				jQuery("#main-nav-overlay").remove();
			
				// open menu
				jQuery(window._headerID+" nav.horizontal-nav").addClass('min-nav-active');

				// add overlay
				$.SOW.globals.elBody.append('<div id="main-nav-overlay"></div>');


				// Mobile menu open|close on click
				jQuery('button.nav-toggle-close').on("click", function() {
					jQuery("nav.horizontal-nav").removeClass('min-nav-active');
				});

				// Close menu on hover
		        jQuery("#main-nav-overlay, "+window._headerID).mouseover(function() {

		        	$.SOW.core.header._hideMainNav();

		        });

			},

			_hideMainNav: function() {
				jQuery("#main-nav-overlay").remove();
				jQuery("nav.horizontal-nav").removeClass('min-nav-active');
			},





		/**
		 *
		 *	4. HEADER TOGGLE
		 * 	
		 *
		 **/
		header_toggle: function() {

			if(!document.querySelector('.btn-header-toggle'))
				return;

			jQuery('.btn-header-toggle').on('click', function(e) {
				e.preventDefault();

				var is_hidden 		= $.SOW.globals.elBody.hasClass('header-hide') ? true : false,
					has_spacer 		= jQuery('#js_header_spacer').length > 0 ? true : false,
					_headerEl_H 	= $.SOW.globals.elHeader.outerHeight() 		|| 0,
					_addEl 			= '';

				// no header present?
				if(_headerEl_H < 1)
					return;


				// Add animation class to content
				if(has_spacer === true) {
					jQuery('#wrapper_content').addClass('js-animation-enable');
					_addEl = ', #wrapper_content';
				}


				// Add animation class!
				jQuery('#header'+_addEl).addClass('transition-all-ease-250');


				if(is_hidden === false) {

					jQuery('#header'+_addEl).animate({ 'margin-top': -_headerEl_H+"px" }, 50, function(e) {
						$.SOW.globals.elBody.addClass('header-hide');

						/* 	
							show toggle button with a delay to avoid spacing 
							issues (because of fixed position) + nice effect with css
						*/
						setTimeout(function() {

							$.SOW.globals.elBody.addClass('btn-header-toggle-show');

						}, 600);

					});

				} else {

					jQuery('#header'+_addEl).animate({ 'margin-top': "0" }, 0, function(e) {
						$.SOW.globals.elBody.removeClass('header-hide btn-header-toggle-show');

						// Remove animation class
						if(has_spacer === true) {
							setTimeout(function() {

								jQuery('#wrapper_content').removeClass('js-animation-enable');

							}, 600);
						}

					});
				}


			});

		},



		/**
		 *
		 *	5. HEADER SCROLLTO : NAVBAR CLOSE
		 * 	
		 *
		 **/
		header_onepagenav: function() {

			jQuery('.navbar-collapse').each(function() {

				var _t = jQuery(this);

				jQuery('.scroll-to, .js-ajax', _t).on('click',function() {

					if($.SOW.globals.is_mobile === true) 
						_t.collapse('hide');

				});

			});

		},


		



		/**
		 *
		 *	DESTROY / RESET (sticky/reveal)
		 * 	
		 *
		 **/
		header_destroy: function() {

			$.SOW.globals.elHeader.removeClass('header-down header-up');
			$.SOW.globals.elBody.removeClass('header-hide header-over header-fixed header-is-on-top user-scrolled-down');
			$.SOW.globals.elHeader.css({"margin-top":""});
			jQuery('#top_bar').removeClass('hide-by-scroll');
			jQuery('#js_header_spacer').remove();
			jQuery(window).off("scroll");

		}

	};


})(jQuery);