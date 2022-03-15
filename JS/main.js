let eventDate = new Date("May 01 2022 00:00").getTime();

let eventCounter = setInterval(function () {
  let deffDate = eventDate - Date.now();
  if (deffDate <= 0) {
    document.querySelector(".count").style = "--main-color:red;"
    clearInterval(eventCounter);
  } else {
    let days = Math.floor(deffDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (deffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minuts = Math.floor((deffDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((deffDate % (1000 * 60)) / 1000);
    document.getElementById("event-timer-day").innerHTML =
      days < 10 ? "0" + days : days;
    document.getElementById("event-timer-hour").innerHTML =
      hours < 10 ? "0" + hours : hours;
    document.getElementById("event-timer-minute").innerHTML =
      minuts < 10 ? "0" + minuts : minuts;
    document.getElementById("event-timer-second").innerHTML =
      seconds < 10 ? "0" + seconds : seconds;
  }
}, 1000);

const toTopButton = document.getElementById("to-top");
toTopButton.onclick = () => window.scroll(0, 0);

window.addEventListener("scroll", function () {
  if (window.scrollY >= "655") {
    toTopButton.classList.add("to-top-show");
  } else {
    toTopButton.classList.remove("to-top-show");
  }
});

const otherLinksAnchor = document.getElementById("other-links-anchor");
const headerLinksContainer = document.querySelector(".links-container");
otherLinksAnchor.onclick = function () {
  headerLinksContainer.classList.toggle("show-links");
};