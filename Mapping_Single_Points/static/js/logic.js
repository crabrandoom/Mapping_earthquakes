// JavaScript source code
// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);




// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1IjoiY3JhYnJhbmRvb20iLCJhIjoiY2tydGM3cGRkM2FhaDJvcXJlcjVpdHZ5eiJ9.CWPDE4yhx5BXT1vKHcYBnA'
}).addTo(map);


// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});



// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/crabrandoom/Mapping_Earthquakes/main/majorAirports.json";


// Grabbing our GeoJSON data.
d3.json(airportData).then(function (data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data).addTo(map);
});