
let num1 = 0;
let num2 = 0;
const inputEL1 = document.getElementById("input-el1");
const inputEL2 = document.getElementById("input-el2");

function updateDisplay() {
    document.getElementById("num-1").textContent = num1;
    document.getElementById("num-2").textContent = num2;
}

function add() {
    let result = num1 + num2;
    document.getElementById("ans").textContent = "Answer: " + result;
    inputEL1.value = "";
    inputEL2.value = "";
}

function subtract() {
    let result = num1 - num2;
    document.getElementById("ans").textContent = "Answer: " + result;
    inputEL1.value = "";
    inputEL2.value = "";
}

function multiply() {
    let result = num1 * num2;
    document.getElementById("ans").textContent = "Answer: " + result;
    inputEL1.value = "";
    inputEL2.value = "";
}

function divide() {
    if (num2 !== 0) {
        let result = num1 / num2;
        document.getElementById("ans").textContent = "Answer: " + result;
    } else {
        document.getElementById("ans").textContent = "Error: Cannot divide by zero";
    }
    inputEL1.value = "";
    inputEL2.value = "";
}

// Event listeners for the input fields
inputEL1.addEventListener('change', (event) => {
    num1 = parseFloat(event.target.value);
    updateDisplay();

});

inputEL2.addEventListener('change', (event) => {
    num2 = parseFloat(event.target.value);
    updateDisplay();

});
