//To run from command line type > node code.js

//Declare and Assign Global Variables
let apartment = 'The Biltmore'; 
let oldApartment = 'Waterford Springs';
let residenceHistory = 
  [ ['Casa Moas', 'Miami FL'], 
    ['Lakeside complex','Gainesville, FL'],
    ['Sledd Hall', 'Gainesville, FL'],
    ['Retreat at City Park', 'Houston, TX'],
    ['Keys Complex', 'Gainesville, FL'],
    ['MLK TownHome', 'Austin, TX'],
    ['St. Joseph House', 'Gainesville, FL'],
    ['Waterford Springs', 'Spring, TX'],
    ['The Biltmore', 'Woodlands, TX']
  ];
let historyLength = residenceHistory.length;
console.log('Length of residence History : ' + residenceHistory.length);
let errorMsg = `Invalid selection. Please choose a number between 1 and ${historyLength}.`;

//Logging Practice
console.log(residenceHistory);
myHistory(oldApartment, apartment);

//Set prompt message
document.getElementById("numberEntryPrompt").innerHTML = `Enter a Number 1 through ${historyLength} to look up location of residence`;

//HTML Button and Form Input
const submitButton = document.querySelector('button');
submitButton.addEventListener('click', retrieveLocation, false);

//Functions
function myHistory(apt1, apt2){     
	let result = `I used to live at ${apt1} but now I live at ${apt2}.`;     
	console.log(result);     
	return result; 
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
  let columns = 3;
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
