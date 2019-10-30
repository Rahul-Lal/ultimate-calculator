/*
    - A JS Calculator
    - Link to Tutorial: https://www.youtube.com/watch?v=UW6wxEyEO7g&list=WL&index=8&t=0s
    - Date 20/10/2019
    - numeral button JS code: numeral.js
    - function JS code: function.js
*/

/*
    ALGORITHM:
    - Add value to 'textbox'
    - function button pressed
    - Acknowledge type of function via button
    - take first value from 'textbox'
    - Save first value in numOne variable
    - clears 'textbox'
    - Add new value to 'textbox'
    - Press equals
    - take second value from 'textbox'
    - Save second value in numTwo variable
    - checking which function is selected
    - Add/Subtract/Multiply/Divide numbers based on acknowledgement to create sum
    - Show sum on textbox
*/

alert('WELCOME');

// Two values of textbox
let numOne = "";
let numTwo = "";
let chosenFunction = 0;

const btnAddition = document.getElementById('btnAddition');
console.log(btnAddition);
const btnSubtraction = document.getElementById('btnSubtraction');
console.log(btnSubtraction);
const btnMultiplication = document.getElementById('btnMultiplication');
console.log(btnMultiplication);
const btnDivision = document.getElementById('btnDivision');
console.log(btnDivision);
const btnEquals = document.getElementById('btnEquals');
console.log(btnEquals);

let txtOutput = document.getElementById('txtOutput');

// Addition operations
let additionFunction = function () {
        chosenFunction = 1;
        numOne = document.getElementById('txtOutput');
        console.log('numOne: ' + numOne.value);
        txtOutput.innerText = '';
}

// Subtraction operations
let subtractionFunction = function () {
    alert('SUBTRACT');
    console.log('SUBTRACT')

    console.log('numOne: ' + numOne.value);
    console.log('numTwo: ' + numTwo.value);
    console.log('(numOne + numTwo): ' + numOne.value + numTwo.value);

    let sum = parseInt(numOne.value) - parseInt(numTwo.value);
    console.log('sum: ' + sum.toString());

    result.innerText = sum.toString();
    console.log('result.innerText: ' + sum.toString())
}

// Multiplication operations
let multiplicationFunction = function () {
    alert('MULTIPLY');
    console.log('MULTIPLY')

    console.log('numOne: ' + numOne.value);
    console.log('numTwo: ' + numTwo.value);
    console.log('(numOne + numTwo): ' + numOne.value + numTwo.value);

    let sum = parseInt(numOne.value) * parseInt(numTwo.value);
    console.log('sum: ' + sum.toString());

    result.innerText = sum.toString();
    console.log('result.innerText: ' + sum.toString())
}

// Division operations
let divisionFunction = function () {
    alert('DIVIDE');
    console.log('DIVIDE')

    console.log('numOne: ' + numOne.value);
    console.log('numTwo: ' + numTwo.value);
    console.log('(numOne + numTwo): ' + numOne.value + numTwo.value);

    let sum = parseInt(numOne.value) / parseInt(numTwo.value);
    console.log('sum: ' + sum.toString());

    result.innerText = sum.toString();
    console.log('result.innerText: ' + sum.toString())
}

let equalFunction = function () {
    let sum;
    numTwo = txtOutput;
    console.log('numTwo: ' + numTwo.value);
    console.log('(numOne & numTwo): ' + numOne.value + ' & ' + numTwo.value);

    if (chosenFunction === 1) {
        sum = parseInt(numOne.value) + parseInt(numTwo.value);
        console.log('sum: ' + sum.toString());
    }
    else {
        alert('Not plus')
    }

    txtOutput.innerText = sum.toString();
    console.log('result.innerText: ' + sum.toString());
}

btnAddition.addEventListener('click', additionFunction);
btnSubtraction.addEventListener('click', subtractionFunction);
btnMultiplication.addEventListener('click', multiplicationFunction);
btnDivision.addEventListener('click', divisionFunction);
btnEquals.addEventListener('click', equalFunction);
