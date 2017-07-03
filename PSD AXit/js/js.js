$(document).ready(function(){
    $('#myTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('#features-trigger').on('click',function() {
        $('html, body').animate({
            scrollTop: $('#features').offset().top 
        }, 1400);
    });
    
    $('#about-trigger').on('click',function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 1800);
    });

    $('#pricing-trigger').on('click',function() {
        $('html, body').animate({
            scrollTop: $('#pricing').offset().top
        }, 2200);
    });

    $('#reviews-trigger').on('click',function() {
        $('html, body').animate({
            scrollTop: $('#reviews').offset().top
        }, 2600);
    });
    
    $('#contact-trigger').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 3000);
    });

    $('#top-trigger').on('click',function() {
        $('html, body').animate({
            scrollTop: $('#top').offset().top
        }, 2500);
    });
});


