// GoogleMap widget
function myMap() {
  var loc = {lat: 50.0067129, lng:  20.9623298};
  var map = new google.maps.Map(
      document.getElementById('googleMap'), {zoom: 18, center: loc});
}

//  navbar hidden while bottom of page reached
// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if($(window).scrollTop() + $(window).height() > $(document).height()-40) {
//     document.getElementById("navbar-top").style.top = "-60px"
//   } else {
//       document.getElementById("navbar-top").style.top = "-0";
//     }
// }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navHeight = $('nav').innerHeight();
  if($(window).scrollTop() + $(window).height() > $(document).height()-$('.footer').innerHeight()) {
    document.getElementById("navbar-top").style.top = "-"+navHeight+"px";
  } else {
      document.getElementById("navbar-top").style.top = "-0";
    }
}
