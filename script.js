let humanScore =0;
let computerScore = 0;


function getComputerChoice(params) {
    let num = Math.random();
    if (num>0&&num<0.3) {
        return "Rock";
    }
    else if (num>0.3&&num<0.6) {
        return "Paper";
    }
    else {
        return "Scissors";
    }

}


function getHumanChoice() {
    let input = prompt("Enter One of the three choices : Rock,Paper,Scissors");
    input = input.toUpperCase();
    if (input==='ROCK'||input==='PAPER'||input==='SCISSORS') {
        return input;   
    }
    else return "Enter a Valid Choice"
}



function playRound(humanchoice,computerchoice) {
    humanchoice = humanchoice.toUpperCase();
    computerchoice = computerchoice.toUpperCase();
    if (humanchoice===computerchoice) {
        return "Its a tie!! Nobody gets a point"
    }
    else if (humanchoice === 'ROCK' && computerchoice === 'PAPER') {
        computerScore++;
        return "You Lose!!! Paper beats Rock"
    }
    else if (humanchoice === 'ROCK' && computerchoice === 'SCISSORS') {
        humanScore++;
        return "You Win!!! Rock beats Scissors"
    }
    else if (humanchoice === 'PAPER' && computerchoice === 'ROCK') {
        humanScore++;
        return "You Win!!! Paper beats Rock"
    }
    else if (humanchoice === 'PAPER' && computerchoice === 'SCISSORS') {
        computerScore++;
        return "You Lose!!! Scissor beats Paper"
    }
    else if (humanchoice === 'SCISSORS' && computerchoice === 'ROCK') {
        computerScore++;
        return "You Lose!!! Rock beats Scissors"
    }
    else {
        humanScore++;
        return "You Win!!! Scissors beats Paper"
    }   
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("You Played " + humanSelection);
console.log("Computer Played "+ computerSelection);
console.log(playRound(humanSelection, computerSelection));

