$(function () {

    $('.menu-btn').on('click', function () {
        $('.header__nav-inner').slideToggle();
        $(this).toggleClass('menu-btn__active');
    })

    $('.clients-said__slider-wrapper').slick({
        infinity: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: '<a href="#" class="next-arrow"><i class="fas fa-angle-right"></i></a>',
        prevArrow: '<a href="#" class="prev-arrow"><i class="fas fa-angle-left"></i></a>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    })

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > $(this).height()) {
            $('.up-arrow').addClass('active');
        } else {
            $('.up-arrow').removeClass('active');
        }

    })

    $('.up-arrow').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })

    // $(window).on('load', function () {
    //     document.body.style.overflow = 'hidden';
    //     setTimeout(() => {
    //         $('.preloader').addClass('done')
    //         document.body.style.overflow = '';
    //     }, 1000);
    // })
});

