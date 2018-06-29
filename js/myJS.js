function myMap() {
  var loc = {lat: 50.0067129, lng:  20.9623298};
  var map = new google.maps.Map(
      document.getElementById('googleMap'), {zoom: 18, center: loc});

  var infowindow = new google.maps.InfoWindow({content: contentString});
  marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if($(window).scrollTop() + $(window).height() > $(document).height()-20) {
 document.getElementById("navbar").style.top = "-60px";
}else {
 document.getElementById("navbar").style.top = "-0";
}
}
