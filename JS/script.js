// const mouseCircle = document.querySelector(".mouse-circle");
// const mouseDot = document.querySelector(".mouse-dot");

// let mouseCircleBoolean = true;

// const circleFunction = (x,y) =>{
//     mouseCircleBoolean && (mouseCircle.style.cssText = `top: ${y}px; left:${x}px; opacity:1`);
//     //console.log("checking if the loader is being loaded or not" + mouseCircleBoolean);
//     mouseDot.style.cssText = `top: ${y}px; left:${x}px; opacity:1`;


// };

// document.body.addEventListener("mousemove", (e) => {
//     let x = e.clientX;
//     let y = e.clientY;

//     circleFunction(x,y);

// });
// document.body.addEventListener("mouseleave", (e) => {
//     mouseCircle.style.opacity = "0";
//     mouseDot.style.opacity = "0";

// });



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

    // var animateHeading  = $(".about-section .heading").offset().top;
    // $(window).on('scroll',function() {
    //     if(!countNumber && window.pageYOffset > statsOffset - $(window).height() + 200) {
    //         const element = document.querySelector('.about-section .heading');
    //         element.classList.add('animate__animated', 'animate__zoomInDown');

    //         const infoElement = document.querySelector('.alert-message');
    //         infoElement.classList.add('animate__animated', 'animate_bounce');

        
    //     }
    // });

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

    $(window).on("scroll",function() {
        //gets the page value or the distance from the top to the section
        if(window.pageYOffset > skillsOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#4fc0c2',
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
            // const skillsElement  = document.querySelector('.skills-section .container h1');
            // skillsElement.classList.add('animate_animated', 'fadeInUp');

        }
    });

    var statsOffset = $(".stats-section").offset().top;
    var countNumber = false;
    $(window).on("scroll",function() {
        if(!countNumber && window.pageYOffset > statsOffset - $(window).height() + 200) {
            $(".stats-section .counter").each(function() {
                var element = $(this);
                var endValue = parseInt(element.text());
                element.countup(endValue);
            });

        
            countNumber = true;

            // const statsElement  = document.querySelector('.stats-section .container h1');
            // statsElement.classList.add('animate_animated', 'fadeInUp');
        
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

    var aboutmeOffset = $(".about-section").offset().top;

    var skillsOffset = $(".skills-section .container h1").offset().top

    // $(window).on("scroll", function(){

    //     if(window.pageYOffset > aboutmeOffset - $(window).height() + 200) {
    //         const aboutElement  = document.querySelector('.about-section .container');
    //         aboutElement.classList.add('animate_animated', 'fadeInUp');
    //     }


    // });


});

 // timeline 
"use strict";

function qs(selector, all = false) {
  return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const sections = qs('.line-section', true);
const timeline = qs('.timeline');
const line = qs('.line');
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * .8;

function scrollHandler(e) {
  const {
    scrollY
  } = window;
  up = scrollY < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

  const dist = targetY - timelineRect.top;
  //console.log(dist);

  if (down && !full) {
    set = Math.max(set, dist);
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    line.style.bottom = `-50px`;
  }

  sections.forEach(item => {
    // console.log(item);
    const rect = item.getBoundingClientRect(); //     console.log(rect);

    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add('show-me');
    }
  }); // console.log(up, down);

  prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler);





