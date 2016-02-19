<?php 
define('WP_USE_THEMES', false);
require('./wp-blog-header.php');
require('./wp-content/themes/theme/header.php');
?>

      <div class="row">
        <div class="col-xs-12 text-center bloglabelbanner">
BLOG
        </div>
      </div>
<?php
// Get the last 3 posts.
global $post;
$args = array( 'posts_per_page' => 3 );
$myposts = get_posts( $args );

foreach( $myposts as $post ) :	setup_postdata($post); ?>
      <div class="row" style="padding: 0px">
        <div class="col-xs-12 blogmainsection" style="padding: 0px">
          <div class="col-xs-8 col-sm-4 blogentryimage" style="padding: 20px">

<?php
if ( get_the_post_thumbnail(get_the_ID()) != '' ) {

  echo '<a href="'; the_permalink(); echo '" class="thumbnail-wrapper">';
   the_post_thumbnail();
  echo '</a>';

} else {

 echo '<a href="'; the_permalink(); echo '" class="thumbnail-wrapper">';
 echo '<img src="';
 echo catch_that_image();
 echo '" alt="" />';
 echo '</a>';

}
?>
          </div>
          <div class="col-xs-12 col-sm-8 blogentry">
            <div class="blogentrydate"><?php the_time('j.M.y'); ?></div>
            <hr />
            <h1><?php the_title(); ?></h1>
            <p><?php the_excerpt(); ?><a href="<?php the_permalink(); ?>" class="readmore">READ MORE >></a></p>
            <img src="images/SocialMedia_Facebook_Blue.png" alt="Share on Facebook" title="Share on Facebook" />
            <img src="images/SocialMedia_Twitter_Blue.png" alt="Share on Twitter" title="Share on Twitter" />
            <img src="images/SocialMedia_Email_Blue.png" alt="Email this post" title="Email this post" />
          </div>
        </div>
      </div>
<?php endforeach; ?>
      <div class="row">
        <div class="col-xs-12 blogolderposts">
<?php posts_nav_link(); ?>
Did it work?? <?php echo test_function(); ?>
        </div>
      </div>

<?php 
require('./wp-content/themes/theme/footer.php');
?>
