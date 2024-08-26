// alert("Welcome!! Let's play this classic game of Rock-Paper-Scissors");


function getComputerChoice(params) {
  let num = Math.random();
  if (num > 0 && num < 0.333) {
    return "ROCK";
  } else if (num > 0.333 && num < 0.666) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}
const score = document.querySelector("#score");

let humanScore = 0;
let computerScore = 0;

  const rockButton = document.querySelector("#rock");
  const paperButton = document.querySelector("#paper");
  const scissorsButton = document.querySelector("#scissors");

  const humanScr = document.querySelector("#humanScore");
  const compScr = document.querySelector("#computerScore");

  const reset = document.querySelector("#reset");
  const results = document.querySelector("#results");

  if (rockButton) {
    rockButton.addEventListener("click", () => {
      playRound("rock", getComputerChoice())
      scoreCheck();
    });
  }
  
  if (paperButton) {
    paperButton.addEventListener("click", () => {
      playRound("paper", getComputerChoice())
      scoreCheck();
    });
  }
  if (scissorsButton) {
    scissorsButton.addEventListener("click", () => {
      playRound("scissors", getComputerChoice())
      scoreCheck();
    });
  }


  if (reset) {
    reset.addEventListener("click",()=>{
      humanScore = 0;
      computerScore = 0;
      humanScr.textContent =  '0' ;
      compScr.textContent = '0' ;
      score.textContent = "Let's Play";
    })
  }
  function playRound(humanchoice, computerchoice) {
    humanchoice = humanchoice.toUpperCase();
    if (humanchoice === computerchoice) {
      results.textContent = "Its a tie!! Nobody gets a point ";
    } else if (humanchoice === "ROCK" && computerchoice === "PAPER") {
      computerScore++;
      results.textContent = "You Lose!!! Paper beats Rock ";
      humanScr.textContent = humanScore;
      compScr.textContent = computerScore;
    } else if (humanchoice === "ROCK" && computerchoice === "SCISSORS") {
      humanScore++;
      results.textContent = "You Win!!! Rock beats Scissors ";
      humanScr.textContent = humanScore;
      compScr.textContent = computerScore;
    } else if (humanchoice === "PAPER" && computerchoice === "ROCK") {
      humanScore++;
      results.textContent = "You Win!!! Paper beats Rock ";
      humanScr.textContent = humanScore;
      compScr.textContent = computerScore;
    } else if (humanchoice === "PAPER" && computerchoice === "SCISSORS") {
      computerScore++;
      results.textContent = "You Lose!!! Scissor beats Paper "; 
      humanScr.textContent = humanScore;
      compScr.textContent = computerScore;
    } else if (humanchoice === "SCISSORS" && computerchoice === "ROCK") {
      computerScore++;
      results.textContent = "You Lose!!! Rock beats Scissors ";
      humanScr.textContent = humanScore;
      compScr.textContent = computerScore;
    } else {
      humanScore++;
      results.textContent = "You Win!!! Scissors beats Paper ";
      humanScr.textContent = humanScore;
      compScr.textContent = computerScore;
    }
  }
  
  function scoreCheck(){

        if (humanScore===5 || computerScore===5) {
          if (humanScore < computerScore) {
            score.textContent =
            "Ah! You've Lost to the computer. Press the 'Reset' button to play again.";
            humanScore = 0;
            computerScore =0;
          } else if (humanScore === computerScore && humanScore !== 0) {
            score.textContent =
            "It's a tie!!. Press the 'Reset' button to play again";
            humanScore = 0;
            computerScore =0;
          } 
          else {
            score.textContent = "Congratulations! You've beat the computer!!. Press the 'Reset' button to play again.";
            humanScore =  0;
            computerScore = 0;
          }  
        }
  }




