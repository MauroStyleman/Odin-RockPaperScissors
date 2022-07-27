const computerOptions = ["Rock", "Paper", "Scissors"];
let playerPoints = 0;
let computerPoints = 0;
let tiePoints = 0;

function getComputerChoice() {
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    const score = document.querySelector('#Result')

    if ((playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")) {


        score.textContent = "you win this round"
        playerPoints++;
        const points = document.querySelector('#P_Win')
        points.textContent = ` Player Score:${playerPoints}`
    } else if (playerSelection === computerSelection) {
        score.textContent = "draw"
        tiePoints++;
        const points = document.querySelector('#Draw')
        points.textContent = `Total Draws:${tiePoints}`

    } else {
        computerPoints++;
        score.textContent = "you lost this round"
        const points = document.querySelector('#C_Win')
        points.textContent = `ComputerScore:${computerPoints}`
    }
    if (playerPoints === 5 || computerPoints === 5) {
        document.querySelector('#R_Button').disabled = true
        document.querySelector('#P_Button').disabled = true
        document.querySelector('#S_Button').disabled = true
        if (playerPoints > computerPoints) {
            score.textContent = "Player won this game"
        } else {
            score.textContent = "Computer won this game"
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
