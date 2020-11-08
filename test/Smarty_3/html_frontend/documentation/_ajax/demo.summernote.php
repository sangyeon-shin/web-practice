<?php 
	/** **********************************************************
 	 *
 	 *	Ajax : file upload example
 	 *	documentation/plugins-vendor-summernote.html
 	 *
	 *	@author 		Dorin Grigoras
	 *					www.stepofweb.com
 	 *
	********************************************************** **/



	if(isset($_FILES) && !empty($_FILES)) {

		// 1. upload image to the server
		// 2. return -ONLY- full image URL

		// Demo purpose only - should be the uploaded image!
		echo '../demo.files/images/unsplash/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg';
	}

	die;
		
?>