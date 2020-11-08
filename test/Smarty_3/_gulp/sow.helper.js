/**
 *
 *	[GULP] SYS : HELPERS
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
		 * @log/console print
		 */
		log: function(_chalk, str, nomargin) {


									if(nomargin != 'm-0' && nomargin != 'mt-0') process.stdout.write(" \n");
			switch(_chalk) { 		// -- 		
				case 'primary': 	console.log(Smarty.chalk.blue.bold(str)); 				break;
				case 'danger': 		console.log(Smarty.chalk.white.bgRed.bold(str)); 		break;
				case 'warning': 	console.log(Smarty.chalk.keyword('orange')(str)); 		break;
				case 'success': 	console.log(Smarty.chalk.keyword('green')(str)); 		break;
				case 'info': 		console.log(Smarty.chalk.white.bgMagenta.bold(str)); 	break;
				case 'light': 		console.log(Smarty.chalk.keyword('gray')(str)); 		break;
				case 'green': 		console.log(Smarty.chalk.green(str)); 					break;
			} 						if(nomargin != 'm-0' && nomargin != 'mb-0') process.stdout.write(" \n");
									// --

		},




		/*
		 * @notify
		 */
		notify: function(title, message, wait) {

			return Smarty.notifier.notify({
				title: 		title 		|| 'Smarty Reborn',
				message: 	message 	|| 'Smarty need your attention!',
				sound: 		Smarty.settings.gulp_plugins.notify.err_sound || false, 	// Only Notification Center or Windows Toasters
				wait: 		Smarty.settings.gulp_plugins.notify.wait || false 	// Wait with callback, until user action is taken against notification
			}, function(err, response) {});

		},





		/*
		 * @browserOpen
		 */
		browserOpen: function(ip, port) {

			if(!Smarty.opn) {
				Smarty.helper.log('danger', 'Gulp plugin not found: `opn`');
				return;
			}

			return Smarty.opn('http://'+ip+':' + port || 80);

		},




		/*
		 * @argv get
		 */
		argv: function(i) { // 2 is the first argument after "gulp" command
			return (i) ? process.argv[i] : null;
		},



		/*
		 * @argv list
		 */
		argvList: function() {

			return process.argv;

		},



		/*
		 * @environment
		 */
		environment: function() {

			if(process.env.NODE_ENV === undefined || process.env.NODE_ENV == null || process.env.NODE_ENV == 'development') {
				return 'development';
			} else {
				return 'production';
			}

		},



		/*
		 * @jsonAsString
		 */
		jsonAsString: function(json) {

			// https://stackoverflow.com/questions/11233498/json-stringify-without-quotes-on-properties
			return json.replace(/\"([^"]+)\":/g,"$1:").replace(/\uFFFF/g,"\\\"");

		},



		/*
		 * @removeLastSlash
		 */
		removeLastChar: function(str, whatIsLastChar) {
			if(!whatIsLastChar) var whatIsLastChar = '/';

			if(str.slice(-1) == whatIsLastChar) {
				var len 	= str.length;
				var str 	= str.slice(0, len - 1);
			}

			return str;

		},



		/*
		 * @removeFirstChar
		 */
		removeFirstChar: function(str, whatIsFirstChar) {
			if(!whatIsFirstChar) var whatIsFirstChar = '/';

			if(str.slice(0, 1) == whatIsLastChar) {
				var len 	= str.length;
				var str 	= str.slice(1, len);
			}

			return str;

		},


		/*
		 * @currTime
		 */
		currTime: function(format) {

			var date = new Date();

			var hour = date.getHours();
				hour = (hour < 10 ? "0" : "") + hour;

			var min  = date.getMinutes();
				min = (min < 10 ? "0" : "") + min;

			var sec  = date.getSeconds();
				sec = (sec < 10 ? "0" : "") + sec;

			var year = date.getFullYear();

			var month = date.getMonth() + 1;
				month = (month < 10 ? "0" : "") + month;

			var day  = date.getDate();
				day = (day < 10 ? "0" : "") + day;

			if(!format)
				var _r = year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec;
			 else {
			 	var _r = format.replace('Y', year).replace('m', month).replace('d', day).replace('h', hour).replace('i', min).replace('s', sec);
			 }

			return _r;
		},



		/*
		 * @is_file
		 */
		is_file: function(filePath) {
			return this.is_dir(filePath);
		},



		/*
		 * @is_dir
		 */
		is_dir: function(dirPath) {

			var exists = false;

			try {

			    Smarty.fs.statSync(dirPath);
			    var exists = true;

			} catch (err) {

				var exists = false;

			}

			return exists;

		},


		/*
		 * @init
		 */
		init:function(_){Smarty=_;}

	}

}