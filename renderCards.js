import dataIn from "./showData.js";
let data = dataIn
function getData() {
  //Filter to data after current day/current day
  data = dataIn.filter((index) => new Date() < new Date(index.premiere).setHours(23,59,59,999));
}

function addElement(index, cardPicture, episode) {

    const newDiv = document.createElement("div");
    newDiv.className=`card`;
    newDiv.id=`secondary`;
    newDiv.style=`width: ${730-(index*120)}px; margin-top: ${8-(index+1)*3}px`;

    //background img
    const newBackground = document.createElement("img");
    newBackground.src=cardPicture;
    newBackground.style = `width: 100%;`;

    //episode/movie
    const newText = document.createElement("h1");
    newText.textContent = episode;
    newText.style=`
        margin-top: ${30-((index)*6)}px;
        font-size: ${45-((index)*8)}px;
    `;

    newDiv.appendChild(newBackground);
    newDiv.appendChild(newText);

    document.getElementById("cardContainer").appendChild(newDiv);
    newText.id="episode";
}

function render() {
  data.slice(0, 3).map((element, index) => {
    if(index != 0) {
      addElement(index, element.cardPicture, element.episode);
      const thisElement = new Date(element.premiere);
    }
    index == 0 && (
        document.body.style.backgroundImage=`url(${element.backgroundPicture})`)
  });
}

export function extendCards(visible = false) {
  if(visible) {
    getData()
    render();
  }
}