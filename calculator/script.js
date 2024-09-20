let input = document.getElementById("input");
let operation = 0; // 1 dor addition, 2 for subtraction, 3 for multiplication, 4 for division
let overwritingFlag = 0;
let equalPressed = 0, additionPressed = 0, subtractionPressed = 0, multiplicationPressed = 0;
let divisionPressed = 0, invertPressed = 0, percentPressed = 0;
let pastInputs = [], pastResults = [];

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

function addNumber(character) {
    if (overwritingFlag && !invertPressed && !percentPressed) {
        input.value = character;
        overwritingFlag = 0;
    } else {
        if (character >= 0 && character <= 9) {
            if (input.value == "0") {
                input.value = character;
            } else if (input.value == "-0") {
                input.value = "-" + character;
            } else {
                input.value += character;
            }
        }
    }
}

function addComma() {
    if (input.value == "0") {
        input.value = "0.";
    } else if (input.value == "-0") {
        input.value = "-0.";
    } else {
        const contains = input.value.includes(".");
        if (!contains) {
            input.value += ".";
        }
    }
}

function addition() {
    setButtonsStyle("+");

    operation = 1;
    overwritingFlag = 1;
    pastInputs.push(input.value);

    let result;

    if (equalPressed || subtractionPressed || multiplicationPressed || divisionPressed) {
        pastResults.push(input.value);
    } else if (invertPressed || percentPressed) {
        console.log("eee");
        pastResults.push(input.value);
        pastInputs.push(input.value);
    } else {
        if (pastInputs.length == 1) {
            result = parseFloat(pastInputs[0]);
        } else {
            result = parseFloat(pastResults[pastResults.length - 1]) + parseFloat(pastInputs[pastInputs.length - 1]);
        }
        input.value = result;
        pastResults.push(result);
    }

    equalPressed = subtractionPressed = multiplicationPressed = divisionPressed = invertPressed = percentPressed = 0;
    additionPressed = 1;
}

function subtraction() {
    setButtonsStyle("-");

    operation = 2;
    overwritingFlag = 1;
    pastInputs.push(input.value);

    let result;

    if (equalPressed || additionPressed || multiplicationPressed || divisionPressed) {
        pastResults.push(input.value);
    } else if (invertPressed || percentPressed) {
        pastResults.push(input.value);
        pastInputs.push(input.value);
    } else { 
        if (pastInputs.length == 1) {
            result = parseFloat(pastInputs[0]);
        } else {
            result = parseFloat(pastResults[pastResults.length - 1]) - parseFloat(pastInputs[pastInputs.length - 1]);
        }
        input.value = result;
        pastResults.push(result);
    }

    equalPressed = additionPressed = multiplicationPressed = divisionPressed = invertPressed = percentPressed = 0;
    subtractionPressed = 1;
}

function multiplicationFunc() {
    setButtonsStyle("x");

    operation = 3;
    overwritingFlag = 1;
    pastInputs.push(input.value);

    let result;

    if (equalPressed || additionPressed || subtractionPressed || divisionPressed) {
        pastResults.push(input.value);
    } else if (invertPressed || percentPressed) {
        pastResults.push(input.value);
        pastInputs.push(input.value);
    } else {
        if (pastInputs.length == 1) {
            result = parseFloat(pastInputs[0]);
        } else {
            result = parseFloat(pastResults[pastResults.length - 1]) * parseFloat(pastInputs[pastInputs.length - 1]);
        }
        input.value = result;
        pastResults.push(result);
    }

    equalPressed = additionPressed = subtractionPressed = divisionPressed = invertPressed = percentPressed = 0;
    multiplicationPressed = 1;
}

function divisionFunc() {
    setButtonsStyle("/");

    operation = 4;
    overwritingFlag = 1;
    pastInputs.push(input.value);

    let result;

    if (equalPressed || additionPressed || subtractionPressed || multiplicationPressed) {
        pastResults.push(input.value);
    } else if (invertPressed || percentPressed) {
        pastResults.push(input.value);
        pastInputs.push(input.value);
    } else {
        if (pastInputs.length == 1) {
            result = parseFloat(pastInputs[0]);
        } else {
            if (pastInputs[pastInputs.length - 1] == 0 && pastInputs.length > 1) {
                result = "Error.";
                setButtonsStyle("C");
            } else {
                result = parseFloat(pastResults[pastResults.length - 1]) / parseFloat(pastInputs[pastInputs.length - 1]);
            }
        }
        input.value = result;
        pastResults.push(result);
    }

    equalPressed = additionPressed = subtractionPressed = multiplicationPressed = invertPressed = percentPressed = 0;
    divisionPressed = 1;
}

