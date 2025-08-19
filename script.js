let txtOutput = document.getElementById('txtOutput');

let numOne = null;
let numTwo = null;
let functionType = null;

function additionFunction() {
    numOne = parseFloat(txtOutput.value);
    functionType = 'Addition';
    txtOutput.value = "";
}

function subtractionFunction() {
    numOne = parseFloat(txtOutput.value);
    functionType = 'Subtraction';
    txtOutput.value = "";
}

function multiplicationFunction() {
    numOne = parseFloat(txtOutput.value);
    functionType = 'Multiplication';
    txtOutput.value = "";
}

function divisionFunction() {
    numOne = parseFloat(txtOutput.value);
    functionType = 'Division';
    txtOutput.value = "";
}

function equalFunction() {
    numTwo = parseFloat(txtOutput.value);

    let sum;
    if(functionType === 'Addition'){
        sum = numOne + numTwo;
    }
    else if(functionType === 'Subtraction'){
        sum = numOne - numTwo;
    }
    else if(functionType === 'Multiplication'){
        sum = numOne * numTwo;
    }
    else if(functionType === 'Division'){
        sum = numOne / numTwo;
    }

    txtOutput.value = sum;
}

// Attach events
btnAddition.addEventListener('click', additionFunction);
btnSubtraction.addEventListener('click', subtractionFunction);
btnMultiplication.addEventListener('click', multiplicationFunction);
btnDivision.addEventListener('click', divisionFunction);
btnEqual.addEventListener('click', equalFunction);
