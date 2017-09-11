$(document).ready(function(){
	   
 var j= 0;
    $("#j").click(function(){
        j++;
        $("#button-47").html(j);
        
    });
    
    /*---------11---------*/
    var k= true;
    $("#blue").click(function(){
        $( "#red" ).animate({opacity:"0"}, 600);
        $( "#blue" ).animate({opacity:"0"}, 600);
        $( "#notMatrix" ).delay( 600 ).animate({opacity:".3"}, 1000);
        
        
    });
    
    $("#red").click(function(){
        $( "#red" ).animate({opacity:"0"}, 600);
        $( "#blue" ).animate({opacity:"0"}, 600);
        $( "#matrix" ).delay( 600 ).animate({opacity:".3"}, 1000);
        
        
    });
    
	// $('#button-4').click(function() {
	// 	$('#button-3').animate({
	// 		opacity: 0.4,
	// 		marginLeft: '0.6in',
	// 		fontSize: '24px',
	// 		borderWidth: '10px'
	// 		background-color: 'yellow'; 
	// 	}, 1000 );
	// });

	// $('#button-3').mouseover(function() {
	// 	$(this).animate({
	// 		marginLeft: '1in'
	// 	}, 1000 );

});