
$(document).ready(function() {
	
	// $('div').fadeIn(3000);
	
    // $('#header').mouseenter(function() {
    	// $('#title').fadeTo('slow', 1);
    // });
//     
    // $('#header').mouseleave(function() {
    	// $('#title').hide();
    // });
    
    // animateWidget();
    
    // $('#nav_buttons').mouseenter(function() {
   		// $(this).animate( {
   			// height: '+=10px'
   			// width: '+=10px'
   			// // margin-left: '-=10px'
   		// }); 	
    // }	
   // );
//    
   // $('#nav_buttons').mouseleave(function() {
   		// $(this).animate( {
   			// height: '-=10px'
   			// width: '-=10px'
   			// // margin-left: '+=10px'
   		// }); 	
    // }	
   // );
   
});

function animateWidget() {
	$('#right_widget').animate({height: '+=10px'}, 100, animateWidget);
}
