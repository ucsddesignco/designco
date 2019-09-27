var map;
function initMap() {
  // Create center marker at UCSD
  // Create a map object and specify the DOM element for display.
  var hss_ltlg = {lat:32.878515, lng:-117.241413};
  var atkinson_ltlg = {lat:32.882407, lng:-117.234822};
 
  var center = {
    lat: (hss_ltlg.lat + atkinson_ltlg.lat) / 2,
    lng: (hss_ltlg.lng + atkinson_ltlg.lng) / 2,
  };

  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 15,
    scrollwheel: false,
  });

  var hss = new google.maps.Marker({
    position: hss_ltlg,
    map: map,
    title: 'Humanities and Social Sciences Building'
  });

  var atkinson = new google.maps.Marker({
    position: atkinson_ltlg,
    map: map,
    title: 'Atkinson Hall'
  });
}