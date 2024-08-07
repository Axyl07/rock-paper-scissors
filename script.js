function getComputerChoice(params) {
    let num = Math.random();
    if (num>0&&num<0.3) {
        return "ROCK";
    }
    else if (num>0.3&&num<0.6) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }

}


function getHumanChoice() {
    let input = prompt("Enter One of the three choices : Rock,Paper,Scissors");
    input = input.toUpperCase();
    if (input==='ROCK'||input==='PAPER'||input==='SCISSORS') {
        return input;   
    }
    else return "Please Enter a Valid Choice"
}
function playGame() {
alert("Welcome!! Let's open the console by pressing ctrl+shift+j and play this classic game of Rock-Paper-Scissors")
let humanScore = 0;
let computerScore = 0;  
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

    
    for (let index = 1; index < 6; index++) {
        console.log('Round '+index);
        const humanSelection = getHumanChoice();
        if (humanSelection==="Please Enter a Valid Choice") {
            console.log("Invalid Choice!!")  
            break;
        }
        else{
        const computerSelection = getComputerChoice();
        console.log("You Played : " + humanSelection);
        console.log("Computer Played : "+ computerSelection);
        console.log(playRound(humanSelection,computerSelection));
        console.log("Your Score : " + humanScore);
        console.log("Computer's Score : " + computerScore);
        }
    }

    if (humanScore!==computerScore&&humanScore!==0&&computerScore!==0)
    console.log('Your final score after 5 rounds is ' + humanScore);
    if (humanScore<computerScore) {
        console.log("Ah! You've Lost to the computer.Press F5 or reload the page to play again");
    }
    else if(humanScore===computerScore&&humanScore!==0){
        console.log("It's a tie!!. Press F5 or reload the page to play again")
    }
    else if (humanScore===computerScore&&humanScore===0&&computerScore===0){
        console.log("Please reload the page and enter one of the 3 valid choices : Rock/Paper/Scissors")
    }
    else {
        console.log("Congratulations! You've beat the computer")
    }
}

console.log(playGame());