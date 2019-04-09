var num1, num2, sum, result;

// Functionality for addition button
plusButton = document.getElementById("btnAddition");
minusButton = document.getElementById("btnSubtaction");
multiplyButton = document.getElementById("btnMultiplication");
divideButton = document.getElementById("btnDivision");

// Collecting values from both text boxes
num1 = document.getElementById("txtNum01");
num2 = document.getElementById("txtNum02");


plusFunction = function()
{
    sum = num1.value + num2.value;
    
    result = document.getElementById("h2Result");
    result.innerText = sum;
}

minusFunction = function()
{
    sum = num1.value - num2.value;
    
    result = document.getElementById("h2Result");
    result.innerText = sum;
}

multiplyFunction = function()
{
    sum = num1.value * num2.value;
    
    result = document.getElementById("h2Result");
    result.innerText = sum;
}

divideFunction = function()
{
    sum = num1.value / num2.value;
    
    result = document.getElementById("h2Result");
    result.innerText = sum;
}

plusButton.addEventListener("click", plusFunction);
minusButton.addEventListener("click", minusFunction);
multiplyButton.addEventListener("click", multiplyFunction);
divideButton.addEventListener("click", divideFunction);