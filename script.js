const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("mins");
const secEl = document.getElementById("secs");
const newYears = "1 Jan 2023";

function countdown() {
  const currentDate = new Date();
  const newYearsDate = new Date(newYears);
  const seconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(seconds / 3600 / 24);
  const hours = Math.floor(seconds / 3600 - days * 24);
  const minutes = Math.floor(seconds / 60 - (days * 24 * 60 + hours * 60));
  const sec = Math.floor(
    seconds - (days * 24 * 3600 + hours * 3600 + minutes * 60)
  );
  // console.log(days,hours,minutes,sec);
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minEl.innerHTML = minutes;
  secEl.innerHTML = sec;
}
countdown();
setInterval(countdown, 1000);
