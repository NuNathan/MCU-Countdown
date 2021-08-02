export default function CreateElement(index, cardPicture, episode) {

    const newDiv = document.createElement("div");
    newDiv.className=`card`;
    newDiv.id=`card${index+1}`;
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

    return newDiv;
}