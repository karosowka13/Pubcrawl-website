<?php

$files = array(
	'recaptcha.js' => 'https://www.google.com/recaptcha/api.js',
	'platform.js' => 'https://apps.elfsight.com/p/platform.js',
  'jquery.jsss' => 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
);

if(isset($files[$_GET['file']])) {
	if ($files[$_GET['file']] == 'recaptcha.js' || $files[$_GET['file']] == 'platform.js' || $files[$_GET['file']] == 'jquery.js'){
		header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + ((60 * 60) * 48))); // 2 days for GA
	} else {
		header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + (60 * 60)*12)); // Default set to 12H
	}

	echo file_get_contents($files[$_GET['file']]);
}



?>