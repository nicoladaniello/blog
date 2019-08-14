<?php
/**
 * Nexpress theme's functions and definitions
 *
 * @package NexpressTheme
 * @since NexpressTheme 1.0
 */
if ( ! function_exists( 'nexpresstheme_setup' ) ) {
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which runs
     * before the init hook. The init hook is too late for some features, such as indicating
     * support post thumbnails.
     */
    function nexpresstheme_setup() {
        /**
         * Enable support for post thumbnails and featured images.
         */
        add_theme_support( 'post-thumbnails' );

        /**
         * Add support for two custom navigation menus.
         */
        register_nav_menus(array(
            'NAVBAR_MENU'   => __( 'Navbar Menu', 'NexpressTheme' ),
            'FOOTER_MENU' => __('Footer Menu', 'NexpressTheme' )
        ));

        /**
         * Add responsive class for images in posts.
         */
        add_filter('the_content', 'add_responsive_class');

        /**
         * Add support for category featured images to wp-graphql
         */
        add_action('graphql_register_types', 'register_categories_images');
    }
} // myfirsttheme_setup
add_action( 'after_setup_theme', 'nexpresstheme_setup' );

/**
 * 
 */
function add_responsive_class($content){
    $content = mb_convert_encoding($content, 'HTML-ENTITIES', "UTF-8");
    $document = new DOMDocument();
    libxml_use_internal_errors(true);
    $document->loadHTML(utf8_decode($content));

    $imgs = $document->getElementsByTagName('img');
    foreach ($imgs as $img) {
        $img->setAttribute('class','img-fluid');
    }

    $html = $document->saveHTML();
    return $html;
}

/**
 * Resolver grabbed from:
 * https://github.com/wp-graphql/wp-graphql/blob/8853f65144dad9c7a831e734915d6c5bd9fc55ac/src/Type/Object/PostObject.php#L53
 */
function register_categories_images() {
    register_graphql_field( 'Category', 'featuredImage', [
       'type' => 'MediaItem',
       'description' => __( 'The category featured image', 'wp-graphql' ),
       'resolve' => function( $category, $args, $context, $info ) {
           $image_id = get_term_meta( $category->term_id, 'featured_image_id', true );
        //    var_dump($image_id);
            if ( empty( $image_id ) || ! absint( $image_id ) ) {
                return null;
            }
            // var_dump($image_id);
            // var_dump(wp_get_attachment_image($image_id));
            return DataSource::resolve_post_object( '118', $context );
       }
    ] );
};

?>