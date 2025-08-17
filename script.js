/*
    - A JS Calculator
    - Link to Tutorial: https://www.youtube.com/watch?v=UW6wxEyEO7g&list=WL&index=8&t=0s
    - Date 20/10/2019
*/

/*
    ALGORITHM:
    1.) Listen and capture all button events
    2.) When event occurs, depending on button, do +, -, x, /
    3.) For any operation, I have to get values from text boxes too
    4.) 
*/

alert('WELCOME');
let txtOne = document.getElementById('txtOne');
let txtTwo = document.getElementById('txtTwo');
let txtOutput = document.getElementById('txtOutput');

//Equal operations
btnEqual = document.getElementById('btnEqual');
console.log(btnEqual);

let equalFunction = function () {
    alert('EQUAL');
    console.log('EQUAL');
    let numTwo = document.getElementById('txtOutput');
    console.log('numTwo: ' + numTwo.value);
    console.log('(numOne + numTwo): ' + numOne.value + numTwo.value);

    let sum = parseInt(numOne.value) / parseInt(numTwo.value);
    console.log('sum: ' + sum.toString());

    let result = document.getElementById('txtOutput');
    result.innerText = sum.toString();
    console.log('result.innerText: ' + sum.toString())
}

// Addition operations
btnAddition = document.getElementById('btnAddition');
console.log(btnAddition);

let additionFunction = function () {
    alert('ADD');
    console.log('ADD');
    
    numOne = document.getElementById('txtOutput');
    console.log('numOne: ' + numOne.value);
    txtOutput.innerHTML = "";

    let sum = parseInt(numOne.value) + parseInt(numTwo.value);
    console.log('sum: ' + sum.toString());

    let result = document.getElementById('txtOutput');
    result.innerText = sum.toString();
    console.log('result.innerText: ' + sum.toString())
}

btnAddition.addEventListener('click', additionFunction);

// Subtraction operations
btnSubtraction = document.getElementById('btnSubtraction');
console.log(btnSubtraction);

let subtractionFunction = function () {
    alert('SUBTRACT');
    console.log('SUBTRACT')

    let numOne = document.getElementById('txtOne');
    console.log('numOne: ' + numOne.value);
    let numTwo = document.getElementById('txtTwo');
    console.log('numTwo: ' + numTwo.value);
    console.log('(numOne + numTwo): ' + numOne.value + numTwo.value);

    let sum = parseInt(numOne.value) - parseInt(numTwo.value);
    console.log('sum: ' + sum.toString());

    let result = document.getElementById('txtOutput');
    result.innerText = sum.toString();
    console.log('result.innerText: ' + sum.toString())
}

btnSubtraction.addEventListener('click', subtractionFunction);

// Multiplication operations
btnMultiplication = document.getElementById('btnMultiplication')
console.log(btnMultiplication);

let multiplicationFunction = function () {
    alert('MULTIPLY');
    console.log('MULTIPLY')

    let numOne = document.getElementById('txtOne');
    console.log('numOne: ' + numOne.value);
    let numTwo = document.getElementById('txtTwo');
    console.log('numTwo: ' + numTwo.value);
    console.log('(numOne + numTwo): ' + numOne.value + numTwo.value);

    let sum = parseInt(numOne.value) * parseInt(numTwo.value);
    console.log('sum: ' + sum.toString());

    let result = document.getElementById('txtOutput');
    result.innerText = sum.toString();
    console.log('result.innerText: ' + sum.toString())
}

btnMultiplication.addEventListener('click', multiplicationFunction);

// Division operations
btnDivision = document.getElementById('btnDivision')
console.log(btnDivision);

let divisionFunction = function () {
    alert('DIVIDE');
    console.log('DIVIDE')

    let numOne = document.getElementById('txtOne');
    console.log('numOne: ' + numOne.value);
    let numTwo = document.getElementById('txtTwo');
    console.log('numTwo: ' + numTwo.value);
    console.log('(numOne + numTwo): ' + numOne.value + numTwo.value);

    let sum = parseInt(numOne.value) / parseInt(numTwo.value);
    console.log('sum: ' + sum.toString());

    let result = document.getElementById('txtOutput');
    result.innerText = sum.toString();
    console.log('result.innerText: ' + sum.toString())
}

btnDivision.addEventListener('click', divisionFunction);