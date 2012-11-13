<?php 
	/*
	* When using the wrapper system this must be called at the top of every page.
	* It basically just says to "start output"
	*/
	ob_start(); 
?>	

<link rel="stylesheet" type="text/css" href="wrapper/css/welcome.css"/>
    
<div class="facebook spaced button" id="getStarted">
    GET STARTED!
</div>

<div class="white spaced" id="whatIsThis">
    What is this??<br/>
    This is a bunch of stuff. This is a bunch of stuff. This is a bunch of stuff. This is a bunch of stuff. This is a bunch of stuff. This is a bunch of stuff. This is a bunch of stuff. This is a bunch of stuff. This is a bunch of stuff. This is a bunch of stuff. This is a bunch of stuff. This is a bunch of stuff. This is a bunch of stuff. This is a bunch of stuff. 
</div>

<div class="white spaced welcomeCard" id="welcomeCard1">
    Create and share flashcards with fellow students!
</div>

<div class="white spaced welcomeCard" id="welcomeCard2">
    Crash course studying that's relevant to your classes!
</div>
    
<?php
	/*
	* When using the wrapper system this must be called at the top of every page.
	* It basically just sets a custom title for the page and then pulls in the wrapper
	*/
    $sTitle = "Browse";
    
    require_once("wrapper/wrapper.php");
?>