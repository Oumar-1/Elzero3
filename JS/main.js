const eventTimerSecond = document.getElementById("event-timer-second");
const eventTimerMinute = document.getElementById("event-timer-minute");
const eventTimerHour = document.getElementById("event-timer-hour");
const eventTimerDay = document.getElementById("event-timer-day");

console.log(eventTimerDay);
console.log(eventTimerHour);
console.log(eventTimerMinute);
console.log(eventTimerSecond);

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
