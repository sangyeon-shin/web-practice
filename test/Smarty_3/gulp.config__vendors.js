module.exports = function(smarty) {

	return {

		output_name 		: 'vendor', 				// without .js/.css
		path_js 			: 'src/js/vendors/', 		// used by watch function only!


		/**

			:: OPTIONAL ::
			Add version on top, as a comment!
			By default, package.js is used to get the current Smarty version.
			If this is enabled (uncommented), will be used instead.

		**/
		// build_version 		: 'v3.0.0',


		/**

			Vendors = 3rd party plugins

			------------------------------------------------------------------------
			 enable: false 		skipped, not compiled
			------------------------------------------------------------------------
			 bundle: true 		added to: 				 js/vendor.bundle.js
			------------------------------------------------------------------------
			 bundle: false 		individually compiled 	 js/vendor.vendor_name.js
														css/vendor.vendor_name.css

								 * if a vendor has multiple js/css files, 
								   are bundled (a better word would be is "packed") 
								   only for that specific vendor but not added 
								   to master bundle (vendor.bundle.js)
			------------------------------------------------------------------------

			!IMPORTANT!
			Individual vendors (not bundled) are automatically loaded by their controller, 
			so the js/css path (or CDN) must be provided in ./gulp.config.settings.js

			Useful for large files and/or files that are not much used, keeping the website
			lightweight and fast. Controllers are written for default Smarty vendors and
			can be seen in: src/js/vendors/  (there is also a boilerplate to create your own).


			Might be situations when 2 or more plugins has the same dependencies. 
			Example: moment.js (is used by many plugins). 
			Add moment.js to both vendors, Smarty will compile the dependencies only once, 
			will never compile it multiple times with only one exception: `bundle: false` for
			all files and multiple vendors has the same dependency.

			If `bundle: false` set to all, controllers are not added!
			Should be added manually!

			 * Specified size is for already minified files.
			** See the end of this script for an example of adding a new vendor without controller
		******************************************************************************************************* **/


		list : {

			__required__: 		{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 225Kb
			// --
			jarallax: 			{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 42Kb
			sticky_kit: 		{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 3Kb
			sortable: 			{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 42Kb 		
			bootstrap_select: 	{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 51Kb
			typed: 				{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 12Kb
			flickity: 			{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 54Kb
			fancybox: 			{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 68Kb
			cocoen: 			{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 4Kb
			photoswipe: 		{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 116kb
			swiper: 			{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 128Kb
			leaflet: 			{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 142Kb
			aos: 				{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 46Kb
			slimscroll: 		{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 5Kb
			nestable: 			{	enable: true, 	autoinit: true, 	bundle: true	}, 		// 10Kb
			fullcalendar: 		{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 323Kb
			datepicker: 		{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 34Kb
			daterangepicker: 	{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 34Kb
			colorpicker: 		{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 57Kb
			flot: 				{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 127Kb
			easypie: 			{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 4Kb
			sparkline: 			{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 63Kb
			chartjs: 			{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 210Kb
			mediumeditor: 		{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 105Kb
			markdowneditor:		{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 105Kb
			summernoteeditor:	{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 105Kb
			datatables:			{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 243Kb
			prismjs:			{	enable: true, 	autoinit: true, 	bundle: false	}, 		// 84Kb

			/**

				USED BY DATATABLES FOR PDF EXPORT ONLY!
				This is WAY TOO BIG! 1.1Mb minified!
				Is loaded by datatables only when needed!

			**/
			pdfmake:			{	enable: true, 	autoinit: false, 	bundle: false	}, 		// 1.1Mb

			// DISABLED BY DEFAULT; --INSTALL NEEDED--
			// npm install --save font-awesome
			// and then rebuild using gulp
			fontawesome: 		{ 	enable: false, 	autoinit: false, 	bundle: true	}, 		// 31Kb

		},


		/** **************************************************************************************************** **/
		/*

			DEPENDENCIES :  EXTERNAL FILES REQUIRED BY VENDORS
			Are packed/bundled only if a vendor is found using these dependencies!
				You can add more js files separated by comma for each one:
				dep_name: ['file1.js', 'file2.js', 'etc.js']

			How to use:
			dependencies: 			['moment', 'and_so_on'],

		*/
		DEPENDENCIES : {

			 /* REQUIRED BY: 		daterangepicker */
			moment: 				[
										'node_modules/moment/moment.js',										// 53Kb
										// :-: enable -another- one if languages needed (or only one language) :-:
										// 'node_modules/moment/min/locales.js', 								// 283Kb
										// 'node_modules/moment/min/moment-with-locales.js', 					// 336Kb
										// 'node_modules/moment/locale/de.js', 									// 3Kb
									],


			/* REQUIRED BY: 		flot & chartjs - save graph */
			filesaver: 				[
										'node_modules/file-saver/dist/FileSaver.js',							// 3Kb
									]

		},
		


		/** **************************************************************************************************** **/





		__required__ : {				/* REQUIRED VENDORS */
			path_js:				[
										'node_modules/bootstrap/dist/js/bootstrap.bundle.js',  				// 223Kb
									],
			path_css: 				[],
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */




		jarallax : {				/* JARALLAX */
			path_js:				[
										'node_modules/jarallax/dist/jarallax.js',  							// 15Kb
										'node_modules/jarallax/dist/jarallax-video.js',  					// 17Kb
										'node_modules/jarallax/dist/jarallax-element.js' 					// 10Kb
									],
			path_css: 				['src/scss/_vendors/vendor.jarallax.scss'], /* custom styling : 300 Bytes */
			controller:				'src/js/vendors/vendor.jarallax.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.jarallax.init',
										selector: 		'.jarallax',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */




		sticky_kit : {				/* STICKY KIT */
			path_js:				['node_modules/sticky-kit/dist/sticky-kit.js'], 						// 3Kb
			path_css: 				[],
			controller:				'src/js/vendors/vendor.sticky_kit.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.sticky_kit.init',
										selector: 		'.sticky-kit',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */




		sortable : {				/* SORTABLE [SOW File Upload - need it] */
			path_js:				['node_modules/sortablejs/Sortable.js'], 								// 42Kb
			path_css: 				[],
			controller:				'src/js/vendors/vendor.sortable.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.sortable.init',
										selector: 		'.sortable',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */




		bootstrap_select : {		/* BOOTSTRAP SELECT [best select2 replacement] */
			path_js:				['node_modules/bootstrap-select/dist/js/bootstrap-select.js'], 			// 51Kb
			path_css: 				[
										'node_modules/bootstrap-select/dist/css/bootstrap-select.css',
										'src/scss/_vendors/vendor.bootstrap_select.scss' /* custom styling : 250 Bytes */
									],
			controller:				'src/js/vendors/vendor.bootstrap_select.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.bootstrap_select.init',
										selector: 		'select.bs-select',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */




		typed : {					/* TYPED : TEXT TYPING ANIMATION */
			path_js:				['node_modules/typed.js/lib/typed.js'], 								// 12Kb
			path_css: 				[],
			controller:				'src/js/vendors/vendor.typed.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.typed.init',
										selector: 		'.typed',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */




		flickity : {				/* FLICKITY : PREMIUM CAROUSEL */
			path_js:				['node_modules/flickity/dist/flickity.pkgd.js'], 						// 54Kb
			path_css: 				[
										'node_modules/flickity/dist/flickity.css',
										'src/scss/_vendors/vendor.flickity.scss' /* custom styling : 1Kb */
									],
			controller:				'src/js/vendors/vendor.flickity.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.flickity.init',
										selector: 		'div[data-flickity]', // !!! do not change, vendor stick with it !!!
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */




		fancybox : {				/* FANCYBOX : PREMIUM IMAGE VIEWER */
			path_js:				['node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js'], 			// 68Kb
			path_css: 				[
										'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
										'src/scss/_vendors/vendor.fancybox.scss' /* custom styling : 350 Bytes */
									],
			controller:				'src/js/vendors/vendor.fancybox.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.fancybox.init',
										selector: 		'a.fancybox',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */




		cocoen : {					/* COCOEN : IMAGE COMPARISION */
			path_js:				['node_modules/cocoen/dist/js/cocoen.min.js'], 			// 4Kb
			path_css: 				['src/scss/_vendors/vendor.cocoen.scss'], 				/* styled */
			controller:				'src/js/vendors/vendor.cocoen.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.cocoen.init',
										selector: 		'figure.cocoen',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */





		photoswipe : {				/* PHOTOSWIPE [FANCYBOX ALTERNATIVE] */
			path_js:				[
										'node_modules/photoswipe/dist/photoswipe.js',
										'node_modules/photoswipe/dist/photoswipe-ui-default.js',
									],
			path_css: 				['src/scss/_vendors/vendor.photoswipe.scss'], /* custom layout  [UI] */

			controller:				'src/js/vendors/vendor.photoswipe.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.photoswipe.init',
										selector: 		'a.photoswipe',
										config: 		{
															// defaults
															showHideOpacity: 			false,
															history: 					false,
															captionEl: 					false,
															shareEl: 					false,
															tapToClose: 				false,
															tapToToggleControls: 		false,
															escKey: 					true,
															barsSize: 					{ top:0, bottom:0 },
										},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */




		swiper : {					/* SWIPER */
			path_js:				['node_modules/swiper/swiper-bundle.js'], 									// 134Kb
			path_css: 				[
										'node_modules/swiper/swiper-bundle.css',
										'src/scss/_vendors/vendor.swiper.scss' /* custom styling : 2Kb */
									],
			controller:				'src/js/vendors/vendor.swiper.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.swiper.init',
										selector: 		'.swiper-container',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */



		leaflet : {					/* FREE MAP : GOOGLEMAP REPLACEMENT */
			path_js:				['node_modules/leaflet/dist/leaflet.js'], 								// 142Kb
			path_css: 				['src/scss/_vendors/vendor.leaflet.scss'], /* loaded via import for relayout */
			controller:				'src/js/vendors/vendor.leaflet.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.leaflet.init',
										selector: 		'.map-leaflet',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */




		aos : {						/* AOS : ANIMATE ELEMENT ON SCROLL */
			path_js:				['node_modules/aos/dist/aos.js'], 										// 14Kb
			path_css: 				['node_modules/aos/dist/aos.css'], 										// 32Kb
			controller:				'src/js/vendors/vendor.aos.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.aos.init',
										selector: 		null,
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */




		slimscroll : {				/* SLIMSCROLL */
			path_js:				['node_modules/jquery-slimscroll/jquery.slimscroll.js'], 				// 5Kb
			path_css: 				[],
			controller:				'src/js/vendors/vendor.slimscroll.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.slimscroll.init',
										selector: 		'.slimscroll',
										config: 		{
											height: 		'100%',
											color: 			'#444',
											size: 			'3px',
											railColor: 		'#ccc',
											railOpacity: 		0.5,
											alwaysVisible: 		false,
											railVisible: 		true,

											distance: 		'0',
											wheelStep: 		10,
											allowPageScroll: 	false,
											disableFadeOut: 	false
										},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */




		nestable : {				/* NESTABLE */
			path_js:				['node_modules/nestable/jquery.nestable.js'], 							// 10Kb
			path_css: 				['src/scss/_vendors/vendor.nestable.scss'],
			controller:				'src/js/vendors/vendor.nestable.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.nestable.init',
										selector: 		'.nestable',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */




		datepicker : {				/* DATEPICKER */
			path_js:				[
										'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',	// 34Kb
										// 'node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.en-GB.min.js',
									],
			path_css: 				['src/scss/_vendors/vendor.datepicker.scss'],	/* custom only, the original is .less */
			controller:				'src/js/vendors/vendor.datepicker.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.datepicker.init',
										selector: 		'.datepicker',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */




		daterangepicker : {				/* DATERANGEPICKER */
			path_js:				['node_modules/bootstrap-daterangepicker/daterangepicker.js'],					// 34Kb
			path_css: 				[
										'node_modules/bootstrap-daterangepicker/daterangepicker.css',
										'src/scss/_vendors/vendor.daterangepicker.scss'  	/* custom layout ~2Kb */
									],
			controller:				'src/js/vendors/vendor.daterangepicker.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.daterangepicker.init',
										selector: 		'.rangepicker',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			['moment'],
		},/* ---------------------------------------------------------------------------------------------------- */




		colorpicker : {				/* COLORPICKER */
			path_js:				[
										'node_modules/@simonwep/pickr/dist/pickr.min.js',
										// 'node_modules/@simonwep/pickr/src/js/pickr.js',	// ES6 : compiled with errors!
									],
			path_css: 				['src/scss/_vendors/vendor.colorpicker.scss'],  	/* custom layout */
			controller:				'src/js/vendors/vendor.colorpicker.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.colorpicker.init',
										selector: 		'.colorpicker',
										config: 		{

															classic: {

																swatches: [
																	'rgba(244, 67, 54, 1)',
																	'rgba(233, 30, 99, 0.95)',
																	'rgba(156, 39, 176, 0.9)',
																	'rgba(103, 58, 183, 0.85)',
																	'rgba(63, 81, 181, 0.8)',
																	'rgba(33, 150, 243, 0.75)',
																	'rgba(3, 169, 244, 0.7)',
																	'rgba(0, 188, 212, 0.7)',
																	'rgba(0, 150, 136, 0.75)',
																	'rgba(76, 175, 80, 0.8)',
																	'rgba(139, 195, 74, 0.85)',
																	'rgba(205, 220, 57, 0.9)',
																	'rgba(255, 235, 59, 0.95)',
																	'rgba(255, 193, 7, 1)'
																],

															},

															monolith: {

																swatches: [
																	'rgba(244, 67, 54, 1)',
																	'rgba(233, 30, 99, 0.95)',
																	'rgba(156, 39, 176, 0.9)',
																	'rgba(103, 58, 183, 0.85)',
																	'rgba(63, 81, 181, 0.8)',
																	'rgba(33, 150, 243, 0.75)',
																	'rgba(3, 169, 244, 0.7)'
																],

															},


															nano: {

																swatches: [
																	'rgba(244, 67, 54, 1)',
																	'rgba(233, 30, 99, 0.95)',
																	'rgba(156, 39, 176, 0.9)',
																	'rgba(103, 58, 183, 0.85)',
																	'rgba(63, 81, 181, 0.8)',
																	'rgba(33, 150, 243, 0.75)',
																	'rgba(3, 169, 244, 0.7)'
																],

															},


															interaction: {
																hex: true,
																rgba: true,
																hsla: false,
																hsva: false,
																cmyk: false,

																input: true,
																clear: true,
																save: true
															}

										},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */





		fullcalendar : {			/* FULLCALENDAR */
			path_js:				[
										'node_modules/@fullcalendar/core/main.js', 							// 126Kb
										// 'node_modules/@fullcalendar/core/locales-all.js', 					// 37Kb
										// 'node_modules/@fullcalendar/core/locales/de.js', 					// 1Kb
										// plugins
										'node_modules/@fullcalendar/interaction/main.js', 					// 37Kb
										'node_modules/@fullcalendar/daygrid/main.js', 						// 28Kb
										'node_modules/@fullcalendar/timegrid/main.js', 						// 25Kb
										'node_modules/@fullcalendar/bootstrap/main.js',						// 3Kb
										'node_modules/@fullcalendar/list/main.js',							// 7Kb
										'node_modules/@fullcalendar/google-calendar/main.js'				// 3Kb
									],
			path_css: 				[
										'node_modules/@fullcalendar/core/main.css',
										// plugins
										'node_modules/@fullcalendar/daygrid/main.css',
										'node_modules/@fullcalendar/timegrid/main.css',
										'node_modules/@fullcalendar/bootstrap/main.css',
										'node_modules/@fullcalendar/list/main.css',

										// custom layout  
										'src/scss/_vendors/vendor.fullcalendar.scss'						// 0.5Kb
									],
			controller:				'src/js/vendors/vendor.fullcalendar.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.fullcalendar.init',
										selector: 		'.fullcalendar',
										config: 		{
													plugins 		: [ 'interaction', 'dayGrid', 'timeGrid', 'list', 'bootstrap', 'googleCalendar' ],
													editable 		: true,
													eventLimit 		: true, // allow "more" link when too many events
													locale 			: 'en',
													themeSystem 	: 'bootstrap',
													defaultView 	: 'dayGridMonth',
													defaultDate 	: new Date(), // '2019-08-07'
													timeZone 		: 'UTC',

													header 			: {
																		left 	: 'prev,next today, addEventButton',
																		center 	: 'title',
																		right 	: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
																	 },
													// instead of `locale` .js file
													buttonText: {
																today 	: 'today',
																month 	: 'month',
																week 	: 'week',
																day 	: 'day',
																list 	: 'list'
													},
													eventTimeFormat 	: {
																hour 		: 'numeric',
																minute 		: '2-digit',
																meridiem 	: 'short'
													},
										},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */




		flot : {					/* FLOT CHARTS */
			path_js:				[ 
										'node_modules/flot/source/jquery.canvaswrapper.js',
										'node_modules/flot/source/jquery.colorhelpers.js',
										'node_modules/flot/source/jquery.flot.js',
										'node_modules/flot/source/jquery.flot.saturated.js',
										'node_modules/flot/source/jquery.flot.browser.js',
										'node_modules/flot/source/jquery.flot.drawSeries.js',
										'node_modules/flot/source/jquery.flot.errorbars.js',
										'node_modules/flot/source/jquery.flot.uiConstants.js',
										'node_modules/flot/source/jquery.flot.logaxis.js',
										'node_modules/flot/source/jquery.flot.symbol.js',
										'node_modules/flot/source/jquery.flot.flatdata.js',
										'node_modules/flot/source/jquery.flot.navigate.js',
										'node_modules/flot/source/jquery.flot.fillbetween.js',
										'node_modules/flot/source/jquery.flot.categories.js',
										'node_modules/flot/source/jquery.flot.stack.js',
										'node_modules/flot/source/jquery.flot.touchNavigate.js',
										'node_modules/flot/source/jquery.flot.hover.js',
										'node_modules/flot/source/jquery.flot.touch.js',
										'node_modules/flot/source/jquery.flot.time.js',
										'node_modules/flot/source/jquery.flot.axislabels.js',
										'node_modules/flot/source/jquery.flot.selection.js',
										'node_modules/flot/source/jquery.flot.composeImages.js',
										'node_modules/flot/source/jquery.flot.legend.js',
										'node_modules/flot/source/jquery.flot.image.js',
										'node_modules/flot/source/jquery.flot.composeImages.js',
										'node_modules/flot/source/jquery.flot.crosshair.js',
										'node_modules/flot/source/jquery.flot.pie.js',
										'node_modules/flot/source/jquery.flot.resize.js',
										'node_modules/flot/source/jquery.flot.threshold.js',

										'node_modules/jquery.flot.tooltip/js/jquery.flot.tooltip.js',
									],
			path_css: 				['src/scss/_vendors/vendor.flot.scss'],  	/* custom layout */
			controller:				'src/js/vendors/vendor.flot.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.flot.init',
										selector: 		'.flot-chart',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			['filesaver'],
		},/* ---------------------------------------------------------------------------------------------------- */





			easypie : {					/* EASYPIE CHART */
			path_js:				['node_modules/easy-pie-chart/dist/jquery.easypiechart.js'],
			path_css: 				[],

			controller:				'src/js/vendors/vendor.easypie.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.easypie.init',
										selector: 		'.easypie',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */





		sparkline : {				/* SPARKLINE CHART */
			path_js:				['node_modules/jquery-sparkline/jquery.sparkline.js'],
			path_css: 				[],

			controller:				'src/js/vendors/vendor.sparkline.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.sparkline.init',
										selector: 		'.sparkline',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */






		chartjs : {					/* CHARTJS CHART */
			path_js:				['node_modules/chart.js/dist/Chart.bundle.js'], 					// 210Kb
			path_css: 				[
										'node_modules/chart.js/dist/Chart.css',
										'src/scss/_vendors/vendor.chartjs.scss'
									],

			controller:				'src/js/vendors/vendor.chartjs.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.chartjs.init',
										selector: 		'.chartjs',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			['filesaver'],
		},/* ---------------------------------------------------------------------------------------------------- */






		mediumeditor : {			/* MEDIUM EDITOR */
			path_js:				['node_modules/medium-editor/dist/js/medium-editor.js'],
			path_css: 				[
										'node_modules/medium-editor/dist/css/medium-editor.css',
										// themes
										'node_modules/medium-editor/dist/css/themes/beagle.css',
										// 'node_modules/medium-editor/dist/css/themes/bootstrap.css',
										// 'node_modules/medium-editor/dist/css/themes/default.css',
										// 'node_modules/medium-editor/dist/css/themes/flat.css',
										// 'node_modules/medium-editor/dist/css/themes/mani.css',
										// 'node_modules/medium-editor/dist/css/themes/roman.css',
										// 'node_modules/medium-editor/dist/css/themes/tim.css',

										// cstom
										'src/scss/_vendors/vendor.mediumeditor.scss',
									],

			controller:				'src/js/vendors/vendor.mediumeditor.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.mediumeditor.init',
										selector: 		'.medium-editor',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */





		markdowneditor : {			/* MARKDOWN EDITOR */
			path_js:				['node_modules/easymde/dist/easymde.min.js'],
			path_css: 				['node_modules/easymde/dist/easymde.min.css'],

			controller:				'src/js/vendors/vendor.markdowneditor.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.markdowneditor.init',
										selector: 		'.markdown-editor',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */





		summernoteeditor : {		/* SUMMERNOTE EDITOR */
			path_js:				[
										'node_modules/summernote/dist/summernote-bs4.js',

										// load a language and add to Markup: data-lang="de-DE"
										// 'node_modules/summernote/lang/summernote-de-DE.js'
									],
			path_css: 				[
										'src/scss/_vendors/vendor.summernote.scss' /* icons */
									],
			path_font: 				['node_modules/summernote/dist/font/'], // folder only

			controller:				'src/js/vendors/vendor.summernoteeditor.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.summernoteeditor.init',
										selector: 		'.summernote-editor',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */





		datatables : {				/* DATATABLES */
			path_js:				[
										'node_modules/datatables.net/js/jquery.dataTables.js', 							// 82Kb
										'node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js', 					// 2Kb

										'node_modules/datatables.net-autofill/js/dataTables.autoFill.js', 				// 30Kb
										'node_modules/datatables.net-autofill-bs4/js/autoFill.bootstrap4.js', 			// 600 Bytes

										'node_modules/datatables.net-buttons/js/dataTables.buttons.js', 				// 48Kb
										'node_modules/datatables.net-buttons/js/buttons.html5.js', 						// 44Kb
										'node_modules/datatables.net-buttons/js/buttons.print.js', 						// 5Kb
										'node_modules/datatables.net-buttons/js/buttons.colVis.js', 					// 6Kb
										'node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.js', 			// 2Kb

										'node_modules/datatables.net-colreorder/js/dataTables.colReorder.js', 			// 7Kb
										'node_modules/datatables.net-colreorder-bs4/js/colReorder.bootstrap4.js', 		// 600 Bytes

										'node_modules/datatables.net-fixedcolumns/js/dataTables.fixedColumns.js', 		// 44Kb
										'node_modules/datatables.net-fixedcolumns-bs4/js/fixedColumns.bootstrap4.js', 	// 600 Bytes

										'node_modules/datatables.net-fixedheader/js/dataTables.fixedHeader.js', 		// 17Kb
										'node_modules/datatables.net-fixedheader-bs4/js/fixedHeader.bootstrap4.js', 	// 600 Bytes

										'node_modules/datatables.net-keytable/js/dataTables.keyTable.js', 				// 27Kb
										'node_modules/datatables.net-keytable-bs4/js/keyTable.bootstrap4.js', 			// 600 Bytes

										'node_modules/datatables.net-responsive/js/dataTables.responsive.js', 			// 39Kb
										'node_modules/datatables.net-responsive-bs4/js/responsive.bootstrap4.js', 		// 1Kb

										'node_modules/datatables.net-rowgroup/js/dataTables.rowGroup.js', 				// 10Kb
										'node_modules/datatables.net-rowgroup-bs4/js/rowGroup.bootstrap4.js', 			// 600 Bytes

										'node_modules/datatables.net-rowreorder/js/dataTables.rowReorder.js', 			// 21Kb
										'node_modules/datatables.net-rowreorder-bs4/js/rowReorder.bootstrap4.js', 		// 600 Bytes

										'node_modules/datatables.net-scroller/js/dataTables.scroller.js', 				// 39Kb
										'node_modules/datatables.net-scroller-bs4/js/scroller.bootstrap4.js', 			// 600 Bytes

										'node_modules/datatables.net-select/js/dataTables.select.js', 					// 32Kb
										'node_modules/datatables.net-select-bs4/js/select.bootstrap4.js', 				// 600 Bytes

										'node_modules/jszip/dist/jszip.js', 											// 96Kb
									],
			path_css: 				[
										'node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css',
										'node_modules/datatables.net-autofill-bs4/css/autoFill.bootstrap4.css',
										'node_modules/datatables.net-buttons-bs4/css/buttons.bootstrap4.css',
										'node_modules/datatables.net-colreorder-bs4/css/colReorder.bootstrap4.css',
										'node_modules/datatables.net-fixedcolumns-bs4/css/fixedColumns.bootstrap4.css',
										'node_modules/datatables.net-fixedheader-bs4/css/fixedHeader.bootstrap4.css',
										'node_modules/datatables.net-keytable-bs4/css/keyTable.bootstrap4.css',
										'node_modules/datatables.net-responsive-bs4/css/responsive.bootstrap4.css',
										'node_modules/datatables.net-rowgroup-bs4/css/rowGroup.bootstrap4.css',
										'node_modules/datatables.net-rowreorder-bs4/css/rowReorder.bootstrap4.css',
										'node_modules/datatables.net-scroller-bs4/css/scroller.bootstrap4.css',
										'node_modules/datatables.net-select-bs4/css/select.bootstrap4.css',

										'src/scss/_vendors/vendor.datatables.scss' /* custom layout */
									],

			controller:				'src/js/vendors/vendor.datatables.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.datatables.init',
										selector: 		'.table-datatable',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */





		prismjs : {					/* CODE HIGHLIGHTER */
			path_js:				[
										'node_modules/prismjs/prism.js', // core

										// load a programming languages
										'node_modules/prismjs/components/prism-bash.js',
										'node_modules/prismjs/components/prism-c.js',
										'node_modules/prismjs/components/prism-coffeescript.js',
										'node_modules/prismjs/components/prism-cpp.js',
										'node_modules/prismjs/components/prism-csharp.js',
										'node_modules/prismjs/components/prism-css.js',
										'node_modules/prismjs/components/prism-css-extras.js',
										'node_modules/prismjs/components/prism-docker.js',
										'node_modules/prismjs/components/prism-git.js',
										'node_modules/prismjs/components/prism-go.js',
										'node_modules/prismjs/components/prism-ini.js',
										'node_modules/prismjs/components/prism-java.js',
										'node_modules/prismjs/components/prism-javascript.js',
										'node_modules/prismjs/components/prism-json.js',
										'node_modules/prismjs/components/prism-lua.js',
										'node_modules/prismjs/components/prism-makefile.js',
										'node_modules/prismjs/components/prism-markdown.js',
										'node_modules/prismjs/components/prism-markup-templating.js', 	// required by PHP and maybe others
										'node_modules/prismjs/components/prism-objectivec.js',
										'node_modules/prismjs/components/prism-perl.js',
										'node_modules/prismjs/components/prism-php.js',
										'node_modules/prismjs/components/prism-powershell.js',
										'node_modules/prismjs/components/prism-python.js',
										'node_modules/prismjs/components/prism-ruby.js',
										'node_modules/prismjs/components/prism-sass.js',
										'node_modules/prismjs/components/prism-smarty.js',
										'node_modules/prismjs/components/prism-swift.js',
										'node_modules/prismjs/components/prism-sql.js',
										'node_modules/prismjs/components/prism-typescript.js',
										'node_modules/prismjs/components/prism-visual-basic.js',

										// load plugins
										'node_modules/prismjs/plugins/toolbar/prism-toolbar.js',

										'node_modules/clipboard/dist/clipboard.js', /* depepndendcy 11Kb */
										'node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js',
										
										'node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js',
										'node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.js',
										'node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js',
									],
			path_css: 				[
										
										// theme : dark
										// 'node_modules/prismjs/themes/prism-tomorrow.css',
										
										// theme : light
										// 'node_modules/prismjs/themes/prism-coy.css',
										
										// theme : Smarty (dark & light)
										'src/scss/_vendors/vendor.prismjs.scss',
									],
			path_font: 				[],

			controller:				'src/js/vendors/vendor.prismjs.js',
			autoinit: 				{
										function: 		'$.SOW.vendor.prismjs.init',
										selector: 		'pre',
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */





		/**
			
			!!INDIVIDUAL BUILD!!
			This is WAY TOO BIG! 1.1Mb minified!
			Is loaded by datatables only when needed!

		**/
		pdfmake : {					/* DATATABLES : PDFMAKE */
			path_js:				[
										'node_modules/pdfmake/build/pdfmake.js',							// 1.1Mb minified!
										'node_modules/pdfmake/build/vfs_fonts.js' /* required fonts */
									],
			path_css: 				[],

			controller:				'',
			autoinit: 				{
										function: 		'',
										selector: 		'',
										config: 		{},
										reinit_ajax: 	false
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */






		fontawesome : {				/* FONTAWESOME */
			path_js:				[],
			path_css: 				['node_modules/font-awesome/css/font-awesome.css'],
			path_font: 				['node_modules/font-awesome/fonts/'], // folder only

			// optional, don't use it to only bundle the vendor (or if the vendor is self initialized)
			// you can keep only `reinit_ajax: true` if plugin need reinit on ajax calls
			autoinit: 				{},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */





















		/** ******************************************************************************************************
			
			THIS IS ONLY AN EXAMPLE OF ADDING A NEW VENDOR
			WITHOUT USING A CONTROLLER

			Is equivalent to classic init:
				$(".selector").myplugin({
					// ... config params
				})

				OR non-jquery equivalent:
					new MyPlugin({
						// ... config params
					})

			And add it to vendor_list - the top of this script

				myplugin: 		{	enable: true, 	autoinit: true, 	bundle: true	},
				`bundle: true`  REQUIRED BECAUSE THERE IS NO CONTROLLER TO AUTOLOAD IT!
		**/
		myplugin : {
			path_js:				['path/to/plugin.js'],
			path_css: 				['path/to/plugin.css'],

			// optional, don't use it to only bundle the vendor (or if the vendor is self initialized)
			// you can keep only `reinit_ajax: true` if plugin need reinit on ajax calls
			autoinit: 				{
										function: 		'$(".selector").myplugin', // non-jquery example: new MyPlugin
										config: 		{},
										reinit_ajax: 	true
									},
			dependencies: 			[],
		},/* ---------------------------------------------------------------------------------------------------- */

	}
}