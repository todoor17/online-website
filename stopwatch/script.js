let count = 0, reset = 0, start = 0;
let startTime = 0, currentTime = 0, miliSeconds = 0;

const miliseconds0 = document.getElementById("miliseconds0");
const miliseconds1 = document.getElementById("miliseconds1");
const miliseconds2 = document.getElementById("miliseconds2");
const seconds0 = document.getElementById("seconds0");
const seconds1 = document.getElementById("seconds1");
const minutes0 = document.getElementById("minutes0");
const minutes1 = document.getElementById("minutes1");

const text = [miliseconds0, miliseconds1, miliseconds2, seconds0, seconds1, minutes0, minutes1];

const button = document.getElementsByClassName("btn btn2")[0];

function startStopwatch() {
    if (start == 0) {
        startTime = Date.now();
        start = 1;
        setTimeout(startStopwatch, 1);
    } else {
        currentTime = Date.now();
        miliSeconds = currentTime - startTime;
        miliseconds0.textContent = miliSeconds % 10;
        miliseconds1.textContent = parseInt(miliSeconds % 100 / 10);
        miliseconds2.textContent = parseInt(miliSeconds % 1000 / 100);

        let seconds = parseInt(miliSeconds / 1000);
        seconds0.textContent = seconds % 10;
        seconds1.textContent = parseInt(seconds % 60 / 10);

        let minutes = parseInt(seconds / 60);
        minutes0.textContent = minutes % 10;
        minutes1.textContent = parseInt(minutes / 60) % 10;

        if (reset == 1) {
            reset = 0;
            start = 0;
            return;
        }
        setTimeout(startStopwatch, 1);
    }
}

button.addEventListener("click", function() {
    reset = 1;
});

function resetStopwatch() {
    text.forEach(element => {
        element.textContent = "0";
    });
    start = 0;
}