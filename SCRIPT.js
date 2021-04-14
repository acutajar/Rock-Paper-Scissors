
let playerScore = 0
let computerScore = 0

function computerPlay() {
    let plays = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    return plays[choice].toUpperCase();
}

function playRound(playerSelection, computerSelection) {
    // compare the two inputs to find the winner
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            computerScore++;
            return "You lose! Paper covers Rock";
        } else {
            playerScore++;
            return "You win! Rock beats Scissors";
        }
    } else if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSORS") {
            computerScore++;
            return "You lose! Scissors cut Paper";
        } else {
            playerScore++;
            return "You win! Paper covers rock";
        }
    } else if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            computerScore++;
            return "You lose! Rock beats Scissors";
        } else {
            playerScore++;
            return "You win! Scissors cut Paper";
        }
    }       
}


function game(rounds) {
    // reset game score
    computerScore = 0;
    playerScore = 0;
    // get input from the user for their play
        //ensure they enter some variation of rock, paper, or scissors
    let keepGoing = true;
    let playerSelection = "";
    for (let i = 1; i<=rounds; i++) {
        while (keepGoing) {
            playerSelection = prompt("Please enter your play: ").toUpperCase();
            if (playerSelection == "ROCK" || playerSelection == "PAPER" || playerSelection == "SCISSORS") {
                keepGoing = false;
            }
        }
        // get the computer's play
        let computerSelection = computerPlay();
        // feed those to playRound()
        console.log("player played: " + playerSelection);
        console.log("computer played: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection) + ". Current score is Player: " + playerScore + " Computer: " + computerScore);
        playerSelection = "";
        keepGoing = true;
    }
    // report the final score and the overall winner
    if (playerScore == computerScore) {
        console.log("It's a tie!");
    } else if (playerScore > computerScore) {
        console.log("Player wins!")
    } else {
        console.log("Computer wins!")
    }
} 

(game(1))

