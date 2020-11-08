/**
 *
 *	[GULP] WATCH
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



	return  {


		/*
		 * all
		 */
		all: function(source_js, dest_js, source_scss, dest_scss) { 

			this.js(source_js, dest_js);
			this.scss(source_scss, dest_scss);

		},



		/*
		 * js
		 */
		js: function(source_js, dest, config_file) { // source_js: src/js/**/*.js

			Smarty.gulp.watch(source_js).on('change', function(path, stats) {
				Smarty.helper.log('light', '['+Smarty.helper.currTime('h:i:s')+'] Rebuilding JS '+config_file.output_name, 'm-0');

				var buildOnlySpecificModule,
					_vendor 	= path.split('.'),
					scriptName 	= _vendor[_vendor.length - 2];
		

				if(typeof config_file.list[scriptName] !== 'undefined') {
					if(typeof config_file.list[scriptName].bundle !== 'undefined' && config_file.list[scriptName].bundle === false) {
						Smarty.helper.log('light', '['+Smarty.helper.currTime('h:i:s')+'] Single script changes detected: '+scriptName + ' (+ main budle refresh)', 'm-0');
						buildOnlySpecificModule = scriptName;
					}
				}


				// DO NOT USE! BECAUSE OF SINGLE SCRIPT REBUILT - WILL BE DELETED ALL OTHERS!
				// 	Smarty.clean.js([dest]);



				Smarty.build.js( 	/** JS **/
									config_file, 						// config file
									dest, 								// output path
									false, 								// show status
									buildOnlySpecificModule, 			// build only single script. true = all
									true 								// show size report
				);

			});

		},



		/*
		 * scss
		 */
		scss: function(source_scss, dest, config_file) {  // source_scss: src/scss/**/*.scss

			Smarty.gulp.watch(source_scss).on('change', function(path, stats) {
				Smarty.helper.log('light', '['+Smarty.helper.currTime('h:i:s')+'] Rebuilding CSS '+config_file.output_name, 'm-0');

				Smarty.clean.css([
						dest
				]);

				Smarty.build.scss( 	/** CSS **/
									config_file,  		// config file
									dest 				// output path
				);

			});

		},



		/*
		 * @init
		 */
		init:function(_){Smarty=_;}

	}

}