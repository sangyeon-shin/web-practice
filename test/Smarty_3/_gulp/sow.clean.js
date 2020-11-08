/**
 *
 *	[GULP] CLEAN
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
		all: function(dest_JS, dest_CSS) { 

			if(dest_JS)		this.js(dest_JS);
			if(dest_CSS)	this.css(dest_CSS);
			if(dest_FONTS)	this.fonts(dest_FONTS);

		},




		/*
		 * JS clean
		 */
		js: function(arr) {

			for (var i = 0; i < arr.length; i++) {

				if(arr[i] == '') {
					Smarty.helper.log(danger, '[clean:js] This is root folder! I`m not gonna delete myself!');
					continue;
				}

				// delete
				Smarty.del([arr[i] + '/**'], {force:true});
			}

		},




		/*
		 * CSS clean
		 */
		css: function(arr) {

			for (var i = 0; i < arr.length; i++) {

				if(arr[i] == '') {
					Smarty.helper.log(danger, '[clean:css] This is root folder! I`m not gonna delete myself!');
					continue;
				}

				// delete
				Smarty.del([arr[i] + '/**'], {force:true});
			}

		},




		/*
		 * Fonts clean
		 */
		fonts: function(arr) {

			for (var i = 0; i < arr.length; i++) {

				if(arr[i] == '') {
					Smarty.helper.log(danger, '[clean:fonts] This is root folder! I`m not gonna delete myself!');
					continue;
				}

				// delete fonsts, except: flaticon - part of Smarty core!
				Smarty.del([arr[i] + '/**', '!' + arr[i] + '/flaticon'], {force:true});

			}

		},



		/*
		 * @init
		 */
		init:function(_){Smarty=_;}

	}

}