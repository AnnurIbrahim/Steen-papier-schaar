//span element
const buttons = document.querySelectorAll('button');
const steenButton = document.querySelector("#steen");
const papierButton = document.querySelector("#papier");
const schaarButton = document.querySelector("#schaar");
const humanOutput = document.querySelector("#human");
const computerOutput = document.querySelector("#computer");
const resultOutput = document.querySelector("#result");

steenButton.addEventListener("click", function() {
  humanOutput.innerHTML = "Steen";
  playGame("steen");
});

papierButton.addEventListener("click", function() {
  humanOutput.innerHTML = "Papier";
  playGame("papier");
});

schaarButton.addEventListener("click", function() {
  humanOutput.innerHTML = "Schaar";
  playGame("schaar");
});

function playGame(humanChoice) {
  const choices = ["steen", "papier", "schaar"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  computerOutput.innerHTML = computerChoice; // dit wijst de waarde van de variable computerchoice to aan inhoudt met de 
    //computeroutput van  
  if (humanChoice === computerChoice) { //Als de speler keuze gelijk aan de coputer keuze, dan wordt de resultaat gelijkspel weergegeven.
    resultOutput.innerHTML = "Gelijkspel!";
  } else if (
    (humanChoice === "steen" && computerChoice === "schaar") ||
    (humanChoice === "papier" && computerChoice === "steen") ||
    (humanChoice === "schaar" && computerChoice === "papier")
  ) {
    resultOutput.innerHTML = "Jij wint!";
  } else {
    resultOutput.innerHTML = "Computer wint!";
  }
}