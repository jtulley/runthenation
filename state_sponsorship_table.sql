CREATE TABLE IF NOT EXISTS `rtn_state_donations` (
 `id` int(6) NOT NULL AUTO_INCREMENT,
 `state` varchar(40) NOT NULL,
 `donation_amount` decimal(7,2) NOT NULL,
 `createdtime` datetime NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `rtn_state_donation_rollup` (
 `id` int(6) NOT NULL AUTO_INCREMENT,
 `state` varchar(40) NOT NULL,
 `total_donations` decimal(7,2) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
