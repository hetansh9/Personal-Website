document.addEventListener("DOMContentLoaded", function(){
    
    // superslides function
    $('#slides').superslides({
        animation: 'fade',
        play: 4000
    });

    // typed function for the homepage
    var typed = new Typed(".typed" ,{
        strings: ["Computer Science Student.", "Aspiring Web Developer."],
        typeSpeed: 70,
        loop: true,
        startdelay: 1000,
        showCursor: false

        
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });
    
    $('.chart').easyPieChart({
       easing: 'easeInOut',
       barColor: '#fff',
       trackColor: false,
       lineWidth: 4,
       size: 152,
       animate: {
           duration: 4500,
           enabled: true
       },
       onStep: function(from, to, percent) {
           $(this.el).find('.percent').text(Math.round(percent));
       }
    });

});
