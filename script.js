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

  hourSection.html(hours);
  minutSection.html(minutes);
  secondSection.html(seconds);
}

setInterval(showTime, 1000);
