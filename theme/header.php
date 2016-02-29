<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title><?php wp_title('|',1,'right'); ?> <?php bloginfo('name'); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link href="/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
		<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
    <link href="<?php echo site_url(); ?>/wp-content/themes/theme/style.css" rel="stylesheet" type="text/css" />

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
		<?php wp_head(); ?>

  </head>
  <body>
  <div class="container-fluid">
    <div class="topnav">
      <div class="row fullnavrow">
        <div class="col-xs-12 col-sm-3 navlogo">
          <a href="<?php echo site_url(); ?>"><img src="/images/RunTheNationLogo.png" alt="Run The Nation" style="padding: 0.5rem;"></a>
        </div>
        <div class="col-xs-12 col-sm-9 navitemsrow"> 
          <span class="navitem"><a href="<?php echo site_url(); ?>/lisas-story/">LISA'S STORY</a></span>
          <span class="navitem"><a href="<?php echo site_url(); ?>/the-cause/">THE CAUSE</a></span>
          <span class="navitem" style="padding:0px 0px 0px 10px;"><div class="dropdown"><span>THE RUN<span class="dropdownarrow"> &#9660;</span></span>
           <div class="dropdown-content">
            <p><a href="<?php echo site_url(); ?>/crew/">CREW</a></p>
            <p><a href="<?php echo site_url(); ?>/course/">COURSE</a></p>
            <p><a href="<?php echo site_url(); ?>/blog/?page_type=video">LIVE&nbsp;FEED</a></p>
            </div>
            </div>
          </span>
          <span class="navitem"><a href="<?php echo site_url(); ?>/sponsorship/</a></span>
          <span class="navitem"><a href="<?php echo site_url(); ?>/blog/">BLOG</a></span>
          <span class="navitem"><a href="<?php echo site_url(); ?>/sponsorship/">SPONSORS</a></span>
          <span class="navitem" style="padding:0px 0px 0px 10px;"><div class="dropdown"><span>PRESS<span class="dropdownarrow"> &#9660;</span></span>
           <div class="dropdown-content">
            <p><a href="<?php echo site_url(); ?>/press/">LISA IN THE PRESS</a></p>
            <p><a href="<?php echo site_url(); ?>/press-inquiries/">PRESS INQUIRIES</a></p>
            <p><a href="<?php echo site_url(); ?>/media-center">MEDIA CENTER</a></p>
            </div>
            </div>
          </span>
          <span class="navitem"><a href="<?php echo site_url(); ?>/contact-us/">CONTACT US</a></span>
          <div class="topnavdonate"><a href="<?php echo site_url(); ?>/donate/"><button type="button" class="btn btn-primary center-block">DONATE</button></a></div>
        </div>
      </div>
    </div>
    <div class="maincontent">
