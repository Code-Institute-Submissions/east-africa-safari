 
        var map;
        var infoWindow;



            var locations = [
            {lat: -1.4065513, lng: 34.906551}, // masai mara national park
            {lat: -0.885566, lng: 36.30621}, //hell's gate national park
            {lat: -0.3666667, lng: 36.0833333}, //rift valley lakes
            {lat: -1.0499998, lng: 29.7166638}, //bwindi impenetrable national park
            {lat: 51.547080, lng: -0.014000}, //queen elizabeth national park
            {lat:  0.384831794, lng: 29.8696631}, //ruwenzori mountains
            {lat:  -3.833, lng: 36.0}, //tangarine
            {lat:  -2.333333, lng: 34.833332}, //serengeti
            {lat:  -3.23973, lng: 35.48747} //ngorongoro
         ];

        var contents = [
         `<h3>Maasai Mara National Park</h3>`,
         `<h3>Hell's Gate National Park</h3>`,
         `<h3>Rift Valley Lakes</h3>`,
         `<h3>Bwindi Impenetrable National Park</h3>`,
         `<h3>Queen Elizabeth National Park</h3>`,
         `<h3>Ruwenzori Mountains</h3>`,
         `<h3>Tangarine National Park</h3>`,
         `<h3>Serengeti National park</h3>`,
         `<h3>Ngorongoro Crater</h3>`,
         ];

          function initMap() {
   
    var startPosition = locations[0];
    var centerPoint = {
        center: startPosition,
        zoom: 6
    };

    
    map = new google.maps.Map(document.getElementById('map'), centerPoint);
    infowindow = new google.maps.InfoWindow();
    for (var i = 0; i < locations.length; i++) {
        createMarker(locations[i], contents[i]);
    }
}

    
function createMarker(destinationLocation, destinationContent) {

    
    var marker = new google.maps.Marker({
        position: destinationLocation,
        map: map
    });

   
    marker.addListener('click', function() {
       infowindow.setContent(destinationContent);
       infowindow.open(map, this);
    });
}   


// code in this section copied and modified from github repository of code institute student for creating map markers
