The goal for this exercise is to create a calculator that does the following:

add, subtract, get the sum, multiply, get the power, and find the factorial

In order to do this please fill out each function with your solution. Make sure to return the value so you can test it in Jasmine! To see the expected value
take a look at the spec file that houses the Jasmine test cases.



function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (array) {

	return array.reduce((total, num) => total + num, 0);
}

function multiply (array) {

	return array.length ? array.reduce((accumulator, nextNum) => accumulator * nextNum) : 0;
}

function power(num1, num2) {
	return Math.pow(num1, num2);
}

function factorial(n) {

	if(n == 0) return 1;

	let product = 1;
	for (let i = n; i > 0; i-- ) {
		product *= i;
	}

	return product;
	
}


function factorial(num) {
	if (num == 0) return 1;

	let total = 1;
	for (let i = num; i > 0; i--) {
		total *= i;
	}
	return total;
}