<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">
</script>
        <script type="text/javascript" src="script/script.js"></script>
        <title>My web page</title>
    </head>
    <body>
    	<div id="wrapper">
    		
    		<?php 
    			include('variables/variables.php'); 
    			include('header.php'); 
    		
    		?>
 
    		<?php
    			include('right_widget.php');
			?>
    		
    		<?php
    			include('content.php');
			?>
    		
    		<?php
    			include('footer.php');
			?>
    	</div>
        
    </body>
</html>
