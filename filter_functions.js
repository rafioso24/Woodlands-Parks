function refreshParks(){
    // console.log('element.checked : ' + element.checked);
    // console.log('element.id : ' + element.id);
     filteredParks = parks.filter(function checkSelectedValues(park){
       //let checkBoxes = document.getElementByName('checkbox');
       
       //SPORTS FILTERS--------------------------------
       if(document.getElementById('basketball').checked && park.basketball != 1){
         console.log(park.name + "does not have basketball. It is getting filtered out.");
         return false;
       }
       if(document.getElementById('soccer').checked && park.soccer != 1){
         console.log(park.name + "does not have soccer. It is getting filtered out.");
         return false;
       }
       if(document.getElementById('volleyball').checked && park.volleyball != 1){
         console.log(park.name + "does not have volleyball. It is getting filtered out.");
         return false;
       }
       if(document.getElementById('tennis').checked && park.tennis != 1){
         console.log(park.name + "does not have tennis. It is getting filtered out.");
         return false;
       }
       if(document.getElementById('disk').checked && park.disk != 1){
         console.log(park.name + "does not have disk. It is getting filtered out.");
         return false;
       }
       if(document.getElementById('skate').checked && park.skate != 1){
         console.log(park.name + "does not have skate. It is getting filtered out.");
         return false;
       }
   
       //KIDS FILTERS--------------------------------
       if(document.getElementById('playground').checked && park.playground != 1){
         console.log(park.name + "does not have playground. It is getting filtered out.");
         return false;
       }
       if(document.getElementById('beltswing').checked && park.beltswing != 1){
         console.log(park.name + "does not have beltswing. It is getting filtered out.");
         return false;
       }
       if(document.getElementById('bucketswing').checked && park.bucketswing != 1){
         console.log(park.name + "does not have bucketswing. It is getting filtered out.");
         return false;
       }
       if(document.getElementById('waterpark').checked && park.waterpark != 1){
         console.log(park.name + "does not have waterpark. It is getting filtered out.");
         return false;
       }
       if(document.getElementById('bathrooms').checked && park.bathrooms != 1){
         console.log(park.name + "does not have bathrooms. It is getting filtered out.");
         return false;
       }
       if(document.getElementById('lake').checked && park.lake != 1){
         console.log(park.name + "does not have lake. It is getting filtered out.");
         return false;
       }
       if(document.getElementById('picnic').checked && park.picnic != 1){
         console.log(park.name + "does not have picnic. It is getting filtered out.");
         return false;
       }
       if(document.getElementById('dogpark').checked && park.dogpark != 1){
         console.log(park.name + "does not have dogpark. It is getting filtered out.");
         return false;
       }
       if(document.getElementById('parkinglot').checked && park.parkinglot != 1){
         console.log(park.name + "does not have parkinglot. It is getting filtered out.");
         return false;
       }
   
       //SIZE FILTERS--------------------------------
       let smallCheck = document.getElementById('small').checked;
       let mediumCheck = document.getElementById('medium').checked;
       let largeCheck = document.getElementById('large').checked;
   
       let numSelected = [smallCheck,mediumCheck,largeCheck].filter(Boolean).length;
   
       //If 2+ checkboxes are selected, combine filters
       if(numSelected >= 2){
         if(smallCheck && park.size == 'small') return true;
         if(mediumCheck && park.size == 'medium')return true;
         if(largeCheck && park.size == 'large')return true;
         return false;
       }
       //If 1 checkbox is selected, filter as usual
       else if(numSelected == 1){
         if(smallCheck && park.size != 'small')return false;
         if(mediumCheck && park.size != 'medium')return false;
         if(largeCheck && park.size != 'large')return false;
         return true;
       }
       //If no checkboxes are selected, show all data
       //no Action Required
   
       //VILLAGE FILTERS--------------------------------
       let aldenCheck = document.getElementById('alden').checked;
       let cochranCheck = document.getElementById('cochran').checked;
       let collegeCheck = document.getElementById('college').checked;
       let creeksideCheck = document.getElementById('creekside').checked;
       let grogansCheck = document.getElementById('grogans').checked;
       let indianCheck = document.getElementById('indian').checked;
       let pantherCheck = document.getElementById('panther').checked;
       let researchCheck = document.getElementById('research').checked;
       let sterlingCheck = document.getElementById('sterling').checked;
       let townCheck = document.getElementById('town').checked;
   
       let numVSelected = [aldenCheck,cochranCheck,collegeCheck,creeksideCheck,grogansCheck,indianCheck,pantherCheck,researchCheck,sterlingCheck,townCheck].filter(Boolean).length;
       //If 2+ checkboxes are selected, combine filters
       if(numVSelected >= 2){
         if(document.getElementById('alden').checked && park.village == 'alden')return true;
         if(document.getElementById('cochran').checked && park.village =='cochran')return true;
         if(document.getElementById('college').checked && park.village == 'college')return true;
         if(document.getElementById('creekside').checked && park.village == 'creekside')return true;
         if(document.getElementById('grogans').checked && park.village == 'grogans')return true;
         if(document.getElementById('indian').checked && park.village == 'indian')return true;
         if(document.getElementById('panther').checked && park.village == 'panther')return true;
         if(document.getElementById('research').checked && park.village == 'research')return true;
         if(document.getElementById('sterling').checked && park.village == 'sterling')return true;
         if(document.getElementById('town').checked && park.village == 'town')return true;
         return false;
       }
       //If 1 checkbox is selected, filter as usual
       else if(numVSelected == 1){
         if(document.getElementById('alden').checked && park.village != 'alden')return false;
         if(document.getElementById('cochran').checked && park.village != 'cochran')return false;
         if(document.getElementById('college').checked && park.village != 'college')return false;
         if(document.getElementById('creekside').checked && park.village != 'creekside')return false;
         if(document.getElementById('grogans').checked && park.village != 'grogans')return false;
         if(document.getElementById('indian').checked && park.village != 'indian')return false;
         if(document.getElementById('panther').checked && park.village != 'panther')return false;
         if(document.getElementById('research').checked && park.village != 'research')return false;
         if(document.getElementById('sterling').checked && park.village != 'sterling')return false;
         if(document.getElementById('town').checked && park.village != 'town')return false;
         return true;
       }
       //If no checkboxes are selected, show all data
       //no Action Required
   
     return true;
     });
     createTiles(filteredParks);
     //Need to add function here to Plot new parks on map and recenter map
     console.log("parks list refreshed.");
   }

   function clearFilters(){
    let checkBoxes = document.getElementsByName('checkbox');
    for (let i = 0; i < checkBoxes.length; i++){
      checkBoxes[i].checked = false;
    }
    createTiles(parks); //regenerates tiles with original, unfiltered list
    //Need to add function here to Plot new parks on map and recenter map
  }