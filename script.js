var num1, num2, sum, result, resultObject;

// Functionality for addition button
plusButton = document.getElementById("btnAddition");
minusButton = document.getElementById("btnSubtaction");
multiplyButton = document.getElementById("btnMultiplication");
divideButton = document.getElementById("btnDivision");


minusFunction = function()
{
    sum = num1.value - num2.value;
}

multiplyFunction = function()
{
    sum = num1.value * num2.value;
}

divideFunction = function()
{
    sum = num1.value / num2.value;
}

plusFunction = function()
{

    sum = parseInt(num1.value) + parseInt(num2.value);
}

showResults = function(result)
{
    result = document.getElementById("h2Result");
    result.innerText = sum;
}

gatherNumerals = function()
{
    // Collecting values from both text boxes
    num1 = document.getElementById("txtNum01").value;
    num2 = document.getElementById("txtNum02").value;
    resultObject =  {
        "Number 1": num1,
        "Number 2": num2
    }
    return resultObject;
}

plusButton.addEventListener("click", plusFunction);
minusButton.addEventListener("click", minusFunction);
multiplyButton.addEventListener("click", multiplyFunction);
divideButton.addEventListener("click", divideFunction);