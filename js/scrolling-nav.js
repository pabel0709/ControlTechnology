(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

})(jQuery); // End of use strict
$(window).scroll(function(){
  if($(this).scrollTop()>300) $('.up').fadeIn(1000);
  else $('.up').fadeOut(1000);
});




$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $('nav').removeClass('navbar-shrink');
  } else {
    $('nav').addClass('navbar-shrink');
  }
});
// $(window).scroll(function() {
//   if ($(this).scrollTop() > 300) {
//     $('div').removeClass('abcd');
//   } else {
//     $('div .aa').addClass('abcd');
//   }
// });
$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
    $('div').addClass('visible');
  } else {
    $('div .aa').removeClass('visible');
  }
});

// $(window).scroll(function() {
//   if ($(this).scrollTop() < 400) {
//     $('aa').addClass('abcd');
//   }
// });
