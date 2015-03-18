$(function () {
    
//    $(".visible-bar").click(function () {
//        var el = $('.main-menu');
//        el.addClass('main-menu-show');
//        $(this).addClass('hidden-bar');
//        $(this).removeClass('visible-bar');
//    });
    $(".visible-bar").click(function () {
    var el = $('.main-menu');
    if (el.hasClass("main-menu-hide"))
    {
        el.addClass("main-menu-show").removeClass("main-menu-hide");
    }
    else{
        el.addClass("main-menu-hide").removeClass("main-menu-show");
    }
    });

//    $(".hidden-bar").click(function () {
//        var el = $('.main-menu');
//        el.removeClass('main-menu-show');
//        $(this).addClass('visible-bar');
//        $(this).removeClass('hidden-bar');
//    });
});