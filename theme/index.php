<?php get_header(); ?>
      <div class="row">
        <div class="col-xs-12 text-center bloglabelbanner">
BLOG
        </div>
      </div>
<?php 
if ( have_posts() ) {
	while ( have_posts() ) {
		the_post();  ?>
      <div class="row" style="padding: 0px">
        <div class="col-xs-12 blogmainsection" style="padding: 0px">
          <div class="col-xs-8 col-sm-4 blogentryimage" style="padding: 20px">
            <img src="images/BlogPost1Picture.png" />
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
<?php 
	} // end while
?>
      <div class="row">
        <div class="col-xs-12 blogolderposts">

<?php previous_posts_link('<< OLDER POSTS') ?>
<?php next_posts_link('&nbsp;&nbsp; NEWER POSTS >>') ?>

        </div>
      </div>

<?php 
} // end if
else { ?>

      <div class="row" style="padding: 0px">
        <div class="col-xs-12 blogmainsection" style="padding: 0px">
No posts, sorry
				</div>
			</div>
<?php 
} ?>

<?php get_footer(); ?>
