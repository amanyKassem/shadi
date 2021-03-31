$(document).ready(function () {

    // toggle menu
    $("header .toggle").click(function () {
        $(".overlay").css({
            "transform": "scaleX(1)"
        });

        $(".menu").addClass('ulDir');

    });

    $("header .overlay").click(function () {
        $(this).removeAttr("style");
        $(".menu").removeClass("ulDir");
    });

    $('#owl-demo1').owlCarousel({
        // center: true,
        dots: false,
        nav: true,
        navText: [
            "<span class=\"icon-right_arrow\"></span>",
            "<span class=\"icon-left_arrow\"></span>"
        ],
        autoplay: true,
        loop: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
                center: false
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6
            }
        }
    });


    // ANIMATION

    Animate_box();
    $(document).scroll(function (){
        Animate_box();
    });

    function Animate_box() {
        var scroll_var = $(this).scrollTop();

        $('.animate-box').each(function (){
            var val_one = $(this).offset().top - $(window).height() + 50;

            if (scroll_var > val_one){
                if($(this).hasClass('left-in')) {
                    $(this).addClass('animated fadeInLeft');
                }else if($(this).hasClass('right-in')) {
                    $(this).addClass('animated fadeInRight');
                }else {
                    $(this).addClass('animated fadeInUp');
                }
            }
        });
    }

});

/* loading screen */
$(window).on('load', function () {

    // Loading Page

    $(".loader").fadeOut(500,function(){

        $(".loading").delay(1000).fadeOut(500);

    });

    $("body").css("overflow-y", "auto");


});


// ADD IMAGE
$('.image-uploader').change(function (event) {
    for (var one = 0; one < event.target.files.length; one++) {
        $(this).parents('.images-upload-block').find('.upload-area').append('<div class="uploaded-block" data-count-order="' + one + '"><img src="' + URL.createObjectURL(event.target.files[one]) + '"><button class="close"><i class="icon-close colorWight"></i></button></div>');
    }
});

// REMOVE IMAGE
$('.images-upload-block').on('click', '.close',function (){
    $(this).parents('.uploaded-block').remove();
});

////////////////////   Sh3wZa JS //////////////////////////

// Start Rate
var $star_rating = $('.star-rating span')

var SetRatingStar = function() {
    return $star_rating.each(function() {
        if (parseInt($(this).parents('.stars').find('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
            return $(this).removeClass('colorGray').addClass('colorYellow');
        } else {
            return $(this).removeClass('colorYellow').addClass('colorGray');
        }
    });
};

$(document).on("click", ".star-rating span", function () {
    $(this).parents('.stars').find('input.rating-value').val($(this).data('rating'));
    SetRatingStar();
});

SetRatingStar();



