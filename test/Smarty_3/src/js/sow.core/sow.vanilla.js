/**
 *
 *	[SOW] Vanilla
 *
 *	@author 		Dorin Grigoras
 *					www.stepofweb.com
 *
 *
 *	JQUERY REPLACEMENT : VANILLAJS
 *
 *


	:: AJAX

		$.SOW.vanilla.ajax({
			url:			'/admin_product/product-edit/?product_id=1',
			type: 			'GET',
			data: 			{ajax:'true'},
			contentType: 	'', // default: 'application/x-www-form-urlencoded; charset=UTF-8'
			dataType: 		'', // default: 'html' ; JSON: 'application/json'
			headers: 		{
								'Authorization':'Basic xxxxxxxxxxxxx',
								'X-CSRF-TOKEN':'xxxxxxxxxxxxxxxxxxxx'
							},
			debug: 			false, // print this whole object to console

			beforeSend: function() { },

			error: 	function(XMLHttpRequest, textStatus, errorThrown) { },

			success: function(data) { }
		});


	:: addClass 	[IE 10+]
		$.SOW.vanilla.addClass(element, 'class1 class2 classN');

	:: removeClass 	[IE 10+]
		$.SOW.vanilla.removeClass(element, 'class1 class2 classN');


 *
 *
 *
 **/
