function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (array) {
	return array.reduce((total, number) => total + number
	,0) 
}

function multiply (array) {
	return array.reduce((total, number) => total * number) 
}

function power(num1, num2) {
	return Math.pow(num1, num2);
}

function factorial(num) {
	if (num == 0) return 1;

	let total = 1;
	for (let i = num; i > 0; i--) {
		total *= i;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}