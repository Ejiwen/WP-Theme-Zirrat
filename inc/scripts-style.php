<?php
function zirrat_scripts() {
	$rand = rand(1, 999999999);
    wp_enqueue_script("greeting", get_template_directory_uri() . './dist/bundle.js');
    wp_enqueue_style( 'zirrat-style', get_template_directory_uri() . '/dist/bundle.css', array(), $rand );
}
add_action( 'wp_enqueue_scripts', 'zirrat_scripts' );