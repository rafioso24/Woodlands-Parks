function createTiles(parkArray){
    console.log('creating address tiles...');
    let tileList = '<div class="tile is-ancestor"><div class="tile is-vertical is-12" id="parentTile">';
    let rows = parkArray.length;
    //console.log("parkArray.length = "   + parkArray.length);
    for (i = 0; i< parkArray.length; i++){
      let name = parkArray[i].name;
      let address = parkArray[i].address;
      let image = parkArray[i].image;
      let village = parkArray[i].village;
  
      let tileID =  i+1;
      let tileName = "addressTile" + tileID;
      tileList += `<div class="tile" name= "childTile" id = "${address}" onclick="updateMap(this.id)">`;
      tileList += ` <div class="tile is-child box">`;
      tileList += `   <div class="media-content">`;
      tileList += `     <figure class="image is-5x3"><img src="${image}"></figure>`;
      tileList += `     <strong>${name}</strong>`;
      tileList += `     <p>${address}</p>`;
      tileList += `     <p>${village}</p>`;
      tileList += `   </div>`;
      tileList += ` </div>`;       
      tileList += `</div>`;
    }  
    tileList+= '</div></div>';
   // console.log(tileList);
    document.getElementById("mainTileList").innerHTML = tileList;
  }

//When a Tile is Clicked
/*
$(document).on("click", "div.tile" , function() {
  $(this).fadeOut();
});
*/