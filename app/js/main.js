$(function () {

    $('.mobile-btn').on('click', function () {
        $(this).toggleClass('mobile-btn__active');
        $('.nav').slideToggle();
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
});