<?php
	/* 

		PHP ARRAY EXAMPLE 

		This is a PHP version for 
			dropdown_ajax.json

	*/

    $array = array(
        array(
            'label'         => 'Active',
            'url'           => '#',
            'active'        => true,
        ),
        array(
            'label'         => 'Disabled',
            'url'           => '#',
            'disabled'      => true,
        ),
        array(
            'label'         => 'Using Class',
            'url'           => '#',
            'class'         => 'js-ajax text-danger other-class', // you can use 'active' and 'disabled' classes instead of active|disabled params
        ),
        array(
            "label"         =>  "With Icon",
            "url"           => "#",
            "icon"          => "fi fi-check text-success",
        ),

        // Level 1
        array(
            'label'         => 'Item 1',
            'url'           => '#',

            // Level 2
            'childs'        => array(
                    array(
                        'label'         => 'Item 1.1',
                        'url'           => '#',
                        
                        // Level 3
                        'childs'    => array(
                            array(
                                'label'     => 'Item 2.1',
                                'url'        => '#',
                            ),
                            array(
                                'label'     => 'Item 2.2',
                                'url'        => '#',
                            ),
                            // ... more
                        )
                    ),
                    array(
                        'label'         => 'Item 1.2',
                        'url'           => '#',
                    ),
                    array(
                        'label'         => 'Item 1.3',
                        'url'           => '#',
                    ),
                    // ... more
            )
        ),

        array(
            'label'         => 'Item 2',
            'url'           => '#',
        ),
        array(
            'label'         => 'Item 3',
            'url'           => '#',
        ),
        array(
            'label'         => 'View Json File3',
            'target'        => '_blank',
            'class'         => 'font-weight-bold',
            'url'           => '_ajax/dropdown_ajax.json',
        ),
        // ... more
    );

	/*
		Print in JSON format
	*/
	echo json_encode($array);
	exit;

?>