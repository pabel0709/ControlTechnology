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
        }, 1500, "easeInOutExpo");
        return false;
      }
    }
  });

})(jQuery); // End of use strict
$(window).scroll(function(){
  if($(this).scrollTop()>300) $('.up').fadeIn(1000);
  else $('.up').fadeOut(1000);
});

// navbar shrinking while scrolling down
$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $('nav').removeClass('navbar-shrink');
  } else {
    $('nav').addClass('navbar-shrink');
  }
});

var homeHeight = $("#home").innerHeight();
var aboutHeight = $("#about").innerHeight();
var servicesHeight = $("#services").innerHeight();
var galleryHeight = $("#gallery").innerHeight();
var contactHeight = $("#contact").innerHeight();
var mapHeight = $("#map").innerHeight();
var navHeight = $('nav').innerHeight();

// Home section animation
$(window).scroll(function() {
  if ($(this).scrollTop() >homeHeight- navHeight) {
    $('div .home').removeClass('visible');
    $('div .home').addClass('hiddHome');
  } else if ($(this).scrollTop() == 0){
    $('div .home').removeClass('hiddHome');
  }
});

// About section animation
$(window).scroll(function() {
  if ($(this).scrollTop()> (homeHeight -navHeight)*0.5) {
    $('div .hiddAbout').addClass('visible');
  } else if ($(this).scrollTop() == 0) {
    $('div .hiddAbout').removeClass('visible');
  }
});

// Services section animation
$(window).scroll(function() {
  if ($(this).scrollTop()  > homeHeight + (aboutHeight*0.5) -navHeight) {
    $('div .hiddServices').addClass('visible');
  } else if ($(this).scrollTop() == 0){
    $('div .hiddServices').removeClass('visible');
  }
});

// Gallery section animation
$(window).scroll(function() {
  if ($(this).scrollTop() > homeHeight + aboutHeight + (servicesHeight*0.5) -navHeight) {
    $('div .hiddGallery').addClass('visible');
  } else if ($(this).scrollTop() == 0) {
    $('div .hiddGallery').removeClass('visible');
  }
});

// Contact section animation
$(window).scroll(function() {
  if ($(this).scrollTop() > homeHeight + aboutHeight + servicesHeight + (galleryHeight*0.5)  -navHeight) {
    $('div .hiddContact').addClass('visible');
  } else if ($(this).scrollTop() == 0){
    $('div .hiddContact').removeClass('visible');
  }
});

// Map section animation
$(window).scroll(function() {
  if ($(this).scrollTop() > homeHeight + aboutHeight + servicesHeight + galleryHeight + (contactHeight*0.5) -navHeight) {
    $('div .hiddMap').addClass('visible');
  } else if ($(this).scrollTop() == 0) {
    $('div .hiddMap').removeClass('visible');
  }
});
