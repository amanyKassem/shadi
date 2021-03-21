jQuery(window).load(function () {

    // Loading Page

    $(".loader").fadeOut(500,function(){

        $(".loading").delay(1000).fadeOut(500);

    });

    $("body").css("overflow-y", "auto");

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

/// scrooltop Tabs Bar For Mobile

var lastScrollTop = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        // downscroll code
        $('.Tab_mobile').addClass('fadingScroll');
    } else {
        // upscroll code
        $('.Tab_mobile').removeClass('fadingScroll');
    }
    lastScrollTop = st;
});

/// Scrool Nav

if ($(window).width() > 990) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {

            $('.fixHeader').addClass('fixScroll');

        } else {

            $('.fixHeader').removeClass('fixScroll');

        }
    });
}

// Click Show Side Bar

$(document).on("click", ".openSideBar", function (side) {
    side.preventDefault();
    $('#nav-icon3').toggleClass('open');
    $(".fixHeader").toggleClass('back');
    $(".OverLay").toggleClass('back');
});

$(document).on("click", ".OverLay", function (side) {
    side.preventDefault();
    $('#nav-icon3').removeClass('open');
    $(".fixHeader").removeClass('back');
    $(".OverLay").removeClass('back');
    $('.contentCart').removeClass("back");
});

// Click Slide Toggle Box In footer

$('.slideBox').slideUp();
$('.linkFooter .icon-plus').addClass('icon-minus');

$(document).on("click", ".toggleBox", function () {
    $(this).parents('.linkFooter').find('.slideBox').slideToggle(500);
    $(this).parents('.linkFooter').find('.icon-plus').toggleClass('icon-minus');
});

// Click Favorite

$(document).on("click", ".clickFav", function () {
    $(this).parents('.imgTabsProduct').find('.icon-heart').toggleClass('colorRed icon-like');
});

$(document).on("click", ".clickLink", function (link) {
    link.preventDefault();
    let currentContent = $(this).parents('.linkBox').find('.listContainer');
    $('.listContainer').not(currentContent).removeClass('hoverBox');
    currentContent.toggleClass('hoverBox');
});

// Click Remove Item In Cart

$(document).on("click", ".removeItem", function () {
    $(this).parents('.boxCart').remove();
});

// Click Show List Cart

$(".clickShowCart").on("click", function (cart) {
    cart.preventDefault();
    $('.contentCart').toggleClass("back");
    $('.OverLay').toggleClass("back");
});

// Click Show List Cart

$(".clickShowSearch").on("click", function (cart) {
    cart.preventDefault();
    $('.contentSearch').toggleClass("fadeSearch");
});

// Start Rate
var $star_rating = $('.star-rating span')

var SetRatingStar = function() {
    return $star_rating.each(function() {
        if (parseInt($(this).parents('.stars').find('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
            return $(this).removeClass('starGray').addClass('starYellow');
        } else {
            return $(this).removeClass('starYellow').addClass('starGray');
        }
    });
};

$(document).on("click", ".star-rating span", function () {
    $(this).parents('.stars').find('input.rating-value').val($(this).data('rating'));
    SetRatingStar();
});

SetRatingStar();


