<?php get_header() ?>

<?php 
    while(have_posts()) {
        the_post();
        the_title();
    }
?>

<?php get_footer() ?>