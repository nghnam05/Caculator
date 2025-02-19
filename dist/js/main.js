document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const numberButtons = document.querySelectorAll(".number-button");
    const operatorButtons = document.querySelectorAll(".operator-button");
    const clearButton = document.querySelector(".clear-button");
    const decimalButton = document.querySelector(".decimal-button");
    const memoryButton = document.querySelector(".memory-button");
    const memoryClearButton = document.querySelector(".memory-clear-button");

    let currentInput = "";
    let memoryValue = 0;

    numberButtons.forEach((button) => {
        button.addEventListener("click", function () {
            currentInput += button.getAttribute("data-number");
            display.value = currentInput;
        });
    });

    operatorButtons.forEach((button) => {
        button.addEventListener("click", function () {
            let operator = button.getAttribute("data-operator");
            
            if (operator === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (error) {
                    currentInput = "Error";
                }
            } else {
                currentInput += ` ${operator} `;
            }
            
            display.value = currentInput;
        });
    });

    decimalButton.addEventListener("click", function () {
        if (!currentInput.includes(".")) {
            currentInput += ".";
            display.value = currentInput;
        }
    });

    clearButton.addEventListener("click", function () {
        currentInput = "";
        display.value = "";
    });

    memoryButton.addEventListener("click", function () {
        memoryValue = parseFloat(currentInput) || 0;
    });

    memoryClearButton.addEventListener("click", function () {
        memoryValue = 0;
    });
});
