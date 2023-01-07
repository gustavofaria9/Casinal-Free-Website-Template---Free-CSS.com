// Where you want to render the map.
var element = document.getElementById("osm-map");

// Height has to be set. You can do this in CSS too.
// Create Leaflet map on map element.
// var map = L.map(element, { dragging: !L.Browser.mobile });

// Add OSM tile layer to the Leaflet map.
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

function runDirection(start, end) {
  // recreating new map layer after removal
  map = L.map("map", {
    layers: MQ.mapLayer(),
    center: [-33.4468055, -70.6435677],
    zoom: 12,
  });

  var dir = MQ.routing.directions();

  dir.route({
    locations: [start, end],
  });

  const CustomRouteLayer = MQ.Routing.RouteLayer.extend({
    createStartMarker: (location) => {
      var custom_icon;
      var marker;

      custom_icon = L.icon({
        iconUrl: "img/red.png",
        iconSize: [20, 29],
        iconAnchor: [10, 29],
        popupAnchor: [0, -29],
      });

      marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);

      return marker;
    },

    createEndMarker: (location) => {
      var custom_icon;
      var marker;

      custom_icon = L.icon({
        iconUrl: "img/blue.png",
        iconSize: [20, 29],
        iconAnchor: [10, 29],
        popupAnchor: [0, -29],
      });

      marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);

      return marker;
    },
  });

  map.addLayer(
    new CustomRouteLayer({
      directions: dir,
      fitBounds: true,
    })
  );
}

// function that runs when form submitted
function submitForm(event) {
  event.preventDefault();

  // delete current map layer
  map.remove();

  // getting form data
  const start = document.getElementById("start").value;
  const end = document.getElementById("destination").value;
  // run directions function
  runDirection(start, end);

  // reset form
  document.getElementById("form").reset();
}

// asign the form to form variable
const form = document.getElementById("form");

// call the submitForm() function when submitting the form
form.addEventListener("submit", submitForm);

const mapStyle = document.getElementById("map");
const emailInput = document.querySelector(".email_text");
const directions = document.querySelector(".directions");
const submitButton = document.querySelector(".submit_button");
window.onload = function () {
  if (!L.Browser.mobile) mapStyle.style.marginLeft = "12%";
  if (!L.Browser.mobile) emailInput.style.marginLeft = "10px";
  if (L.Browser.mobile) directions.style.marginTop = "0%";
  if (L.Browser.mobile) directions.style.marginBottom = "6%";
  if (L.Browser.mobile) submitButton.style.marginLeft = "-2%";
};
