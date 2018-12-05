import $ from 'jquery';
export function scroll() {

        // Fixed header
        //-----------------------------------------------
        $(window).scroll(function() {
            if (($(".header.fixed").length > 0)) {
                if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
                    $("body").addClass("fixed-header-on");
                } else {
                    $("body").removeClass("fixed-header-on");
                }
            };
        });

            if (($(".header.fixed").length > 0)) {
                if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
                    $("body").addClass("fixed-header-on");
                } else {
                    $("body").removeClass("fixed-header-on");
                }
            };

        //Scroll Spy
        //-----------------------------------------------
        if($(".scrollspy").length>0) {
            $("body").addClass("scroll-spy");
        }

        //Smooth Scroll
        //-----------------------------------------------

        // Animations
        //-----------------------------------------------
        if (($("[data-animation-effect]").length>0) ) {
            $("[data-animation-effect]").each(function() {
                var $this = $(this),
                    animationEffect = $this.attr("data-animation-effect");

            });
        };

        // Isotope filters
        //-----------------------------------------------


        //Modal
        //-----------------------------------------------
        if($(".modal").length>0) {
            $(".modal").each(function() {
                $(".modal").prependTo( "body" );
            });
        }
}
