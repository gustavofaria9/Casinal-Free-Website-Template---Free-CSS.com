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
  zoom: 11,
  dragging: !L.Browser.mobile,
});

function runDirection(start, end) {
  // recreating new map layer after removal
  map = L.map("map", {
    layers: L.mapquest.tileLayer("map"),
    center: [-33.4468055, -70.6435677],
    zoom: 12,
    dragging: !L.Browser.mobile,
  });

  var dir = L.mapquest.directions();

  dir.route({
    start: start,
    end: end,
  });

  // const CustomRouteLayer = L.Routing.RouteLayer.extend({
  //   createStartMarker: (location) => {
  //     var custom_icon;
  //     var marker;

  //     custom_icon = L.icon({
  //       iconUrl: "img/red.png",
  //       iconSize: [20, 29],
  //       iconAnchor: [10, 29],
  //       popupAnchor: [0, -29],
  //     });

  //     marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);

  //     return marker;
  //   },

  //   createEndMarker: (location) => {
  //     var custom_icon;
  //     var marker;

  //     custom_icon = L.icon({
  //       iconUrl: "img/blue.png",
  //       iconSize: [20, 29],
  //       iconAnchor: [10, 29],
  //       popupAnchor: [0, -29],
  //     });

  //     marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);

  //     return marker;
  //   },
  // });

  // map.addLayer(
  //   new CustomRouteLayer({
  //     directions: dir,
  //     fitBounds: true,
  //   })
  // );
}

// function that runs when form submitted
function submitForm(event) {
  event.preventDefault();

  // delete current map layer
  map.remove();

  // getting form data
  const start = document.getElementById("start").value;
  const end = document.getElementById("destination").value;
  console.log(start, end);
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
const servicesImages = document.querySelectorAll(".image_8");
const carrouselImage1 = document.querySelector(".image_1");
const carrouselImage2 = document.querySelector(".image_2");
const carrouselImage3 = document.querySelector(".image_3");
const socialMedia = document.querySelector(".call_section");
const headerSection = document.querySelector(".header_section");
const suscribeBT = document.querySelector(".subscribe_bt");
const selectABt = document.querySelectorAll("a");
const selectLiSocialMedia = socialMedia.querySelectorAll(" li");
// console.log(socialMedia);
// console.log(selectLiSocialMedia);
console.log(selectABt[11]);
window.onload = function () {
  //for PC browser
  if (!L.Browser.mobile) {
    mapStyle.style.marginLeft = "12%";
    mapStyle.style.width = "400px";
    emailInput.style.marginLeft = "10px";
  }
  //for mobile
  if (L.Browser.mobile) {
    selectABt[11].style.width = "80%";
    headerSection.style.width = "100%";
    mapStyle.style.width = "100%";
    mapStyle.style.marginRight = "0%";
    carrouselImage1.style.paddingBottom = "1%";
    carrouselImage1.style.marginTop = "-5%";
    carrouselImage2.style.paddingBottom = "1.3%";
    carrouselImage3.style.paddingBottom = "5.3%";
    carrouselImage3.style.marginLeft = "10%";
    directions.style.marginTop = "0%";
    directions.style.marginBottom = "6%";
    directions.style.marginLeft = "0px";
    directions.style.left = "0px";
    directions.style.width = "100%";
    submitButton.style.marginLeft = "-2%";
    submitButton.style.width = "80%";
    emailInput.style.paddingLeft = "15px";
    emailInput.style.width = "100%";
    selectLiSocialMedia.forEach((element) => (element.style.left = "0px"));
  }

  if (L.Browser.mobile)
    servicesImages.forEach((element) => (element.style.height = "150px"));
};

async function fetchAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

const dataUbicacion = fetchAsync(
  "https://www.mapquestapi.com/directions/v2/route?key=y7E6iDZyiPBtIA9A2J75Ywkw6m7Xl0Gc&from=Clarendon+Blvd,Arlington,VA&to=2400+S+Glebe+Rd,+Arlington,+VA"
);
dataUbicacion.then(function (result) {
  console.log(result); // "Some User token"
});
// L.mapquest.geocoding().geocode(
//   {
//     street: "1 City Hall Square",
//     city: "Boston",
//     state: "MA",
//     postalCode: "02201",
//   },
//   createMap
// );
// function createMap(error, response) {
//   var location = response.results[0].locations[0];
//   var latLng = location.displayLatLng;
//   map.remove();
//   map = L.mapquest.map("map", {
//     center: latLng,
//     layers: L.mapquest.tileLayer("map"),
//     zoom: 18,
//   });
// }
