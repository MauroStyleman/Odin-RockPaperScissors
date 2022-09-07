const computerOptions = ["Rock", "Paper", "Scissors"];
let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    const choiceP = document.querySelector('#ChoiceP')
    const choiceC = document.querySelector('#ChoiceC')
    choiceP.textContent = playerSelection;
    choiceC.textContent = computerSelection;
    const score = document.querySelector('#Result')
    if ((playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")) {


        score.textContent = `You won, ${playerSelection} beats ${computerSelection}`
        playerPoints++;
        const points = document.querySelector('#P_Win')
        points.textContent = `${playerPoints}`
    } else if (playerSelection === computerSelection) {
        score.textContent = "tie"
    } else {
        computerPoints++;
        score.textContent = `You lost, ${computerSelection} beats ${playerSelection}`
        const points = document.querySelector('#C_Win')
        points.textContent = `${computerPoints}`
    }
    if (playerPoints === 5 || computerPoints === 5) {
        document.querySelector('#R_Button').disabled = true
        document.querySelector('#P_Button').disabled = true
        document.querySelector('#S_Button').disabled = true
        if (playerPoints > computerPoints) {
            score.textContent = "Victory :)"
        } else {
            score.textContent = "Defeated :("
        }
    }
    return playerSelection && computerSelection;
}

function game() {
    document.querySelector('#R_Button').addEventListener('click', () => playRound('rock', getComputerChoice()));
    document.querySelector('#P_Button').addEventListener('click', () => playRound('paper', getComputerChoice()));
    document.querySelector('#S_Button').addEventListener('click', () => playRound('scissors', getComputerChoice()));
    document.querySelector('#Reset_Button').addEventListener('click', () => location.reload());

}

game();