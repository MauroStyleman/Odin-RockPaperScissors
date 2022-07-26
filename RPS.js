const computerOptions = ["Rock", "Paper", "Scissors"];
let playerPoints = 0
let computerPoints = 0
let tiePoints = 0

function getComputerChoice() {
    return computerOptions[Math.floor(Math.random() * computerOptions.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if ((playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")) {

        console.log("you win this round")
        playerPoints++
    } else if (playerSelection === computerSelection) {
        console.log("draw")
        tiePoints++

    } else {
        console.log("you lost this round")
        computerPoints++
    }
    return playerSelection && computerSelection
}
function game(){
    let i = 0
    while (i < 5){
        const playerSelection = prompt("choice rock paper scissor")
        const computerSelection = getComputerChoice();
        console.log("round", i+1)
        console.log("computer choice:",computerSelection)
        console.log("player choice:",playerSelection)
        playRound(playerSelection,computerSelection)
        console.log("player score", playerPoints)
        console.log("computer score", computerPoints)
        console.log("draw score", tiePoints)
        i++
    }
    if (playerPoints > computerPoints) {
        console.log("you won the game")
    }
    else if (playerPoints < computerPoints) {
        console.log("you lost the game")
    }
    else {
        console.log("it's a draw")
    }
}

game()

