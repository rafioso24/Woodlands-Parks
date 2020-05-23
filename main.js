let parks = 
  [ 
    {
        "name" : "Northshore Park",
        "address" : "2505 Lake Woodlands Dr. The Woodlands, TX 77381",
        "village" : "panther",
        "image" : "https://s.hdnux.com/photos/43/72/65/9416052/3/920x920.jpg",
        "size" : "medium",
        "basketball" : "0",
        "soccer" : "0",
        "volleyball" : "1",
        "tennis" : "0",
        "disk" : "0",
        "skate" : "0",
        "playground" : "1",
        "beltswing" : "1",
        "bucketswing" : "1",
        "waterpark" : "0",
        "waterfountain" : "1",
        "grills" :"1",
        "pavilion" : "1",
        "bathrooms" : "1",
        "lake" : "1",
        "picnic" : "1",
        "dogpark" : "0",
        "parkinglot" : "1"
    },
    {
        "name" : "Tamarac park",
        "address" : "1300 N. Millbend Dr. The Woodlands, TX 77380",
        "village" : "grogans",
        "image" : "https://media-cdn.tripadvisor.com/media/photo-s/0a/f5/0c/69/tamarac-park.jpg",
        "size" : "medium",
        "basketball" : "1",
        "soccer" : "0",
        "volleyball" : "1",
        "tennis" : "1",
        "disk" : "0",
        "skate" : "1",
        "playground" : "1",
        "beltswing" : "1",
        "bucketswing" : "1",
        "waterpark" : "0",
        "waterfountain" : "1",
        "grills" :"1",
        "pavilion" : "1",
        "bathrooms" : "1",
        "lake" : "1",
        "picnic" : "1",
        "dogpark" : "1",
        "parkinglot" : "1"

    },
    {
        "name" : "Rob Fleming park",
        "address" : "6055 Creekside Forest Dr. The Woodlands, TX 77389",
        "village" : "creekside",
        "image" : "https://communityimpact.com/wp-content/uploads/2016/09/Rob-Fleming-Park.jpg",
        "size" : "large",
        "basketball" : "0",
        "soccer" : "0",
        "volleyball" : "0",
        "tennis" : "0",
        "disk" : "0",
        "skate" : "0",
        "playground" : "1",
        "beltswing" : "1",
        "bucketswing" : "1",
        "waterpark" : "0",
        "waterfountain" : "1",
        "grills" :"1",
        "pavilion" : "1",
        "bathrooms" : "1",
        "lake" : "1",
        "picnic" : "1",
        "dogpark" : "0",
        "parkinglot" : "1"
    }
  ];
let filteredParks = parks;
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