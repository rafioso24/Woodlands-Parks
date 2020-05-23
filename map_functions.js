//Define Icons ------------------------------------------------------
/*
let currentLocationIcon = L.icon({
  iconUrl: 'images/redcircle.png',
  iconSize: [30, 30],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  //shadowUrl: 'images/bluecircle.png',
  //shadowSize: [68, 95],
  //shadowAnchor: [22, 94]
});
*/
let parkIcon = L.icon({
  iconUrl: 'images/oak-tree-icon-4.png',
  iconSize: [20, 27.2],
  iconAnchor: [10, 27.2],
  popupAnchor: [-3, -76],
  //shadowUrl: 'images/bluecircle.png',
  //shadowSize: [68, 95],
  //shadowAnchor: [22, 94]
});
//Define Global Variables --------------------------------------------
let currentLocation = null;

//Initialization
function createMap(){
  console.log('create map function');
  myMap = L.map('mapid').setView([30.182391,-95.519479], 12);
  console.log('map has been set to Lat and long. Attempting API call...');

  //add map layer
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmFmaW9zbyIsImEiOiJjazB2dGI3cjAxMmt4M2NyMWRyMHlma2xkIn0.JfzRqWFf6cx6wo_Pd2w28Q'
  }).addTo(myMap);

  //Plot User's current location
  plotCurrentLocation();
  loadMapPins(filteredParks);

}

function loadMapPins(parksArray){
  //for each park in array, add a pin if not exists
  for (let i = 0; i < parksArray.length; i++){
    updateMap(parks[i]);
  }  
  //recenter view

};

//1. first Method - passthrough method to update map with provided address
function updateMap(parkObject){
  addr_search(addMapPoint, parkObject);
}

//2. second Method  - search address to GPS
function addr_search(callback, parkObject) {
  let address = parkObject.address
  console.log("starting get request for addr_search");
  let xmlhttp = new XMLHttpRequest();
  const url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + address;
  xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){ //request is done and success
      callback(xmlhttp.responseText, parkObject);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  console.log("GET request sent for addr_search");
}

//3. third method - add it to the map
function addMapPoint(gpsArrayResult, parkObject){
  let name = parkObject.name;
  gpsArray = JSON.parse(gpsArrayResult);
  
  let parkMarker = L.marker([gpsArray[0].lat,gpsArray[0].lon], {icon:parkIcon}).addTo(myMap);
  parkMarker.bindTooltip(name, {direction:'bottom'}, {permanent:true}).openTooltip();

}

//Changes View from Map View to List View and Vice Versa
function mapListButtonClick(){
  console.log('maplistbutton clicked.');
  let mapListButton = document.getElementById("mapListButton");
  console.log('mapLIstButton variable: ' + mapListButton.value);
  let mapColumn = document.getElementById("mapColumn");
  let listColumn = document.getElementById("listColumn");
  
  if(mapListButton.innerHTML === 'Map'){
    mapListButton.innerHTML="List";
    mapColumn.classList.toggle("is-hidden-touch");
    listColumn.classList.toggle("is-hidden-touch");

    mapColumn.classList.toggle("is-three-quarters");
  }
  else{ //mapListButton === List
    mapListButton.innerHTML="Map";
    mapColumn.classList.toggle("is-hidden-touch");
    listColumn.classList.toggle("is-hidden-touch");
    mapColumn.classList.toggle("is-three-quarters");
  }
}


function plotCurrentLocation() {
  console.log("plotting current location...");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function showPosition(position){
      currentLocation = position;
      let currentLocationMarker = L.marker([position.coords.latitude,position.coords.longitude]).addTo(myMap);
      });
  }
   else  console.log("Geolocation is not supported by this browser.");
}


