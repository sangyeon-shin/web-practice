"use strict";
/**
	++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	Smarty Reborn [v3]

	Dorin Grigoras
	www.stepofweb.com

	Product Page
	https://wrapbootstrap.com/theme/smarty-website-admin-rtl-WB02DSN1B

	Smarty is built like a framework. 
	Everything is inside Smarty object.


	:: ES6 Babel ::
	Just rename this file: gulpfile.js to gulpfile.babel.js
	You'll see on build: `Requiring external module @babel/register`




	:: KNOWN ISSUES :: WATCH ONLY ::
		- On quick open css/js files (from sources), sometimes 
		the GULP will hardly crash. This is because of async built and 
		the .on('end') function which is not really "on end of built"! 
		So ./_gulp/build.js is trying to copy the file to html_frontend 
		but is not yet in the folder! The same for quick multiple 
		file save!

		Well, the real issue is not actually this!
		The real issue is building when a file is open!

		This will be fixed in a coming update! 
		Just do not open css or js files from src like you are on olimpics :)
	++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
**/




// smartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmarty
// smartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmarty
// smartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmarty
// smartysmartysmarty 														martysmartysmartysmarty
// smartysmartysmarty  						SMARTY 							martysmartysmartysmarty
// smartysmartysmarty 														martysmartysmartysmarty
// smartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmarty
// smartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmarty
// smartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmarty
const Smarty = { 

		/** **************************************************************** **/
			del 					: require('del'),
			fileExtension 			: require('file-extension'),
			fs 						: require("fs"),

			gulp 					: require('gulp'),
			debug 					: require('gulp-debug'),
			sizereport				: require('gulp-sizereport'),
			rename 					: require('gulp-rename'),
			stripDebug 				: require('gulp-strip-debug'),

			terser 					: require('gulp-terser'),
			autoprefixer 			: require('autoprefixer'),
			cssnano 				: require('cssnano'),
			sourcemaps				: require('gulp-sourcemaps'),
			postcss 				: require('gulp-postcss'),
			cleanCss 				: require('gulp-clean-css'),
			sass 					: require('gulp-sass'),
			concat 					: require('gulp-concat'),
			htmlreplace				: require('gulp-html-replace'),
			htmlmin					: require('gulp-htmlmin'),
			htmlCommRemove			: require('gulp-remove-html-comments'),
			imagemin 				: require('imagemin'),
			imageminPngquant 		: require('imagemin-pngquant'),
			imageminMozjpeg 		: require('imagemin-mozjpeg'),
			imageminGifsicle 		: require('imagemin-gifsicle'),
			imageminSvgo 			: require('imagemin-svgo'),
			imageminWebp 			: require('imagemin-webp'),
			merge2 					: require('merge2'),
			babel 					: require('gulp-babel'),
			plumber 				: require('gulp-plumber'),
			appendPrepend 			: require('gulp-append-prepend'),


			// used to set the correct file date (npm intentional bug: '26 Oct 1985'): 
			// https://github.com/npm/npm/issues/20439
			through2 		: require('through2'),	

			connect 		: require('gulp-connect'),
			opn 			: require('open'),

			notifier 		: require('node-notifier'),
			chalk 			: require('chalk'),

			// used by deploy
			rsync 			: require('gulp-rsync'),

			_______________ : function() { // disadvanteages of using an object
								this.sass.compiler 	= require('node-sass');
							},
		/** **************************************************************** **/


			/* configs */
			package 		: require('./package.json'), // use: Smarty.package.version
			settings 		: require('./gulp.config.settings.js')(),
			config 			: { /* populated by init */ },

			/* helper */
			helper 			: require('./_gulp/sow.helper.js')(),


			/* gulp tasks */
			clean 			: require('./_gulp/sow.clean.js')(),
			build 			: require('./_gulp/sow.build.js')(),
			create 			: require('./_gulp/sow.create.js')(),
			html 			: require('./_gulp/sow.html.js')(),
			utils 			: require('./_gulp/sow.utils.js')(),
			watch 			: require('./_gulp/sow.watch.js')(),
			deploy 			: require('./_gulp/sow.deploy.js')(),
			webserver 		: require('./_gulp/sow.webserver.js')(),

		/** **************************************************************** **/
			init 			: function() {


				// disadvanteages of using an object
				this._______________();



				/*

					Config Files
					From settings

				*/
				for (var cfgfile in Smarty.settings.config_list) {
					this.config[cfgfile] = require(Smarty.settings.config_list[cfgfile])();
				}



				/* 
					Now we can walk from one module to another and call any function.
					All syntaxes are starting with Smarty because is the main
					object. Nothing else changed. 	Smarty.gulp(...)
				*/
				for(var m in this) { 
					if(typeof this[m] === 'object' && typeof this[m].init === 'function' && m !== 'init') {
						this[m].init(this);
					}
					
				}

			},


	};	Smarty.init();
// smartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmarty
// smartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmarty
// smartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmarty
// smartysmartysmarty 														martysmartysmartysmarty
// smartysmartysmarty  						SMARTY 							martysmartysmartysmarty
// smartysmartysmarty 														martysmartysmartysmarty
// smartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmarty
// smartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmarty
// smartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmartysmarty







/*

	Task : Default

*/
Smarty.gulp.task('default', (cb) => {
	var timeStart = new Date().getTime();

	/* -- -- -- -- -- -- -- -- -- -- */
	// Clean first
	Smarty.clean.js([
			Smarty.settings.dest_JS
	]);
	Smarty.clean.css([
			Smarty.settings.dest_CSS
	]);
	Smarty.clean.fonts([
			Smarty.settings.dest_FONTS
	]);
	Smarty.helper.log('light', 'Clean done! Rebuilding...');


	for (var cfgfile in Smarty.config) {

		Smarty.build.js( 	/** JS **/
							Smarty.config[cfgfile], 		// config file
							Smarty.settings.dest_JS, 		// output path
							'show-status'
		);
		Smarty.build.scss( 	/** CSS **/
							Smarty.config[cfgfile],  		// config file
							Smarty.settings.dest_CSS 		// output
		);

	}

	var timeEnd = new Date().getTime();
	Smarty.helper.log('warning', 'Smarty Finised in '+(timeEnd - timeStart)+' ms! Now waiting for Gulp...');
	/* -- -- -- -- -- -- -- -- -- -- */

cb()});




/*

	Task : Watch

*/
Smarty.gulp.task('watch', (cb) => {
	

	const _projectName 	= Smarty.helper.argv(4);
	if(!_projectName) {

		var dest_JS 	= Smarty.settings.dest_JS;
		var dest_CSS 	= Smarty.settings.dest_CSS;
		Smarty.helper.log('warning', '-------------------------------------------------', 'mb-0');
		Smarty.helper.log('light', 'Notice: you can also watch a specific project:', 'mb-0');
		Smarty.helper.log('light', 'gulp watch --dest my_project', 'mt-0');
		Smarty.helper.log('warning', '-------------------------------------------------', 'mt-0');
	
	} else {

		var default_root = './'+_projectName;

		var dest_JS 	= './'+_projectName + '/' + Smarty.settings.webserver.output_js;
		var dest_CSS 	= './'+_projectName + '/' + Smarty.settings.webserver.output_css;

	}



	/* -- -- -- -- -- -- -- -- -- -- */
	for (var cfgfile in Smarty.config) {

		Smarty.watch.js( /* watch : js */
						Smarty.config[cfgfile].path_js+'**/*.js' || 'src/js/**/*.js',		// source
						dest_JS, 		// output
						Smarty.config[cfgfile]			// config

		);

		Smarty.watch.scss( /* watch : scss */
						'src/scss/**/*.scss', 			// source
						dest_CSS, 		// output
						Smarty.config[cfgfile] 			// config
		);

	}
	/* -- -- -- -- -- -- -- -- -- -- */

cb()});



/*

	Task : Clean

*/

Smarty.gulp.task('clean', (cb) => {

	/* -- -- -- -- -- -- -- -- -- -- */
	Smarty.clean.js([
			Smarty.settings.dest_JS
	]);
	Smarty.clean.css([
			Smarty.settings.dest_CSS
	]);
	Smarty.clean.fonts([
			Smarty.settings.dest_FONTS
	]);
	/* -- -- -- -- -- -- -- -- -- -- */

cb()});











/*

	Task : Create Project

*/
Smarty.gulp.task('create', (cb) => {
	

	/* -- -- -- -- -- -- -- -- -- -- */
	// Create
	const _projectName 	= Smarty.helper.argv(4);
	if(!_projectName) {
		
		Smarty.helper.log('warning', 'Usage:  gulp create --new project_name');
	
	} else {

		const prjCreated 	= Smarty.create.project(_projectName);
		if(prjCreated === true) {


			// Build
			for (var cfgfile in Smarty.config) {

				Smarty.build.js( 	/** JS **/
									Smarty.config[cfgfile], 				// config file
									_projectName + '/' + Smarty.settings.webserver.output_js, 	// output path
									'show-status'
				);
				Smarty.build.scss( 	/** CSS **/
									Smarty.config[cfgfile],  				// config file
									_projectName + '/' + Smarty.settings.webserver.output_css, 	// output
				);

			}

		}

	}
	/* -- -- -- -- -- -- -- -- -- -- */

cb()});




