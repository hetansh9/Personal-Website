$(window).on("load", function() {

    $(".loader .innner").fadeOut(500, function() {

            $(".loader").fadeOut(700);
    
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
           duration: 1500,
           easing: 'linear',
           queue: false 
        }
    });

});


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
        nav: true,
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
  
    

    var skillsOffset = $(".skills-section").offset().top;

    $(window).on('scroll',function() {
        //gets the page value or the distance from the top to the section
        if(window.pageYOffset > skillsOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                lineWidth: 4,
                size: 152,
                animate: {
                    duration: 1500,
                    enabled: true
                },
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        }
    });

    var statsOffset = $(".stats-section").offset().top;
    var countNumber = false;
    $(window).on('scroll',function() {
        if(!countNumber && window.pageYOffset > statsOffset - $(window).height() + 200) {
            $(".counter").each(function() {
                var element = $(this);
                var endValue = parseInt(element.text());
                element.countup(endValue);
            });
        
            countNumber = true;
        
        }
    });



    $("#filters a").on("click",function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");
        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
               duration: 1500,
               easing: 'linear',
               queue: false 
            }
        });
        return false;
    });

    $("#navigation li a").on("click", function(e) {
        e.preventDefault();
        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({scrollTop: targetPosition-50}, "slow" );


    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;
    $(window).on("scroll", stickNavigation);

    function stickNavigation() {
        var body = $("body");
        if ( $(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
    }
    else {
        body.css("padding-top", 0);
        body.removeClass("fixedNav");
    }

    }


});
