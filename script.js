const chronometer = document.getElementById('chronometer');
const buttonStartPause = document.getElementById('button-start-pause');
const buttonReboot = document.getElementById('button-reboot');

let [hours, minutes, seconds] = [0, 0, 0];

let timeInterval;
let stopwatchStatus = 'paused';

function updateStopwatch() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    const secondsFormated = assingFormat(seconds);
    const minutesFormated = assingFormat(minutes);
    const hoursFormated = assingFormat(hours);

    chronometer.innerText = `${hoursFormated}:${minutesFormated}:${secondsFormated}`;
};


function assingFormat(timeUniti) {
    return timeUniti < 10 ? '0' + timeUniti : timeUniti

};

buttonStartPause.addEventListener('click', function() {
    stopwatchStatus = (stopwatchStatus === 'paused') ? 'running' : 'paused';
    buttonStartPause.innerHTML = (stopwatchStatus === 'running') ? '<i class="bi bi-pause-fill"></i>' : '<i class="bi bi-play-fill"></i>';
    buttonStartPause.classList.remove((stopwatchStatus === 'running') ? 'start' : 'paused');
    buttonStartPause.classList.add((stopwatchStatus === 'running') ? 'paused' : 'start');

    if (stopwatchStatus === 'running') {
        timeInterval = window.setInterval(updateStopwatch, 1000);
    } else {
        window.clearInterval(timeInterval);
    }
});


buttonReboot.addEventListener('click', function() {
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    chronometer.innerText = '00:00:00';
    buttonStartPause.innerHTML = '<i class="bi bi-play-fill"></i>';
    buttonStartPause.classList.remove('paused');
    buttonStartPause.classList.add('start');
    stopwatchStatus = 'paused';
})