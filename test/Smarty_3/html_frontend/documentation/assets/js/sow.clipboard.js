/**
 *
 *	[SOW] SOW Clipboard Copy
 *
 *	@author 		Dorin Grigoras
 *					www.stepofweb.com
 *
 *	@Dependency 	-
 *	@Usage			$.SOW.core.clipboard.init('.btn-clipboard');

	<a href="#container" class="btn-clipboard btn btn-sm btn-light float-end">
		<i class="fi fi-lightning"></i> 
		copy code
	</a>

	<div id="container">

		... code to copy

	</div>
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


	$.SOW.core.clipboard = {

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


			$.SOW.core.clipboard.process($(this.selector));


		},



		/**
		 *
		 *	@process
		 *
		 *
		 **/
		process: function(_this) {

			_this.on('click', function(el) {
				el.preventDefault();

				var _t 		= jQuery(this),
					_target = _t.attr('href') || '#';

				if(_target == '#')
					return;

				// Copy
				var succeed = $.SOW.core.clipboard.copyToClipboard(_t, _target);
				

				if(succeed) {

					// bootstrap tooltip
					setTimeout(function() { 

						_t.attr('data-original-title', 'Copied to Clipboard').tooltip('show', {
							/* 
								NOT WORKING 
								Bootstrap tooltip bug: wrong placement
							*/
							container: '#middle',
							placement: 'bottom'
						}).on('hidden.bs.tooltip', function () {

							// destroy tooltip
							_t.tooltip('dispose');

						});

					}, 30);

				} else {

					if(typeof $.SOW.core.toast === 'object') {
						$.SOW.core.toast.show('danger', '', 'Copy not supported or blocked.<br>Press Ctrl+c to copy.', 'bottom-center', 2500, true);
					} else {
						alert('Copy not supported or blocked. Press Ctrl+c to copy.');
					}

				}

			});

		},



		/**
		 *
		 *	@copyToClipboard
		 *
		 *
		 **/
		copyToClipboard: function(_t, _target) {

			// Clone element
			var _cloned 			= jQuery(_target).clone().html(),
				_hiddenContainer 	= 'js_ctc_hidden',
				_currPosition 		= $(document).scrollTop(),
				succeed;

			// Create hidden container
			_t.parent().append('<textarea style="width:1px; heitgh: 1px; border:0; background-color:transparent; margin:0; position:absolute; left:-99999px; top:0" id="'+_hiddenContainer+'">'+_cloned+'</textarea>');


			var elem 				= document.getElementById(_hiddenContainer),
				origSelectionStart 	= elem.selectionStart,
				origSelectionEnd 	= elem.selectionEnd,
				currentFocus 		= document.activeElement;


		    elem.focus();
		    elem.setSelectionRange(0, elem.value.length);


		    // copy the selection
			try {
				succeed = document.execCommand("copy");
			} catch(e) {
				succeed = false;
			}

			// restore original focus
			if (currentFocus && typeof currentFocus.focus === "function")
				currentFocus.focus();

			// restore prior selection
			elem.setSelectionRange(origSelectionStart, origSelectionEnd);

			// Scroll back to page position!
			$(document).scrollTop(_currPosition);

			// Remove temporary container
			jQuery('#'+_hiddenContainer).remove();

		    return succeed;

		}

	};


})(jQuery);