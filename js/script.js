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
$('.addImage').change(function (event) {
    for (var one = 0; one < event.target.files.length; one++) {
        $(this).parents('.imagesUploadBlock').find('.uploadArea').append('<div class="uploadedBlock" data-count-order="' + one + '"><img src="' + URL.createObjectURL(event.target.files[one]) + '"><button class="close"><i class="icon-delete_charts colorRed"></i></button></div>');
    }
});

// ADD VIDEO
$('.addVideo').change(function (event) {
    for (var one = 0; one < event.target.files.length; one++) {
        $(this).parents('.imagesUploadBlock').find('.uploadArea').append('<div class="uploadedBlock" data-count-order="' + one + '"><video src="' + URL.createObjectURL(event.target.files[one]) + '" controls></video><button class="close"><i class="icon-delete_charts colorRed"></i></button></div>');
    }
});

// REMOVE IMAGE
$('.imagesUploadBlock').on('click', '.close',function (){
    $(this).parents('.uploadedBlock').remove();
});

// Upload File

$('.wrap input[type="file"]').each(function() {

    let label = $(this).parents('.custom-file-upload').find('p').text();
    label = (label) ? label : 'اسحب pdf او <span class="colorDefault">رفع</span> من علي جهازك';

    $(this).wrap('<div class="input-file"></div>');
    $(this).before('<span class="file-selected">'+label+'</span>');

    $(document).on('change', '.wrap input[type="file"]', function(event) {
        let val         = $(this).val();
        let filename    = val.replace(/^.*[\\\/]/, '');
        $(this).siblings('.file-selected').text(filename);
        $(this).siblings('.file-selected').addClass('colorDefault');

    });
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



