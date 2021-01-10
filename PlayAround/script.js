const clearEntry = document.querySelector('#cancel-entry');
const numbers = document.querySelectorAll('.number');
const functions = document.querySelectorAll('.function');
const equalsSign = document.querySelector('#equals');
const decimalSign = document.querySelector('#decimal');
const factorialSign = document.querySelector('#factorial');
const backspace = document.querySelector('#backspace');

//Variables
let display = document.querySelector('.numbers-display'); //bottom most recent numbers clicked   
let pastDisplay = document.querySelector('.past-display'); //last numbers clicked
let operatorDisplay = document.querySelector('.operator-display'); //shows operator 
let currentNumber = display.innerText; //current number is the number most recent
let displayValue = display.innerText; //value displayed in bottom/most recent box
let pastDisplayValue = pastDisplay.innerText; //value of last numbers
let operatorDisplayValue = operatorDisplay.innerText; //operator value
let heldValue;
let getInputValue = "";
let getInputFunction;
let calculatedValue;

//Functions
clearDisplays = () => {
    pastDisplay.innerText = "";
    operatorDisplay.innerText = "";
}

divideByZero = () => {
    if (operatorDisplay.innerText === '÷' && display.innerText === '0') {
        clearDisplays();
        display.innerText = "Cannot divide by zero. Result: Infinity! (sqRT -1)"
    }
}

factorial = number => {
	let answer = 1;
	if (number == 0 || number == 1) {
		return answer;
	} else {
		for (let i = number; i >= 1; i--) {
            answer = answer * i;
            getInputValue = answer;
		}  
		return display.innerText = getInputValue;
	}
}

isAlreadyPopulated = () => {
    if (pastDisplay.innerText.includes(heldValue) && operatorDisplay.innerText.includes(getInputFunction) && display.innerText.includes(getInputValue)) {
        calculate();
    }
}

calculate = () => {
    operatorDisplay.innerText === "+" ? 
        (display.innerText = Number(pastDisplay.innerText) + Number(display.innerText), clearDisplays(), getInputValue = display.innerText) :
    operatorDisplay.innerText === "-" ? 
        (display.innerText = Number(pastDisplay.innerText) - Number(display.innerText), clearDisplays(), getInputValue = display.innerText) :
    operatorDisplay.innerText === "×" ? 
        (display.innerText = Number(pastDisplay.innerText) * Number(display.innerText), clearDisplays(), getInputValue = display.innerText) :
    operatorDisplay.innerText === "e˟" ? 
        (display.innerText = Number(pastDisplay.innerText) ** Number(display.innerText), clearDisplays(), getInputValue = display.innerText) :
    operatorDisplay.innerText === "÷" && display.innerText === "0" ? 
        divideByZero() : 
    operatorDisplay.innerText === "÷" && display.innerText !== "0" ? 
        (display.innerText = Number(pastDisplay.innerText) / Number(display.innerText), clearDisplays(), getInputValue = display.innerText) :
        display.innerText;
}

//Events

numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.innerText = display.innerText + number.value;
        getInputValue = display.innerText;
        display.innerText.includes(getInputFunction) ? (operatorDisplay.innerText = getInputFunction, display.innerText = number.value) : display.innerText + "";
        if (display.innerText.length >= 12) {
            display.innerText = display.innerText.substring(0, 12);
            getInputValue = display.innerText.substring(0, 12);
        }
    })
})


functions.forEach(operation => {
    if (display.innerText !== undefined) {
        operation.addEventListener('click', () => {
            isAlreadyPopulated();
            display.innerText = "";
            getInputFunction = operation.value;
            heldValue = getInputValue
            pastDisplay.innerText = heldValue;
            operatorDisplay.innerText = getInputFunction;
            decimalSign.disabled = false;
        });
    }
});

//if decimal is clicked you can not click it again 
decimalSign.addEventListener('click', () => {
    decimalSign.disabled = true;
});

factorialSign.addEventListener('click', () => {
    getInputValue = Number(display.innerText);
    factorial(getInputValue);
});

//resets everything to blank and enables decimal to be pushed
clearEntry.addEventListener('click', () => {
    display.innerText = "";
    getInputValue = ""; 
    decimalSign.disabled = false;
    clearDisplays();
});

//calculates when = clicked, and if the display does not include a decimal, enables it, if it does include a decimal disable it 
equalsSign.addEventListener('click', () => {
    calculate();
    (!display.innerText.includes('.')) ? decimalSign.disabled = false : decimalSign.disabled = true;
});

backspace.addEventListener('click', () => {
    (!display.innerText.includes('.')) ? decimalSign.disabled = false : decimalSign.disabled = true;
    let displayLength = display.innerText.length;
    display.innerText = display.innerText.substring(0, displayLength - 1); //removes last thing in display 
    getInputValue = display.innerText;
});