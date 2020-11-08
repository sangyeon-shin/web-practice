/**
 *
 *	[GULP] HTML : REPLACE
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
		 * @build_frontend
		 * Replace in HTML files
		 * https://www.npmjs.com/package/gulp-html-replace
		 *
		 */
		build_frontend: function(html_dest) { 

			/*

				1. read file contents (header, footer, etc)
				2. add to replace!

			*/
			var replace_these = Smarty.settings.gulp_plugins.build_html.replace_these;
			for(var key in Smarty.settings.gulp_plugins.build_html.inject_these.frontend) {
				replace_these[key] = Smarty.fs.readFileSync(Smarty.settings.gulp_plugins.build_html.inject_these.frontend[key], "utf8");
			};

			var __ = Smarty.gulp.src(Smarty.settings.gulp_plugins.build_html.html_files.src_frontend)

				__ = __.pipe(Smarty.htmlreplace( /**/ replace_these /**/ , {
							keepUnassigned: 	Smarty.settings.gulp_plugins.build_html.keepUnassigned 	|| false,
							keepBlockTags: 		Smarty.settings.gulp_plugins.build_html.keepBlockTags 	|| false,
							resolvePaths: 		Smarty.settings.gulp_plugins.build_html.resolvePaths 	|| false,
						}
					));


				// https://www.npmjs.com/package/gulp-html-minifier
				if(Smarty.settings.gulp_plugins.build_html.html_minify.minify_enable === true) {
					__ = __.pipe(Smarty.htmlmin({ collapseWhitespace: Smarty.settings.gulp_plugins.build_html.html_minify.collapseWhitespace }));

					// https://www.npmjs.com/package/gulp-remove-html-comments
					if(Smarty.settings.gulp_plugins.build_html.html_minify.removeHtmlComments === true)
						__ = __.pipe(Smarty.htmlCommRemove());

				}

			return __ = __.pipe(Smarty.gulp.dest(html_dest)).on('end', function() {});


		},



		/*
		 * @build_admin
		 * Replace in HTML files
		 * https://www.npmjs.com/package/gulp-html-replace
		 *
		 */
		build_admin: function(html_dest) { 

			/*

				1. read file contents (header, footer, etc)
				2. add to replace!

			*/
			var replace_these = Smarty.settings.gulp_plugins.build_html.replace_these;
			for(var key in Smarty.settings.gulp_plugins.build_html.inject_these.admin) {
				replace_these[key] = Smarty.fs.readFileSync(Smarty.settings.gulp_plugins.build_html.inject_these.admin[key], "utf8");
			};

			var __ = Smarty.gulp.src(Smarty.settings.gulp_plugins.build_html.html_files.src_admin)

				__ = __.pipe(Smarty.htmlreplace( /**/ replace_these /**/ , {
							keepUnassigned: 	Smarty.settings.gulp_plugins.build_html.keepUnassigned 	|| false,
							keepBlockTags: 		Smarty.settings.gulp_plugins.build_html.keepBlockTags 	|| false,
							resolvePaths: 		Smarty.settings.gulp_plugins.build_html.resolvePaths 	|| false,
						}
					));


				// https://www.npmjs.com/package/gulp-html-minifier
				if(Smarty.settings.gulp_plugins.build_html.html_minify.minify_enable === true) {
					__ = __.pipe(Smarty.htmlmin({ collapseWhitespace: Smarty.settings.gulp_plugins.build_html.html_minify.collapseWhitespace }));

					// https://www.npmjs.com/package/gulp-remove-html-comments
					if(Smarty.settings.gulp_plugins.build_html.html_minify.removeHtmlComments === true)
						__ = __.pipe(Smarty.htmlCommRemove());

				}

			return __ = __.pipe(Smarty.gulp.dest(html_dest)).on('end', function() {});

		},



		/*
		 * @init
		 */
		init:function(_){Smarty=_;}

	}

}