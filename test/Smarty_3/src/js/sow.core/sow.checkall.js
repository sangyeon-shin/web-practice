/**
 *
 *	[SOW] Check All
 *
 *	@author 		Dorin Grigoras
 *					www.stepofweb.com
 *
 *	@Dependency 	-
 *	@Usage			$.SOW.core.checkall.init('.checkall');
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
	var scriptInfo 		= 'SOW Check All';


	$.SOW.core.checkall = {


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
			this.selector 			= __selector[0]; 	// '#selector'
			this.collection 		= __selector[1]; 	// $('#selector')


			if(jQuery(this.selector).length < 1)
				return;

			// -- * --
			$.SOW.helper.consoleLog('Init : ' + scriptInfo);
			// -- * --


			$.SOW.core.checkall.process(this.collection);
			return null;

		},



		/**
		 *
		 *	@process
		 * 	
		 *
		 **/
		process: function(_this) {

			_this.not('.js-checkall').addClass('js-checkall').each(function() {

				var _t 			= jQuery(this),
					_target 	= _t.data('checkall-container') || '';

				if(_target == '')
					return;

				// individual item checkbox click
				jQuery('input:checkbox', _target).on('click', function() {

					// when starting to deselect some checboxes, remove checkall 
					if(!jQuery(this).is(":checked")) {
						jQuery('input.checkall[data-checkall-container="'+_target+'"]').prop('checked', false);
					}

				});


				// checkall click 
				jQuery('input.checkall[data-checkall-container="'+_target+'"]').on('click', function() {

					if(jQuery(this).is(":checked")) {

						jQuery(_target + ' input:checkbox').not(this).prop('checked', true);
						jQuery('input.checkall[data-checkall-container="'+_target+'"]').prop('checked', true);

					} else {

						jQuery(_target + ' input:checkbox').not(this).prop('checked', false);
						jQuery('input.checkall[data-checkall-container="'+_target+'"]').prop('checked', false);

					}

				});

			});


		},


	};


})(jQuery);