function getResult() {
    setButtonsStyle("=");
    const inputValue = input.value;
    let result = 0;
    switch (operation) {
        case 1:
            equalPressed = 1;
            pastInputs.push(inputValue);
            if (pastResults.length == 0) {
                result = parseFloat(pastInputs[pastInputs.length - 1]) + parseFloat(inputValue);
            } else {
                result = parseFloat(pastResults[pastResults.length - 1]) + parseFloat(inputValue);
            }
            input.value = result;
            pastResults.push(result);
            break;

        case 2:
            equalPressed = 1;
            pastInputs.push(input.value);

            if (pastResults.length == 0) {
                result = parseFloat(pastInputs[pastInputs.length - 1]) - parseFloat(inputValue);
            } else {
                result = parseFloat(pastResults[pastResults.length - 1]) - parseFloat(inputValue);
            }
            input.value = result;
            pastResults.push(result);
            break;

        case 3:
            equalPressed = 1;
            pastInputs.push(input.value);

            if (pastResults.length == 0) {
                result = parseFloat(pastInputs[pastInputs.length - 1]) * parseFloat(inputValue);
            } else {
                result = parseFloat(pastResults[pastResults.length - 1]) * parseFloat(inputValue);
            }
            input.value = result;
            pastResults.push(result);
            break;

        case 4:
            equalPressed = 1;
            pastInputs.push(input.value);

            if (input.value == 0) {
                result = "Error.";
                setButtonsStyle("C");
            } else {
                if (pastResults.length == 0) {
                    result = parseFloat(pastInputs[pastInputs.length - 1]) / parseFloat(inputValue);
                } else {
                    result = parseFloat(pastResults[pastResults.length - 1]) / parseFloat(inputValue);
                }
            }
            input.value = result;
            pastResults.push(result);
            break;
    
        default:
            break;
    }
}

function doOperation(operator) {
    switch (operator) {
        case "C":
            setButtonsStyle("C");
            activateButton(clear, 0);
            additionPressed = subtractionPressed = multiplicationPressed = 0;
            divisionPressed  = equalPressed = invertPressed = percentPressed = 0;
            input.value = "0";
            pastInputs = [];
            pastResults = [];
            break;
        case "+/-":
            if (input.value.charAt(0) != "-") {
                input.value = "-" + input.value;
            } else {
                let newValue = "";
                for (let i = 0; i < input.value.length - 1; i++) {
                    newValue += input.value.charAt(i + 1);
                }
                input.value = newValue;
            }

            overwritingFlag = 1;
            invertPressed = 1;
            equalPressed = additionPressed = subtractionPressed = multiplicationPressed = divisionPressed = percentPressed = 0;

            break;
        case "%":
            if (input.value != "0") {
                let newInputValue = 0;
                newInputValue = parseFloat(input.value) / 100;
                input.value = newInputValue;
            }

            overwritingFlag = 1;
            percentPressed = 1;
            equalPressed = additionPressed = subtractionPressed = multiplicationPressed = divisionPressed = inzzz = 0;

            break;
        case "+":
            addition();
            break;
        case "-":
            subtraction();
            break;
        case "x":
            multiplicationFunc();
            break;
        case "/":
            divisionFunc();
            break;
        case "=":
            getResult();
            break;
        default:
            break;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    input.value = 0;
})

function activateButton(button, isActive) {
    if (isActive) {
        button.style.backgroundColor = "white";
        button.style.color = "#fe9505";
    } else if (!isActive && button == clear) {
        button.style.backgroundColor = "#a5a5a5";
        button.style.color = "black";
    } else {
        button.style.backgroundColor = "#fe9505";
        button.style.color = "white";
    }
}

function setButtonsStyle(operation) {
    activateButton(clear, operation === "C");
    activateButton(plus, operation === "+");
    activateButton(minus, operation === "-");
    activateButton(multiplication, operation === "x");
    activateButton(division, operation === "/");
    activateButton(equal, operation === "=");
}

// function scaleText() {
//     const inputLength = input.value.length;
//     let size = 90 - 2.5 * inputLength;
//     input.style.fontSize = `${size}px`
//     console.log();
// }