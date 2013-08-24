
$(document).ready(function() {
	
	$('div').fadeIn(3000);
	
    $('#header').mouseenter(function() {
    	$('#title').fadeTo('slow', 1);
    });
    
    $('#header').mouseleave(function() {
    	$('#title').hide();
    });
    
});