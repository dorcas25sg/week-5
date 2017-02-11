// Leaflet setup
var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

//From Week4 Lab2
//I only copied the parts I needed
var parseData = function(x) {return JSON.parse(x);};
var plotMarkers = function(z) {_.map(z, function(k){return L.marker(k).addTo(map);});};
var removeMarkers = function(c) {_.each(c,function(d){map.removeLayer(d);});};

// Click
$("button").click(function() {
  $.ajax($("#text-input1").val()).done(function(data) {
    var parsed = parseData(data);
    console.log(parsed);
    var makeMarkers = function(y) {return _.map(y, function(t){return [t[$("#text-input2").val()], t[$("#text-input3").val()]];});};
    var markers = makeMarkers(parsed);
    plotMarkers(markers);
      console.log("marker added");
  });
});
