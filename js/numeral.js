let inpOutput = document.getElementById('txtOutput');

/*
    ALGORITHM:
    1.) Listen and capture all button events
    2.) When clicked, insert number into 'inpOutput'
*/


document.querySelectorAll(".numeral").forEach(btn => {
  btn.addEventListener("click", () => {
    inpOutput.value += btn.textContent;
  });
});

function randomNumberFunction() {
    const randomNum = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    inpOutput.value = randomNum;
}

function piFunction() {
    inpOutput.value = Math.PI.toFixed(10); // Display Pi up to 10 decimal places
}