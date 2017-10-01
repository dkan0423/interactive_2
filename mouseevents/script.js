$(document).ready(function(){

	for(var i = 0; i<200; i++){
	    $("#one").append("<div></div>");
	    $("#two").append("<div></div>");
	}

	for(var i = 0; i<4000; i++){
	    $("#thr").append("<div></div>");
	}
	for(var i = 0; i<200; i++){
	    //$("#for").append("<div>&amp;</div>");
	    //$("#for").append("<div></div>");
	}

	$(document).scroll(function(){
	    var scrollTop = $(document).scrollTop();

	   var one = 30 - 0.0008*scrollTop;
	    var two = Math.floor(scrollTop*0.012);
	    var thr = Math.sin(scrollTop*0.002);
	    var fur = Math.floor(scrollTop*0.05);

	   $("#one").children().css("height", one+"pc" );
	    $("#two").children().css("-webkit-transform","rotate("+two+"deg)");
	    $("#thr").children().css("margin",Math.floor(40+50*thr)+"px");
	    $("#for").children().css("-webkit-transform","rotate("+fur+"deg)");
	});

});

