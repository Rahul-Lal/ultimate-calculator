let inpOutput = document.getElementById('txtOutput');

/*
    ALGORITHM:
    1.) Listen and capture all button events
    2.) When clicked, insert number into 'inpOutput'
*/

let btnOne = document.getElementById('btnOne');
let btnTwo = document.getElementById('btnTwo');
let btnThree = document.getElementById('btnThree');
let btnFour = document.getElementById('btnFour');
let btnFive = document.getElementById('btnFive');
let btnSix = document.getElementById('btnSix');
let btnSeven = document.getElementById('btnSeven');
let btnEight = document.getElementById('btnEight');
let btnNine = document.getElementById('btnNine');
let btnZero = document.getElementById('btnZero');

function numberOne() {
    inpOutput.value += "1";
}

function numberTwo() {
    inpOutput.value += "2";
}

function numberThree() {
    inpOutput.value += "3";
}

function numberFour() {
    inpOutput.value += "4";
}

function numberFive() {
    inpOutput.value += "5";
}

function numberSix() {
    inpOutput.value += "6";
}

function numberSeven() {
    inpOutput.value += "7";
}

function numberEight() {
    inpOutput.value += "8";
}

function numberNine() {
    inpOutput.value += "9";
}

function numberZero() {
    inpOutput.value += "0";
}

btnOne.addEventListener('click', numberOne);
btnTwo.addEventListener('click', numberTwo);
btnThree.addEventListener('click', numberThree);
btnFour.addEventListener('click', numberFour);
btnFive.addEventListener('click', numberFive);
btnSix.addEventListener('click', numberSix);
btnSeven.addEventListener('click', numberSeven);
btnEight.addEventListener('click', numberEight);
btnNine.addEventListener('click', numberNine);
btnZero.addEventListener('click', numberZero);
