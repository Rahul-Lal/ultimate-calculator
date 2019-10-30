/*
    ALGORITHM:
    1.) Listen and capture all button events
    2.) When clicked, insert number into Textbox
*/
// let txtOutput = document.getElementById('txtOutput');

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

let numberOne = function() {
    txtOutput.innerText += '1';
}
let numberTwo = function() {
    txtOutput.innerText += '2';  
}
let numberThree = function() {
    txtOutput.innerText += '3';  
}
let numberFour = function() {
    txtOutput.innerText += '4';  
}
let numberFive = function() {
    txtOutput.innerText += '5';  
}
let numberSix = function() {
    txtOutput.innerText += '6';  
}
let numberSeven = function() {
    txtOutput.innerText += '7';  
}
let numberEight = function() {
    txtOutput.innerText += '8';  
}
let numberNine = function() {
    txtOutput.innerText += '9';  
}
let numberZero = function() {
    txtOutput.innerText += '0';  
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