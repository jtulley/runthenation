<?php
/**
Plugin name: RunTheNationUtils
Author: Jeff Tulley
Version: 0.1
*/

function catch_that_image() {
  global $post, $posts;
  $first_img = '';
  ob_start();
  ob_end_clean();
  $output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
  $first_img = $matches[1][0];

  if(empty($first_img)) {
    $first_img = "/path/to/default.png";
  }
  return $first_img;
}

