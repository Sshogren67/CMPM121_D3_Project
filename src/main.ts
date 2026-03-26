import leaflet from "leaflet";
import luck from "./_luck.ts";
import "./style.css";
import "./_leafletWorkaround.ts";
import "leaflet/dist/leaflet.css";

// The lat/lng of the center of the classroom
const CLASSROOM_LATLNG = leaflet.latLng(37.422, -122.084);

// The size of a tile in degrees (roughly 111km at the equator)
const TILE_DEGREES = 0.001;

// The radius of the neighborhood to spawn caches in, in tiles
const NEIGHBORHOOD_SIZE = 5;

// The probability that a cache will spawn in a given tile
const CACHE_SPAWN_PROBABILITY = 0.2;

// Create the map and status panel
const controlPanelDiv = document.createElement("div");
controlPanelDiv.id = "controlPanel";
document.body.append(controlPanelDiv);

const mapDiv = document.createElement("div");
mapDiv.id = "map";
document.body.append(mapDiv);
const statusPanelDiv = document.getElementById("status-panel")!;

// Create the map centered on the classroom
const map = leaflet.map(mapDiv).setView(CLASSROOM_LATLNG, 16);

// Add OpenStreetMap tiles to the map
leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map);

// Add a marker to represent the player
const playerMarker = leaflet.marker(CLASSROOM_LATLNG).addTo(map);
playerMarker.bindTooltip("You are here!").openTooltip();

// Keep track of the player's points
let playerPoints = 0;
statusPanelDiv.textContent = "Points: 0";

// Spawn caches in the neighborhood around the classroom
for (let i = -NEIGHBORHOOD_SIZE; i <= NEIGHBORHOOD_SIZE; i++) {
  for (let j = -NEIGHBORHOOD_SIZE; j <= NEIGHBORHOOD_SIZE; j++) {
    if (luck(`cache-${i}-${j}`) < CACHE_SPAWN_PROBABILITY) {
      spawnCache(i, j);
    }
  }
}

// Function to spawn a cache at the given tile coordinates
function spawnCache(i: number, j: number) {
  const origin = CLASSROOM_LATLNG;
  const bounds = leaflet.latLngBounds([
    [origin.lat + i * TILE_DEGREES, origin.lng + j * TILE_DEGREES],
    [origin.lat + (i + 1) * TILE_DEGREES, origin.lng + (j + 1) * TILE_DEGREES],
  ]);
  

  const cacheMarker = leaflet.rectangle(bounds, { color: "blue", weight: 1 }).addTo(map);
  cacheMarker.bindTooltip("Cache!").openTooltip();

  cacheMarker.on("click", () => {
    playerPoints++;
    statusPanelDiv.textContent = `Points: ${playerPoints}`;
    map.removeLayer(cacheMarker);
  });
}
