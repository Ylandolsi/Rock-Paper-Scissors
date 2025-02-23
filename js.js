document.querySelector('.rock').addEventListener('click', () => choose('Rock'));
document.querySelector('.paper').addEventListener('click', () => choose('Paper'));
document.querySelector('.scissors').addEventListener('click', () => choose('Scissors'));

function choose(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    updateResult(result);
    document.querySelector('.player .choice').textContent = playerChoice;
    document.querySelector('.computer .choice').textContent = computerChoice;
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

function updateResult(result) {
    const resultElement = document.querySelector('.Result h1');
    const resultContainer = document.querySelector('.Result');
    resultContainer.style.display = "flex";
    const playerscore = document.querySelector('.player-score .score');   
    const computerscore = document.querySelector('.computer-score .score');

    if (result === "win") {
        resultElement.textContent = "YOU WIN!";
        resultElement.style.background = "linear-gradient(to bottom, #4e7a1b, #33b339ab)";
        playerscore.textContent =  (parseInt(playerscore.textContent) + 1);
    } else if (result === "lose") {
        resultElement.textContent = "YOU LOSE!";
        resultElement.style.background = "linear-gradient(to bottom, #520404, #ff0000ab)";
        computerscore.textContent = (parseInt(computerscore.textContent) + 1);
    } else {
        resultElement.textContent = "IT'S A TIE!";
        resultElement.style.background = "linear-gradient(to bottom,rgb(0, 0, 0),rgb(0, 0, 0))";
    }
    resultElement.style.webkitBackgroundClip = "text";
    resultElement.style.color = "transparent";
}