import CreateElement from "./CreateElement.js";
import dataIn from "./showData.js";

function isVisible(e) {
    return !!( e.offsetWidth || e.offsetHeight || e.getClientRects().length );
}

let data = dataIn
function getData() {
  //Filter to data after current day/current day
  data = dataIn.filter((index) => new Date() < new Date(index.premiere).setHours(23,59,59,999));
}
//let card1, card2, card3;
function render() {
    document.body.style.backgroundImage=`url(${data[0].backgroundPicture})`;
    CreateElement(0, data[0].cardPicture, data[0].episode);
    CreateElement(1, data[1].cardPicture, data[1].episode);
    CreateElement(2, data[2].cardPicture, data[2].episode);    

}
getData();
render();
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
function onClick() {
    if(window.getComputedStyle(card2).visibility !== "hidden") {
        card2.style.visibility = "hidden";
        card3.style.visibility = "hidden";
    } else{
        card2.style.visibility = "visible";
        card3.style.visibility = "visible";
    }
}
card1.addEventListener("click", onClick); 