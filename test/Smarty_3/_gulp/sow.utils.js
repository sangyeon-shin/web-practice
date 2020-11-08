/**
 *
 *	[GULP] UTILS
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
		 * @imageminRecursive
		 * Recursive dirs
		 *
		 *
		 */
		imageminRecursive: function(imgSrc, imgDest) {

			var path 		= require('path');
			var imgSrc 		= Smarty.helper.removeLastChar(imgSrc, '/');

			var imgDest 	= imgDest || Smarty.settings.gulp_plugins.img_optimizer.output_folder;
			var imgDest 	= Smarty.helper.removeLastChar(imgDest, '/');

			Smarty.fs.readdir(imgSrc, function(err, folders) {

				for(var i=0; i < folders.length; i++){

					var folder_path = path.join(imgSrc, folders[i]);

					// Is dir
					if(Smarty.fs.lstatSync(folder_path).isDirectory()) {

						// Recursive : deep folders
						var newDest = folder_path.replace(imgSrc, imgDest);
							Smarty.utils.imageminRecursive(folder_path, newDest);

					}

				}

				// Process
				Smarty.utils.processImagemin(imgSrc, imgDest);

			});
			
		},




		/*
		 * @processImagemin
		 * Image Optimizer
		 * Minify/Optimize Images
		 *
		 */
		processImagemin: function(imgSrc, imgDest) { 

			// Remove the end slash if provided!
			var imgSrc 	= Smarty.helper.removeLastChar(imgSrc, '/');
			var imgDest = imgDest || Smarty.settings.gulp_plugins.img_optimizer.output_folder;

			// Plugins:
			// https://github.com/imagemin
			return Smarty.imagemin([imgSrc + '/**/*.{jpeg,jpg,png,svg,gif,webp}'], {
						destination: imgDest || imgSrc + '/_optimized/', // Safe!
						plugins: [

							// Webp (not supported by Safari (2019))
							// Smarty.imageminWebp(Smarty.settings.gulp_plugins.img_optimizer.webp),

							// Gif
							Smarty.imageminGifsicle(Smarty.settings.gulp_plugins.img_optimizer.gif.quality), 	

							// Png
							Smarty.imageminPngquant(Smarty.settings.gulp_plugins.img_optimizer.png),

							// Jpg
							Smarty.imageminMozjpeg(Smarty.settings.gulp_plugins.img_optimizer.jpg),

							// SVG : https://github.com/svg/svgo#what-it-can-do
							Smarty.imageminSvgo(Smarty.settings.gulp_plugins.img_optimizer.svg),

						]
			}).then(files => {

				console.log(
						  Smarty.chalk.keyword('orange')('Optimized: ' + files.length + ' files: ') 
						+ Smarty.chalk.green(imgSrc + ' => ' + imgDest)
				);
				
				//=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]

			});

		},




		/*
		 * @init
		 */
		init:function(_){Smarty=_;}

	}

}