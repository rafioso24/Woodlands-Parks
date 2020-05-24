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
let gpsArray = null;
let myMap = null;
createMap();