// JavaScript source code
// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);


// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery � <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data � <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
    Street: light,
    Dark: dark
};


let map = L.map('mapid', {
    center: [44.0, -80.0],
   zoom: 2,
   layers: [light]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);



// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/crabrandoom/Mapping_Earthquakes/main/torontoRoutes.json";

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/crabrandoom/Mapping_Earthquakes/main/majorAirports.json";


// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function (data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
        style: myStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<he> Airline " + feature.properties.airline + "<br>" + feature.properties.dst);
        }
    }).addTo(map);

});
