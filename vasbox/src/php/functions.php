<?php

function vasbox_setup() {
	load_theme_textdomain('vasbox', get_template_directory_uri() . '/languages');

	add_theme_support('title_tag');
	add_theme_support('post-thumbnails');
	add_theme_support('custom-logo');
	add_theme_support('custom-background');

	register_nav_menus(array(
		'header' => __('Header', 'vasbox'),
		'social' => __('Social links', 'vasbox')
	));
}
add_action('after_setup_theme', 'vasbox_setup');

function vasbox_scripts()
{
	wp_enqueue_script('jquery');
	wp_enqueue_script('index', get_template_directory_uri() . '/js/index.js');

	wp_enqueue_style('style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'vasbox_scripts');
