function timeUpdate() {
    let hour = document.querySelectorById('hours').innerHTML;
    let min = document.querySelectorById('minutes').innerHtml;
    let sec = document.querySelectorById('seconds' ).innerHtml;
}
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;
let isRunning = false;
function updateTime() {
    if (seconds === 59) {
        seconds = 0;
        if (minutes === 59) {
            minutes = 0;
            hours++;
        } else {
            minutes++;
        }
    } else {
        seconds++;
    }
    // console.log(`${hours} : ${minutes} : ${seconds}`);
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#seconds').innerHTML = seconds;
}
function start() {
    if (isRunning === false) {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
    }
}

function stop() {
    clearInterval(timer);
    isRunning = false;
}

function reset(){
    seconds = 0;
    hours = 0;
    minutes = 0;
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#seconds').innerHTML = seconds;
    stop();
  
}