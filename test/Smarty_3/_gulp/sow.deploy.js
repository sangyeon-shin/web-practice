/**
 *
 *	[GULP] DEPLOY
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
		 * environment
		 */
		environment: function(environment) { 


	 	const paths 		= Smarty.settings.deploy.paths;
		const rsyncConf 	= {
				root 				: '',
				hostname 			: '',
				username 			: '',
				port 				: '',
				destination 		: '',

				progress 			: true,
				incremental 		: true,
				relative 			: true,
				emptyDirectories 	: true,
				recursive 			: true,
				clean 				: true,
				exclude 			: [],
			};
			rsyncConf.exclude = Smarty.settings.deploy.exclude;

			if(Smarty.settings.deploy.chmod) // windows only
				rsyncConf.chmod = Smarty.settings.deploy.chmod;

			// do something
			if(environment === 'production') {
				rsyncConf.hostname 		= Smarty.settings.deploy.production.hostname;
				rsyncConf.username 		= Smarty.settings.deploy.production.username;
				rsyncConf.port 			= Smarty.settings.deploy.production.port;
				rsyncConf.destination 	= Smarty.settings.deploy.production.destination;

				if(rsyncConf.hostname == '') {
					Smarty.helper.log('danger', 'Please, edit gulp.config.settings.js first!');
					return null;
				}

				Smarty.helper.log('warning', '-- -- -- -- -- -- -- --', 'mb-0');
				Smarty.helper.log('warning', '+ Deploy: Production! +', 'm-0');
				Smarty.helper.log('warning', '-- -- -- -- -- -- -- --', 'mt-0');
			}

			else if(environment === 'staging') {
				rsyncConf.hostname 		= Smarty.settings.deploy.staging.hostname;
				rsyncConf.username 		= Smarty.settings.deploy.staging.username;
				rsyncConf.port 			= Smarty.settings.deploy.staging.port;
				rsyncConf.destination 	= Smarty.settings.deploy.staging.destination;

				if(rsyncConf.destination == '') {
					Smarty.helper.log('danger', 'Please, edit gulp.config.settings.js first!');
					return null;
				}

				Smarty.helper.log('warning', '-- -- -- -- -- -- -- --', 'mb-0');
				Smarty.helper.log('warning', '++ Deploy: Staging! ++', 'm-0');
				Smarty.helper.log('warning', '-- -- -- -- -- -- -- --', 'mt-0');
			}


			// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
			return Smarty.gulp.src(paths).pipe(Smarty.rsync(rsyncConf));

		},




		/*
		 * @init
		 */
		init:function(_){Smarty=_;}

	}

}