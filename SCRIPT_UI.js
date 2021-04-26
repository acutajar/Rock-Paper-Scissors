
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const roundResult = document.getElementById('round-result');
const computer = document.getElementById('computer-play');
const player = document.getElementById('player-play');
const compScore = document.getElementById('computer-score');
const playScore = document.getElementById('player-score');
const finalWinner = document.getElementById('final-winner');
const resetCountdown = document.getElementById('reset-countdown');

function computerPlay() {
    let plays = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    return plays[choice].toUpperCase();
}

function gameReset() {

    buttons.forEach(function(button) {
        button.disabled = true;
    });
    let timeleft = 5;
    let countdownTimer = setInterval(() => {
        if (timeleft <= 0) {
            clearInterval(countdownTimer);
            playerScore = 0;
            computerScore = 0;
            resetCountdown.textContent = "";
            playScore.textContent = "Player score: " + playerScore
            compScore.textContent = "Computer score: " + computerScore
            roundResult.textContent = ""
            player.textContent = ""
            computer.textContent = ""
            finalWinner.textContent = ""
            buttons.disabled = false
            buttons.forEach(function(button) {
                button.disabled = false;
            });
        } else {
            resetCountdown.textContent = "Game over, restarting in: " +  timeleft;
            timeleft -= 1;
        }
    }, 1000);




}

function playRound(e) {
    // compare the two inputs to find the winner
    let playerSelection = e.target.id
    let computerSelection = computerPlay()
    player.textContent = "You played: " + playerSelection
    computer.textContent = "Computer played: " + computerSelection
    if (playerSelection == computerSelection) {
        roundResult.textContent = "It's a tie!";
    } else if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            computerScore++;
            roundResult.textContent = "You lose! Paper covers Rock";
        } else {
            playerScore++;
            roundResult.textContent = "You win! Rock beats Scissors";
        }
    } else if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSORS") {
            computerScore++;
            roundResult.textContent = "You lose! Scissors cut Paper";
        } else {
            playerScore++;
            roundResult.textContent = "You win! Paper covers rock";
        }
    } else if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            computerScore++;
            roundResult.textContent = "You lose! Rock beats Scissors";
        } else {
            playerScore++;
            roundResult.textContent = "You win! Scissors cut Paper";
        }
    } 

    playScore.textContent = "Player score: " + playerScore
    compScore.textContent = "Computer score: " + computerScore  
    
    if (playerScore == 5) {
        finalWinner.textContent = "You won, you sly motherfucker!"
        gameReset()
    } else if (computerScore == 5) {
        finalWinner.textContent = "God damnit, you let the computer beat you"
        gameReset()
    }
}





buttons.forEach(button => button.addEventListener('click', playRound));