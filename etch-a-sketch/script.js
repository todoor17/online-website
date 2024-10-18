const input = document.getElementsByClassName("input")[0]; 
const table = document.getElementsByClassName("table")[0];
const reset = document.getElementsByClassName("reset")[0];

document.addEventListener("DOMContentLoaded", () => {
    setColor();
    addTableRows(30);
    addCells(30);
    choosenColor = "black";
    changeCellColor();
});

let choosenColor;

function setColor() {
    const colors = document.querySelectorAll(".color");
    colors.forEach(color => {
        color.addEventListener("click", () => {
            console.log(color.classList[1]);
            colors.forEach(c => c.style.border = "none");
            choosenColor = color.classList[1];
            color.style.border = "2px solid black";
        });
    });
}

let clickStart = false, eraserClicked = false;
let count = 0;

input.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        addTableRows(input.value);
        addCells(input.value);
        changeCellColor();
    }
});

function addTableRows(squaresPerSide) {
    clearPastRows();

    for (let i = 0; i < squaresPerSide; i++) {
        let row = document.createElement("div");
        row.classList.add("table-row");
        row.style.height = `${100 / squaresPerSide}%`;
        table.appendChild(row);
    }
}

function addCells(squaresPerSide) {
    const rows = document.querySelectorAll(".table-row");
    rows.forEach(row => {
        for (let i = 0; i < squaresPerSide; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = `${100 / squaresPerSide}%`;
            row.appendChild(cell);
        }
    });
}

function changeCellColor() {
    console.log(choosenColor);
    const cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.addEventListener("mousedown", (event) => {
            event.preventDefault();
            clickStart = true;
        });

        document.addEventListener("mouseup", () => {
            clickStart = false;
        });

        cell.addEventListener("mousemove", () => {
            if (clickStart) {
                cell.style.backgroundColor = choosenColor;
            }
        });

        cell.addEventListener("click", () => {
            cell.style.backgroundColor = choosenColor;
        });
    });
}

function clearPastRows() {
    const rows = document.querySelectorAll(".table-row");
    rows.forEach(row => {
        row.remove();
    });
}

reset.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
});
