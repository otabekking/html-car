$(function () {
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.review__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 846,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 585,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active')
    })
});