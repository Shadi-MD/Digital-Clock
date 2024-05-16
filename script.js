const $ = document;

let hourSection = $.querySelector("#hour");
let minutSection = $.querySelector("#minute");
let secondSection = $.querySelector("#seconds");

function showTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hourSection.innerHTML = hours;
  if (hours < 10) {
    hourSection.innerHTML = `0${hours}`;
  }
  minutSection.innerHTML = minutes;
  if (minutes < 10) {
    minutSection.innerHTML = `0${minutes}`;
  }
  secondSection.innerHTML = seconds;
  if (seconds < 10) {
    secondSection.innerHTML = `0${seconds}`;
  }

  console.log(seconds);
}

setInterval(showTime, 1000);

