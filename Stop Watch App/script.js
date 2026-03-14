const timeShow = document.querySelector('#time');
let interval = null;
let seconds = 0;
let minutes = 0;

function display() {
    let second = seconds % 60;
    minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    // first let's check for seconds
    if (second < 10) {
        second = '0' + second;
    }
    if (minutes < 10) { // this is for minutes
        minutes = '0' + minutes;
    } else if (minutes > 59) {
        minutes = minutes % 60;
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    timeShow.innerHTML = `${hours}:${minutes}:${second}` 
}

function timer() {
    seconds++;
    display()
}

function startClock() {
    if (interval) stopClock()
        interval = setInterval(timer, 1000);
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    seconds = 0;
    stopClock()
    display()
}