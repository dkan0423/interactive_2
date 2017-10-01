$(document).ready(function(){
    
    var scrollPos;
    var xPos;
    var yPos;
    var winWidth;
    var winHeight;

    // add 200 .element 1
    for(var i = 0; i<500; i++){
        $('.container1').append('<div class="element"></div>');
        // $('.container2').append('<div class="element2"></div>');
        // $('.container3').append('<div class="element3"></div>');
    }

    for(var i = 0; i<2500; i++){
        $('.container2').append('<div class="element2"></div>');
        $('.container3').append('<div class="element3"></div>');
        $('.container4').append('<div class="element4"></div>');
    }   


    for(var i = 0; i<3000; i++){
        $('.container4').append('<div class="element4"></div>');
    }    


    $(window).scroll(function(){ 
        scrollPos = $('body').scrollTop();
        $('#scroll-pos').html("scroll: " + scrollPos);
    });


    $(document).mousemove(function(e){
        xPos = e.pageX;
        yPos = e.pageY;
        $('#mouse-pos').html('x-pos: ' + xPos + '<br />y-pos: ' + yPos);

        $('.element').css({
            'transform' : 'rotate(' + xPos + 'deg) scale(' + xPos/1000 + ')',
            'background-color' : 'rgb('+ yPos/1 + ', ' + xPos/3 + ', ' + (xPos*yPos)    /10 + ')',
        });

        $('.element2').css({
            'transform' : 'rotate(' + xPos/2 + 'deg) scale(' + xPos/1000 + ')',
            'background-color' : 'rgb('+ yPos/5 + ', ' + xPos/3 + ', ' + (xPos*yPos)    /10 + ')',
        });

         $('.element3').css({
            'transform' : 'rotate(' + xPos + 'deg) scale(' + xPos/1000 + ')',
            'background-color' : 'rgb('+ yPos/2 + ', ' + xPos/8 + ', ' + (xPos*yPos)    /10 + ')',
        });

          $('.element4').css({
            'transform' : 'rotate(' + xPos + 'deg) scale(' + xPos/1000 + ')',
            'background-color' : 'rgb('+ yPos/2 + ', ' + xPos/6 + ', ' + (xPos*yPos)    /10 + ')',
        });



    });

    $('body').click(function(){
        $('.element4').addClass('clicked');

    $('body').click(function(){
        $('.element3').addClass('clicked');
    });

    });

    

    $(window).resize(function() {
        winWidth = $(window).width();
        winHeight = $(window).height();
        $('#window-size').html('window width: ' + winWidth + '<br />window height: ' + winHeight);
    });


});