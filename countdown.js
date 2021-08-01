import dataIn from "./showData.js";
let data = dataIn
function getData() {
  //Filter to data after current day/current day
  data = dataIn.filter((index) => new Date() < new Date(index.premiere).setHours(23,59,59,999));
}

function renderCountdown() {
  // Set the date we're counting down to
  var countDownDate = new Date(
    data[0].premiere
  );

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = "Release in: " +
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "NOW";
    }
  }, 1000);
}

getData();
renderCountdown();