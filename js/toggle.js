$(function () {
    
//    $(".visible-bar").click(function () {
//        var el = $('.main-menu');
//        el.addClass('main-menu-show');
//        $(this).addClass('hidden-bar');
//        $(this).removeClass('visible-bar');
//    });
    $(".visible-bar").click(function () {
    var el = $('.main-menu');
       $(this).removeClass('fa-bars');
    if (el.hasClass("main-menu-hide"))
    {

        $(this).addClass('fa-arrow-left');
        $(this).removeClass('fa-bars');
        
        el.css("left","-100%");
        el.addClass("main-menu-show").removeClass("main-menu-hide");
    }
    else{

         $(this).removeClass('fa-arrow-left');
        $(this).addClass('fa-bars');

        el.css("left","0%");
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