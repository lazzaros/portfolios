// 

$(document).ready(function()  {

  $('.trigger').on('click',function(e) {
      var elementId = $(this).attr('id');
        e.preventDefault();
      console.log(elementId);
      $('html, body').animate({
          scrollTop: $('#target-' + elementId).offset().top
      }, 2000);
    });


    $('.trigger-footer').on('click',function(event) {
        var elementFooterId = $(this).attr('id');
        event.preventDefault();
        
        console.log(elementFooterId);
        
        $('html, body').animate({
          scrollTop: $('#' + elementFooterId + '-target').offset().top
      }, 800);
    });
});


$('.iframe-container').click(function(){
        $(this).find('iframe').addClass('zoom-enabled')})
            .mouseleave(function(){
        $(this).find('iframe').removeClass('zoom-enabled');
    });

// $(document).ready(function(){
  
//     $('#about-trigger').on('click',function() {
//         $('html, body').animate({
//             scrollTop: $('#about-us').offset().top
//         }, 1000);
//     });

//     $('#gallery-trigger').on('click',function() {
//         $('html, body').animate({
//             scrollTop: $('#gallery').offset().top
//         }, 2200);
//     });

//     $('#faq-trigger').on('click',function() {
//         $('html, body').animate({
//             scrollTop: $('#faq').offset().top
//         }, 2600);
//     });
    
//     $('#find-us-trigger').on('click', function() {
//         $('html, body').animate({
//             scrollTop: $('#find-us').offset().top
//         }, 3000);
//     });

//     $('#contact-trigger').on('click', function() {
//         $('html, body').animate({
//             scrollTop: $('#contact').offset().top
//         }, 3000);
//     });

//     $('#top-trigger').on('click',function() {
//         $('html, body').animate({
//             scrollTop: $('#top').offset().top
//         }, 2500);
//     });
// });

