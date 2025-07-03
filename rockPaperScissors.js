let playerScore = 0, computerScore = 0;
const resultsContainer = document.querySelector('.results-container');

function capitiliseFirstLetter(str) {
    return String(str[0]).toUpperCase() + String(str).slice(1);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent.toLowerCase());
    });
})

function clearText(container) {
    // If there is already text content displayed, clear it all so the new content can replace it
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

function getComputerChoice() {
    let choice = Math.ceil(Math.random() * 3);
    let choicePara = document.createElement('p');
    choicePara.className = 'computer-choice';
    if (choice == 1) {
        choicePara.textContent = "The computer has chosen Rock";
        resultsContainer.appendChild(choicePara);
        return "rock";
    }
    else if (choice == 2) {
        choicePara.textContent = "The computer has chosen Scissors";
        resultsContainer.appendChild(choicePara);
        return "scissors";
    }
    else {
        choicePara.textContent = "The computer has chosen Paper";
        resultsContainer.appendChild(choicePara);
        return "paper";
    }
}

function displayCurrentScore() {
    let currentScorePara = document.createElement('p');
    currentScorePara.textContent = `Current Score: Player: ${playerScore} Computer: ${computerScore}`
    resultsContainer.appendChild(currentScorePara);
}

function displayFinalScore() {
    let finalScorePara = document.createElement('p');
    if (playerScore > computerScore) {
        finalScorePara.textContent = "You win!";
    }
    else {
        finalScorePara.textContent = "You lose!";
    }
    resultsContainer.appendChild(finalScorePara);
    finalScorePara.textContent = "Select any button to start a new game";
    resultsContainer.appendChild(finalScorePara);
}

function playRound(playerChoice) {

    clearText(resultsContainer);
    let playerChoicePara = document.createElement('p');
    playerChoicePara.textContent = `You have chosen ${capitiliseFirstLetter(playerChoice)}`;
    resultsContainer.appendChild(playerChoicePara);
    let computerChoice = getComputerChoice();
    let resultPara = document.createElement('p');
    if (playerChoice == "rock" && computerChoice == "scissors" || 
        playerChoice == "scissors" && computerChoice == "paper" ||
        playerChoice == "paper" && computerChoice == "rock") 
    {
        resultPara.textContent = `${capitiliseFirstLetter(playerChoice)} beats ${capitiliseFirstLetter(computerChoice)} - you win!`;
        playerScore += 1;
    }
    else if 
        (computerChoice == "rock" && playerChoice == "scissors" ||
        computerChoice == "scissors" && playerChoice == "paper" ||
        computerChoice == "paper" && playerChoice == "rock")
    {
        resultPara.textContent = `${capitiliseFirstLetter(computerChoice)} beats ${capitiliseFirstLetter(playerChoice)} - you lose!`;
        computerScore += 1;
    }
    else {
        resultPara.textContent = "It's a tie!";
    }
    resultsContainer.appendChild(resultPara);
    displayCurrentScore();

    if (playerScore === 5 || computerScore === 5) {
        displayFinalScore();
        playerScore = 0;
        computerScore = 0;
    }
    return;
}