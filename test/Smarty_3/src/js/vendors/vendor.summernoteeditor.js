/**
 *
 *	[SOW] Summernote Editor
 *
 *	@author 		Dorin Grigoras
 *					www.stepofweb.com
 *
 *	@Dependencies 	-
 *	@Usage 			$.SOW.vendor.summernoteeditor.init('.summernote-editor');
 *
 * 	@Ajax Support 	YES
 *
 * 	Vendor: 		https://github.com/summernote/summernote
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
	var scriptInfo 					= 'Vendor Summernote Editor';
	var summernoteEditor 			= [];

	$.SOW.vendor.summernoteeditor = {


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


			// Check Vendor ; dymanically load if missing (should be external)
			// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			if(selector != '') {
				if(jQuery(selector).length < 1)
					return null;
			}

			if (!jQuery().summernote) {

				var paths = $.SOW.helper.vendorLogicPaths('summernoteeditor');
				if(paths['path_js'] == '') {
					$.SOW.helper.consoleLog('Vendor Missing : ' + scriptInfo);
					return null;
				}

				$.SOW.helper.loadScript([paths['path_js']], false, true).done(function() {

					if (!jQuery().summernote) {
						$.SOW.helper.consoleLog('Vendor Missing : ' + scriptInfo);
						return null;
					}

					// self reinit, external js loaded!
					$.SOW.vendor.summernoteeditor.init(selector, config);
					return null;

				});

				return null;
			}
			// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



			var __selector 			= $.SOW.helper.__selector(selector);
			var __config 			= $.SOW.helper.check_var(config);

			this.selector 			= __selector[0]; 	// '#selector'
			this.collection 		= __selector[1]; 	// $('#selector')
			this.selector_orig 		= __selector[2]; 	// $('#selector') // without ajax container prefix
			this.config 			= (__config !== null) ? $.extend({}, this.config, __config) : this.config;


			// -- * --
			$.SOW.helper.consoleLog('Init : ' + scriptInfo);
			// -- * --


			// 1. Has no selector
			if(!this.selector) {
				$.SOW.vendor.summernoteeditor.process($('.summernote-editor'));
				return $('.summernote-editor');
			}

			// 2. Has selector
			return this.collection.each(function() {
				
				$.SOW.vendor.summernoteeditor.process($(this));

			});

		},



		/**
		 *
		 *	@process
		 *
		 *
		 **/
		process: function(_this) {

			if(_this.hasClass('js-summernotefied'))
				return;

			var ID 						= _this.attr('id')									|| '',
				placeholder 			= _this.data('placeholder')							|| 'Type here...',
				minHeight 				= _this.data('min-height')							|| 300,
				maxHeight 				= _this.data('max-height')							|| 1500,
				focus 					= _this.attr('data-focus')							|| 'true',
				lang 					= _this.data('lang')								|| 'en-US',
				ajaxURL 				= _this.data('ajax-url')							|| '',
				ajaxParams 				= _this.data('ajax-params')							|| '',
				toolbar 				= _this.data('toolbar')								|| '';

			if(ID == '') {
				var ID = 'rand_'+$.SOW.helper.randomStr(3);
					_this.attr('id', ID);
			}


			summernoteEditor[ID];
			summernoteEditor[ID] = _this.addClass('js-summernotefied').summernote({
				placeholder: 	placeholder,
				// height: 		500,
				minHeight: 		minHeight, 								// set minimum height of editor
				maxHeight: 		maxHeight, 								// set maximum height of editor
				focus: 			(focus+'' == 'true') ? true : false, 	// set focus to editable area after initializin
				lang: 			(lang != '') ? lang : 'en-US', 			// default: 'en-US'

				toolbar: (typeof toolbar === 'object') ? toolbar : null,

				/**
				// WORKING : ONLY DISABLED
				// SHOULD BE ADDED TO PARAMS FOR CUSTOMIZATION
				// https://summernote.org/deep-dive/#customization
				styleTags: [
								'p', 
								{ title: 'Blockquote', tag: 'blockquote', className: 'blockquote', value: 'blockquote' },
								'h2', 
								'h3', 
								'h4', 
								'h5', 
								'h6'
							],
				**/


				// bootstrap 4 popover fix
				popover: {
					image: [],
					link: [],
					air: []
				},

				callbacks: {

					onImageUpload: (ajaxURL != '') ? function(files, editor, welEditable) {

						for(var i = files.length - 1; i >= 0; i--) {
							$.SOW.vendor.summernoteeditor.ajaxUpload(ajaxURL, files[i], this, ajaxParams);
						}

					} : null

				}

			});

		},




		/**
		 *
		 *	@ajaxUpload
		 *
		 *
		 **/
		ajaxUpload: function(ajaxURL, file, el, ajaxParams) {

			if(ajaxURL == '') {
				$.SOW.helper.consoleLog("Summernote: Upload URL not provided!");
				return;
			}

			var formData = new FormData();
				formData.append('file', file);
				formData.append('ajax', 'true');


			if(ajaxParams && ajaxParams != '') {

				var ajax_params_arr = $.SOW.helper.params_parse(ajaxParams);
				for (var i = 0; i < ajax_params_arr.length; ++i) {
					formData.append(ajax_params_arr[i][0], ajax_params_arr[i][1]);
				}

			}


			$.ajax({
				url: 			ajaxURL,
				cache: 			false,
				contentType: 	false,
				processData: 	false,
				data: 			formData,
				type: 			'POST',

				beforeSend: function() {},

				error: function (data) {

					$.SOW.helper.consoleLog(data);

					if(typeof $.SOW.core.toast === 'object') {
						$.SOW.core.toast.show('danger', '', '404 Server Error!', "center-top", 4000, true);
					} else {
						alert('404 Server Error!');
					}

				},

				success: function(imgURL) {

					$.SOW.helper.consoleLog(imgURL);
					$(el).summernote('editor.insertImage', imgURL);

				}
			});
		}

	};


})(jQuery);