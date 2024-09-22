let table = ["u", "u", "u", "u", "u", "u", "u", "u", "u"];
let winningPosition = 0, winningCharacter = "";
let count = 0;

const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const bar1 = document.querySelector(".win-horizontal-1");
const bar2 = document.querySelector(".win-horizontal-2");
const bar3 = document.querySelector(".win-horizontal-3");
const reset = document.querySelector(".btn");


function setSymbol(cell, symbol) {
    const xBar1 = cell.querySelector(".bar1");
    const xBar2 = cell.querySelector(".bar2");
    const circle = cell.querySelector(".circle");
    switch (symbol) {
        case "X":
            xBar1.style.opacity = "1";
            xBar2.style.opacity = "1";
            circle.style.opacity = "0";
            break;
        case "0":
            xBar2.style.opacity = "0";
            xBar2.style.opacity = "0";
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
                checkDraw();
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
                checkDraw();
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
                checkDraw();
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
                checkDraw();
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
                checkDraw();
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
                checkDraw();
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
                checkDraw();
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
                checkDraw();
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
                checkDraw();
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
            reset.style.opacity = "1";
            winningPosition = i + 1;
            winningCharacter = player;
            setWinningBar(winningPosition, player);
            noClick();
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

function checkDraw() {
    let isDraw = true;
    for (let i = 0; i < table.length; i++) {
        if (table[i] == "u") {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        reset.style.opacity = "1"
    }
    return isDraw;
}

function noClick() {
    cells.forEach(cell => {
        cell.style.pointerEvents = "none";
    });
}

const toggle = ["dummy", "show", "show", "show", "vertical1", "vertical2", "vertical3", "diagonal1", "diagonal2"];
const  winningBars = ["dummy", bar1, bar2, bar3, bar1, bar2, bar3, bar2, bar2];

function setWinningBar(winningPosition, character) {
    if (!checkDraw()) {
        setWinningBarColor(winningBars[winningPosition], character);
        winningBars[winningPosition].classList.toggle(toggle[winningPosition]);
    }
}

function setWinningBarColor(winningBar, character) {
    if (character == "X") {
        winningBar.style.backgroundColor = "#dd2317";
        winningBar.style.opacity = "1";
    } else {
        winningBar.style.backgroundColor = "#0d2a52";
        winningBar.style.opacity = "1";
    }
}

reset.addEventListener("click", function() {
    table = ["u", "u", "u", "u", "u", "u", "u", "u", "u"];
    count = 0;
    reset.style.opacity = "0";
    for (cell of cells) {
        const xBar1 = cell.querySelector(".bar1");
        const xBar2 = cell.querySelector(".bar2");
        const circle = cell.querySelector(".circle");
        xBar1.style.opacity = "0";
        xBar2.style.opacity = "0";
        circle.style.opacity = "0";
        cell.style.pointerEvents = "auto";
    }
    
    if (winningPosition != 0) {
        setWinningBar(winningPosition, winningCharacter);
    }
    winningPosition = 0;
    winningCharacter = "";
    document.body.style.setProperty("background-color", "white", "important");
});
