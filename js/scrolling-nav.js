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
var homeHeight = $("#home").height();
var aboutHeight = $("#about").height();
var galleryHeight = $("#gallery").height();
var contactHeight = $("#contact").height();
var mapHeight = $("#map").height();

$(window).scroll(function() {
  if ($(this).scrollTop() > homeHeight) {
    $('div .hiddAbout').addClass('visible');
  } else if($(this).scrollTop() == 0) {
    $('div .hiddAbout').removeClass('visible');
  }
});
$(window).scroll(function() {
  if ($(this).scrollTop() > homeHeight + aboutHeight + 300) {
    $('div .hiddServices').addClass('visible');
  } else if($(this).scrollTop() == 0) {
    $('div .hiddServices').removeClass('visible');
  }
});
$(window).scroll(function() {
  if ($(this).scrollTop() > homeHeight + aboutHeight + galleryHeight + 300 ) {
    $('div .hiddGallery').addClass('visible');
  } else if($(this).scrollTop() == 0) {
    $('div .hiddGallery').removeClass('visible');
  }
});
$(window).scroll(function() {
  if ($(this).scrollTop() > homeHeight + aboutHeight + galleryHeight + contactHeight +300) {
    $('div .hiddContact').addClass('visible');
  } else if($(this).scrollTop() == 0) {
    $('div .hiddContact').removeClass('visible');
  }
});
$(window).scroll(function() {
  if ($(this).scrollTop() > homeHeight + aboutHeight + galleryHeight + contactHeight + mapHeight +300) {
    $('div .hiddMap').addClass('visible');
  } else if($(this).scrollTop() == 0) {
    $('div .hiddMap').removeClass('visible');
  }
});
