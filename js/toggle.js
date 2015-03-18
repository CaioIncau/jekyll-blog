$(function () {
    
    $(".visible-bar").click(function () {
        var el = $('.main-menu');
        el.addClass('main-menu-show');
        $(this).addClass('hidden-bar');
        $(this).removeClass('visible-bar');
    });
    
    $(".hidden-bar").click(function () {
        var el = $('.main-menu');
        el.removeClass('main-menu-show');
        $(this).addClass('visible-bar');
        $(this).removeClass('hidden-bar');
    });
});