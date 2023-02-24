$(document).ready(()=>{
    $('.nav-btn').click(function(){
        $('.nav-btn').removeClass('active');
        $('section').hide();
        $($(this).attr('href')).fadeIn();
        $(this).toggleClass('active');
    });

    $('#toggle').click(()=>{
        $('#menu').toggle();
        $('.menu-icon').toggleClass('active');
    });
});