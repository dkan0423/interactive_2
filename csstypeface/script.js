$(document).ready(function(){
	
	var scrollPos;
	var xPos;
	var yPos;
	var winWidth;
	var winHeight;



	// check when the mouse moves
	$(document).mousemove(function(e){
		
		// update mouse x and y position
		xPos = e.pageX;
		yPos = e.pageY;
		$('#mouse-pos').html('x-pos: ' + xPos + '<br />y-pos: ' + yPos);

		// change div with the id "element"s CSS when you move your mouse 
		$('#element').css({
			'top' : yPos + 'px',
			'left' : xPos + 'px'
		});
	});


	var pattern = '<div class="dot-holder">';
	pattern += '<div class="dot"></div><div class="dot2"></div><div class="dot2"></div><div class="dot"></div>';
	pattern += '<div class="dot2"></div><div class="dot"></div><div class="dot"></div><div class="dot2"></div>';
	pattern += '<div class="dot"></div><div class="dot2"></div><div class="dot2"></div><div class="dot"></div>';
	pattern += '<div class="dot"></div><div class="dot"></div><div class="dot2"></div><div class="dot2"></div>';
	pattern += '<div class="dot2"></div><div class="dot2"></div><div class="dot"></div><div class="dot"></div>';
	pattern += '<div class="dot"></div><div class="dot"></div><div class="dot2"></div><div class="dot2"></div>';
	// pattern += '<div class="dot2"></div><div class="dot"></div><div class="dot"></div></div><div class="dot2"></div>';
	// pattern += '</div><div class="dot"></div></div><div class="dot2"></div></div><div class="dot2"></div></div><div class="dot"></div>';
	// pattern += '<div class="dot2"></div><div class="dot"></div><div class="dot"></div></div><div class="dot2"></div></div><div class="dot2"></div>';
	// pattern += '</div><div class="dot2"></div></div><div class="dot2"></div></div><div class="dot"></div></div><div class="dot"></div>';
 //    pattern += '</div><div class="dot"></div></div><div class="dot"></div></div><div class="dot2"></div></div><div class="dot2"></div>';
    
    for(var i = 0; i<1000; i++){
        $('#pattern').append(pattern);

    }   

    var n = 1;

    $('body').click(function(){

    	if(n == 1) {
    		$('body').addClass('hide-pattern');
    	} else if (n == 2){
    		$('body').removeClass();
    		$('body').toggleClass('show-name');
    	}
    	n++;
    	if(n > 2){
    		n = 1;
    	}

    });

 

    $('#hide-pattern').click(function(){
    	$('body').toggleClass('hide-pattern');
    });



});