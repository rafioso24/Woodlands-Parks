//To run from command line type > node code.js

//Declare and Assign Global Variables
let apartment = 'The Biltmore'; 
let oldApartment = 'Waterford Springs';
let residenceHistory = 
  [ ['Casa Moas', '8583 Ponce De Leon Rd Miami, FL 33143'], 
    ['Lakeside complex','Radio Rd, Gainesville, FL 32611'],
    ['Sledd Hall', '191 Fletcher Dr. Gainesville, FL'],
    ['Retreat at City Park', '1640 E T C Jester Blvd, Houston, TX 77008'],
    ['Keys Complex', '44 Keys Residential College, Gainesville, FL 32608'],
    ['MLK TownHome', '100 Miriam Ave Austin, TX 78702'],
    ['St. Joseph House', '100 SW 23rd Dr, Gainesville, FL 32607'],
    ['Waterford Springs', '24530 Gosling Rd, Spring, TX 77389'],
    ['The Biltmore', '10600 Six Pines Dr.']
  ];
let historyLength = residenceHistory.length;
let errorMsg = `Invalid selection. Please choose a number between 1 and ${historyLength}.`;
let gpsArray = null;
let myMap = null;
createMap();

//Set prompt message
document.getElementById("numberEntryPrompt").innerHTML = `Enter a Number 1 through ${historyLength} to look up location of residence`;

//HTML Button and Form Input
const submitButton = document.querySelector('Button');
submitButton.addEventListener('click', updatePageWithAddress, false);

//Functions
function createMap(){
  console.log('create map function');
  myMap = L.map('mapid').setView([30.152970,-95.461630], 13);
  console.log('map has been set to Lat and long. Attempting API call...');

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmFmaW9zbyIsImEiOiJjazB2dGI3cjAxMmt4M2NyMWRyMHlma2xkIn0.JfzRqWFf6cx6wo_Pd2w28Q'
  }).addTo(myMap);

  console.log('API Call successful. Tile Layer Added.');
  let biltmoreMarker = L.marker([30.152970,-95.461630]).addTo(myMap);
}

function addMapPoint(gpsArrayResult){
  gpsArray = JSON.parse(gpsArrayResult);
  console.log("Lat long results : " + gpsArray[0].lat + " " + gpsArray[0].lon);
  console.log("tamaracAddress :  " + gpsArrayResult);
  myMap.setView([gpsArray[0].lat,gpsArray[0].lon], 13);
  let pointMarker = L.marker([gpsArray[0].lat,gpsArray[0].lon]).addTo(myMap);
}

function addr_search(callback, address) {
  console.log("starting get request for addr_search");
  let xmlhttp = new XMLHttpRequest();
  const url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + address;
  xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){ //request is done and success
      callback(xmlhttp.responseText);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  console.log("GET request sent for addr_search");
}

function updatePageWithAddress(){
  console.log('updatePageWithAddress');
  retrieveLocation();
  updateMap();
}

function updateMap(){
  let addr = residenceHistory[inputNumber.value -1][1]
  console.log('updateMap function : residence location is ' + addr);
  addr_search(addMapPoint, addr);
}

function retrieveLocation() {
  if(inputNumber.value > historyLength){
  	console.log(errorMsg);
  	document.getElementById("resultingText").innerHTML = errorMsg;
  }
  else{
  	console.log(document.getElementById('inputNumber').value);
 	  document.getElementById("resultingText").innerHTML = 'Residence number ' + inputNumber.value + ' was ' + residenceHistory[inputNumber.value -1][0];
  }
}

function createTable(){
  console.log('creating table...');
  let table = '<table style="width:50%" ><tr><th>Number</th><th>Name</th><th>Location</th></tr>';
  let rows = residenceHistory.length;
  for (i = 0; i<residenceHistory.length; i++){
    table += '<tr>';
    let name = residenceHistory[i][0];
    let location = residenceHistory[i][1];
    let rank = i+1;
    table += `<td>${rank}</td>`
    table += `<td>${name}</td>`
    table += `<td>${location}</td>`
    table += '</tr>';
  }  
  table += '  </table>';

  console.log(table);
  document.getElementById("mainTable").innerHTML = table;
}
function createTiles(){
  console.log('creating address tiles...');
  let tileList = '<div class="tile is-ancestor"><div class="tile is-vertical is-12" id="parentTile">';
  let rows = residenceHistory.length;
  for (i = 0; i<residenceHistory.length; i++){
    let name = residenceHistory[i][0];
    let location = residenceHistory[i][1];
    let tileID =  i+1;
    let tileName = "addressTile" + tileID;
    tileList += `<div class="tile" id = "${tileName}"><div class="tile is-child box"><figure class="image is-5x3">`;
    tileList += '<img src="https://www.whitehouse.gov/wp-content/uploads/2017/12/P20170614JB-0303-2-1920x720.jpg"></figure>';
    tileList += '<article class="media"><div class="media-left"><p class="title">$400,000</p></div>';
    tileList += '<div class="media-content"><div class="content"><p>4bds | 5 ba | 1,880 sqft</p></div></div></article>';     
    tileList += `<strong>${location}</strong></div>`;       
    tileList += '</div>';
  }  
  tileList+= '</div></div>';
  console.log(tileList);
  document.getElementById("mainTileList").innerHTML = tileList;
}

$(document).on("click", "div.tile" , function() {
  $(this).fadeOut();
});

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

