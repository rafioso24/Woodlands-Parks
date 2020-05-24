function showModal(parkName){
    buildModal(parkName);
    document.getElementById('parkModal').classList.add('is-active');
    //html.classList.add('is-clipped');
}

function hideModal(){
    console.log("hiding modal");
    document.getElementById('parkModal').classList.remove('is-active');
    //html.classList.remove('is-clipped');
}

//Hide Model when area outside of it is clicked
window.onclick = function(event) {
    let modalElement = document.getElementById('parkModal');
    if (event.target.closest(".modal").length == null) {
        modalElement.classList.remove('is-active');
    }
  }

function buildModal(parkName){
    let currentPark = parks.find(element => element.name == parkName);
    let googleMapAddress = "https://www.google.com/maps?daddr=";
    googleMapAddress += currentPark.address.replace(/ /g, "+");
    let parkImage = currentPark.image;
    let yesIcon = '<span class="icon has-text-success"><i class="fas fa-check-square"></i></span>'
    let noIcon = ' <span class="icon has-text-danger"><i class="fas fa-ban"></i></span>'

    let modalHTML = "";
    modalHTML += `<div class="modal-background"></div>`;
    modalHTML += `<div class="modal-card">`;
    modalHTML += `  <header class="modal-card-head">`;
    modalHTML += `    <p class="modal-card-title">${parkName}</p>`;
    modalHTML += `    <button class="delete" aria-label="close" id="parkModalExit" onclick="hideModal()"></button>`;
    modalHTML += `  </header>`;
    modalHTML += `  <section class="modal-card-body">`;
    modalHTML += `    <p class="image is-2by1"><img src="${parkImage}" alt="";></p>`;

    let basketballIcon = (currentPark.basketball == true ? yesIcon : noIcon);
    let soccerIcon = (currentPark.soccer == true ? yesIcon : noIcon);
    let volleyballlIcon = (currentPark.volleyball == true ? yesIcon : noIcon);
    let tennislIcon = (currentPark.tennis == true ? yesIcon : noIcon);
    let diskIcon = (currentPark.disk  == true ? yesIcon : noIcon);
    let skateIcon = (currentPark.skate == true ? yesIcon : noIcon);
    let playgroundIcon = (currentPark.playground == true ? yesIcon : noIcon);
    let beltswingIcon = (currentPark.beltswing == true ? yesIcon : noIcon);
    let bucketswingIcon = (currentPark.bucketswing == true ? yesIcon : noIcon);
    let waterparkIcon = (currentPark.waterpark == true ? yesIcon : noIcon);
    let waterfountainIcon = (currentPark.waterfountain == true ? yesIcon : noIcon);
    let grillsIcon = (currentPark.grills == true ? yesIcon : noIcon);
    let pavilionIcon = (currentPark.pavilion == true ? yesIcon : noIcon);
    let bathroomsIcon = (currentPark.bathrooms == true ? yesIcon : noIcon);
    let lakeIcon = (currentPark.lake == true ? yesIcon : noIcon);
    let picnicIcon = (currentPark.picnic == true ? yesIcon : noIcon);
    let dogparkIcon = (currentPark.dogpark == true ? yesIcon : noIcon); console.log('dog park : ' + currentPark.dogpark);
    let parkinglotIcon = (currentPark.parkinglot== true ? yesIcon : noIcon); 


    modalHTML += `<div class="table-container">`
    modalHTML += `    <table class="table" style="border:none";>`
    modalHTML += `        <tbody>`
    modalHTML += `            <tr>`
    modalHTML += `                <td>${basketballIcon}Basketball</td>`
    modalHTML += `                <td>${soccerIcon}Soccer</td>`
    modalHTML += `                <td>${volleyballlIcon}Volleyball</td>`
    modalHTML += `                <td>${tennislIcon}Tennis</td>`
    modalHTML += `            </tr>        `
    modalHTML += `            <tr>`
    modalHTML += `                <td>${diskIcon}Disk Golf</td>`
    modalHTML += `                <td>${skateIcon}Skate Park</td>`
    modalHTML += `                <td>${playgroundIcon}Playground</td>`
    modalHTML += `                <td>${beltswingIcon}Belt Swings</td>`
    modalHTML += `            </tr>        `
    modalHTML += `            <tr>`
    modalHTML += `                <td>${bucketswingIcon}Bucket Swings</td>`
    modalHTML += `                <td>${waterparkIcon}Water Park</td>`
    modalHTML += `                <td>${waterfountainIcon}Water Fountain</td>`
    modalHTML += `                <td>${grillsIcon}Grills</td>`
    modalHTML += `            </tr>        `
    modalHTML += `            <tr>`
    modalHTML += `                <td>${pavilionIcon}Pavilion</td>`
    modalHTML += `                <td>${bathroomsIcon}Bathroom</td>`
    modalHTML += `                <td>${lakeIcon}Lake/Pond</td>`
    modalHTML += `                <td>${picnicIcon}Picnic Tables</td>`
    modalHTML += `            </tr>        `
    modalHTML += `            <tr>`
    modalHTML += `                <td>${dogparkIcon}Dog Park</td>`
    modalHTML += `                <td>${parkinglotIcon}Parking Lot</td>`
    modalHTML += `            </tr>        `
    modalHTML += `    </table>`
    modalHTML += `</div>`
    modalHTML += `  <footer class="modal-card-foot">`;
    modalHTML += `    <a href="${googleMapAddress}" target="_blank"><button class="button is-info">Get Directions</button> </a>`;
    modalHTML += `  </footer>`;
    modalHTML += `</div>`;

    document.getElementById("parkModal").innerHTML = modalHTML;

}