module.exports = function(smarty) {

	return {

		/*

			'development'	= 	default, no drastic action applied
			'production'	= 	uses gulp-strip-debug, don't leave any logging in production code. 
								console.* and alert* are replaced with void 0

		*/
		envinronment 					: 'development',


		/*

			Smarty global debug, various info shown in browser console.
			(if envinronment is set to 'development')

		*/
		console_debug 					: true,
		// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --



		// Output of compiled files -only-
		// Usually: `dist/` folder 	(by default are also copied to html_frontend/assets/)
		dest_JS 						: 'dist/assets/js',
		dest_CSS 						: 'dist/assets/css',
		dest_FONTS 						: 'dist/assets/fonts',

		// false 	= build both: minified & unminified
		build_minified_only 			: false,
		build_sourcemaps	 			: false,
		// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --




		// Quick Webserver
		webserver 						: {
			webserver_root 		: './html_frontend', /* seed webserver is overwriting this, so this might be a real project path */
			webserver_ip 		: '0.0.0.0',
			webserver_port 		: 6969,

			// Used on project create and watch (to rebuild)
			output_js 			: 'assets/js',
			output_css 			: 'assets/css',
		},	// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --




		// Direct deploy using rsync (ssh)
		deploy 							: {

			// production credentials
			production 	: {
				hostname 		: 	'',								// hostname / ip
				username 		: 	'',								// ssh username
				port 			: 	22,								// ssh port
				destination 	: 	'public-html/',					// path where uploaded files should go
			},

			// staging is identical replica of production, for testing!
			staging 	: {
				hostname 		: 	'',								// hostname / ip
				username 		: 	'',								// ssh username
				port 			: 	22,								// ssh port
				destination 	: 	'',								// path where uploaded files go
			},

			paths 		: ['my_project'], 							// paths to deploy (or entire project)
			exclude 	: ['my_project/secret.txt'], 				// exclude files

			// WINDOWS USERS ONLY!
			// https://www.npmjs.com/package/gulp-rsync
			// chmod 		: "ugo=rwX",

		}, 	// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --




		/**

			Here are the configs for -ALL- Smarty javascripts.
			1. core 		= Smarty core, including SOW plugins
			2. vendors 		= Third party plugins
			3. custom 		= your own, if needed!

		**/
		config_list 					: {
			core 		: './gulp.config__core.js',
			vendors 	: './gulp.config__vendors.js',
			// custom 		: './gulp.config__custom.js',
		}, 	// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --







		/**
			gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins
			gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins
			gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins
									
									GULP PLUGINS : AVAILABLE SETTINGS
			
			gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins
			gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins
			gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins-gulp.plugins
		**/
		gulp_plugins : {

			/**

				OPTIMIZE/MINIFY IMAGES: 
				jpg/gif/png/svg/webp

				Only used for gulp :imgmin --path to/img/folder
				Will optimize all images in the folder (including deep folders)

				https://github.com/imagemin

			**/
			img_optimizer: 	{

									// output folder for minified images! empty = another folder inside the same folder
									output_folder: './dist/optimized_images/', 	 	

									// Webp not suppoerd by Safari! Disabled!
									// webp: { quality: 70 },

									gif: 	{ optimizationLevel: 3, interlaced: false }, /* 1 - 3 */
									png: 	{ quality: 	[0.6, 0.8] },
									jpg: 	{ quality: 	72, smooth: 1 }, 	/* 1 - 100 */
									svg: 	{ plugins: [

													{removeDimensions: 		true}, 	// !important
													{cleanupIDs: 			false}, // !important
													{removeViewBox: 		false}, // !important
													{removeUselessDefs: 	false}, // !important
													{removeMetadata: 		true},
													{removeTitle: 			true},
													{removeDesc: 			true},
													{removeHiddenElems: 	true},
													{removeEmptyContainers: true},
													{removeXMLNS: 			true},
													{removeHiddenElems: 	true}

											]},

			},




			// ++ ++ ++ ++ ++ ++ ++ ++
			// ES6 is supported just by renaming gulpfile.js to gulpgile.babel.js
			// No need to use Babel plugin! Only if you know it and need it!
			babel_enable: 	false, 
			babel: 				{
									presets: [ ['@babel/preset-env', { modules: false }] ],
									plugins: [
										['@babel/plugin-proposal-object-rest-spread'],
										['@babel/plugin-proposal-class-properties'],
										['@babel/plugin-proposal-decorators'],
									]
								},
			// ++ ++ ++ ++ ++ ++ ++ ++




			// true = beep on js/scss error
			notify: 			{
									err_sound	: true,
									wait 		: false,
								},

		// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


		} // end gulp_plugins
	};

}