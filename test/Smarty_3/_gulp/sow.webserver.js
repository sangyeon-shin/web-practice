/**
 *
 *	[SOW] Webserver
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
		 * @start
		 */
		start: function(root, ip, port, array) {

			if(!Smarty.connect) {
				Smarty.helper.log('danger', 'Gulp plugin not found: `gulp-connect`');
				return;
			}

			// gulp-webserver (security injection : replaced with gulp-connect)
			// return gulp.src(config['settings'].seed_path+'/')
			// 			.pipe(webserver({
			// 				host: '0.0.0.0',
			// 				port: 1982,
			// 				https: false,
			// 				directoryListing: false,
			// 				livereload: true,
			// 				fallback: 'index.html',
			// 				open: true
			// 			}));

			Smarty.connect.server({
					name: 		'[Smarty : Webserver]',
					host: 		ip,
					port: 		port,
					root: 		root+'/',
					https: 		false,
					livereload: true,
					fallback: 	root+'/index.html'
				}, function () { /*this.server.on('close', cb)*/ });

			// Reload
			this.reload(root, array[1], array[2]);
		},






		/*
		 * @reload
		 */
		reload: function(root, source_js, source_scss) {

			if(root)
				Smarty.gulp.watch(root+'/*').on('change', (filepath) => Smarty.gulp.src(filepath, { read: false }).pipe(Smarty.connect.reload()));

			if(source_scss)
				Smarty.gulp.watch(source_scss).on('change', (filepath) => Smarty.gulp.src(filepath, { read: false }).pipe(Smarty.connect.reload()));

			if(source_js)
				Smarty.gulp.watch(source_js).on('change', (filepath) => Smarty.gulp.src(filepath, { read: false }).pipe(Smarty.connect.reload()))

		},



		/*
		 * @init
		 */
		init:function(_){Smarty=_;}

	}

}