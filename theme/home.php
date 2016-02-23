<?php get_header(); ?>

<?php
if ( get_query_var( 'paged' ) ) { $paged = get_query_var( 'paged' ); }
elseif ( get_query_var( 'page' ) ) { $paged = get_query_var( 'page' ); }
else { $paged = 1; }

if (get_query_var( 'page_type' ) == 'video') {
	$tax_query = array(
		array(
		'taxonomy' => 'post_format',
		'field'    => 'slug',
		'terms'    => array( 'post-format-video'),
		'operator' => 'IN',
		)
	 );
   $page_title="LIVE FEED";
} else {
	$tax_query = array(
		array(
		'taxonomy' => 'post_format',
		'field'    => 'slug',
		'terms'    => array( 'post-format-video'),
		'operator' => 'NOT IN',
		)
	 );
   $page_title="BLOG";
}
?>
      <div class="row">
        <div class="col-xs-12 text-center bloglabelbanner">
<?php echo $page_title; ?>
        </div>
      </div>

<?php

$formats = new WP_Query( array(
	'posts_per_page' => 3,
	'paged' => $paged,
	'tax_query' => $tax_query
));


if( $formats->have_posts() ) : while( $formats->have_posts() ) : $formats->the_post(); 
?>
      <div class="row" style="padding: 0px">
        <div class="col-xs-12 blogmainsection" style="padding: 0px">
          <div class="col-xs-8 col-sm-4 blogentryimage" style="padding: 20px">

<?php
if ( get_the_post_thumbnail(get_the_ID()) != '' ):
  echo '<a href="'; the_permalink(); echo '" class="thumbnail-wrapper">';
   the_post_thumbnail();
  echo '</a>';
else:
 echo '<a href="'; the_permalink(); echo '" class="thumbnail-wrapper">';
 echo '<img src="';
 echo catch_that_image();
 echo '" alt="" />';
 echo '</a>';
endif;
?>
          </div>
          <div class="col-xs-12 col-sm-8 blogentry">
            <div class="blogentrydate"><?php the_time('j.M.y'); ?></div>
            <hr />
            <h1><?php the_title(); ?></h1>
            <p><?php the_excerpt(); ?><a href="<?php the_permalink(); ?>" class="readmore">READ MORE >></a></p>
<!-- need to figure these out:
            <img src="images/SocialMedia_Facebook_Blue.png" alt="Share on Facebook" title="Share on Facebook" />
            <img src="images/SocialMedia_Twitter_Blue.png" alt="Share on Twitter" title="Share on Twitter" />
            <img src="images/SocialMedia_Email_Blue.png" alt="Email this post" title="Email this post" />
-->
          </div>
        </div>
      </div>

<?php endwhile;  ?>

      <div class="row">
        <div class="col-xs-12 blogolderposts">
<?php next_posts_link('<< OLDER POSTS') ?>
<?php previous_posts_link('&nbsp;&nbsp;NEWER POSTS >>') ?>

        </div>
      </div>

<?php else:  ?>
      <div class="row" style="padding: 0px">
        <div class="col-xs-12 blogmainsection" style="padding: 0px">
No posts, sorry
				</div>
			</div>
<?php endif;  ?>

<?php get_footer(); ?>
