function getComputerChoice() {
    let choice = Math.ceil(Math.random() * 3);

    if (choice == 1) {
        console.log("The computer has chosen: rock");
        return "rock";
    }
    else if (choice == 2) {
        console.log("The computer has chosen: scissors");
        return "scissors";
    }
    else {
        console.log("The computer has chosen: paper");
        return "paper";
    }
}

function getPlayerChoice() {
    playerChoice = prompt("Choose your weapon").toLowerCase();
    console.log("You have chosen: " + playerChoice);
    return playerChoice;
}

function printCurrentScore() {
    console.log("Player Score: " + playerScore + " - " + "Computer Score: " + computerScore);
}

function printFinalScore() {
    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose!");
    }
    else {
        console.log("The game has ended in a tie!");
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == "rock" && computerChoice == "scissors")
    {
        console.log("Rock beats scissors, you win");
        playerScore += 1;
    }
    else if (playerChoice == "scissors" && computerChoice == "paper")
    {
        console.log("Scissors beats paper, you win");
        playerScore += 1;
    }
    else if (playerChoice == "paper" && computerChoice == "rock")
    {
        console.log("Paper beats rock, you win");
        playerScore += 1;
    }
    else if (computerChoice == "rock" && playerChoice == "scissors")
    {
        console.log("Rock beats scissors, you lose")
        computerScore += 1;
    }
    else if (computerChoice == "scissors" && playerChoice == "paper")
    {
        console.log("Scissors beats paper, you lose");
        computerScore += 1;
    }
    else if (computerChoice == "paper" && playerChoice == "rock")
    {
        console.log("Paper beats rock, you lose");
        computerScore += 1;
    }
    else {
        console.log("It's a tie")
    }

    printCurrentScore();
    return;
}

function playGame() {
    let roundsRemaining = 5;

    while (roundsRemaining) {
        playRound(getPlayerChoice(), getComputerChoice());
        roundsRemaining -= 1;
    }
    printFinalScore();
}

let playerScore = 0, computerScore = 0;
playGame();