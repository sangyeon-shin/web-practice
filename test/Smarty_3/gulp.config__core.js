module.exports = function(smarty) {

	return {

		output_name 		: 'core', 				// without .js/.css (do not change!!!)
		path_js 			: 'src/js/sow.core/', 	// used by watch function only!


		/**

			:: OPTIONAL :: 
			Add version on top, as a comment!
			By default, package.js is used to get the current Smarty version.
			If this is enabled (uncommented), will be used instead.

		**/
		// build_version 		: 'v3.0.0',


	   /**

			------------------------------------------------------------------------
			 enable: false 		skipped, not compiled
			------------------------------------------------------------------------


			NOTE: 	if `bundle: false` , SOW scripts are NOT dinamicaly loaded like vendors are.
					Need a manual inclusion and manual intialization. This is because SOW scripts
					are not external scripts using a controller to load them. Are pare of Smarty Core!

					__required__ should never be changed!

			* Specified size is for already minified files.
		******************************************************************************************************* **/


		list : {

			__required__: 					{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 120Kb 	(including jQuery 88Kb)
			// --
			sow_header: 					{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 7Kb
			sow_search_suggest: 			{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 9Kb
			sow_lazyload: 					{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 1Kb
			// --
			sow_ajax_navigation: 			{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 10Kb
			sow_ajax_content: 				{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 4Kb
			sow_ajax_form: 					{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 4Kb
			sow_ajax_select: 				{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 4.5Kb
			sow_ajax_modal: 				{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 3Kb
			sow_ajax_confirm: 				{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 6Kb
			sow_file_upload: 				{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 24Kb

			// not required but all plugins are using it. If missing, classic alert() is used.
			sow_toast: 						{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 4Kb

			sow_dropdown_click_ignore: 		{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 1.5Kb
			sow_dropdown: 					{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 1.5Kb 		
			sow_dropdown_ajax: 				{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 3Kb

			sow_count_animate: 				{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 4.1Kb
			sow_btn_toggle: 				{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 2.5Kb
			sow_nav_deep: 					{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 2Kb
			sow_form_validate: 				{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 2Kb
			sow_form_advanced: 				{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 7Kb
			sow_checkall: 					{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 1Kb
			sow_checkgroup: 				{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 1Kb
			sow_gdpr: 						{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 2Kb
			sow_sidebar: 					{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 1Kb
			sow_scroll_to: 					{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 1Kb
			sow_search_inline: 				{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 1Kb
			sow_input_suggest: 				{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 2Kb
			sow_timer_autohide: 			{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 1Kb
			sow_timer_countdown: 			{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 2Kb
			sow_gfont: 						{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 1.5Kb
			sow_utils: 						{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 1Kb
			sow_service_worker: 			{	enable: false, 	autoinit: true, 	bundle: true	} 		// 1Kb
																			
																						/* 	231 Kb total, 
																							Smarty Core : 141Kb, without jQuery */

		},
		/** **************************************************************************************************** **/
		/*

			DEPENDENCIES =  EXTERNAL FILES
			Are packed/bundled only if a vendor is found using these dependencies!
				You can add more js files separated by comma for each one:
				dep_name: ['file1.js', 'file2.js', 'etc.js']

			How to use:
			dependencies: 			['fuzzy', 'and_so_on'],

		*/
		DEPENDENCIES : {

			 /* REQUIRED BY: 		sow_search_suggest */
			fuzzy: 				['node_modules/fuzzy.js/fuzzy.js'],										// 2Kb

		},



		/** **************************************************************************************************** **/



		__required__ : {				/* REQUIRED */
			path_js:				[
										'node_modules/jquery/dist/jquery.js',  								// 88Kb
										'node_modules/js-cookie/src/js.cookie.js', 							// 2Kb

										'src/js/sow.core/sow.js',          		// required
										'src/js/sow.config.js',            		// Main config file (after sow.js)
										'src/js/sow.core/sow.helper.js',   		// required
										'src/js/sow.core/sow.vanilla.js',   	// required (jQuery replacement)
									],
			path_css: 				[
										'src/scss/main.scss',
										'src/scss/_vendors/_sow/sow_ajax.scss'
									],
			autoinit: 				{}
		},/* ---------------------------------------------------------------------------------------------------- */





		sow_header : { 				/* HEADR */
			path_js:				['src/js/sow.core/sow.header.js'],
			path_css: 				['src/scss/_vendors/_sow/sow_header.scss'],
			autoinit: 				{
										function: 		'$.SOW.core.header.init',
										selector: 		null,
										config: 		{},
										reinit_ajax: 	false
									}
		},/* ---------------------------------------------------------------------------------------------------- */



		sow_dropdown_click_ignore : {/* DROPDOWN CLICK IGNORE */
			path_js:				['src/js/sow.core/sow.dropdown_click_ignore.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.dropdown_click_ignore.init',
										selector: 		'.dropdown-menu.dropdown-click-ignore',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */



		sow_dropdown : { 			/* DROPDOWN */
			path_js:				['src/js/sow.core/sow.dropdown.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.dropdown.init',
										selector: 		'.dropdown-menu.dropdown-menu-hover',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */



		sow_dropdown_ajax : { 		/* DROPDNW : AJAX */
			path_js:				['src/js/sow.core/sow.dropdown_ajax.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.dropdown_ajax.init',
										selector: 		'a[data-toggle="dropdown"]',
										config: 		{
															// general
															loading_icon: 			'fi fi-circle-spin fi-spin',
															clearCacheInterval: 	1000 * 60 * 30, 	// 30 min refresh cache


															// json only : dropdown tpl : strating|ending tags (UL/LI or DIV)
															tpl_start: 				'<ul class="list-unstyled m-0 p-0">',
															tpl_end: 				'</ul>',

															tpl_ItemStart: 			'<li class="dropdown-item">',
															tpl_ItemStartWChilds: 	'<li class="dropdown-item dropdown">',
															tpl_ItemEnd: 			'</li>',

															tpl_Child_Start: 		'<ul class="dropdown-menu dropdown-menu-hover dropdown-menu-block-md shadow-lg b-0 m-0">',
															tpl_Divider: 			'<li class="dropdown-divider"></li>',
										},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_btn_toggle : { 			/* BUTTON TOGGLE */
			path_js:				['src/js/sow.core/sow.btn_toggle.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.btn_toggle.init',
										selector: 		'.btn-toggle',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_nav_deep : {			/* NAV DEEP */
			path_js:				['src/js/sow.core/sow.nav_deep.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.nav_deep.init',
										selector: 		'.nav-deep',
										config: 		{ speed:150 },
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_scroll_to : { 			/* SCROLL TO */
			path_js:				['src/js/sow.core/sow.scroll_to.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.scroll_to.init',
										selector: 		'a.scroll-to',
										config: 		{
															// button scroll to speed
															speed: 400,

															// scroll 2 top
															s2t_enable:         true,
															s2t_class:          'btn-secondary',
															s2t_position:       'end',   	// start = left, end = right (inverted for RTL)
															s2t_mob_minH:       1200,		// min. content height to show on mobile
															s2t_dsk_minH:       2300,		// min. content height to show on desktop
															// when scrolling, button is shown if currentScroll > minH / 2

														},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_search_inline : { 		/* INLINE SEARCH */
			path_js:				['src/js/sow.core/sow.search_inline.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.search_inline.init',
										selector: 		'input.iqs-input',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_input_suggest : { 		/* INPUT SUGGEST */
			path_js:				['src/js/sow.core/sow.input_suggest.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.input_suggest.init',
										selector: 		'input.input-suggest',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_ajax_navigation : { 	/* AJAX NAVIGATION */
			path_js:				['src/js/sow.core/sow.ajax_navigation.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.ajax_navigation.init',
										selector: 		'a.js-ajax',
										config: 		{

															/**

																Please, read the documentation first!
																Almost anything can be overwritten by html attributes.

																/documentation/plugins-sow-ajax-navigation.html

															**/
															enable: 					true,
															target_container: 			'#middle', 						// this is where data is pushed (middle of the website)

															parser_extract_enable: 		true,
															parser_force_push2target: 	false, 							// in case #middle element not found in request, entire data/page is pushed/shown
															parser_extract_element: 	'#middle, #page_js_files', 		// empty = push to target_container the entire content
															
															page_404: 					'404.html',

															// optional! on each click, the class is added and removed!
															// animation purpose only!
															container2_element: 		'img.js-ajax-loaded-animate', 	// optional! 
															container2_class: 			'animate-bouncein', 			// optional! 

															// added to request as params - backend identifiers.
															// useeful only if parser is NOT used - to identify and send only the middle content!
															data_params: 				{ajax:'true'},
															update_url: 				true,
															show_loading_icon: 			true,
															method:  					'GET',
															autoscroll_to_content: 		true, 							// scroll up to content after page loaded

															// Warning! Is a global callback - if used, is called on EACH link click.
															// You can also use attributes for each link to have an individual callback! (see documentation)
															callback_function:  		'',

															// content (server response) is sent to your callback function only.
															callback_before_push:  		false,
															autoscroll_to_content: 		true, // scroll up to content after page loaded

															// Reload page content on back/forward history button instead of loading from history cache
															onpopstate_reload:  		true,

															/*
																Different than callback, cannot be overwrited by params
																Will call a custom function after each page load
																Condition: callback_before_push: false (else, call the function from your callback).
																
																Can be used to reinit custom scripts/plugins and/or process special data

																custom_function_example = function(el, target_container) {
																	// el 			= link clicked 						$(this)
																	// container 	= container where data is pushed   	(string:#middle)
																}
															*/
															custom_function_call: 			'',


															// jQuery ajax purpose
															// leave them as they are, or please reffer to jQuery documentation!
															contentType 					: '',
															dataType 						: '',
															headers 						: '',
															crossDomain 					: '',


															/*
																
																GARBAGE ERASER : FOREIGN PLUGINS
																(a full ajax project might need it).

																
																When a new page is loading (example: click from inside a bootstrap modal),
																the backdrop/overlay (that opaque background behind it) remains active and the
																client/visitor can't click any link anymore. This is because the backdrop/overlay 
																div is at the bottom of the page, outside of ajax container (#middle in our case).

																To solve this problem, we can type here all the ID's (and/or element class) separated by comma,
																so the ajax plugin (SOW : Ajax Navigation) can remove them.

																The modal backdrop was just an example, Smarty already handle it! 
																Smarty already handle everything that is included in the package. 
																
																This option is here for the problematic plugins you might install in the future!
																This is an example - jQuery format:

																AjaxGarbage : '#element1, #element2, .someclass, div.some-other-class, #etc',

																
																You can also manually call "garbage cleaner" function anytime you want from your scripts:
																$.SOW.core.ajax_navigation.__cleanAjaxGarbage();

															*/
															ajaxGarbage 					:'',

										},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_ajax_content : { 		/* AJAX CONTENT */
			path_js:				['src/js/sow.core/sow.ajax_content.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.ajax_content.init',
										selector: 		'div.js-ajax, section.js-ajax',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_ajax_form : { 			/* AJAX FORM */
			path_js:				['src/js/sow.core/sow.ajax_form.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.ajax_form.init',
										selector: 		'form.js-ajax',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_ajax_select : { 		/* AJAX SELECT */
			path_js:				['src/js/sow.core/sow.ajax_select.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.ajax_select.init',
										selector: 		'select.js-ajax',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_ajax_modal : { 			/* AJAX MODAL */
			path_js:				['src/js/sow.core/sow.ajax_modal.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.ajax_modal.init',
										selector: 		'.js-ajax-modal',
										config: 		{ size:'modal-md' },
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_ajax_confirm : { 		/* AJAX CONFIRM */
			path_js:				['src/js/sow.core/sow.ajax_confirm.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.ajax_confirm.init',
										selector: 		'.js-ajax-confirm',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_form_validate : { 		/* FORM VALIDATE */
			path_js:				['src/js/sow.core/sow.form_validate.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.form_validate.init',
										selector: 		'form.bs-validate',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_form_advanced : { 		/* FORM ADVANCED */
			path_js:				['src/js/sow.core/sow.form_advanced.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.form_advanced.init',
										selector: 		null,
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_file_upload : { 		/* FILE UPLOAD */
			path_js:				['src/js/sow.core/sow.file_upload.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.file_upload.init',
										selector: 		'input[type="file"].custom-file-input',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_sidebar : { 			/* SIDEBAR */
			path_js:				['src/js/sow.core/sow.sidebar.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.sidebar.init',
										selector: 		null,
										config: 		{},
										reinit_ajax: 	false
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_toast : { 				/* TOASTS */
			path_js:				['src/js/sow.core/sow.toast.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.toast.init',
										selector: 		'div.toast-on-load',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_gdpr : { 				/* GDPR */
			path_js:				['src/js/sow.core/sow.gdpr.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.gdpr.init',
										selector: 		'#gdpr',
										config: 		{ cookie_name: '__gdpr' },
										reinit_ajax: 	false
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_checkall : { 			/* CHECKALL */
			path_js:				['src/js/sow.core/sow.checkall.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.checkall.init',
										selector: 		'input.checkall',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */



		sow_checkgroup : { 			/* Check Group */
			path_js:				['src/js/sow.core/sow.checkgroup.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.checkgroup.init',
										selector: 		'div.checkgroup',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */
		

		sow_timer_autohide : { 		/* TIMER AUTOHIDE */
			path_js:				['src/js/sow.core/sow.timer_autohide.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.timer_autohide.init',
										selector: 		'.timer-autohide',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_timer_countdown : { 	/* TIMER COUNTDOWN */
			path_js:				['src/js/sow.core/sow.timer_countdown.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.timer_countdown.init',
										selector: 		'.timer-countdown',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_gfont : { 				/* GFONT */
			path_js:				['src/js/sow.core/sow.gfont.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.gfont.init',
										selector: 		'[data-gfont]',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_lazyload : { 			/* LAZYLOAD */
			path_js:				['src/js/sow.core/sow.lazyload.js'],
			path_css: 				['src/scss/_vendors/_sow/sow_lazyload.scss'],
			autoinit: 				{
										function: 		'$.SOW.core.lazyload.init',
										selector: 		'.lazy',
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_count_animate : {		/* COUNT ANIMATE */
			path_js:				['src/js/sow.core/sow.count_animate.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.count_animate.init',
										selector: 		null,
										config: 		{},
										reinit_ajax: 	true
									}
		},/* ---------------------------------------------------------------------------------------------------- */


		sow_search_suggest : { 		/* SEARCH SUGGEST */
			path_js:				['src/js/sow.core/sow.search_suggest.js'],
			path_css: 				['src/scss/_vendors/_sow/sow_search_suggest.scss'],
			autoinit: 				{
										function: 		'$.SOW.core.search_suggest.init',
										selector: 		'form.js-ajax-search',
										config: 		{},
										reinit_ajax: 	false
									},
			dependencies: 			['fuzzy']
		},/* ---------------------------------------------------------------------------------------------------- */



		sow_utils : { 				/* VARIOUS UTILS */
			path_js:				['src/js/sow.core/sow.utils.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.utils.init',
										selector: 		'', /* !ununsed! */
										config: 		{

											// selectors (not recommended to change)
											selector__initialFromString: 			'.sow-util-initials',
											selector__timeAgo: 						'.sow-util-timeago',
											selector__cookie: 						'.sow-util-cookie',
											selector__slideshow: 					'.sow-util-slideshow',
											selector__cloner: 						'.sow-util-cloner',
											selector__action: 						'.sow-util-action',
											selector__form: 						'.sow-util-form',
											selector__formLiveMonitor: 				'.sow-util-form-live-monitor',
											selector__liveReload: 					'.sow-util-live-reload',

											// Default lang: English. See the documentation for rewriting 
											// documentation/plugins-sow-utils.html
											lang__timeAgo:  						{
																						seconds 		: "less than a minute ago",
																						minute 			: "about a minute ago",
																						minutes 		: "%d minutes ago",
																						hour 			: "about an hour ago",
																						hours 			: "about %d hours ago",
																						day 			: "a day ago",
																						days 			: "%d days ago",
																						month 			: "about a month ago",
																						months 			: "%d months ago",
																						year 			: "about a year ago",
																						years 			: "%d years ago"
																					},

										},
										reinit_ajax: 	true
									},
			dependencies: 			[]
		},/* ---------------------------------------------------------------------------------------------------- */




		sow_service_worker : { 		/* SERVICE WORKER */
			path_js:				['src/js/sow.core/sow.service_worker.js'],
			path_css: 				[],
			autoinit: 				{
										function: 		'$.SOW.core.service_worker.init',
										selector: 		null,
										config: 		{
															enable: 	true,
															jspath: 	'/sw.js', 	// using .sw.js not working on URI like /dir1/...
															scope: 		'/'
										},
										reinit_ajax: 	false
									}
		},/* ---------------------------------------------------------------------------------------------------- */

	}

}