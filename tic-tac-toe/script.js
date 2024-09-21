let table = ["u", "u", "u", "u", "u", "u", "u", "u", "u"];
let count = 0;

const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function setSymbol(cell, symbol) {
    const bar1 = cell.querySelector(".bar1");
    const bar2 = cell.querySelector(".bar2");
    const circle = cell.querySelector(".circle");

    switch (symbol) {
        case "X":
            bar1.style.opacity = "1";
            bar2.style.opacity = "1";
            circle.style.opacity = "0";
            break;
        case "0":
            bar1.style.opacity = "0";
            bar2.style.opacity = "0";
            circle.style.opacity = "1";
            break;
        default:
            break;
    }
}

const cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
    cell.addEventListener("click", function() {
        const clickedId = getIntId(cell.id);
        const index = clickedId - 1;
        console.log(table[index]);

        switch(cell.id) {
            case "one":
                if (table[index] == "u") {
                    if (count % 2 == 0) {
                        table[index] = "X";
                        setSymbol(cells[0], "X");
                    } else {
                        table[index] = "0";
                        setSymbol(cells[0], "0");
                    }
                    count++;
                }
                break;
            case "two":
                if (table[index] == "u") {
                    if (count % 2 == 0) {
                        table[index] = "X";
                        setSymbol(cells[1], "X");
                    } else {
                        table[index] = "0";
                        setSymbol(cells[1], "0");
                    }
                    count++;
                }
                break;
            case "three":
                if (table[index] == "u") {
                    if (count % 2 == 0) {
                        table[index] = "X";
                        setSymbol(cells[2], "X");
                    } else {
                        table[index] = "0";
                        setSymbol(cells[2], "0");
                    }
                    count++;
                }
                break;
            case "four":
                if (table[index] == "u") {
                    if (count % 2 == 0) {
                        table[index] = "X";
                        setSymbol(cells[3], "X");
                    } else {
                        table[index] = "0";
                        setSymbol(cells[3], "0");
                    }
                    count++;
                }
                break;
            case "five":
                if (table[index] == "u") {
                    if (count % 2 == 0) {
                        table[index] = "X";
                        setSymbol(cells[4], "X");
                    } else {
                        table[index] = "0";
                        setSymbol(cells[4], "0");
                    }
                    count++;
                }
                break;
            case "six":
                if (table[index] == "u") {
                    if (count % 2 == 0) {
                        table[index] = "X";
                        setSymbol(cells[5], "X");
                    } else {
                        table[index] = "0";
                        setSymbol(cells[5], "0");
                    }
                    count++;
                }
                break;
            case "seven":
                if (table[index] == "u") {
                    if (count % 2 == 0) {
                        table[index] = "X";
                        setSymbol(cells[6], "X");
                    } else {
                        table[index] = "0";
                        setSymbol(cells[6], "0");
                    }
                    count++;
                }
                break;
            case "eight":
                if (table[index] == "u") {
                    if (count % 2 == 0) {
                        table[index] = "X";
                        setSymbol(cells[7], "X");
                    } else {
                        table[index] = "0";
                        setSymbol(cells[7], "0");
                    }
                    count++;
                }
                break;
            case "nine":
                if (table[index] == "u") {
                    if (count % 2 == 0) {
                        table[index] = "X";
                        setSymbol(cells[8], "X");
                    } else {
                        table[index] = "0";
                        setSymbol(cells[8], "0");
                    }
                    count++;
                }
                break;
            case "default":
                break;
        }
    })
});

// document.addEventListener("DOMContentLoaded", function() {
//     setSymbol(cell1, "X");
//     setSymbol(cell2, "X");
// })

function getIntId(stringId) {
    for (let i = 0; i < 9; i++) {
        if (numbers[i] == stringId) {
            return i + 1;
        }
    }
}