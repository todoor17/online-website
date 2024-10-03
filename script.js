const btnLeft = document.getElementById("btnLeft");
const btnRIght = document.getElementById("btnRight");

const image = document.getElementsByClassName("image")[0];
const imageContainer = document.getElementsByClassName("sliding-container")[0];
const link = document.getElementById("link");
const text = document.getElementsByClassName("text")[0];

const bjImgPath = "images/blackjack.png";
const calculatorImgPath = "images/calculator.png";
const ticTacToeImgPath = "images/tic-tac-toe.png";
const stopwatchImgPath = "images/stopwatch.png";
const bjPath = "blackjack/index.html";
const calculatorPath = "calculator/index.html";
const ticTacToePath = "tic-tac-toe/index.html";
const stopwatchPath = "stopwatch/index.html";

const images = [bjImgPath, calculatorImgPath, ticTacToeImgPath, stopwatchImgPath];
const paths = [bjPath, calculatorPath, ticTacToePath, stopwatchPath];

let firstTouchX = 0, lastTouchX = 0;

let count = 0;

btnLeft.addEventListener("click", function() {
    if (count == 0) {
        count = 3;
    } else {
        count--;
    }
    image.src = images[count % 4];
    link.href = paths[count % 4];
});

btnRight.addEventListener("click", function() {
    count++;
    image.src = images[count % 4];
    link.href = paths[count % 4];
});

document.addEventListener("DOMContentLoaded", function() {
    image.src = "images/blackjack.png";
});

imageContainer.addEventListener("touchstart", function(event) {
    const touch = event.changedTouches[0];
    //console.log("First touchX: " + touch.screenX);
    firstTouchX = touch.screenX;
});

imageContainer.addEventListener("touchend", function(event) {
    const touch = event.changedTouches[0];
    //console.log("Last touchX: " + touch.screenX);
    lastTouchX = touch.screenX;
    console.log ("First touch: " + firstTouchX + " Last touch: " + lastTouchX);

    if (firstTouchX > lastTouchX) { // swipe left
        if (count == 0) {
            count = 3;
        } else {
            count--;
        }
        image.src = images[count % 4];
        link.href = paths[count % 4];
    } else if (firstTouchX == lastTouchX) {
        
    }
    else { // swipe right
        count++;
        image.src = images[count % 4];
        link.href = paths[count % 4];
    } 
});

function toggleMenu(x) {
    x.classList.toggle("change");
    document.querySelector(".content-container").classList.toggle("shift")
}
