function myMap() {
  var loc = {lat: 50.010648, lng:  20.962189};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: loc});
  var marker = new google.maps.Marker({position: loc, map: map});
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if($(window).scrollTop() + $(window).height() > $(document).height()-20) {
 document.getElementById("navbar").style.top = "-60px";
}else {
 document.getElementById("navbar").style.top = "-0";
}
}
