import dataIn from "./showData.js";
import { extendCards } from "./renderCards.js"

let data = dataIn
function getData() {
  //Filter to data after current day/current day
  data = dataIn.filter((index) => new Date() < new Date(index.premiere).setHours(23,59,59,999));
}

function addElement(cardPicture, episode) {

    const newDiv = document.createElement("div");
    newDiv.className=`card`;
    newDiv.id="primary";
    newDiv.style=`width: ${730}px; margin-top: ${8}px`;

    //background img
    const newBackground = document.createElement("img");
    newBackground.src=cardPicture;
    newBackground.style = `width: 100%;`;

    //episode/movie
    const newText = document.createElement("h1");
    newText.textContent = episode;
    newText.style=`
        margin-top: 30px;
        font-size: 45px;
    `;

    newDiv.appendChild(newBackground);
    newDiv.appendChild(newText);

    document.getElementById("cardContainer").appendChild(newDiv);
    document.getElementById("primary").onclick = renderAllCards;  
    newText.id="episode";
}

function renderAllCards() {
    const card2 = document.getElementById("secondary1");
    console.log(card2);
    if (!card2) {
        extendCards(true);
    } else {
        var node = document.getElementById("secondary1");
        node.remove();
    }
    return false;
}   

function render() {
    addElement(data[0].cardPicture, data[0].episode);
    document.body.style.backgroundImage=`url(${data[0].backgroundPicture})`;
}

getData();
render();