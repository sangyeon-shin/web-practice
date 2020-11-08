<?php

	if(isset($_GET['action']) && $_GET['action'] == 'populate_container') {

		// Can be any html content - we use echo to just print a simple text!
		if((int) $_GET['value'] == 1) {
			echo '#1  content from a php ajax request example!';
		}

		else if((int) $_GET['value'] == 2) {
			echo '#2  content from a php ajax request example!';
		}



		// stop, is ajax request - only the content is needed!
		die;

	}