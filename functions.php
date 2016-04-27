<?php

require( dirname(__FILE__) . '/dbdetails.php' );
define("FUNCTIONS_LOG_FILE", "./functions.log");


function isValidStateName(/*.string.*/ $state_name)
{
  $states_array = array("Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
"Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
"Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
"Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
"Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
"Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming");

  return in_array($state_name, $states_array);
}

function getTotalStateDonations(/*.string.*/ $state_name){
	$sum = 0;

  if (isValidStateName($state_name)) {
		$link = mysql_connect($host, $user, $pass);


		mysql_select_db($db_name);

		$sql = "SELECT * FROM `rtn_state_donations` WHERE `state` = '". $state_name. "'";
		$result = mysql_query($sql, $link);
		if (!$result) {
			error_log(date('[Y-m-d H:i e] '). "DB Error, could not query the database:". mysql_error($link). PHP_EOL, 3, FUNCTIONS_LOG_FILE);
			return $sum;
		}

		while ($row = mysql_fetch_assoc($result)) {
			$sum = $sum + $row['donation_amount'];
		}

		mysql_free_result($result);
  }
  return $sum;
}

function updateStateDonations($data){

  $link = mysql_connect($host, $user, $pass);

  mysql_select_db($db_name);

	if (is_array($data)) {
		$sql = mysql_query("INSERT INTO `rtn_state_donations` (state, donation_amount, createdtime) VALUES (
				'".$data['state']."' ,
				'".$data['donation_amount']."' ,
				'".date("Y-m-d H:i:s")."'
				)", $link);
		return mysql_insert_id($link);
	}
}

?>
