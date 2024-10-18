const wheel = document.getElementsByClassName("wheel")[0];
const input = document.getElementsByClassName("input")[0];
const shuffle = document.getElementById("shuffle");
const spin = document.getElementById("spin");
const segment = document.querySelector(".segment");

const degrees = ["", 360, 180, 120, 90, 72, 60, 51.43, 45];

let rows = [];

let count = 0;

input.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        rows = input.value.split("\n").filter(row => (row != ""));
        setSegments(rows)
        checkSize(rows);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    input.value = "";
})

function checkSize(rows) {
    if (rows.length >= 8) {
        alert("Roulette max size is 8!")
        return;
    }
}

function setSegments(rows) {
    for (let i = 1; i <= 8; i++) {
        if (i == rows.length) {
            segment.className = `segment segment${i}`;
        }
    }
}