$(function () {

    let mixer = mixitup('.portfolio__content');


    $('[data-fancybox="images"]').fancybox({
        thumbs: {
            autoStart: true,
            hideOnClose: true,
            parentEl: '.fancybox-container',
            axis: 'y'
        },
        slideShow: {
            autoStart: false,
            speed: 3000
        },
        animationEffect: "zoom",
        transitionEffect: "tube",
        transitionDuration: 1000
    });

    $('.reviews__slider').slick({
        dots: true,
        arrows: false
    });


})