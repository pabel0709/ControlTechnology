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
var lgNav = $('.navbar-shrink').innerHeight();


// Home section animation
$(window).scroll(function() {
  if ($(this).scrollTop() >homeHeight- navHeight) {
    $('div .home').removeClass('visible');
    $('div .home').addClass('hiddHome');
  } else if ($(this).scrollTop() < $('div .home .container').offset().top){
    $('div .home').removeClass('hiddHome');
  }
});

// About section animation
$(window).scroll(function() {
  if ($(this).scrollTop() + navHeight> $('div .hiddAbout').offset().top*0.8 ) {
    $('div .hiddAbout').addClass('visible');
  } else if ($(this).scrollTop() == 0) {
    $('div .hiddAbout').removeClass('visible');
  }
});

// Services section animation
$(window).scroll(function() {
  if ($(this).scrollTop() + navHeight > $('div .hiddServices').offset().top *0.91  ){
    $('div .hiddServices').addClass('visible');
  } else if ($(this).scrollTop() == 0){
    $('div .hiddServices').removeClass('visible');
  }
});

// Gallery section animation
$(window).scroll(function() {
  if ($(this).scrollTop() + navHeight > $('div .hiddGallery').offset().top *0.92) {
    $('div .hiddGallery').addClass('visible');
  } else if ($(this).scrollTop() == 0) {
    $('div .hiddGallery').removeClass('visible');
  }
});

// Contact section animation
$(window).scroll(function() {
  if ($(this).scrollTop() + navHeight > $('div .hiddContact').offset().top *0.92 ) {
    $('div .hiddContact').addClass('visible');
  } else if ($(this).scrollTop() == 0){
    $('div .hiddContact').removeClass('visible');
  }
});

// Map section animation
$(window).scroll(function() {
  if ($(this).scrollTop() + navHeight > $('div .hiddMap').offset().top *0.95 ) {
    $('div .hiddMap').addClass('visible');
  } else if ($(this).scrollTop() == 0) {
    $('div .hiddMap').removeClass('visible');
  }
});

$('.collapse a').on('click', function(){
  if($(".navbar-collapse").hasClass("show")){
    $('.navbar-toggler').click()
  }
     //bootstrap 3.x by Richard
});
