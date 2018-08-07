const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1Ijoia2V2aW5kOTEiLCJhIjoiY2prazRyNTB4MDhzbDNxcGJmMndpcDNnaiJ9.en0sgNW2EZ1mATX1hLe6OA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


