let numInput1 = "";
let operatorInput = "";
let numInput2 = "";
const arr = ["+", "-", "*", "/"];

let display = document.querySelector(".display");

let calcContainer = document.querySelector(".calc-content-container");
calcContainer.addEventListener("click", handleClick);

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "hehe ;)";
    }
    else {
        return num1 / num2;
    }
}

function operate(str1, op, str2) {
    if (str1 === "hehe ;)") {
        return "Click AC";
    }
    const dec1 = Number(str1);
    const dec2 = Number(str2);
    let result = "";
    switch (op) {
        case "+":
            result += +add(dec1, dec2).toFixed(2);
            return result;
        case "-":
            result += +subtract(dec1, dec2).toFixed(2);
            return result;
        case "*":
            result += +multiply(dec1, dec2).toFixed(2);
            return result;
        case "/":
            result += +divide(dec1, dec2).toFixed(2);
            return result;
    }
}

function displayValue(num) {
    if (num.toString().length > 9) {
        display.textContent = "overflow"
    }
    else {
        display.textContent = `${num}`;
    }
}

function handleClick(event) {
    let target = event.target;
    switch (target.className) {
        case "digit":
            if (operatorInput === "") {
                if (target.id === "period" && numInput1.includes(".") === false) {
                    numInput1 += target.textContent;
                }
                else if (target.id === "period" && numInput1.includes(".") === true) {
                    // Do nothing
                }
                else {
                    numInput1 += target.textContent;
                }
                displayValue(numInput1);
            }

            else {
                if (target.id === "period" && numInput2.includes(".") === false) {
                    numInput2 += target.textContent;
                }
                else if (target.id === "period" && numInput2.includes(".") === true) {
                    // Do nothing
                }
                else {
                    numInput2 += target.textContent;
                }
                displayValue(numInput2);
            }
            break;

        case "operator":
            if (target.id === "equals" && numInput2 !== "") {
                numInput1 = operate(numInput1, operatorInput, numInput2);
                displayValue(numInput1);
                operatorInput = "";
                numInput2 = "";
            }

            else if (target.id === "equals" && numInput2 === "") {
                if (numInput2 === "") {
                    displayValue("0");
                }
                else {
                    displayValue(numInput1);
                }
            }

            else if (arr.includes(target.textContent) && numInput2 !== "") {
                numInput1 = operate(numInput1, operatorInput, numInput2);
                displayValue(numInput1);
                operatorInput = target.textContent;
                numInput2 = "";
            }

            else if (numInput1 !== "") {
                operatorInput = target.textContent;
            }
            break;

        case "all-clear":
            numInput1 = "";
            operatorInput = "";
            numInput2 = "";
            displayValue("0");
            break;
    }
}