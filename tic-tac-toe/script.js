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
                checkWin();
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
                checkWin();
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
                checkWin();
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
                checkWin();
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
                checkWin();
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
                checkWin();
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
                checkWin();
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
                checkWin();
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
                checkWin();
                break;
            case "default":
                break;
            }
    })
});

function getIntId(stringId) {
    for (let i = 0; i < 9; i++) {
        if (numbers[i] == stringId) {
            return i + 1;
        }
    }
}

const winningCombinations = [["0", "1", "2"], ["3", "4", "5"], ["6", "7", "8"], ["0", "3", "6"], 
                             ["1", "4", "7"], ["2", "5", "8"], ["0", "4", "8"], ["2", "4", "6"],];
                            
function checkWinningPlayer(player) {
    for (let i = 0; i < winningCombinations.length; i++) {
        if (table[winningCombinations[i][0]] == player && table[winningCombinations[i][1]] == player && table[winningCombinations[i][2]] == player) {
            console.log(player + " won!");
            setWinningBar(i + 1, player);
            noClick();
            console.log(winningCombinations.length)
            return 1;
        }
    } 
    return 0;
}

function checkWin() {
    if (!checkWinningPlayer("X")) {
        checkWinningPlayer("0");
    }
}

function noClick() {
    cells.forEach(cell => {
        cell.style.pointerEvents = "none";
    });
}

const bar1 = document.querySelector(".win-horizontal-1");
const bar2 = document.querySelector(".win-horizontal-2");
const bar3 = document.querySelector(".win-horizontal-3");

function setWinningBar(winningPosition, character) {
    switch (winningPosition) {
        case 1:
            setWinningBarColor(bar1, character);
            bar1.classList.toggle("show");
            break;
        case 2:
            setWinningBarColor(bar2, character);
            bar2.classList.toggle("show");
            break;
        case 3:
            setWinningBarColor(bar3, character);
            bar3.classList.toggle("show");
            break;
        case 4:
            setWinningBarColor(bar1, character);
            bar1.classList.toggle("vertical1");
            break;
        case 5:
            setWinningBarColor(bar2, character);
            bar2.classList.toggle("vertical2");
            break;
        case 6:
            setWinningBarColor(bar3, character);
            bar3.classList.toggle("vertical3");
            break;
        case 7:
            setWinningBarColor(bar2, character);
            bar2.classList.toggle("diagonal1");
            break;
        case 8:
            setWinningBarColor(bar2, character);
            bar2.classList.toggle("diagonal2");
            break;
    }
}

function setWinningBarColor(winningBar, character) {
    if (character == "X") {
        winningBar.style.backgroundColor = document.body.style.backgroundColor = "#dd2317";
    } else {
        winningBar.style.backgroundColor = document.body.style.backgroundColor = "#0d2a52";
    }
}