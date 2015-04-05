/* $(document).ready(function() {
  
  
    
   $(function() {
    var $arrow = $("#down"),flag = 1;
    var timer;
    bounce();
    function bounce() {
        timer = setInterval(function() {
                   if(flag ==1) {
                        flag = -1;
                    } else {
                        flag = 1;
                    }
                    $arrow.animate({ top: "+="+(flag*8)}, 350)
                },300);
    }               

    $arrow.hover(function() {       
        clearInterval(timer);
    }, function() {
        bounce();
    });
}); 
    
    
    
});

*/





   $("#down").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1500);
}); 



var hashTagActive = "";
    $(".scroll").click(function (event) {
        if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 1750, 'swing');
            hashTagActive = this.hash;
        }
    });


jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
/*
$(function() {  

   
    jQuery.scrollSpeed(100, 800);

});
*/


