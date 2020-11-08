/**
 *
 *	[GULP] BUILD
 *
 *	@author 		Dorin Grigoras
 *					www.stepofweb.com
 *
 *	@Dependencies
 *
 * 
 *
 **/
module.exports = function(Smarty) {
	/*!
	 * -- -- -- -- -- -- --
	 */ var Smarty 	= this;

	// maps are created with a delay
	// so we ensure that are created, in order to copy
	var mapsDelay 	= 10000;



	return  {



		/*
		 * JS : Logics
		 * create vendors & bundles	
		 *
		 */
		js: function(config_file, dest, show_status, buildOnlySpecificModule, showSizeRport) { 

			var arr_fonts 					= [];
			var arr_js_bundle 				= [];
			var arr_js_single 				= {};
			var arr_js_autoinit_bundle		= {};
			var arr_js_autoinit_single		= {};
			var arr_js_controller 			= [];
			var arr_js_dependencies 		= [];
			var arr_js_hasExternalCSS 		= [];
			var arr_js_hasExternalJS 		= [];
			var count_bundle_files 			= 0;

			for (var module in config_file.list) {

				if(config_file.list[module].bundle === true)
					count_bundle_files++;

			}



			// Js Files
			for (var module in config_file.list) {

				if(config_file.list[module].enable !== true)
					continue;


				var path_js 	= config_file[module].path_js;
				var path_font 	= (config_file[module].path_font) ? config_file[module].path_font : [];
				var autoinit 	= (config_file[module].autoinit) ? config_file[module].autoinit : null,
					autoinit 	= (autoinit !== null  && Object.keys(autoinit).length > 0) ? autoinit : null;


				// JS Files
				for (var i = 0; i < path_js.length; i++) {

					// bundle
					if(typeof config_file.list[module].bundle === 'undefined' || config_file.list[module].bundle === true) {
						arr_js_bundle.push(path_js[i]);
					} 

					// not bundle - but pack vendor js files in a single one (output_name: module)
					else if(config_file.list[module].bundle === false) {

						// create an empty array inside object
						if(!arr_js_single[module])
							arr_js_single[module] = [];

						arr_js_single[module].push(path_js[i]);


						// create array with fingle modules (name only)
						if(config_file[module].path_js.length > 0) {

							if(arr_js_hasExternalJS.includes(module) === false)
								arr_js_hasExternalJS.push(module);

						} // -- -- -- --



						// has CSS files!
						if(config_file[module].path_css.length > 0) {

							if(arr_js_hasExternalCSS.includes(module) === false)
								arr_js_hasExternalCSS.push(module);

						} // -- -- -- --

					}

				}


				// Fonts (copy only)
				for (var i = 0; i < path_font.length; i++) {
					var font = path_font[i] + '/';
						font = font.replace('//', '/');
						arr_fonts.push(font+'**/*');
				}


				// Autoinit
				if(config_file.list[module].autoinit === true && autoinit !== null && path_js.length > 0) {

					// autonit not valid for external SOW scripts!
					if(config_file.output_name == 'core' && config_file.list[module].bundle === false) {}
					else {


						// ['$.SOW.core.gfont.init', 	'[data-gfont]', 	null, 		true],
						var config 	= Object.keys(autoinit.config).length > 0 ? JSON.stringify(autoinit.config) : null;

						if(config !== null) { // remove quotes on properties
							var config = Smarty.helper.jsonAsString(config);
						}

						var initLine = "['"+autoinit.function+"','"+autoinit.selector+"', "+config+","+autoinit.reinit_ajax+"]";



						if(count_bundle_files > 0) {
							arr_js_autoinit_bundle[module] = initLine;
						} else {
							arr_js_autoinit_single[module] = initLine;
						}

						// autoinit final function
						// if(config_file.list[module].bundle === true) {
						// 	arr_js_autoinit_bundle[module] = initLine;
						// } else {
						// 	arr_js_autoinit_single[module] = initLine;
						// }

					}

				}


				// Controller - only if bundle is present.
				// Else, should be added manually!
				if(typeof config_file[module].controller !== 'undefined') {
					
					// add only once!
					if(config_file[module].controller != '' && count_bundle_files > 0) {

						if(!arr_js_controller[config_file[module].controller])
							arr_js_controller.push(config_file[module].controller);

					}

				}


				// dependencies
				if(typeof config_file[module].dependencies !== 'undefined') {

					for (var i = 0; i < config_file[module].dependencies.length; i++) {

						var _depFile = config_file.DEPENDENCIES[config_file[module].dependencies[i]];
						for (var i = 0; i < _depFile.length; i++) {

							// add only once!
							if(!arr_js_dependencies[_depFile[i]])
								arr_js_dependencies.push(_depFile[i]);

							// in case there is no bundle, add dependency to pack
							if(count_bundle_files < 1 && !arr_js_single[module][_depFile[i]])
								arr_js_single[module].push(_depFile[i]);

						}


					}

				}


			}



			// console.log(arr_js_bundle);
			// console.log(arr_js_single);
			// console.log(arr_js_autoinit_bundle);
			// console.log(arr_js_autoinit_single);
			// console.log(arr_js_controller);
			// console.log(arr_js_dependencies);
			// return;


			// Some Info
			if(show_status == 'show-status') {
				Smarty.helper.log('light', ':: '+config_file.output_name, 'mb-0');
				Smarty.helper.log('light', 'Bundled: ' + arr_js_bundle.length + ' js files!', 'm-0');
				Smarty.helper.log('light', 'Single Packed: ' + Object.keys(arr_js_single).length + ' js files!', 'm-0');
				Smarty.helper.log('light', 'Autoinits for: ' + (Object.keys(arr_js_autoinit_bundle).length + Object.keys(arr_js_autoinit_single).length )+ ' js files!', 'm-0');
			}



			// Notify, just in case!
			if(count_bundle_files < 1 && !hideBundleWarning) {
				Smarty.helper.log('danger', 'No bundle - don`t forget to add Controllers manually, if exists!');
			}


			// Bundle
			if(count_bundle_files > 0) {

				// Add Controllers to the end of bundle!
				for (var i = 0; i < arr_js_controller.length; i++) {
					arr_js_bundle.push(arr_js_controller[i]);
				}

				// Add dependencies to the end of bundle!
				for (var i = 0; i < arr_js_dependencies.length; i++) {
					arr_js_bundle.push(arr_js_dependencies[i]);
				}


				var on = (config_file.output_name == 'core') ? config_file.output_name : config_file.output_name+'_bundle';


				// ++++++++++++++++++++++++++++++++++++++++ ADD ED FINAL JS +++++++++++++++++++++++++++++++++++++++++
				/*

					List all externalCss modules that has also external CSS

					Example:
					$.SOW.config.autoinit["vendor:external_css"]["vendor"] = ["bootstrap_select","flickity"]
				
				**/	var externalCss = '';
				if(arr_js_hasExternalCSS.length > 0 ) {
					externalCss += 'if(!$.SOW.config["vendor:external_css"]){$.SOW.config["vendor:external_css"]=[];}'+"\n"; 
					externalCss += '$.SOW.config["vendor:external_css"]["'+config_file.output_name+'"] = ["'+	arr_js_hasExternalCSS.join('","') 	+'"];'; 
				}


				/*

					List all externalJS modules

					Example:
					$.SOW.config.autoinit["has_css"] = ["bootstrap_select","flickity"]
				
				**/	var externalJs = '';
				if(arr_js_hasExternalJS.length > 0 ) {
					externalJs += 'if(!$.SOW.config["vendor:external_js"]){$.SOW.config["vendor:external_js"]=[];}'+"\n"; 
					externalJs += '$.SOW.config["vendor:external_js"]["'+config_file.output_name+'"] = ["'+	arr_js_hasExternalJS.join('","') 	+'"];'; 
				}



				/* 

					Autoinits
					
					Example:
					$.SOW.config.autoinit['jarallax'] = ['$.SOW.vendor.bootstrap_select.init','.jarallax', null,true];
					$.SOW.config.autoinit['sticky_kit'] = ['$.SOW.vendor.flickity.init','.sticky-kit', null,true];
				*/
				var autoinitConfig = this.buildAutoinit(arr_js_autoinit_bundle, config_file.output_name, true) || '';


				if(externalCss != '' || externalJs != '' || autoinitConfig != '') {

					Smarty.fs.writeFile('./_gulp/tmp/tmp_append_'+config_file.output_name+'.js', externalCss+autoinitConfig+externalJs, (err) => {
						
						if (err) {
							Smarty.helper.log('danger', '_gulp/tmp/ folder is not writable, temporary .js file need to be written!');
							throw err;
						}

					});

					// because of async
					arr_js_bundle.push('_gulp/tmp/tmp_append_'+config_file.output_name+'.js');
					this.build_js(arr_js_bundle, dest, on, autoinitConfig, showSizeRport, externalCss+autoinitConfig+externalJs);
			
				} else {

					this.build_js(arr_js_bundle, dest, on, autoinitConfig, showSizeRport, '');
				
				}
				// ++++++++++++++++++++++++++++++++++++++++ ADD ED FINAL JS +++++++++++++++++++++++++++++++++++++++++




				
				

			}


			// Singles, pack if are multiple js files per vendor
			for (var module in arr_js_single) {


				/**
					
					Build only specific module (single only)
					==============================================================
					Called by watch function!

				**/
				if(buildOnlySpecificModule) {

					if(module != buildOnlySpecificModule)
						continue;

				} // ==============================================================



				var autoinitConfig = this.buildAutoinit(arr_js_autoinit_single[module], module, false) || '';
				
				this.build_js(arr_js_single[module], dest, config_file.output_name+'.'+module, autoinitConfig, showSizeRport);
			}


			// Fonts
			this.fonts_copy(arr_fonts);

			// Core Fonts
			if(config_file.output_name === 'core')
				this.fonts_copy(['src/html/assets/fonts/**/*']);

		},




		/*
		 * SCSS : Logics
		 * create vendors & bundles	
		 *
		 */
		scss: function(config_file, dest) { 

			var arr_css_bundle 				= [];
			var arr_css_single 				= {};
			var count_bundle_files 			= 0;


			for (var module in config_file.list) {

				if(config_file.list[module].bundle === true)
					count_bundle_files++;

			}


			// Core
			for (var module in config_file.list) {

				if(config_file.list[module].enable !== true)
					continue;

				var path_css 	= config_file[module].path_css;

				// CSS Files
				for (var i = 0; i < path_css.length; i++) {

					// bundle
					if(typeof config_file.list[module].bundle === 'undefined' || config_file.list[module].bundle === true) {
						arr_css_bundle.push(path_css[i]);
					} 

					// not bundle - but pack vendor js files in a single one (output_name: module)
					if(config_file.list[module].bundle === false) {

						// create an empty array inside object
						if(!arr_css_single[module])
							arr_css_single[module] = [];

						arr_css_single[module].push(path_css[i]);

					}

				}


			}

			// console.log(arr_css_bundle);
			// console.log(arr_css_single);




			// Bundle
			if(count_bundle_files > 0) {

				var on = (config_file.output_name == 'core') ? config_file.output_name : config_file.output_name+'_bundle';
				this.build_css(arr_css_bundle, dest, on);

			}


			// Singles, pack if are multiple js files per vendor
			for (var module in arr_css_single) {
				this.build_css(arr_css_single[module], dest, config_file.output_name+'.'+module);
			}



		},




		/*
		 * Build: scss
		 * Final Build
		 *
		 */
		build_css: function(arr_css, dest, output_name) {

			// Versioning, if available
			var _version_ = this.build_version(output_name);
			// -- -- -- -- -- -- -- --


			const stream = Smarty.merge2();

			for(var i = 0; i < arr_css.length; ++i) {

				var files 	= arr_css[i];
				var ext 	= Smarty.fileExtension(files);  

				if(ext == 'css') {
					var cssStream = Smarty.gulp.src(files).pipe(Smarty.concat('css-partials.css'));
					stream.add(cssStream);
				}

				else if(ext == 'scss' || ext == 'sass') {

					var scssStream = Smarty.gulp.src(files)
											.pipe(Smarty.sass())
											.on('error', function(err){
												Smarty.helper.notify('Smarty Reborn', 'SCSS Error! Check Gulp Console!'); 
												console.log(err.formatted);
											})
											.pipe(Smarty.concat('scss-partials.scss'));

					stream.add(scssStream);

				}

			}



			// build
			var outputName = (Smarty.settings.build_minified_only === true) ? output_name+'.min.css' : output_name+'.css';
			var __ = stream.pipe(Smarty.concat(outputName));

			// -- -- -- -- -- -- -- --
			__ = __.pipe(Smarty.postcss([ Smarty.autoprefixer() ]));
			// -- -- -- -- -- -- -- --

			// -- -- -- -- -- -- -- --
			if(_version_ !== null) { /* 1. before minify */
				__ = __.pipe(Smarty.appendPrepend.prependText('/*! ' + _version_ + ' */'));
			} 
			// -- -- -- -- -- -- -- --


			// Npm is settings a wrong datetime to files
			// https://github.com/npm/npm/issues/20439
			__ = __.pipe( Smarty.through2.obj( function( file, enc, cb ) {
				let date 			= new Date();
					file.stat.atime = date;
					file.stat.mtime = date;
				cb( null, file );
			}) );
			// -- -- -- -- -- -- -- --


			// -- -- -- -- -- -- -- --
			if(Smarty.settings.build_minified_only !== true) {
				__ = __.pipe(Smarty.gulp.dest(dest))
					   .pipe(Smarty.rename(output_name+'.min.css'))
			}
			// -- -- -- -- -- -- -- --


			// -- -- -- -- -- -- -- --
			__ = __.pipe(Smarty.cleanCss({
				debug: true,

				//   * =  Internet Explorer 10+ compatibility mode (default)
				// ie9 =  Internet Explorer 9+ compatibility mode
				// ie8 =  Internet Explorer 8+ compatibility mode
				// NOTE: Bootstrap 4 : IE9 and down is not supported!
				// https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/
				compatibility: '*', 

				level: {
					1: {
						specialComments: 0,
					},
				},
			}))
			// -- -- -- -- -- -- -- --


			// -- -- -- -- -- -- -- --
			// __ = __.pipe(Smarty.postcss([ Smarty.autoprefixer() ]));
			// -- -- -- -- -- -- -- --
			// -- -- -- -- -- -- -- --
			__ = __.pipe(Smarty.postcss([
							Smarty.autoprefixer(),
							Smarty.cssnano()
						]));
			// -- -- -- -- -- -- -- --



			// -- -- -- -- -- -- -- --
			if(_version_ !== null) { /* 2. after minify */
				__ = __.pipe(Smarty.appendPrepend.prependText('/*! ' + _version_ + ' */'));
			} 
			// -- -- -- -- -- -- -- --



			// sourcemaps
			if(Smarty.settings.build_sourcemaps === true) {
				__ = __.pipe(Smarty.sourcemaps.init()).pipe(Smarty.sourcemaps.write('.', {
										sourceMappingURLPrefix: '',
										mapFile: function(mapFilePath) {
											// source map files are named *.map instead of *.js.map
											return mapFilePath.replace('.css.map', '.map');
										}
				}));
			}
			// -- -- -- -- -- -- -- --


			// -- -- -- -- -- -- -- --
			// __ = __.pipe(Smarty.debug({title: 'CSS: ', showCount: false}));
			// -- -- -- -- -- -- -- --


			// -- -- -- -- -- -- -- --
			return __.pipe(Smarty.gulp.dest(dest)).on('end', function(file) { 

				if(Smarty.helper.is_dir('./html_frontend') === true) {

					// Because maps are created with a delay (async)
					var __mapsDelay__ = (Smarty.settings.build_sourcemaps === true) ? this.mapsDelay : 300;

					// Delete existing
					Smarty.del(['html_frontend/assets/css/' + output_name+'.min.css', 'html_frontend/assets/css/' + output_name+'.css', 'html_frontend/assets/css/' + output_name+'.min.map'], {force:true});
					
					// Array of what to copy
					var arrToCopy = (Smarty.settings.build_minified_only === true) ? [dest + '/' + output_name+'.min.css'] : [dest + '/' + output_name+'.min.css', dest + '/' + output_name+'.css'];

					// Timeout for maps
					setTimeout(function() {

						if(Smarty.settings.build_sourcemaps === true) {

							try { /* check if exists, first, to avoid error */
								Smarty.fs.accessSync(dest + '/' + output_name+'.min.map', Smarty.fs.R_OK | Smarty.fs.W_OK)
								arrToCopy.push(dest + '/' + output_name+'.min.map');
							} catch(e) {
								console.log('[sow.build.js : build_css()] Map Not Found: ' + dest + '/' + output_name+'.min.map');
							}

						}

						Smarty.gulp.src(arrToCopy).pipe(Smarty.gulp.dest('html_frontend/assets/css/'));

					}, __mapsDelay__);

				}

			}).pipe(Smarty.debug({title: 'CSS: ', showCount: false}));


		},




		/*
		 * Build: js
		 * Final Build
		 *
		 */
		build_js: function(arr_js, dest, output_name, autoinitConfig, showSizeRport, externalCss) {


			// Versioning, if available
			var _version_ = this.build_version(output_name);
			// -- -- -- -- -- -- -- --



			var __ = Smarty.gulp.src(arr_js);
			// -- -- -- -- -- -- -- --


			// -- -- -- -- -- -- -- --
			// Prevent gulp quit on error
			__ = __.pipe(Smarty.plumber({

				errorHandler: function(err) {
					Smarty.helper.notify('Smarty Reborn', 'Javascript Error! Check Gulp Console!'); 
					console.log(err);
				}

			}));
			// -- -- -- -- -- -- -- --



			// -- -- -- -- -- -- -- --
			// Transpile the JS code using Babel's preset-env.
			if(Smarty.settings.gulp_plugins.babel_enable === true) {
				__ = __.pipe(Smarty.babel(Smarty.settings.gulp_plugins.babel));
			}
			// -- -- -- -- -- -- -- --


			// -- -- -- -- -- -- -- --
			// Will replace thigs like console.log with `void 0`.
			if(Smarty.settings.envinronment == 'production') {
				__ = __.pipe(Smarty.stripDebug());
			}
			// -- -- -- -- -- -- -- --



			// -- -- -- -- -- -- -- --
			// Npm is settings a wrong datetime to files
			// https://github.com/npm/npm/issues/20439
			__ = __.pipe( Smarty.through2.obj( function( file, enc, cb ) {
				let date 			= new Date();
					file.stat.atime = date;
					file.stat.mtime = date;
				cb( null, file );
			}) );
			// -- -- -- -- -- -- -- --






			// unminified
			// -- -- -- -- -- -- -- --
			__ = __.pipe(Smarty.concat(output_name+'.js'));
			if(Smarty.settings.build_minified_only !== true) {

				// -- -- -- -- -- -- -- --
				if(_version_ !== null) { /* 1. before minify */
					__ = __.pipe(Smarty.appendPrepend.prependText('/*! ' + _version_ + ' */'));
				} 
				// -- -- -- -- -- -- -- --

				__ = __.pipe(Smarty.gulp.dest(dest));

			}
			// -- -- -- -- -- -- -- --





			// minified
			// -- -- -- -- -- -- -- --
			__ = __.pipe(Smarty.rename(output_name+'.min.js'))
				.pipe(Smarty.terser({

					output: {
						comments: false,
					},

				}));
			// -- -- -- -- -- -- -- --


			// -- -- -- -- -- -- -- --
			if(_version_ !== null) { /* 2. after minify */
				__ = __.pipe(Smarty.appendPrepend.prependText('/*! ' + _version_ + ' */'));
			} 
			// -- -- -- -- -- -- -- --



			// -- -- -- -- -- -- -- --
			// sourcemaps
			if(Smarty.settings.build_sourcemaps === true) {
				__ = __.pipe(Smarty.sourcemaps.init()).pipe(Smarty.sourcemaps.write('.', {
										sourceMappingURLPrefix: '',
										mapFile: function(mapFilePath) {
											// source map files are named *.map instead of *.js.map
											return mapFilePath.replace('.js.map', '.map');
										}
				}));
			}
			// -- -- -- -- -- -- -- --



			// -- -- -- -- -- -- -- --
			// __ = __.pipe(Smarty.debug({title: 'JS: ', showCount: false}));
			// -- -- -- -- -- -- -- --




			// -- -- -- -- -- -- -- --
			if(showSizeRport) {

				__ = __.pipe(Smarty.sizereport({
					total: 	false,
					gzip: 	true,
				}));

			}
			// -- -- -- -- -- -- -- --


			// -- -- -- -- -- -- -- --
			return __.pipe(Smarty.gulp.dest(dest)).on('end', function() {

				if(Smarty.helper.is_dir('./html_frontend') === true) {

					// Because maps are created with a delay (async)
					var __mapsDelay__ = (Smarty.settings.build_sourcemaps === true) ? this.mapsDelay : 300;

					// Delete existing
					Smarty.del(['html_frontend/assets/js/' + output_name + '.min.js', 'html_frontend/assets/js/' + output_name + '.js', 'html_frontend/assets/js/' + output_name + '.min.map'], {force:true});

					// Array of what to copy
					var arrToCopy = (Smarty.settings.build_minified_only === true) ? [dest + '/' + output_name + '.min.js'] : [dest + '/' + output_name + '.min.js', dest + '/' + output_name + '.js'];

					// Timeout for maps
					setTimeout(function() {

						if(Smarty.settings.build_sourcemaps === true) {

							try { /* check if exists, first, to avoid error */
								Smarty.fs.accessSync(dest + '/' + output_name+'.min.map', Smarty.fs.R_OK | Smarty.fs.W_OK)
								arrToCopy.push(dest + '/' + output_name+'.min.map');
							} catch(e) {
								console.log('[sow.build.js : build_js()] Map Not Found: ' + dest + '/' + output_name+'.min.map');
							}

						}

						Smarty.gulp.src(arrToCopy).pipe(Smarty.gulp.dest('html_frontend/assets/js/'));

					}, __mapsDelay__);

				}

			}).pipe(Smarty.debug({title: 'JS: ', showCount: false  }));

		},





		/*
		 * @Autoinits
		 * Temporary autoinits to be used by build_js()
		 *
		 */
		buildAutoinit: function(arr_js, module, is_bundle) {

			var autoinits = '';

			if(!arr_js)
				return '';


			// Important setup for core
			if(module === 'core') {

				// 1. ENABLE DEBUG
				if(Smarty.settings.console_debug === true) /* should be false by default */
					autoinits += "$.SOW.config.sow__debug_enable = true;\n";

				// 2. autoinit OBJECT
				autoinits += "if(typeof $.SOW.config.autoinit === 'undefined') { $.SOW.config.autoinit = {}; }\n";

			}


			// single
			if(is_bundle === false && arr_js != '') {
				autoinits += "$.SOW.config.autoinit['"+module+"'] = "+arr_js+";";
			}

			// bundle - add all inits from that bundle
			else if(is_bundle === true) {
				
				for (var m in arr_js) {
					autoinits += "$.SOW.config.autoinit['"+m+"'] = "+arr_js[m]+";\n";
				}

			}

			return autoinits;

		},





		/*
		 * @Fonts : Copy
		 * Temporary autoinits to be used by build_js()
		 *
		 */
		fonts_copy: function(arr_fonts, dest) {

			if(arr_fonts.length < 1)
				return;

			Smarty.gulp.src(arr_fonts).pipe(Smarty.gulp.dest(Smarty.settings.dest_FONTS));

			// Also, copy to demo
			if(Smarty.helper.is_dir('./html_frontend') === true) {
				Smarty.gulp.src(arr_fonts).pipe(Smarty.gulp.dest('html_frontend/assets/fonts'));
			}

		},




		/*
		 * @Build Version
		 *
		 *
		 */
		build_version: function(output_name) {

			var _version_ = null;

			if(output_name == 'core') {
				_version_ = 'Core v';
				_version_ += (typeof Smarty.config.core.build_version !== 'undefined') ? Smarty.config.core.build_version : Smarty.package.version;
			}

			else if(output_name == 'vendor_bundle') {
				_version_ = 'Vendors v';
				_version_ += (typeof Smarty.config.vendors.build_version !== 'undefined') ? Smarty.config.vendors.build_version : Smarty.package.version;
			}

			else if(output_name == 'custom') {
				_version_ = (typeof Smarty.config.custom.build_version !== 'undefined') ? Smarty.config.custom.build_version : null;
				_version_ = (_version_ !== null) ? 'Custom v' + _version_ : null;
			}


			return _version_;
		},


		/*
		 * @init
		 */
		init:function(_){Smarty=_;}

	}

}