<?php
/**
 *
 *					[SOW] Step Of Web
 *
 *	@author 		Dorin Grigoras
 *					www.stepofweb.com
 *
 *	Build admin layouts
 * 	NEVER USE THIS FILE IN PRODUCTION!
 *	It's a temporary solution, will be ported to GULP!
 * 	
 *
 **/



/**

	Quick Links Extract using jQuery
	---------------------------------------

	<div id="menuLinks"></div>
	<script>

		jQuery('nav.nav-deep a').each(function() {

			if(jQuery(this).attr('href') != '#' && jQuery(this).attr('href') != '#!') {

				jQuery('#menuLinks').append("'" + jQuery(this).attr('href') + "',<br>");

			}
		});

	</script>

**/

$useAjaxNav 	= true;
$fontendPath 	= '../../html_frontend'; // no trailing slash
$boilerplateArr = array(
			'layout_1' 	=> '_partials/boilerplate.layout_1.html',
			'layout_2' 	=> '_partials/boilerplate.layout_2.html',
			'layout_3' 	=> '_partials/boilerplate.layout_3.html',
			'layout_4' 	=> '_partials/boilerplate.layout_4.html',
);



$menuArr = array(
	// 'index.html',
	'components-alerts.html',
	'components-accordions.html',
	'components-badges.html',
	'components-breadcrumbs.html',
	'components-buttons.html',
	'components-cards.html',
	'components-carousel.html',
	'components-collapse.html',
	'components-dropdowns.html',
	'components-forms.html',
	'components-icons.html',
	'components-lists.html',
	'components-media.html',
	'components-modals.html',
	'components-navs.html',
	'components-navigation.html',
	'components-pagination.html',
	'components-progress.html',
	'components-popover.html',
	'components-scrollspy.html',
	'components-spinners.html',
	'components-tabs.html',
	'components-tables.html',
	'components-timeline.html',
	'components-thumbnails.html',
	'components-tooltip.html',
	'components-typography.html',
	'util-text-backgrounds.html',
	'util-borders.html',
	'util-shadows.html',
	'util-font.html',
	'util-width-height.html',
	'util-padding-margin.html',
	'util-transition.html',
	'util-position.html',
	'util-visibility.html',
	'util-overlays.html',
	'util-scroll.html',
	'util-misc.html',
	'util-responsive.html',
	'util-rtl.html',
	'plugins-sow-search-suggest.html',
	'plugins-sow-ajax-navigation.html',
	'plugins-sow-ajax-forms.html',
	'plugins-sow-ajax-content.html',
	'plugins-sow-ajax-modal.html',
	'plugins-sow-ajax-confirm.html',
	'plugins-sow-ajax-select.html',
	'plugins-sow-form-validation.html',
	'plugins-sow-form-advanced.html',
	'plugins-sow-file-upload.html',
	'plugins-sow-checkall.html',
	'plugins-sow-toasts.html',
	'plugins-sow-gdpr.html',
	'plugins-sow-inline-search.html',
	'plugins-sow-dropdown.html',
	'plugins-sow-deep-navigation.html',
	'plugins-sow-btn-toggle.html',
	'plugins-sow-scroll-to.html',
	'plugins-sow-timer-autohide.html',
	'plugins-sow-timer-countdown.html',
	'plugins-sow-gfont.html',
	'plugins-sow-lazyload.html',
	'plugins-sow-count-animate.html',
	'plugins-sow-service-worker.html',
	'plugins-vendor-bootstrap-select.html',
	'plugins-vendor-flickity.html',
	'plugins-vendor-swiper.html',
	'plugins-vendor-jarallax.html',
	'plugins-vendor-sticky-kit.html',
	'plugins-vendor-fancybox.html',
	'plugins-vendor-photoswipe.html',
	'components-map.html',
	'plugins-vendor-slimscroll.html',
	'plugins-vendor-nestable.html',
	'plugins-vendor-datepicker.html',
	'plugins-vendor-rangepicker.html',
	'plugins-vendor-colorpicker.html',
	'plugins-vendor-chartjs.html',
	'plugins-vendor-flot.html',
	'plugins-vendor-easypie.html',
	'plugins-vendor-sparkline.html',
	'plugins-vendor-medium-editor.html',
	'plugins-vendor-markdown.html',
	'plugins-vendor-summernote.html',
	'plugins-vendor-datatable.html',
	'plugins-vendor-fullcalendar.html',
	'plugins-vendor-prismjs.html',
	'plugins-vendor-aos.html',
	'plugins-vendor-typed.html',
	'plugins-vendor-sortablejs.html',


	// --

	'404.html',
	'info-ajax-params.html',
	'forum-index.html',
	'forum-post.html',
	'forum-topic.html',
	'account-settings.html',
	'admin-staff.html',
	'message-inbox.html',
	'message-detail.html',
	'message-write.html',
	'message-reply.html',
	'page-list.html',
	'page-product-add.html',
);

	foreach($boilerplateArr as $layout=>$boilerplate) {

		// folder output
		$output = '../' . $layout;

		// Delete Dir & make it back!
		dirDelete($output, true);
		@usleep(20);
		@mkdir($output);

		// Read boilerplate
		$file = file_get_contents($boilerplate);




		// Build pages
		foreach($menuArr as $page) {

			$content 	= file_exists("_partials/content/{$page}") ? file_get_contents("_partials/content/{$page}") : '';
			$final_file = str_replace('<!-- builder:content -->', $content, $file);

			// get rid of &65279; char!
			$final_file = preg_replace("/\xEF\xBB\xBF/", "", $final_file);
			$final_file = str_replace('"../demo', '"../../demo', $final_file);
			$final_file = str_replace('"../assets', '"../../assets', $final_file);

			$final_file = str_replace("'../demo", "'../../demo", $final_file);
			$final_file = str_replace("'../assets", "'../../assets", $final_file);

			if($useAjaxNav === false)
				$final_file = str_replace(array(" js-ajax", 'js-ajax ', 'js-ajax'), '', $final_file);

			$file_dest = $output . '/' . $page;
			$fh = fopen($file_dest, 'w');
			fwrite($fh, $final_file); 
			fclose($fh);

			usleep(30);

		}





		// Create Dirs
		@mkdir($output . '/_ajax');
		@mkdir($output . '/assets');
		usleep(15);

		// Copy assets
		recurse_copy("_partials/_ajax", $output . '/_ajax');
		recurse_copy("{$fontendPath}/assets", $output . '/assets');
		copy("{$fontendPath}/favicon.ico", $output . '/favicon.ico');


		// Copy predefined, no process needed
		if(is_dir("_partials/layouts/{$layout}")) {
			$layoutArrFiles = dirListContent("_partials/layouts/{$layout}");

			foreach($layoutArrFiles as $layoutFile) {
				copy("_partials/layouts/{$layout}/{$layoutFile}", $output . "/{$layoutFile}");
			}
		}



		// Echo links
		echo '<a href="'.$output.'" target="layout">'.$output.'</a><br>';

	}













	/**

		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

									PLEASE, DO NOT PLAY DOWN HERE!

		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	**/
	function recurse_copy($src, $dst) { 
	    $dir = opendir($src); 
	    @mkdir($dst);

	    while(false !== ( $file = readdir($dir)) ) { 
	        if (( $file != '.' ) && ( $file != '..' )) { 
	            if ( is_dir($src . '/' . $file) ) { 
	                recurse_copy($src . '/' . $file,$dst . '/' . $file); 
	            } 
	            else { 
	                copy($src . '/' . $file,$dst . '/' . $file); 
	            } 
	        } 
	    } 

	    closedir($dir); 
	} 


	/**

		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

			DO NOT MESS WITH THIS FUNCTION!

			IS ABLE TO DELETE EVERYTHING!

		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

	**/
	function dirDelete($dir, $secure=false) {
		$dir = trim($dir);


		if($dir == '' || !is_dir($dir))
			return false;


		// Safety!
		// ----------------------------------------
		if($secure !== true) return;
		$e = explode('/', $dir);
		for($i=0; $i<20; $i++) {
			if("layout_{$i}" === $e[1]) {
				$continue = true; break;
			}
		}	if(!isset($continue)) return;
		// ----------------------------------------


		$it 	= new RecursiveDirectoryIterator($dir, 	RecursiveDirectoryIterator::SKIP_DOTS);
		$files 	= new RecursiveIteratorIterator($it, 	RecursiveIteratorIterator::CHILD_FIRST);


		foreach($files as $file) {

			if ($file->isDir()) {

				// @directory
				rmdir($file->getRealPath());
			
			} else {

				// @file
				unlink($file->getRealPath());

			}

		}

		//@main dir
		rmdir($dir);

		return true;
	}






	/**
	 *
	 * 	@Dir:List
	 * 
	 *
	**/
	function dirListContent($dir) {

		if ($openDir = opendir($dir)) {

			$array_files = array();

			while (false !== ($file = readdir($openDir))) {
				
				if(isset($file) && $file != '.' && $file != '..' && $file != 'Thumbs.db' && $file != 'Desktop.ini')
					array_push($array_files, $file);
				
			}

			closedir($openDir);
		}

		return $array_files;
	}
