// Where you want to render the map.
var element = document.getElementById("osm-map");

// Height has to be set. You can do this in CSS too.
// Create Leaflet map on map element.
// var map = L.map(element, { dragging: !L.Browser.mobile });

// // Add OSM tile layer to the Leaflet map.
// L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
//   attribution:
//     '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// // Target's GPS coordinates.
// var target = L.latLng("-33.4468055", "-70.6435677");

// // Set map's center to target with zoom 14.
// map.setView(target, 30);

// // Place a marker on the same location.
// L.marker(target).addTo(map);

L.mapquest.key = "y7E6iDZyiPBtIA9A2J75Ywkw6m7Xl0Gc";

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map("map", {
  center: [-33.4468055, -70.6435677],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
  dragging: !L.Browser.mobile,
});
