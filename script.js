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
    else if (num>0.6&&num<1) {
        return "Scissors";
    }

}


function getHumanChoice(params) {
    let input = prompt("What's your Choice");
    return getComputerChoice();
}

console.log(getHumanChoice());
// console.log(getComputerChoice());