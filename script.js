const $ = document;

let hourSection = $("#hour");
let minutSection = $("#minute");
let secondSection = $("#seconds");

function showTime() {
  let now = new Date();

  let hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  let minutes =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  let seconds =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

  // hourSection.innerHTML = hours;
  // if (hours < 10) {
  //   hourSection.innerHTML = `0${hours}`;
  // }
  // minutSection.innerHTML = minutes;
  // if (minutes < 10) {
  //   minutSection.innerHTML = `0${minutes}`;
  // }
  // secondSection.innerHTML = seconds;
  // if (seconds < 10) {
  //   secondSection.innerHTML = `0${seconds}`;
  // }

  // console.log(seconds);
}

setInterval(showTime, 1000);
