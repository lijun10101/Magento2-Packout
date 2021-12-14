require.config({
    　　　　paths: {
    　　　　　　"jquery": "jquery/jquery.min",
    　　　　　　"slick":"Tti_Packout/js/slick.min",
    　　　　}
});
require(['jquery', 'slick'], function($) {
    (function() {
        var num = 0;
    $('.pre-arrow').click(function(e) {
        if (num <= 0) {
            return;
        }
        num--;
        var firstImage = $('.image-list img:first');
        $('.image-list img:last').after(firstImage);
        changeMainImage();
        changeLine(num);
    });
    $('.next-arrow').click(function(e) {
        if (num >= 2) {
            return;
        }
        num++;
        var lastImage = $('.image-list img:last');
        if (lastImage.attr('data-image')) {

        }
        $('.image-list img:first').before(lastImage);
        changeMainImage();
        changeLine(num);
    })

    function changeMainImage() {
        var image = $('.image-list img:first').attr('data-image');
        $("." + image).show().siblings('img').hide();
    }

    function changeLine(num) {
        console.log(num)
        var image = $('.image-list img:first').attr('data-image');
        var lineSite = $('.line-card-site');
        var lineTransit = $('.line-card-transit');
        if (num === 1) {
            $('.bold-line').removeClass('w-1/3').removeClass('w-full').addClass('w-2/3');
            lineSite.addClass('border-t-4').removeClass('border-t');
            lineTransit.removeClass('border-t-4').addClass('border-t');
        }
        if (num === 2) {
            $('.bold-line').removeClass('w-1/3').removeClass('w-2/3').addClass('w-full');
            lineSite.addClass('border-t-4').removeClass('border-t');
            lineTransit.addClass('border-t-4').removeClass('border-t');
        }
        if (num === 0) {
            $('.bold-line').addClass('w-1/3').removeClass('w-2/3').removeClass('w-full');
            lineSite.addClass('border-t').removeClass('border-t-4');
            lineTransit.addClass('border-t').removeClass('border-t-4');
        }
    }
    })();
    (function() {
        //产品轮播图
      $('.product-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.product-slider-nav'
      });
      $('.product-slider-nav').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: false,
        prevArrow:$('.button-left-gray-arrow'),
        nextArrow:$('.button-right-gray-arrow')
      });
    })();
    (function() {
        $('.drop_down_menu').click(function(e) {
            if ($('.product_card').hasClass('h-0')) {
                $('.product_card').removeClass('h-0').addClass('h-106 mb-24');
            } else {
                $('.product_card').removeClass('h-106 mb-24').addClass('h-0');
            }
            if ($('.drop_down_menu').hasClass('rotate-180')) {
                $('.drop_down_menu').removeClass('rotate-180');
            } else {
                $('.drop_down_menu').addClass('rotate-180');
            }
        });

        $('.card_product_items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow:$('.drop_menu_left_arrow'),
            nextArrow:$('.drop_menu_right_arrow')
          });
          
    })();
    (function() {
        $('.button_product_details').click(function(e) {
            var product_details =  $(this).parent().children('.product_details').children('img');
            if (product_details.hasClass('h-0')) {
                product_details.addClass('transition-height duration-1000 h-full').removeClass('h-0');
            } else {
                product_details.addClass('h-0').removeClass('h-full');
            }

            var product_details_close_image = $(this).children('.product_details_close_image');
            var product_details_image = $(this).children('.product_details_image');
            if (product_details_close_image.hasClass('hidden')) {
                product_details_image.addClass('hidden');
                product_details_close_image.removeClass('hidden');
                setTimeout(function() {
                    product_details_close_image.removeClass('rotate-45').addClass('rotate-90');
                },0.1);
            } else {
                product_details_close_image.addClass('rotate-45').removeClass('rotate-90');
                setTimeout(function() {
                    product_details_close_image.addClass('hidden');
                    product_details_image.removeClass('hidden');
                }, 1000)
            }
        })
    })();
});