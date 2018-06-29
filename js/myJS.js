function myMap() {
  var loc = {lat: 50.010648, lng:  20.962189};
  var map = new google.maps.Map(
      document.getElementById('googleMap'), {zoom: 15, center: loc});
  var marker = new google.maps.Marker({position: loc, map: map});
  var content= 'ascsdvsVd'
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