/*

	Task : Default Webserver

*/
Smarty.gulp.task('webserver', (cb) => {

	const _projectName 	= Smarty.helper.argv(4);
	if(!_projectName) {

		var default_root 	= Smarty.settings.webserver.webserver_root;
		Smarty.helper.log('warning', '-------------------------------------------------', 'mb-0');
		Smarty.helper.log('warning', 'Notice: you can also start your webserver overwriting the settings:', 'mb-0');
		Smarty.helper.log('warning', 'gulp webserver --root my_project', 'mt-0');
		Smarty.helper.log('warning', '-------------------------------------------------', 'mt-0');
	
	} else {

		var default_root = './'+_projectName;

	}



	/* -- -- -- -- -- -- -- -- -- -- */
	// Server Start
	Smarty.webserver.start(
			default_root, 
			Smarty.settings.webserver.webserver_ip, 
			Smarty.settings.webserver.webserver_port,

			[	// webserver reload
				'src/scss/**/*.scss',  								// source_scss_path
				'src/js/**/*.js' 									// source_js_path
			]
	);

	// Watch
	/* -- -- -- -- -- -- -- -- -- -- */
	for (var cfgfile in Smarty.config) {

		Smarty.watch.js( /* watch : js */
						'src/js/**/*.js', 										// source
						default_root + '/' + Smarty.settings.webserver.output_js, 	// output
						Smarty.config[cfgfile] 									// config

		);

		Smarty.watch.scss( /* watch : scss */
						'src/scss/**/*.scss', 									// source
						default_root + '/' + Smarty.settings.webserver.output_css, 	// output
						Smarty.config[cfgfile] 									// config
		);

	}
	/* -- -- -- -- -- -- -- -- -- -- */

	// Browser Open
	Smarty.helper.browserOpen(
					Smarty.settings.webserver.webserver_ip,
					Smarty.settings.webserver.webserver_port
	);
	/* -- -- -- -- -- -- -- -- -- -- */


cb()});













/*

	Task : Deploy

*/
Smarty.gulp.task('deploy:production', (cb) => {

	/* -- -- -- -- -- -- -- -- -- -- */
	const __r = Smarty.deploy.environment('production');
	if(__r !== null) return __r;
	/* -- -- -- -- -- -- -- -- -- -- */

cb()});

Smarty.gulp.task('deploy:staging', (cb) => {

	/* -- -- -- -- -- -- -- -- -- -- */
	const __r = Smarty.deploy.environment('staging');
	if(__r !== null) return __r;
	/* -- -- -- -- -- -- -- -- -- -- */

cb()});





/*

	Task : Minify Images

*/
Smarty.gulp.task('imgopt', (cb) => {
	

	/* -- -- -- -- -- -- -- -- -- -- */
	// Create
	const _imgSrc 	= Smarty.helper.argv(4);
	const _imgDest 	= Smarty.helper.argv(6);
	
	if(!_imgSrc || _imgSrc == '') {
		
		Smarty.helper.log('warning', 'Usage:  gulp imgopt --path path/to/img/folder');
	
	} else {

		Smarty.utils.imageminRecursive(_imgSrc, _imgDest);

	}
	/* -- -- -- -- -- -- -- -- -- -- */

cb()});








/*

	Task : Help

*/
Smarty.gulp.task(':help', (cb) => {


	Smarty.helper.log('warning', '-------------------------------------------------', 'mb-0');
	Smarty.helper.log('light', 'Welcome to Smarty Gulp Microframework!', 'm-0');
	Smarty.helper.log('light', 'Main gulp settings file: gulp.config.settings.js', 'm-0');
	Smarty.helper.log('light', '-----------', 'm-0');
	Smarty.helper.log('light', 'gulp  					= compile js/css. Output is usually in `dist/` but `html/` is set by default . See settings.', 'm-0');
	Smarty.helper.log('light', 'gulp watch  				= see settings for default destination of built js/css (variables: dest_JS/dest_CSS)', 'm-0');
	Smarty.helper.log('light', 'gulp watch --dest my_project 		= watch will compile changes to specified destination (useful for -real- local webserver)', 'm-0');
	Smarty.helper.log('light', 'gulp clean  				= delete builded files from `dist/` folder', 'm-0');
	Smarty.helper.log('light', '-----------', 'm-0');
	Smarty.helper.log('light', 'gulp create --new my_project   		= create a new project', 'm-0');
	Smarty.helper.log('light', 'gulp webserver  			= start a webserver, root used default from settings', 'm-0');
	Smarty.helper.log('light', 'gulp webserver --root my_project 	= start a webserver for your project + watch', 'm-0');
	Smarty.helper.log('light', '-----------', 'm-0');
	Smarty.helper.log('light', 'gulp imgopt --src path/images --dest ./dist/images 	= minify/optimize for speed all images from a given folder', 'm-0');
	Smarty.helper.log('light', '-----------', 'm-0');
	Smarty.helper.log('light', 'deploy:production 			= deploy to production (rsync plugin). See settings.', 'm-0');
	Smarty.helper.log('light', 'deploy:staging 				= deploy to staging - production replica for testing (rsync plugin). See settings.', 'm-0');
	Smarty.helper.log('warning', '-------------------------------------------------', 'mt-0');

cb()});


