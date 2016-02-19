<?php get_header(); ?>
			<div class="row">
        <div class="col-xs-12 text-center bloglabelbanner">
BLOG
        </div>
      </div>
      <div class="row" style="padding: 0px">
        <div class="col-xs-12 blogmainsection" style="padding: 10px">
<?php the_content(); ?>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 blogolderposts">
<a href=""><< PREVIOUS POST</a><a href=""><< NEXT POST</a>
        </div>
      </div>
<?php get_footer(); ?>
