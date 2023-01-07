// Where you want to render the map.
var element = document.getElementById("osm-map");

// Height has to be set. You can do this in CSS too.
// Create Leaflet map on map element.
var map = L.map(element);

// Add OSM tile layer to the Leaflet map.
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Target's GPS coordinates.
var target = L.latLng("-33.4468055", "-70.6435677");

// Set map's center to target with zoom 14.
map.setView(target, 30);

// Place a marker on the same location.
L.marker(target).addTo(map);
L.map("map", { dragging: !L.Browser.mobile });
