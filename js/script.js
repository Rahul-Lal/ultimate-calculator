let txtOutput = document.getElementById('txtOutput');

let numOne = null;
let numTwo = null;
let functionType = null;

function clearFunction() {
    txtOutput.value = "";
    numOne = null;
    numTwo = null;
    functionType = null;

    console.log("numOne: " + numOne);
    console.log("numTwo: " + numTwo);
    console.log("functionType: " + functionType);
}

function additionFunction() {
    numOne = parseFloat(txtOutput.value);
    console.log("numOne: " + numOne);
    functionType = 'Addition';
    console.log("functionType: " + functionType);
    txtOutput.value = "";
}

function subtractionFunction() {
    numOne = parseFloat(txtOutput.value);
    console.log("numOne: " + numOne);
    functionType = 'Subtraction';
    console.log("functionType: " + functionType);
    txtOutput.value = "";
}

function multiplicationFunction() {
    numOne = parseFloat(txtOutput.value);
    console.log("numOne: " + numOne);
    functionType = 'Multiplication';
    console.log("functionType: " + functionType);
    txtOutput.value = "";
}

function divisionFunction() {
    numOne = parseFloat(txtOutput.value);
    console.log("numOne: " + numOne);
    functionType = 'Division';
    console.log("functionType: " + functionType);
    txtOutput.value = "";
}

function equalFunction() {
    numTwo = parseFloat(txtOutput.value);
    console.log("numTwo: " + numTwo);

    let sum;

    if(functionType === 'Addition'){
        sum = numOne + numTwo;
        console.log("sum: " + sum);
    }
    else if(functionType === 'Subtraction'){
        sum = numOne - numTwo;
        console.log("sum: " + sum);
    }
    else if(functionType === 'Multiplication'){
        sum = numOne * numTwo;
        console.log("sum: " + sum);
    }
    else if(functionType === 'Division'){
        sum = numOne / numTwo;
        console.log("sum: " + sum);
    }

    txtOutput.value = sum;
}

// Attach events
btnAddition.addEventListener('click', additionFunction);
btnSubtraction.addEventListener('click', subtractionFunction);
btnMultiplication.addEventListener('click', multiplicationFunction);
btnDivision.addEventListener('click', divisionFunction);
btnEqual.addEventListener('click', equalFunction);
