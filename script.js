const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const fakeBtn = document.querySelector('.fake');

let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;
 
function startTimer() {
    if (!isRunning) { 
        isRunning = true;
        startTime = Date.now () - elapsedTime;
        timerInterval = setInterval(updateTimer, 100);
}
}

function pauseTimer () {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
    }
}

function stopTimer () {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
        elapsedTime = 0;
        display.textContent = formatTime(elapsedTime);
    }
}

function updateTimer(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    display.textContent = formatTime (elapsedTime);
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor (milliseconds/1000);
    const hours = Math.floor(totalSeconds/3600);
    const minutes = Math.floor ((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String (hours). padStart(2,"0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
stopBtn.addEventListener("click", stopTimer);