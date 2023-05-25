$(function(){
    $(".slider").bxSlider({
        auto: true,
        // autoControls: true,
        // stopAutoOnClick: true,
        // pager: true
    });

    $('.nav_toggle,.nav a').on('click',function(){
        $('.nav_toggle,.nav').toggleClass('show');
    });


});