
$(document).ready(function() {
	
	// $('#nav_buttons').click(function() {
   		// $('#content').slideDown();
   		// $('#content').css("display","block");
   // });
	
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
   // $('#expand').click(function() {
   		// $('#sbb_wrapper').slideToggle();
   // });
   
   // $('#nav_buttons').mouseenter(function() {
   		// $(this).animate( {
   			// font-size: '+=10px';
   		// });
   // });
   
   $('#expand').mouseenter(function() {
   		$('#sbb_wrapper').slideDown();
   });
   
    $('#sbb_wrapper').mouseleave(function() {
   		$('#sbb_wrapper').slideUp();
   });
   
});


