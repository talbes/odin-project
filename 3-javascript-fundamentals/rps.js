const game = document.getElementById("btn2");
game.addEventListener("click", play);
const picked = document.getElementById("picked");
const selection = Array.of("rock", "paper", "scissor");

function getComputersChoice() {
    let intBetweenZeroAndTwo = Math.floor(Math.random()*3)
    let choice = selection[intBetweenZeroAndTwo];
    console.log("Computer chose: " + choice);

    return choice;
}

function determineWinner(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
        return "draw";
    } else if(
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "scissor" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
        ) {
            return "player";
    } else {
        return "computer";
    } 
}

function getPlayerChoice() {
    let playerChoice = prompt("Pick rock, paper or scissor:");
    if(!selection.includes(playerChoice.toLowerCase())) {
        console.log(playerChoice + " invalid.");
        alert(playerChoice + " invalid");
        return undefined;
    } else {
        return playerChoice.toLowerCase();
    }
}

function play() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputersChoice();
    let winner = determineWinner(playerChoice, computerChoice);
    picked.textContent = `You played ${playerChoice}. Computer played ${computerChoice}. Winner is: ${winner}!`;
}