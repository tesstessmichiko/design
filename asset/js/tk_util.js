$(function() {

    $('#menu-button a').on('click', function() {
        $('#menu-button').toggleClass('on');
        $('#top_menu_small').slideToggle();
        var windowHeight = $(window).height();
        return false;
    });

    $('.js_show_child > a').on('click', function() {
        $('.js_show_child > a').not($(this)).next('.js_show_child_target').slideUp();
        $(this).next('.js_show_child_target').slideToggle();
        return false;
    });

    $('body').on('click', function(e) {
        if (event.target.nodeName != 'A') {
            $('#menu-button').removeClass('on');
            $('#top_menu_small').hide();
        }
    });

    $(window).resize(function(e) {
        $('#menu-button').removeClass('on');
        $('#top_menu_small').hide();
    });

});