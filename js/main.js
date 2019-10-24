$(document).ready(function(){
    $('.header').height($(window).height());

    $(".navbar a").click(function(){
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)

    });

});


$(document).ready(function(){
    var $nav = $('.navbar');

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() === 0) {
                $nav.fadeIn();
            } else {
                $nav.fadeOut();
            }
        });
    });

});