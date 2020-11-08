/**
 *
 *	[SOW] Helper
 *
 *	@author 		Dorin Grigoras
 *					www.stepofweb.com
 *
 *
 *	@Dependency 	-
 *

 	*	@check_var
		$.SOW.helper.check_var(variable);
	*
 		@check_var
 		$.SOW.helper.is_numeric(str);
 	*
		@loadScript
		$.SOW.helper.loadScript(script_arr, async[true|false], cache[true|false]).done(function() {
			// all scripts loaded... do something
			// * async = false by default (scripts are loaded in order)
			// * cache = true by default
		});


	 *
		@loadCSS
		$.SOW.helper.loadCSS("/path/to/file.css", "append|prepend|remove");  "append" is default, if no option passed
	 *
		@loadingSpinner
		$.SOW.helper.loadingSpinner('show|hide', "#mycontainer", 'overlay|icon');
	 *
		@executeFunctionByName
		$.SOW.helper.executeFunctionByName("FunctionName", window, arguments);
	 *
		@overlay
		$.SOW.helper.overlay('show|hide|toggle');
	 *
		@randomStr
		$.SOW.helper.randomStr(8, ''|L|N);
	 *
	 	@byte2size
	 	$.SOW.helper.byte2size(bytes, precision=2, int_only=false);
	 	$.SOW.helper.byte2kb(bytes);
	 *
		@scrollAnimate
		$.SOW.helper.scrollAnimate(_el, _offset, _hash_change, _speed);
			_el 			= element to scroll to. #top = page top
			_offset 		= top offset (0 default)
			_hash_change 	= update url hash on click
			_speed 			= scroll speed (400 default)

		$.SOW.helper.scrollAnimate('#top', 0, false, 400);
	 *
		@removeUrlHash
		$.SOW.helper.removeUrlHash('https://domain.com/url#hash');
	 *
		@playSound
		$.SOW.helper.playSound('path/to/audio.mp3');
	 *
	 	@time_from_ms
		$.SOW.helper.time_from_ms(miliseconds, 's|m|h|d|empty for all');
	 * 	
		@get_browser (unfinished, need improvement, do not use)
		$.SOW.helper.get_browser();
	 *
		@params_parse
		var params = $.SOW.helper.params_parse('['param','value']['param2','value2']); // return: array
			
			var ajax_params_arr = $.SOW.helper.params_parse(ajax_params);
			for (var i = 0; i < ajax_params_arr.length; ++i) {
				formDataDel.append(ajax_params_arr[i][0], ajax_params_arr[i][1]);
			}
	 *
		@indexedDB (local database)
		$.SOW.helper.indexedDB(.. see function ..);
	 *
		@currencyFormat
		$.SOW.helper.currencyFormat(1000000); // output: 1,234,567.89

		// 1,234,567.89
		$.SOW.helper.currencyFormat(1000000, [
			   2, ',', '.' // en
			// 2, '.', ',' // de
			// 2, ' ', ',' // fr
		]);
	 *
	 	@strhash	
	 	$.SOW.helper.strhash('string here'); // create a hash, md5 alternative
	 *
		 @videoEmbedFromUrl
		 $.SOW.helper.videoEmbedFromUrl('https://www.youtube.com?v=jh8Hgd466', autoplay=1);
	 *
		@consoleLog (output - only if debug is enabled!)
		$.SOW.helper.consoleLog('Lorem Ipsum', 'color: #ff0000;');
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
	var obj 			= {}; 				// used by loadScript


	$.SOW.helper = {


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
		init: function (selector, config) {/** no init required **/},




		/**
		 *
		 *	@__selector
		 *	DO NOT! DO NOT CHANGE!
		 * 	$.SOW.helper.__selector(selector);
		 *
		 **/
		__selector: function(selector) {

			var selector 		= $.SOW.helper.check_var(selector) || ''; /* '' is required if null */
			var selector_orig 	= selector;
			var element 		= (selector && $(selector).length > 0) ? $(selector) : $();

			/* add ajax container - required for binds */
			if($.SOW.globals.ajax_container != 'html' && $.SOW.globals.ajax_container != 'body' && $.SOW.globals.ajax_container != '') {

				if (selector.indexOf(',') > -1)
					var selector = selector.split(',').join(', ' + $.SOW.globals.ajax_container + ' ');

				selector = $.SOW.globals.ajax_container + ' ' + selector;

			}

			return [selector, element, selector_orig]; // selector_orig = without ajax container, in case is needed

		},






		/**
		 *
		 *	@check_var
		 *
			$.SOW.helper.check_var(variable);
		 *
		 **/
		check_var: function(_var) {

			return 	(typeof _var !== "undefined") ? _var : null;

		},







		/**
		 *
		 *	@is_numeric
		 *
		 *	Welcome to Javascript!
		 *	Please, stay! Is nice in here!
		 *
			$.SOW.helper.is_numeric(_var);
		 * 	1.2 = true 	; 	1,2 = false
		 **/
		is_numeric: function(_var) {

			if(typeof _var === 'number')
				return true;

			// at this point, we might have bool/object/function/etc
			else if(typeof _var !== 'string')
				return false;

			// -- --

			var _var = ''+_var.replace(/\s/g, '');
			if(_var === '')
				return false;

			else if(_var.slice(-1) === '.')
				return false; 	// something like '1.'

			// -- --

			return !isNaN(parseFloat(_var)) && isFinite(_var);

		},







		/**
		 *
		 *	@loadScript
		 *
			
			async false:
				loads scripts one-by-one using recursion (ordered)
				returns jQuery.Deferred

			async true:
				loads scripts asynchronized, if order is not needed!
				returns jQuery.when



				var script_arr = [
					'myscript1.js', 
					'myscript2.js', 
					'myscript3.js'
				];

				$.SOW.helper.loadScript(script_arr, async[true|false], cache[true|false]).done(function() {
					// all scripts loaded... do something
					// * async = false by default (scripts are loaded in order)
					// * cache = true by default
				});

		 *
		 **/
		loadScript: function(script_arr, async, cache) {

			return (async === true) ? $.SOW.helper.__loadScriptAsync(script_arr, cache) : $.SOW.helper.__loadScriptOrdered(script_arr, cache);

		},

			/*

				Credits (Salman A : stackovweflow user)
					https://stackoverflow.com/a/33312665

			*/
			__loadScriptOrdered: function(script_arr, cache) {

				var deferred = jQuery.Deferred();

				function __loadScript(i) {

					if (i < script_arr.length) {

						jQuery.ajax({

							url: 		script_arr[i],
							dataType: 	"script",
							cache: 		(cache !== false) ? true : false,

							success: 	function() {

								__loadScript(i + 1);

							}

						});

					} else {

						deferred.resolve();

					}

				}

				__loadScript(0);
				return deferred;

			},

			/*

				Credits (adeneo stackovweflow user)
					https://stackoverflow.com/a/11803418

			*/
			__loadScriptAsync: function(script_arr, cache) {

				var _arr = $.map(script_arr, function(scr) {
					return (cache !== false) ? $.SOW.helper.getScriptCached( scr ) : $.getScript( scr );
				});

				_arr.push($.Deferred(function( deferred ) {
					$( deferred.resolve );
				}));

				return $.when.apply($, _arr);

			},
				getScriptCached: function(url, options) {

					// Allow user to set any option except for dataType, cache, and url
					options = $.extend( options || {}, {
						dataType: "script",
						cache: true,
						url: url
					});

					// Use $.ajax() since it is more flexible than $.getScript
					// Return the jqXHR object so we can chain callbacks
					return jQuery.ajax( options );

				},




		/**
		 *
		 *	@loadCSS
		 *
			$.SOW.helper.loadCSS("/path/to/file.css", "append|prepend|remove");  
			"append" is default, if no option passed
		 *
		 **/
		loadCSS: function(cssFile, option) {

			/* 1. remove */
			if(option === 'remove')
				jQuery('head link[href="'+cssFile+'"]').remove();


			/* 2. prepend */
			else if(option === 'prepend') {
				if(jQuery('head link[href="'+cssFile+'"]').length > 0)
					return;
				jQuery('head').prepend('<link rel="stylesheet" href="'+cssFile+'">');
			}


			/* 3. append : default */
			else  {

				if(jQuery('head link[href="'+cssFile+'"]').length > 0)
					return;

				jQuery('head').append('<link rel="stylesheet" href="'+cssFile+'">');
			}


		},




		/**
		 *
		 *	@loadingSpinner
		 *
			$.SOW.helper.loadingSpinner('show|hide', "#mycontainer", 'overlay|icon');
		 *
		 **/
		loadingSpinner: function(option, _container, _layout) { // layout: overlay|icon

			var _container 	= (_container === null) ? jQuery('body') : jQuery(_container);
			var _layout 	= (typeof _layout !== 'undefined') ? _layout : 'icon';

			if(option === 'show') {

				// remove existing and stop
				if(jQuery('#js_loading_icon').length > 0) {
					jQuery('#js_loading_icon').remove();
					return;
				}

				// 1. overlay, absolute positioning inside container
				var _tpl1 = '<div id="js_loading_icon" class="position-absolute absolute-full overlay-dark overlay-opacity-2 z-index-9999 text-center">' 
							+ '<i class="' + $.SOW.config.sow__icon_loading + ' fs--30 text-muted valign-middle"></i>'
					  + '</div>';

				// 2. fixed - bottom of the screen, no overlay
				var _tpl2 = 
					'<div id="js_loading_icon" class="position-fixed fixed-bottom w-100 mb-3 z-index-9999 text-center shadow-none">'
						+ '<span class="bg-white d-inline-block px-4 rounded-lg shadow-lg">'
							+ '<i class="' + $.SOW.config.sow__icon_loading + ' fs--30 text-muted"></i>'
						+ '</span>'
				  + '</div>';


				var _tpl 		= (_layout == 'overlay') ? _tpl1 : _tpl2;
				var _container 	= (_layout == 'overlay') ? _container : 'body'; // it's fixed, add to body!


				// show
				if(typeof _container === 'object') {
					_container.prepend(_tpl);
				} else {
					jQuery(_container).prepend(_tpl);
				}


			} else {

				jQuery('#js_loading_icon').remove();

			}

		},




		/**
		 *
		 *	@executeFunctionByName
		 *
			$.SOW.helper.executeFunctionByName("FunctionName", window);
			$.SOW.helper.executeFunctionByName("My.Namespace.functionName", window, arguments);
			$.SOW.helper.executeFunctionByName("Namespace.functionName", My, arguments);


			!WARNING! !NOTE!

			Most js code obfuscators might wreck the code as they will change the function names, making the string invalid.
			Anyway, all obfuscators will double the size of your code and, of course, will be much slower!

			This function is used in two places:
				1. init|reinit scripts
				2. ajax callbacks

			Please do not overuse it!

		 *
		 **/
		executeFunctionByName: function(functionName, context /*, args */) {

			// return new Promise(resolve => {

				if(typeof(window) !== 'undefined') {

					// Use the window (from browser) as context if none providen.
					context = context || window;
				
				} else {

					// If using Node.js, the context will be an empty object
					context = context || global;

				}


				var args 		= Array.prototype.slice.call(arguments, 2);
				var namespaces 	= functionName.split(".");
				var func 		= namespaces.pop();

				for(var i = 0; i < namespaces.length; i++) {
					context = context[namespaces[i]];
				}


				return context[func].apply(context, args);

			// });

		},




		/**
		 *
		 *	@overlay
		 *
			$.SOW.helper.overlay('show|hide|toggle');
		 *
		 **/
		overlay: function(option) {

			if(option === 'show') {

				jQuery('body').append('<div id="overlay-default"></div>');
				jQuery('body').addClass('overflow-hidden');

			}

			else if(option === 'hide') {

				jQuery('#overlay-default').unbind().remove();
				jQuery('body').removeClass('overflow-hidden');
		
			}

			else {

				if(jQuery('#overlay-default').length > 0) {
					$.SOW.helper.__overlay_hide();
				} else {
					$.SOW.helper.__overlay_show();
				}

			}

		},
			__overlay_show: function() {
				jQuery('body').append('<div id="overlay-default"></div>');
				jQuery('body').addClass('overflow-hidden');
			},
			__overlay_hide: function() {
				jQuery('#overlay-default').unbind().remove();
				jQuery('body').removeClass('overflow-hidden');
			},




		/**
		 *
		 *	@randomStr
		 *
			$.SOW.helper.randomStr(8, ''|L|N);
		 *
		 **/
		randomStr: function(length, type) {

			switch(type) {

				case 'L':
					var characters   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
					break;

				case 'N': 
					var characters   = '0123456789';
					break;

				default:
					var characters   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

			}

			var result           = '';
			var charactersLength = characters.length;

			for ( var i = 0; i < length; i++ ) {
				result += characters.charAt(Math.floor(Math.random() * charactersLength));
			}

			return result;

		},


		/**
		 *
		 *	@byte2size
		 *
		 * 	$.SOW.helper.byte2size(bytes, precision=2, int_only=false);
		 *
		 **/
		byte2size: function(bytes, precision, int_only) {
			var precision 	= typeof precision 	!== 'undefined' ? precision : 2;
			var int_only 	= typeof int_only 	!== 'undefined' ? int_only 	: false;

			if(bytes < 1) 
					return 0 + (int_only === false) ? 'B' : '';


			var k 			= 1024;
			var precision 	= precision < 0 ? 0 : precision;
			var unit 		= ['B', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'];

			var i 			= Math.floor(Math.log(bytes) / Math.log(k));
			var unit_txt 	= (int_only === false) ? ' ' + unit[i] : 0;
			return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + unit_txt;

		},




		/**
		 *
		 *	@byte2kb
		 *
		 * 	$.SOW.helper.byte2kb(bytes);
		 *
		 **/
		byte2kb: function(bytes) {

			if(bytes < 1)
				return bytes;

			var bytes = bytes / 1024;
			return (Math.round(bytes * 100) / 100);

		},





		/**
		 *
		 *	@scrollAnimate
		 *
			$.SOW.helper.scrollAnimate(_el, _offset, _hash_change, _speed);
				_el 			= element to scroll to. #top = page top
				_offset 		= top offset (0 default)
				_hash_change 	= update url hash on click
				_speed 			= scroll speed (400 default)

			$.SOW.helper.scrollAnimate('#top', 0, false, 400);
		 *
		 **/
		scrollAnimate: function(_el, _offset, _hash_change, _speed) {
			_el 				= typeof _el 			!== 'undefined' 	? _el 			: '';
			_hash_change 		= typeof _hash_change 	!== 'undefined' 	? _hash_change 	: 'false';
			_offset 			= typeof _offset 		!== 'undefined' 	? _offset 		: 0;
			_speed 				= typeof _speed 		!== 'undefined' 	? _speed 		: 400;

			// Calculate offset if not given!
			if(_offset < 1) {

				if($.SOW.globals.elBody.hasClass('header-hide'))
					_offset = 15;

				// .header-fixed is added by js header plugin for all: .header-sticky, .header-scroll-reveal
				else if($.SOW.globals.elBody.hasClass('header-fixed') || $.SOW.globals.elBody.hasClass('header-sticky'))
					_offset = $.SOW.globals.elHeader.outerHeight() + 15;

			}


			// Scroll
			if(_el != '#' && _el != '#!' && _el != 'javascript:;') {

				if(_el == '#top') {

					jQuery('html, body').animate({scrollTop: $.SOW.globals.elBody.offset().top}, _speed, function() {

						if(_hash_change == 'true') {
							window.location.hash = _el;
						}

					});

				} else {

					// unexpected error (should never happen - invalid element)!
					if(!jQuery(_el).offset()) return;

					jQuery('html, body').animate({scrollTop: jQuery(_el).offset().top - parseInt(_offset)}, _speed, function() {

						if(_hash_change == 'true') {
							window.location.hash = _el;
						}

					});

				}

			}

		},



		/**
		 *
		 *	@removeUrlHash
		 *
			$.SOW.helper.removeUrlHash('https://domain.com/url#hash');
		 *
		 **/
		removeUrlHash: function(_url){

		    if (_url.indexOf('#') > -1)
				return _url.replace(/#.*$/, '');

			return _url;

		},



		/**
		 *
		 *	@playSound
		 *
			$.SOW.helper.playSound('path/to/audio.mp3');
		 *
		 **/
		playSound: function(_soundFile) {

			var audioElement = document.createElement('audio');

			audioElement.setAttribute('src', _soundFile);
			audioElement.setAttribute('autoplay', 'autoplay');

			audioElement.addEventListener("load", function() {
				audioElement.play();
			}, true);

		},





		/**
		 *
		 *	@time_from_ms
		 * 	
			$.SOW.helper.time_from_ms(miliseconds, 's|m|h|d|empty for all');
		 *
		 **/
		time_from_ms: function(miliseconds, format) {
			var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

			total_seconds 	= parseInt(Math.floor(miliseconds / 1000));
			total_minutes 	= parseInt(Math.floor(total_seconds / 60));
			total_hours 	= parseInt(Math.floor(total_minutes / 60));
			days 			= parseInt(Math.floor(total_hours / 24));

			seconds 		= parseInt(total_seconds % 60);
			minutes 		= parseInt(total_minutes % 60);
			hours 			= parseInt(total_hours % 24);

			switch(format) {
				case 's':
					return total_seconds;

				case 'm':
					return total_minutes;

				case 'h':
					return total_hours;

				case 'd':
					return days;

				default:
					return { d: days, h: hours, m: minutes, s: seconds };
			}

		},



		/**
		 *
		 *	@get_browser
		 *
			$.SOW.helper.get_browser();
		 *
		 **/
		get_browser: function() {

			var ua = navigator.userAgent.toLowerCase(); 

			if (ua.indexOf('chrome') > -1)
				return 'chrome';

			else if (ua.indexOf('safari') > -1) 
				return 'safari';

			else if (ua.indexOf('mozilla') > -1)
				return 'mozilla';

			else if (ua.indexOf('edge') > -1) 
				return 'edge';

			else // ie, etc
				return 'n/a';

		},




		/**
		 *
		 *	@params_parse
		 *
			var params = $.SOW.helper.params_parse('['param','value']['param2','value2']); // return: array
		 *
		 **/
		params_parse: function(string) {

			if(string != '' && string.length > 2) {

				// creating a valid json
				var string = '[' + string + ']'; 				// add [] brackets
				var string = string.replace(/'/g, '"'); 		// replace ' with "
				var string = string.replace(/ /g, ''); 			// remove spaces
				var string = string.replace(/]\[/g, '],['); 	// replace: '][' with '],['

				// parse 
				var string = JSON.parse(string);

			}

			return string;

		},




		/**
		 *
		 *	@indexedDB
		 *
		 	https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API

			IndexedDB is a low-level API for client-side storage of significant amounts of 
			structured data, including files/blobs. This API uses indexes to enable 
			high-performance searches of this data. While Web Storage is useful for storing 
			smaller amounts of data, it is less useful for storing larger amounts of structured data. 
			IndexedDB provides a solution.



			+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
				:: EVERYTHING IS RETURNED TO A CALLBACK! ::

				callbackFn = function(result) {
					console.log(result);
				}


				var _version 	= 1;
				var _database 	= "smarty_test";


				// 1. Create Database
				$.SOW.helper.indexedDB({ // create database (& indexes)
					version: 		_version, 
					action: 		'db:create', 
					database: 		_database, 

					// {} or null
					db_options: 	{ keyPath: "item_id", autoIncrement: true }, 

					// define what data items the objectStore will contain
					// [indexName, keyPath, {objectParameters}]
					db_indexes: 	[
						['title', 'title', 		{ unique: false }],
						['date', 'date', 		{ unique: false }]
					]
				});

				// Check if database exists
				$.SOW.helper.indexedDB({ // check if database exists
					version: 		_version, 
					action: 		'db:check', 
					database: 		_database, 
					callback: 		callbackFn
				});


				// 2. Add Item
				$.SOW.helper.indexedDB({ // add item
					version: 		_version, 
					action: 		'db:add', 
					database: 		_database, 
					callback: 		callbackFn,
					item: 			{
						item_id: 	1,
						title: 		'Lorem ipsum',
						date: 		new Date(),
					}
				});


				// 3. Update : or insert if not exist
				$.SOW.helper.indexedDB({ // update | insert if not exist
					version: 		_version, 
					action: 		'db:update', 
					database: 		_database, 
					callback: 		callbackFn,
					item: 			{
						item_id: 	2,
						title: 		'This is updated!',
						date: 		new Date(),
					}
				});



				// 4. Delete database
				$.SOW.helper.indexedDB({ // delete entire database
					version: 		_version, 
					action: 		'db:delete:database', 
					database: 		_database, 
				});


				$.SOW.helper.indexedDB({ // delete item by keyPath
					version: 		_version, 
					action: 		'db:delete', 
					database: 		_database, 
					keyPath: 		1
				});


				// 6. Get Items
				$.SOW.helper.indexedDB({ // get single item by keyPath
					version: 		_version, 
					action: 		'db:get:keyPath', 
					database: 		_database, 
					keyPath: 		1,
					callback: 		callbackFn
				});

				$.SOW.helper.indexedDB({ // get all items
					version: 		_version, 
					action: 		'db:get:all', 
					database: 		_database, 
					callback: 		callbackFn
				});

				$.SOW.helper.indexedDB({ // get all item keys
					version: 		_version, 
					action: 		'db:get:allkeys', 
					database: 		_database, 
					callback: 		callbackFn
				});

				$.SOW.helper.indexedDB({ // get item key
					version: 		_version, 
					action: 		'db:get:key', 
					database: 		_database, 
					keyPath: 		2,
					callback: 		callbackFn
				});

				$.SOW.helper.indexedDB({ // get columns (indexNames)
					version: 		_version, 
					action: 		'db:get:columns', 
					database: 		_database, 
					callback: 		callbackFn
				});

				// 7. Count Items
				$.SOW.helper.indexedDB({ // count items
					version: 		_version, 
					action: 		'db:count', 
					database: 		_database, 
					callback: 		callbackFn
				});
			+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

		 *
		 **/
		indexedDB: function(_obj) {

			if (!('indexedDB' in window))
			  window.indexedDB = window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;


			if(!window.indexedDB) {
				$.SOW.helper.consoleLog("[indexedDB] Not supported on this browser!");
				return;
			}

			// --
			var version 				= _obj.version 		|| 1;
			var action 					= _obj.action;
			var database 				= _obj.database;
			var key 					= _obj.key 			|| _obj.db_options 	|| _obj.item || _obj.keyPath;
			var callback 				= _obj.callback 	|| _obj.db_indexes;
			// --
			var req 					= window.indexedDB.open(database, version);
			var smarty 					= {};
			var data 					= '';

			smarty.onerror = function(e) {
				console.log("[indexedDB] Database error: ", e.target.errorCode);
			};


			req.onupgradeneeded = function(e) {
				smarty.db = e.target.result || e.result || this.result;

				if(action !== 'db:create')
					return;

				if(smarty.db.objectStoreNames.contains(database))
					smarty.db.deleteObjectStore(database);

				// Create an objectStore for this database
				// example: smarty.db.createObjectStore('database', {keyPath: "item_id", autoIncrement: true});
				var objectStore = smarty.db.createObjectStore(database, key || {});

				// define what data items the objectStore will contain
				// callback is used as "columns"
				for(var i=0;i<callback.length;++i) {
					var column = callback[i];
					objectStore.createIndex(column[0], column[1], column[2]);
				}

				$.SOW.helper.consoleLog('[indexedDB] Table ' + database + ' created!');

			}; 	req.onerror = smarty.onerror;


			req.onsuccess = function(e) {

				if(action === 'db:create')
					return;


				smarty.db = e.target.result || e.result || this.result;

				var db_action = (action === 'db:add' || action === 'db:update' || action === 'db:delete' || action == 'db:delete:database') ? 'readwrite' : 'readonly';

				var transaction 		= smarty.db.transaction([database], db_action);
				transaction.oncomplete 	= function(event) {};
				transaction.onerror 	= function(event) {};
				var table 				= transaction.objectStore(database);

				if(action === 'db:add')
					table.add(key);

				else if(action === 'db:update')
					table.put(key);

				else if(action === 'db:delete')
					table.delete(key);

				else if(action === 'db:delete:database')
					table.clear();

				else if(action === 'db:get:keyPath') {

					var get = table.get(key);

					get.onsuccess = () => {
						callback(get.result);
					};

				}

				else if(action === 'db:get:all') {

					var get = table.getAll(key || null); // key = query, count

					get.onsuccess = () => {
						callback(get.result);
					};

				}

				else if(action === 'db:get:allkeys') {

					var get = table.getAllKeys(key || null); // key = query, count

					get.onsuccess = () => {
						callback(get.result);
					};

				}

				else if(action === 'db:get:key') {

					var get = table.getKey(key);

					get.onsuccess = () => {
						callback(get.result);
					};

				}

				else if(action === 'db:get:columns') {

					var result = table.indexNames;
					callback(result);

				}

				else if(action === 'db:count') {

					var get = table.count();

					get.onsuccess = () => {
						callback(get.result);
					};


				}


				else if(action === 'db:check') {

					var _exists = (smarty.db.objectStoreNames.contains(database)) ? true : false;
					callback(_exists);

				}


				// smarty.db.close();

			}; 	req.onerror = smarty.onerror;


		},




		/**
		 *
		 *	@currencyFormat
		 *
			$.SOW.helper.currencyFormat(1000000); // output: 1,234,567.89

			// 1,234,567.89
			$.SOW.helper.currencyFormat(1000000, [
				   2, ',', '.' // en
				// 2, '.', ',' // de
				// 2, ' ', ',' // fr
			]);

		 *
		 **/
		currencyFormat: function(amount, custom) {

			if(typeof custom !== 'object')
				var custom = [
					   2, ',', '.' // en
					// 2, '.', ',' // de
					// 2, ' ', ',' // fr
				];

			return (  amount.toFixed(custom[0])
							.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1:repl:')
							.replace('.', custom[2])
							.replace(/:repl:/g, custom[1])
					);

		},




		/**
		 *
		 *	@jsLocation
		 *
			$.SOW.helper.jsLocation(); // output: javascript location
		 *
		 **/
		jsLocation: function() {

			var currentScript;
			var scripts = document.querySelectorAll('script[src]');

			for(var s = 0; s < scripts.length; s++) {

				if(scripts[s].src.indexOf('core') !== -1) {
					var currentScript = scripts[s].src;
					break;
				}

				else if(scripts[s].src.indexOf('bundle') !== -1) {
					var currentScript = scripts[s].src;
					break;
				}

				else if(scripts[s].src.indexOf('vendor') !== -1) {
					var currentScript = scripts[s].src;
					break;
				}

			}

			// nothing we want found! get the last script!
			if(!currentScript)
				currentScript = scripts[scripts.length-1].src;

			if(!currentScript)
				currentScript = 'assets/js/';

			var currentScriptChunks = currentScript.split('/');
			var currentScriptFile 	= currentScriptChunks[currentScriptChunks.length - 1];
			var scriptPath 			= currentScript.replace(currentScriptFile, '');
			
			return scriptPath;

		},




		/**
		 *
		 *	@cssLocation
		 *
			$.SOW.helper.cssLocation(); // output: css location
		 *
		 **/
		cssLocation: function() {

			var currentScript;
			var scripts = document.querySelectorAll('link[rel=stylesheet]');

			for(var s = 0; s < scripts.length; s++) {

				if(scripts[s].href.indexOf('core') !== -1) {
					var currentScript = scripts[s].href;
					break;
				}

				else if(scripts[s].href.indexOf('bundle') !== -1) {
					var currentScript = scripts[s].href;
					break;
				}

				else if(scripts[s].href.indexOf('vendor') !== -1) {
					var currentScript = scripts[s].href;
					break;
				}

			}

			// nothing we want found! get the last script!
			if(!currentScript)
				currentScript = scripts[scripts.length-1].href;

			if(!currentScript)
				currentScript = 'assets/css/';

			var currentScriptChunks = currentScript.split('/');
			var currentScriptFile 	= currentScriptChunks[currentScriptChunks.length - 1];
			var scriptPath 			= currentScript.replace(currentScriptFile, '');

			return scriptPath;

		},




		/**
		 *
		 *	@vendorLogic
		 *
			$.SOW.helper.vendorLogicPaths('fullcalendar'); // output:array 

			Get vendor logics: js & css paths
			FOR EXTERNAL SCRIPTS LOAD!
		 *
		 **/
		vendorLogicPaths: function(vendor) {

			if(!vendor)
				return arr;

			var js_location 	= ($.SOW.globals.js_location != '') ? $.SOW.globals.js_location : $.SOW.helper.jsLocation();
			var css_location 	= ($.SOW.globals.js_location != '') ? $.SOW.globals.css_location : $.SOW.helper.cssLocation();
			var arr 			= [];
				arr['path_js'] 	= '';
				arr['path_css'] = '';




			/* CSS FILE */
			if($.SOW.config["vendor:external_css"]) {

				for (var module in $.SOW.config["vendor:external_css"]) {

					for(var v = 0; v < $.SOW.config["vendor:external_css"][module].length; v++) {

						if($.SOW.config["vendor:external_css"][module].includes(vendor) === true) {
							
							arr['path_css'] 	= css_location+module+'.'+vendor+'.min.css';
							
							// apply here, else swiper and other plugins has issues : is css loaded after js
							$.SOW.helper.loadCSS(arr['path_css']);
							break;
						}
					
					}

				}

			}



			/* JS FILE */
			if($.SOW.config["vendor:external_js"]) {

				for (var module in $.SOW.config["vendor:external_js"]) {

					for(var v = 0; v < $.SOW.config["vendor:external_js"][module].length; v++) {

						if($.SOW.config["vendor:external_js"][module].includes(vendor) === true) {
							arr['path_js'] 	= js_location+module+'.'+vendor+'.min.js';
							break;
						}
					
					}

				}

			}

			return arr;
		},





		/**
		 *
		 *	@videoEmbedFromUrl
			$.SOW.helper.videoEmbedFromUrl('https://www.youtube.com?v=jh8Hgd466', autoplay=1);
		 *
		 **/
		videoEmbedFromUrl: function(href, autoplay) {


			// Localvideo first!
			if( href.match(/(.mp4)/) || href.match(/(.webm)/) ) {

				var mp4 	= href.replace('.webm', '.mp4');
				var webm 	= href.replace('.mp4', '.webm');
				var jpg 	= href.replace('.mp4', '.jpg').replace('.webm', '.jpg');
				var auto 	= (!autoplay) ? null : 'autoplay';

				// Local Video
				return '<div class="embed-responsive embed-responsive-16by9">'
					+ '<video preload="auto" '+auto+' controls="controls" poster="'+jpg+'">'
						+ '<source src="'+webm+'" type="video/webm;">'
						+ '<source src="'+webm+'" type="video/mp4;">'
					+ '</video>'
				+ '</div>';

			};

			// :: default
			var videoEmbedLink = null;


			// :: youtube
			if(videoEmbedLink === null) {
				var youtubeMatch 	= href.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i);
				var videoEmbedLink 	= (youtubeMatch) ? "https://www.youtube.com/embed/"+youtubeMatch[4]+"?autoplay=" + autoplay || 1 + '' : null;
			}

			// :: vimeo
			if(videoEmbedLink === null) {
				var vimeoMatch 		= href.match(/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/);
				var videoEmbedLink 	= (vimeoMatch) ? "https://player.vimeo.com/video/"+vimeoMatch[2]+"?autoplay=" + autoplay || 1 + '' : null;
			}


			// Err!
			if(!videoEmbedLink)
				return null;

			// -- --

			// Construct Embed!
			return '<div class="embed-responsive embed-responsive-16by9">'
						+ '<iframe class="embed-responsive-item" src="' + videoEmbedLink + '" allow="autoplay; encrypted-media" width="560" height="315"></iframe>'
					+ '</div>';

		},




		/**
		 *
		 *	@strhash
		 *	author: Sergey.Shuchkin
		 *	https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
		 *
			$.SOW.helper.strhash('string here');
		 *
		 **/
		strhash: function( str ) {
		    if (str.length % 32 > 0) str += Array(33 - str.length % 32).join("z");
		    
		    var hash = '', bytes = [];
		    var i, j, k, a; i = j = k = a = 0;
		    var dict = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','1','2','3','4','5','6','7','8','9'];
		    
		    for (i = 0; i < str.length; i++ ) {
		        var ch = str.charCodeAt(i);
		        bytes[j++] = (ch < 127) ? ch & 0xFF : 127;
		    }

		    var chunk_len = Math.ceil(bytes.length / 32);   
		   
		    for (i=0; i<bytes.length; i++) {
		        j += bytes[i]; k++;
		       
		        if ((k == chunk_len) || (i == bytes.length-1)) {
		            var a = Math.floor( j / k );

		            if (a < 32) 			hash += '0';
		            else if (a > 126) 		hash += 'z';
		            else 					hash += dict[  Math.floor( (a-32) / 2.76) ];

		            var j = k = 0;
		        }

		    }

		    return hash;
		},



		/**
		 *
		 *	@consoleLogReinit
		 *
			$.SOW.helper.consoleLogReinit(scriptInfo, selector);
		 *
		 **/
		consoleLogReinit: function(scriptInfo, selector) {

			$.SOW.helper.consoleLog('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
			$.SOW.helper.consoleLog(scriptInfo, 'color: #6dbb30; font-weight: bold; font-size:14px;');
			$.SOW.helper.consoleLog('Ajax Reinit For: ' + selector);
			$.SOW.helper.consoleLog(window.location.href);
			$.SOW.helper.consoleLog('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

		},



		/**
		 *
		 *	@consoleLog
		 *
			$.SOW.helper.consoleLog('%cLorem Ipsum', 'color: #ff0000;');
		 *
		 **/
		consoleLog: function(data, css) {

			if($.SOW.config.sow__debug_enable !== true)
				return;


			// Console css
			if(typeof css !== "undefined" && typeof css !== 'object') {
				var data 	= '%c' + data;

				console.log(data, css);
				return;
			}

			else if(typeof css === 'object') {
				console.log(data, css);
				return;
			}

			console.log(data);
		}

	};
})(jQuery);