/**
 *
 *	[GULP] SEED
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
		 * Main clean
		 */
		project: function(project_path) { 

			if (Smarty.fs.existsSync(project_path)) {
			
				Smarty.helper.log('danger', project_path+' already exist!')
				return false;
			
			} else {

				Smarty.gulp.src(['src/_starter/**/*', '!src/_starter/readme.txt']).pipe(Smarty.gulp.dest(project_path));
				return true;

			}

		},



		/*
		 * @init
		 */
		init:function(_){Smarty=_;}

	}

}