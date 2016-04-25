<?php get_header(); ?>
<?php wp_link_pages(); ?>


			<div class="row">
        <div class="col-xs-12 text-center bloglabelbanner">
BLOG
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 blogolderposts">
<?php previous_post_link() ?>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php next_post_link() ?>
        </div>
      </div>
      <div class="row" style="padding: 0px">
        <div class="col-xs-12 blogmainsection" style="padding: 10px">
<?php /* The loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>
 
<?php the_content(); ?>
			<?php endwhile; ?>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 blogolderposts">
<?php previous_post_link() ?>&nbsp;&nbsp;<?php next_post_link() ?>
        </div>
      </div>
<?php get_footer(); ?>
