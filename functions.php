<?php

// Define the version as a constant so we can easily replace it throughout the theme
define('LESS_VERSION', 2.0);

/*-----------------------------------------------------------------------------------*/
/* Add Rss to Head
/*-----------------------------------------------------------------------------------*/
add_theme_support('automatic-feed-links');


/*-----------------------------------------------------------------------------------*/
/* register main menu
/*-----------------------------------------------------------------------------------*/
register_nav_menus(
    array(
        'primary' => __('Primary Menu', 'less'),
    )
);

/*-----------------------------------------------------------------------------------*/
/* Enque Styles and Scripts
/*-----------------------------------------------------------------------------------*/

function less_scripts()
{

    // theme styles
    wp_enqueue_style('less-style', get_template_directory_uri() . '/style.css', '10000', 'all');

    // theme js
    wp_enqueue_script('main.js', get_template_directory_uri() . '/dist/main.min.js', array('jquery'), LESS_VERSION, true);
}

add_action('wp_enqueue_scripts', 'less_scripts');
