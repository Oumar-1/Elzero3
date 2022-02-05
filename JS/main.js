const eventTimerSecond = document.getElementById("event-timer-second");
const eventTimerMinute = document.getElementById("event-timer-minute");
const eventTimerHour = document.getElementById("event-timer-hour");
const eventTimerDay = document.getElementById("event-timer-day");

function decresingNumber() {
  eventTimerSecond.innerHTML -= 1;
  if (eventTimerSecond.innerHTML == "0") {
    eventTimerMinute.innerHTML -= 1;
    eventTimerSecond.innerHTML = 60;
  }
  if (eventTimerMinute.innerHTML == "0") {
    eventTimerHour.innerHTML -= 1;
    eventTimerMinute.innerHTML = 60;
  }
  if (eventTimerHour.innerHTML == "0") {
    eventTimerDay.innerHTML -= 1;
    eventTimerHour.innerHTML = 24;
  }
  if (eventTimerDay.innerHTML == "-1") {
    eventTimerSecond.innerHTML = "0";
    eventTimerMinute.innerHTML = "0";
    eventTimerHour.innerHTML = "0";
    eventTimerDay.innerHTML = "0";
    clearInterval(eventTimer);
  }
}
let eventTimer = setInterval(decresingNumber, 1000);

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