;(function () {
	'use strict';

	$.SOW.vanilla = {


		/**
		 *
		 *	@ajax
		 * 	@date 	07:47 PM Thursday, May 28, 2020
		 *
		 **//*
			@USAGE

				$.SOW.vanilla.ajax({
					url:			'/admin_product/product-edit/?product_id=1',
					type: 			'GET',
					data: 			{ajax:'true'},
					contentType: 	'', // default: 'application/x-www-form-urlencoded; charset=UTF-8'
					dataType: 		'', // default: 'html' ; JSON: 'application/json'
					headers: 		{
										'Authorization':'Basic xxxxxxxxxxxxx',
										'X-CSRF-TOKEN':'xxxxxxxxxxxxxxxxxxxx'
									},
					debug: 			false, // print this whole object to console

					beforeSend: function() { },

					error: 	function(XMLHttpRequest, textStatus, errorThrown) { },

					success: function(data) { }
				});

		*/
		ajax: function(o) {

			if(typeof o.beforeSend === 'function')
				o.beforeSend();

			/* defaults */
			var type 		= (typeof o.type === 'undefined') 			? 'GET' 		: o.type,
				data 		= (typeof o.data === 'undefined') 			? {} 			: o.data,
				async 		= (typeof o.async === 'undefined') 			? true 			: o.async,
				headers 	= (typeof o.headers === 'undefined') 		? null 			: o.headers,
				contentType = (typeof o.contentType === 'undefined') 	? '' 			: o.contentType,
				dataType 	= (typeof o.dataType === 'undefined') 		? 'html/text'	: o.dataType, 	/* application/json */
				debug 		= (typeof o.debug === 'undefined') 			? false 		: o.debug,

				type = type.toLowerCase(),
				type = type.trim();

			/*
				Ajax Request
			*/
			/* 			  ajaxSubmit(url, data, method, callbackSuccess, callbackError, headers, contentType, async) */
			this.ajaxReq(o.url, data, type, 
				function(res) { o.success(res) },
				function(res) { o.error(res) },
				headers, contentType, dataType, async);


			/*
				Debug : entire object
			*/
			if(debug === true)
				console.log(o);

		},


		/**
		 *
		 *	@Ajax : XHR
		 *	https://stackoverflow.com/a/18078705
		 *
		 **/
		ajaxObj:  {

			xhr: function() {

				/*
					XMLHttpRequest : crossbrowser
					https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
				*/
				if(typeof XMLHttpRequest !== 'undefined') 
					return new XMLHttpRequest();
				
				alert('Ajax not supported! Please, use a modern browser like Chrome, Mozilla...');
				return null;

			},

			send: function (url, callbackSuccess, callbackError, method, data, headers, contentType, dataType, async) {

			    var xhr = $.SOW.vanilla.ajaxObj.xhr();
			   		xhr.open(method, url, async);

			    xhr.onreadystatechange = function () {

			        if(xhr.readyState == 4) /* 4 = request finished and response is ready */
			            callbackSuccess( (dataType == 'application/json') ? JSON.parse(xhr.responseText) : xhr.responseText );

			        if(xhr.status != 200) /* error */
			            callbackError(XMLHttpRequest, xhr.statusText, xhr.status);

			    };

			    /* Default Header */
		        xhr.setRequestHeader('Content-type', contentType || 'application/x-www-form-urlencoded; charset=UTF-8');

			    /* Custom Headers */
			    if(typeof headers !== 'undefined' && headers !== null) {

					for(var i in headers) {
						xhr.setRequestHeader(i, headers[i]);
					}

			    }

			    xhr.send(data);

			}

		},

			ajaxReq: function (url, data, method, callbackSuccess, callbackError, headers, contentType, dataType, async) {
			    var query = [];
			    for (var key in data) {
			        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
			    }

			    if(method == 'post')
					this.ajaxObj.send(url, callbackSuccess, callbackError, 'POST', query.join('&'), headers, contentType, dataType, async)
			    else
			    	this.ajaxObj.send(url + (query.length ? '?' + query.join('&') : ''), callbackSuccess, callbackError, 'GET', null, headers, contentType, dataType, async);
			    	
			},




		/**
		 *
		 *	@addClass
		 *	IE 10+
		 *
		 **/
		addClass: function(element, classStr) {
			/*
				Note:
					element.className
					It is terrible for performance 
					(even retrieving its value causes a reflow)
			*/

			if(!classStr) return element;
			const _c = classStr.split(' ');

			// IE 10+
			_c.forEach(c => {
				if (!element.classList.contains(c)) {
					element.classList.add(c);
				}
			});

			return element;
		},




		/**
		 *
		 *	@removeClass
		 *	IE 10+
		 *
		 **/
		removeClass: function(element, classStr) {
			/*
				Note:
					element.className
					It is terrible for performance 
					(even retrieving its value causes a reflow)
			*/

			if(!classStr) return element;
			const _c = classStr.split(' ');

			// IE 10+
			_c.forEach(c => {
				if (element.classList.contains(c)) {
					element.classList.remove(c);
				}
			});

			return element;
		},




		/**
		 *
		 *	@each
		 *	https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
		 *
		 *	var myNodeList = document.querySelectorAll('li');
		 *	$.SOW.vanilla.each(myNodeList, function (item, index) {
		 *		console.log(item, index);
		 *	});
		 *
		 *	$.SOW.vanilla.each("#item1, #item2", function (item, index) {
		 *		console.log(item, index);
		 *	});
		 *
		 *
		 **/
		each: function(nodeList, callback, scope) {

			nodeList = this.querySelectorAll(nodeList);

			for (var i = 0; i < nodeList.length; i++) {
				callback.call(scope, nodeList[i], i);
			}

		},




		/**
		 *
		 *	@on 
		 * 	click, keyup, change, mouseover, mouseout, submit
		 *	
		 *	$.SOW.vanilla.on(el, 'click', function(e) {
		 *		e.preventDefault();
		 *	});
		 *
		 *	$.SOW.vanilla.on("#item1, item2", 'click', function(e) {
		 *		e.preventDefault();
		 *	});
		 *
		 *
		 **/
		on: function(el, action, callback) {

			/* multiple elements "#item1, item2..." */
			if(typeof el !== 'object') {
				
				var elSplit = el.split(',');
				
				for (var i = 0; i < elSplit.length; i++) {
				
					elSplit[i] = this.querySelector( elSplit[i].trim() );
					
					this.on(elSplit[i], action, callback);
				
				}
			}

			el = this.querySelector(el);

			/* multiple actions "click, change" */
			var actionSplit = action.split(',');
			for (var i = 0; i < actionSplit.length; i++) {

				el.addEventListener( actionSplit[i].trim() , callback );

			}

		},




		/**
		 *
		 *	@querySelectorAll
		 *
		 *
		 **/
		querySelectorAll: function(selector) {

			if(typeof selector === 'object')
				return selector;

			return document.querySelectorAll(selector);

		},




		/**
		 *
		 *	@querySelector
		 *
		 *
		 **/
		querySelector: function(selector) {

			if(typeof selector === 'object')
				return selector;

			return document.querySelector(selector);

		}

	};

})();