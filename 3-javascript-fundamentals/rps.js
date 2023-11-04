const buttons = document.querySelectorAll("#button-container button");
buttons.forEach( (b) => b.addEventListener('click', e => play(e.target)) );

const selection = Array.of("rock", "paper", "scissors");

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
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
        ) {
            return "player";
    } else {
        return "computer";
    } 
}

function play(t) {
    let playerChoice = t.nodeName === 'IMG' ? t.parentElement.id : t.id;
    console.log(`You chose ${playerChoice}`);
    let computerChoice = getComputersChoice();
    if(selection.includes(playerChoice)) {
        let winner = determineWinner(playerChoice, computerChoice);
        picked.textContent = `You played ${playerChoice}. Computer played ${computerChoice}. Winner is: ${winner}!`;
    } else {
        picked.textContent = "Undefined input. Please enter rock, paper or scissor."
    }
}