const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const millisecondsEl = document.querySelector("#milliseconds")
const startbtn = document.querySelector("#startbtn")
const pausebtn = document.querySelector("#pausebtn")
const resumebtn = document.querySelector("#resumebtn")
const resetbtn = document.querySelector("#resetbtn")

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let ispaused = false;

startbtn.addEventListener("click", startTimer)
pausebtn.addEventListener("click", pauseTimer)
resumebtn.addEventListener("click", resumeTimer)
resetbtn.addEventListener("click", resetTimer)

function startTimer() {

  interval = setInterval(() => {

    if (!ispaused) {
      milliseconds += 10

      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      minutesEl.textContent = formatTime(minutes);
      secondsEl.textContent = formatTime(seconds);
      millisecondsEl.textContent = formatMilliseconds(milliseconds);
    }

  }, 10)

  startbtn.style.display = "none";
  pausebtn.style.display = "block";
}

function pauseTimer() {
  ispaused = true
  pausebtn.style.display = "none";
  resumebtn.style.display = "block";
}

function resumeTimer() {
  ispaused = false
  pausebtn.style.display = "block";
  resumebtn.style.display = "none";
}

function resetTimer() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  minutesEl.textContent = "00"
  secondsEl.textContent = "00"
  millisecondsEl.textContent = "000"

  startbtn.style.display = "block"
  pausebtn.style.display = "none"
  resumebtn.style.display = "none"
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}