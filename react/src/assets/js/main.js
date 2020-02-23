


//--------------------



// $(document).on('click', '.number-spinner button', function () {
//     var btn = $(this),
//         oldValue = btn.closest('.number-spinner').find('input').val().trim(),
//         newVal = 0;
//
//     if (btn.attr('data-dir') == 'up') {
//         newVal = parseInt(oldValue) + 1;
//     } else {
//         if (oldValue > 1) {
//             newVal = parseInt(oldValue) - 1;
//         } else {
//             newVal = 1;
//         }
//     }
//     btn.closest('.number-spinner').find('input').val(newVal);
// });


$(document).ready(function() {
//-----------------------sl
    $(".slider-product").slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
        responsive: [
            {
                breakpoint: 1084,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                    centerMode: true,
                    centerPadding: '7px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
//-----------------------sl
    $('.slider-product2').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


//-------------------------------
    /*-----------------==========================================================================------------------------------*/
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots:false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev-min"></div>',
        nextArrow: '<div class="next-min"></div>',
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 2
                }
            }
        ]
    });

    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        let slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });
    /*------------------------------zoom----------------------------------------------*/
    jQuery(function(){

        // $(".my-foto").imagezoomsl({
        //
        //     zoomrange: [3, 3]
        // });
    });
    $(window).scroll(function() {

        let mq = window.matchMedia('all and (min-width: 500px)');

        if (($(this).scrollTop() > 100) && (mq.matches)) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});