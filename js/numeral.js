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
});S