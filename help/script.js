const btnLeft = document.getElementById("btnLeft");
const btnRIght = document.getElementById("btnRight");

const image = document.getElementsByClassName("image")[0];

const bjPath = "images/blackjack.png";
const calculatorPath = "images/calculator.png";
const ticTacToePath = "images/tic-tac-toe.png";
const stopwatch = "images/stopwatch.png";

const images = [bjPath, calculatorPath, ticTacToePath, stopwatch];

let count = 0;

btnLeft.addEventListener("click", function() {
    if (count == 0) {
        count = 3;
    } else {
        count--;
    }
    image.src = images[count % 4];
});

btnRight.addEventListener("click", function() {
    count++;
    image.src = images[count % 4];
});

document.addEventListener("DOMContentLoaded", function() {
    image.src = "images/blackjack.png";
});