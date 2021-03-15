<?php
function zirrat_scripts() {
	$rand = rand(1, 999999999);
    wp_enqueue_style( 'irbehrim-style', get_stylesheet_uri(), array(), $rand );
}
add_action( 'wp_enqueue_scripts', 'zirrat_scripts' );