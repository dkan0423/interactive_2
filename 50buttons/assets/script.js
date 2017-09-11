$(document).ready(function(){
	

	
    /*---------20---------*/
    var t= true;
    $("#t").click(function(){
        if (t==true) {
            
            $("#yes").html('NO');
            t=false;
        }
        else {
            $("#yes").html('YES');
            t=true;
        }    
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