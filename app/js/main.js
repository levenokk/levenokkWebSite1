$(function () {

    $('.menu-btn').on('click', function () {
        $('.header__nav-inner').slideToggle();
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
    })
});

