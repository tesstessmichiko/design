$(function() {　
    $(window).scroll(function() {
        $('.fade').each(function() {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
                $(this).addClass('at__scroll');
            }
        });　
    });
});