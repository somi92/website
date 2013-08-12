// $(document).ready(function() {
	// // $('#header').slideDown('slow');
	// $("#header").fadeTo('fast', 1);
// });
$(document).ready(function() {
	
	$('div').fadeIn(2500);
	
    $('#header').mouseenter(function() {
    	$('#title').fadeTo('slow', 1);
    });
    
    $('#header').mouseleave(function() {
    	$('#title').hide();
    });
    
});