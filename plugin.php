<?php
/**
 * Plugin Name: Testimonial Carousel Block
 * Description: Gutenberg block to display a testimonial carousel using Swiper.js.
 * Version: 1.0.0
 * Author: Maaz Gora
 */

function testimonial_carousel_block_init() {
    register_block_type( __DIR__ );
}
add_action( 'init', 'testimonial_carousel_block_init' );


function tc_enqueue_swiper_assets() {
	if ( has_block( 'myplugin/testimonial-carousel' ) ) {
		wp_enqueue_style(
			'tc-swiper',
			'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
			array(),
			'11'
		);
		wp_enqueue_script(
			'tc-swiper',
			'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
			array(),
			'11',
			true
		);
		wp_enqueue_script(
			'tc-swiper-init',
			plugins_url( 'swiper-init.js', __FILE__ ),
			array( 'tc-swiper' ),
			'1.0',
			true
		);
	}
}
add_action( 'enqueue_block_assets', 'tc_enqueue_swiper_assets' );
