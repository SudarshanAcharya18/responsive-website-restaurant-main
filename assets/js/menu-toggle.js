/*********************************** back to top bar******************************************************************/
jQuery(document).ready(function($) {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 1200,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 250,
        }, scroll_top_duration);
    });

});
/***********************************Horizantal Scroll bar******************************************************************/
// JavaScript Document
$(document).ready(function() {
    $(".menu-mobile").click(function() {
        $(this).toggleClass('cross');
        /*if($("customeNav").is(":visible")){
        	$(".customeNav").toggleClass('open');
        	
        	}	*/
    });
    $(".slideFormBtn").click(function() {
        $('.slidetoggleForm').toggleClass('open');
    });
});

/***********************************Horizantal Scroll bar******************************************************************/
(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        /*  var owl = $("#event-carousel");
     owl.owlCarousel({
       items: 3,
	  // nav: true,
	  // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	   itemsDesktop: [1000,3],
       itemsDesktopSmall: [991, 2],
	   itemsTablet: [600, 1],
       itemsMobile:  [460, 1],
       pagination: true	  
     });*/
        /* 01. MAIN-SLIDER JS */
        var owl = $('.builders-slide');
        owl.owlCarousel({
            animateOut: 'bounceOut',
            animateIn: 'bounceIn',
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: true,
            touchDrag: true,
            pagination: false
        });

        $(".builders-slide").on("translate.owl.carousel", function() {
            $(".builders-main-slide h2, .builders-main-slide p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".builders-main-slide .builders-btn").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slide-item-2 .leftBottomImg").removeClass("animated fadeInLeft moretop").css("opacity", "0");
        });

        $(".builders-slide").on("translated.owl.carousel", function() {
            $(".builders-main-slide h2, .builders-main-slide p").addClass("animated fadeInUp").css("opacity", "1");
            $(".builders-main-slide .builders-btn").addClass("animated fadeInDown").css("opacity", "1");
            $(".slide-item-2 .leftBottomImg").addClass("animated fadeInLeft moretop").css("opacity", "1");
        });





    });
}(jQuery));

/*****************************************************************scroll Top**********************************************************/
jQuery(document).ready(function($) {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');
    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });
});
/**************************************************************End image comparission**************************************************/

/**************************************************************Number Increment**************************************************/
(function($, window, document) {

    // TODO:
    // Support number formatting, precision and complete callback
    $.fn.numberIncrementer = function(options) {

        var defaults = {
            'duration': 2000,
            'easing': 'swing',
            'start': 0,
            'end': false,
            'prefix': false,
            'suffix': false,
            'precision': 0, // Not supported yet
            'callback': false // Not supported yet

        };

        return this.each(function(options) {
            var settings = $.extend({}, defaults, options, $(this).data());

            var $this = $(this),
                suffix = settings.suffix || '',
                prefix = settings.prefix || '';

            // Stop and clear animation queue
            $this.stop(true);

            // Begin the number sequence animation
            $this.prop('counter', settings.start).animate({
                counter: settings.end || $this.text(),
            }, {
                duration: settings.duration,
                easing: settings.easing,
                step: function(now) {
                    $this.text(prefix + Math.ceil(now) + suffix);
                }
            });
        });
    };

})(jQuery, window, document);


// Example usages
$(document).ready(function() {
    $('.js-increment').numberIncrementer({});
});

$('.js-rerun').click(function() {
    $('.js-increment').numberIncrementer({});
    return false;
});