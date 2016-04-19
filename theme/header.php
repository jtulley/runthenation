<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title><?php wp_title('|',1,'right'); ?> <?php bloginfo('name'); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link href="/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
		<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
    <link href="<?php echo site_url(); ?>/wp-content/themes/theme/style.css" rel="stylesheet" type="text/css" />

    <script src="/js/navrow.js"></script>
    <script src="/js/dummy.js"></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-76383081-1', 'auto');
      ga('send', 'pageview');

    </script>


    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
		<?php wp_head(); ?>

  </head>
  <body onresize="handleResize()">
  <div class="container-fluid">
    <div class="topnav">
      <div class="row fullnavrow">
        <div class="col-xs-5 col-sm-3 navlogo">
          <a href="<?php echo site_url(); ?>"><img src="/images/RunTheNationRedWhiteBlueLogo_text_side_1491x662.png" alt="Run The Nation"></a>
        </div>
        <div class="col-xs-7 visible-xs hamburgergotorow"> 
<a href="" onClick="toggleNavItemsDisplay(); return false;">
<svg height="25px" version="1.1" viewBox="0 0 25 25" width="25px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="TabBar-Icons" stroke="none" stroke-width="1"><g fill="#000000" id="Hamburger-Round"><path d="M0,4 C0,2.8954305 0.889763236,2 2.00359486,2 L22.9964051,2 C24.10296,2 25,2.88772964 25,4 C25,5.1045695 24.1102368,6 22.9964051,6 L2.00359486,6 C0.897039974,6 0,5.11227036 0,4 L0,4 Z M0,12 C0,10.8954305 0.889763236,10 2.00359486,10 L22.9964051,10 C24.10296,10 25,10.8877296 25,12 C25,13.1045695 24.1102368,14 22.9964051,14 L2.00359486,14 C0.897039974,14 0,13.1122704 0,12 L0,12 Z M0,20 C0,18.8954305 0.889763236,18 2.00359486,18 L22.9964051,18 C24.10296,18 25,18.8877296 25,20 C25,21.1045695 24.1102368,22 22.9964051,22 L2.00359486,22 C0.897039974,22 0,21.1122704 0,20 L0,20 Z" id="Hamburger"/></g></g></svg>&nbsp;&nbsp;GO TO PAGE...</a>
        </div>
        <div class="col-xs-12 col-sm-9 navitemsrow" id="navitemsrow">
            <span class="navitem visible-xs"><a href="<?php echo site_url(); ?>">HOME</a></span> 
            <span class="navitem"><a href="<?php echo site_url(); ?>/lisas-story/">LISA'S STORY</a></span>
            <span class="navitem"><a href="<?php echo site_url(); ?>/the-cause/">THE CAUSE</a></span>
            <span class="navitem" style="padding:0px 0px 0px 10px;"><div class="dropdown"><span>THE RUN<span class="dropdownarrow"> &#9660;</span></span>
             <div class="dropdown-content">
              <p><a href="<?php echo site_url(); ?>/crew/">CREW</a></p>
              <p><a href="<?php echo site_url(); ?>/course/">COURSE</a></p>
              <!--<p><a href="<?php echo site_url(); ?>/theblog/?page_type=video">LIVE&nbsp;FEED</a></p>-->
              </div>
              </div>
            </span>
            <span class="navitem"><a href="<?php echo site_url(); ?>/sponsorship/</a></span>
            <span class="navitem"><a href="<?php echo site_url(); ?>/theblog/">BLOG</a></span>
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
            <span class="navitem"><a href="http://bit.ly/HelpRTN" target="_new">VOLUNTEER</a></span>
            <span class="navitem" style="padding:0px 0px 0px 10px;"><div class="dropdown"><button type="button" class="btn btn-primary center-block hidden-xs"">DONATE<span class="dropdownarrow"> &#9660;</span></button>
             <div class="dropdown-content">
              <p><a href="https://app.mobilecause.com/form/35bo0A" target="_new">DONATE TO THE TYLER ROBINSON FOUNDATION</a></p>
              <p><a href="<?php echo site_url(); ?>/donate/">DONATE TO THE RUN</a></p>
              </div>
              </div>
            </span>
    </div>
      </div>
    </div>
    <div class="maincontent">
