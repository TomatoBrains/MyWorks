<?php $nn = 1;
$args = array(
    'cat'    => 3,
    'post_type' => 'post',
    'posts_per_page' => -1,
);
query_posts($args);

if (have_posts()) : while (have_posts()) : the_post();
        $post_id = get_the_ID();

        if ($nn > 6) {
            $dn = "display:none;";
        } else {
            $dn = "";
        }

?>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 vid-item" style="<?php echo $dn; ?>" data-order="<?php the_field('filters'); ?>">
            <div class="papers__content sort dep-tag">
                <div class="paper__item">
                    <div class="paper__item-img">
                        <img src="<?php the_post_thumbnail_url(); ?>" alt="статья">
                        <div class="paper__item-like">
                            <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/paper/like.png" alt="лайк">
                            <?php the_field('like'); ?>
                        </div>
                    </div>
                    <div class="paper__item-descr">
                        <p><?php the_title(); ?></p>
                        <div class="paper__item-descr--link">
                            <a href="<?php the_permalink(); ?>" class="linkColorRoze ">ПОДРОБНЕЕ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<?php ++$nn;
    endwhile;
endif;
wp_reset_query(); ?>