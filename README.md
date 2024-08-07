
# Rock Paper Scissors Game

## Description

This is a simple implementation of the classic game "Rock Paper Scissors" using HTML and JavaScript. The game allows the user to play against the computer for five rounds and keeps track of the scores.

## Features

- User vs. Computer gameplay
- Random computer choices
- Input validation for user choices
- Score tracking for both the user and the computer
- Display of results after each round and final score after 5 rounds

## How to Play

1. Open the `index.html` file in a web browser.
2. A prompt will appear asking for your choice: Rock, Paper, or Scissors.
3. Enter your choice and press Enter.
4. Open the browser console (Ctrl+Shift+J) to see the game progress and results.
5. The game will display the choices, round results, and the final score after 5 rounds.

## Files

- `index.html`: The HTML file that sets up the game interface and includes the JavaScript file.
- `script.js`: The JavaScript file that contains the game logic and functions.

## Game Logic

- The computer makes a random choice each round.
- The user is prompted to enter their choice.
- The game compares the user’s choice with the computer’s choice and determines the winner for that round.
- The game continues for 5 rounds, and the final scores are displayed in the console.

## Code Explanation

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissors</title>
</head>
<body>
    <h1>Rock-Paper-Scissors!!!</h1>
    <script src="script.js"></script>
</body>
</html>
```

### script.js

```javascript
function getComputerChoice() {
    let num = Math.random();
    if (num > 0 && num < 0.3) {
        return "ROCK";
    } else if (num > 0.3 && num < 0.6) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function getHumanChoice() {
    let input = prompt("Enter One of the three choices : Rock, Paper, Scissors");
    input = input.toUpperCase();
    if (input === 'ROCK' || input === 'PAPER' || input === 'SCISSORS') {
        return input;
    } else {
        return "Please Enter a Valid Choice";
    }
}

function playGame() {
    alert("Welcome!! Let's open the console by pressing ctrl+shift+j and play this classic game of Rock-Paper-Scissors");
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toUpperCase();
        computerChoice = computerChoice.toUpperCase();
        if (humanChoice === computerChoice) {
            return "It's a tie!! Nobody gets a point";
        } else if (humanChoice === 'ROCK' && computerChoice === 'PAPER') {
            computerScore++;
            return "You Lose!!! Paper beats Rock";
        } else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') {
            humanScore++;
            return "You Win!!! Rock beats Scissors";
        } else if (humanChoice === 'PAPER' && computerChoice === 'ROCK') {
            humanScore++;
            return "You Win!!! Paper beats Rock";
        } else if (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') {
            computerScore++;
            return "You Lose!!! Scissors beats Paper";
        } else if (humanChoice === 'SCISSORS' && computerChoice === 'ROCK') {
            computerScore++;
            return "You Lose!!! Rock beats Scissors";
        } else {
            humanScore++;
            return "You Win!!! Scissors beats Paper";
        }
    }

    for (let index = 1; index < 6; index++) {
        console.log('Round ' + index);
        const humanSelection = getHumanChoice();
        if (humanSelection === "Please Enter a Valid Choice") {
            console.log("Invalid Choice!!");
            break;
        } else {
            const computerSelection = getComputerChoice();
            console.log("You Played: " + humanSelection);
            console.log("Computer Played: " + computerSelection);
            console.log(playRound(humanSelection, computerSelection));
            console.log("Your Score: " + humanScore);
            console.log("Computer's Score: " + computerScore);
        }
    }

    if (humanScore !== computerScore && humanScore !== 0 && computerScore !== 0) {
        console.log('Your final score after 5 rounds is ' + humanScore);
    }
    if (humanScore < computerScore) {
        console.log("Ah! You've Lost to the computer. Press F5 or reload the page to play again.");
    } else if (humanScore === computerScore && humanScore !== 0) {
        console.log("It's a tie!!. Press F5 or reload the page to play again.");
    } else if (humanScore === computerScore && humanScore === 0 && computerScore === 0) {
        console.log("Please reload the page and enter one of the 3 valid choices: Rock/Paper/Scissors");
    } else {
        console.log("Congratulations! You've beat the computer.");
    }
}

console.log(playGame());
```

## Installation

No installation is required. Simply open the `index.html` file in your browser to start playing the game.

