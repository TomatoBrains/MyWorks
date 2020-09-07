<?php

add_action('wp_enqueue_scripts', 'HK_styles');
function HK_styles()
{
    wp_enqueue_style('main-style', get_stylesheet_uri());

    // wp_enqueue_style( 'slick', get_template_directory_uri() . '/js/libs/slick/slick.css' );
    // wp_enqueue_style( 'slick-theme', get_template_directory_uri() . '/js/libs/slick/slick-theme.css' );
    // wp_enqueue_style( 'fancySelect', get_template_directory_uri() . '/assets/css/fancySelect.css' );
    // wp_enqueue_style( 'fancybox', get_template_directory_uri() . '/js/libs/fancybox/jquery.fancybox.min.css' );
    // wp_enqueue_style( 'animate', get_template_directory_uri() . '/js/libs/wow/animate.css' );
    wp_enqueue_style('style', get_template_directory_uri() . '/css/app.css?v1.8');
    // wp_enqueue_style( 'new', get_template_directory_uri() . '/assets/css/new.css?v1.8' );

    // wp_enqueue_style( 'my-theme-ie', get_stylesheet_directory_uri() . "/assets/css/ie.css", array( 'main-style' ) );
    //     wp_style_add_data( 'my-theme-ie', 'conditional', 'IE' );
}



add_action('wp_enqueue_scripts', 'HK_scripts');
function HK_scripts()
{
    //wp_deregister_script( 'jquery' );
    //wp_register_script( 'jquery', get_template_directory_uri() . '/js/jquery-3.3.1.min.js');
    //wp_enqueue_script( 'jquery' );


    // wp_enqueue_script('lazyload', get_template_directory_uri() . '/assets/js/lazyload.min.js', ['jquery'], null, true);
    // wp_enqueue_script('slick', get_template_directory_uri() . '/js/libs/slick/slick.min.js', ['jquery'], null, true);

    // wp_enqueue_script('fancybox', get_template_directory_uri() . '/js/libs/fancybox/jquery.fancybox.min.js', ['jquery'], null, true);

    // wp_enqueue_script('fancySelect', get_template_directory_uri() . '/js/libs/fancySelect.js', ['jquery'], null, true);

    // wp_enqueue_script('maskedinput', get_template_directory_uri() . '/js/libs/jquery.maskedinput.js', ['jquery'], null, true);

    // wp_enqueue_script('wow', get_template_directory_uri() . '/js/libs/wow/wow.min.js', ['jquery'], null, true);
    // wp_enqueue_script('maps', 'https://api-maps.yandex.ru/2.1/?lang=ru_RU', ['jquery'], null, true);

    // wp_enqueue_script('load', get_template_directory_uri() . '/loadmore.js', ['jquery'], null, true);


    // wp_enqueue_script('quiz', get_template_directory_uri() . '/js/quiz.js?v=1.2', ['jquery'], null, true);
    // wp_enqueue_script('sliders', get_template_directory_uri() . '/js/sliders.js?v=1.2', ['jquery'], null, true);
    // wp_enqueue_script('selects', get_template_directory_uri() . '/js/selects.js?v=1.2', ['jquery'], null, true);
    wp_enqueue_script('app', get_template_directory_uri() . '/js/app.js?v=1.2', ['jquery'], null, true);
    wp_enqueue_script('jsjs', get_template_directory_uri() . '/js/js.js?v=1.2', ['jquery'], null, true);
}

add_action('after_setup_theme', 'theme_register_nav_menu');
function theme_register_nav_menu()
{
    register_nav_menu('top', 'Главное меню');
    register_nav_menu('top-mob', 'Для футера');
    register_nav_menu('cat-mob', 'Каталог');
    add_theme_support('post-thumbnails', array('post'));
}

function cc_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');


add_shortcode('st', 'st_func');
function st_func($atts, $content)
{
    $val = "<span> $content </span>";
    return $val;
}


add_theme_support('custom-logo');
add_theme_support('post-thumbnails');






add_action('wp_ajax_formModal', 'formModal');
add_action('wp_ajax_nopriv_formModal', 'formModal');

function formModal()
{
    include 'assets/mailer/send.php';
}

// удаляет H2 из шаблона пагинации
add_filter('navigation_markup_template', 'my_navigation_template', 10, 2);
function my_navigation_template($template, $class)
{

    return '
    <nav class="navigation %1$s" role="navigation">
        <div class="nav-links">%3$s</div>
    </nav>    
    ';
}

// выводим пагинацию
the_posts_pagination(array(
    'end_size' => 2,
));




add_filter('excerpt_length', function () {
    return 50;
});
add_filter('excerpt_more', function ($more) {
    return ' ...';
});






function custom_rating_image_extension()
{
    return 'png';
}
add_filter('wp_postratings_image_extension', 'custom_rating_image_extension');
