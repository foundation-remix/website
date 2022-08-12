<?php

date_default_timezone_set('America/Los_Angeles');

require("vendor/autoload.php");

$fw = Base::instance();

// Serve the index.html on all routes.
$fw->route(["GET /", "GET /*"], function($fw) {
    echo file_get_contents("/var/www/html/dist/index.html");
});

$fw->run();

?>