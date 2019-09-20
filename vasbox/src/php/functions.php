<?php

function vasbox_setup() {
	load_theme_textdomain('vasbox', get_template_directory_uri() . '/languages');

	add_theme_support('title_tag');
	add_theme_support('post-thumbnails');
	add_theme_support('custom-logo', array(
		'height' => 90,
		'width' => 90,
		'header-text' => array( 'site-title', 'site-description' )
	));
	add_theme_support('custom-background', array(
		'default-image' => get_template_directory_uri() . '/images/background.jpg',
		'default-preset' => 'fill',
		'default-position-x' => 'center',
		'default-position-y' => 'center',
		'default-size' => 'cover'
	));
	add_theme_support('custom-header', array(
		'default-image' => get_template_directory_uri() . '/images/header.jpg',
		'width' => 900,
		'height' => 500,
		'flex-width' => true,
		'flex-height' => true,
		'uploads' => true,
		'video' => true
	));
	add_theme_support('editor-font-sizes', array(
		array(
			'name' => 'Small',
			'shortName' => 'S',
			'size' => 16,
			'slug' => 'small'
		),
		array(
			'name' => 'Normal',
			'shortName' => 'M',
			'size' => 22,
			'slug' => 'normal',
		),
		array(
			'name' => 'Large',
			'shortName' => 'L',
			'size' => 30,
			'slug' => 'large'
		),
		array(
			'name' => 'Huge',
			'shortName' => 'XL',
			'size' => 38,
			'slug' => 'huge'
		)
	));

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

function vasbox_customize(WP_Customize_Manager $wp_customize)
{

}
add_action('customize_register', 'vasbox_customize');
