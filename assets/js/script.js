/**
 * Declare global variables for DOM elements
 */
const buttons = document.querySelectorAll("[data-selection]");
const userChoiceDisplay = document.getElementById("user-choice-display");
const computerChoiceDisplay = document.getElementById("computer-choice-display");
const resultDisplay = document.getElementById("result-display");
const userScore = document.getElementById("user-score");
const draw = document.getElementById("draw");
const computerScore = document.getElementById("computer-score");

const winMessage = document.getElementById("win-message");
const lostMessage = document.getElementById("lost-message");


let userChoice;
let computerChoiceName;
let selection;

let userWins = 0;
let computerWins = 0;
let drawGames = 0;


/**
 * Add event listener to all the buttons
 * which triggers the function to start the game
 */
for (let button of buttons) {
        button.addEventListener("click", letsPlay);
}


/**
 * Function starts the game
 */
function letsPlay() {
    userChoice = this.getAttribute("data-selection");
    userChoiceValidation();
    userChoiceDisplay.innerHTML = userChoice;
    randomComputerChoice();
    selectWinner();
    incrementScore();
    roundWin();
}


/**
 * Check if user input is valid
 */
function userChoiceValidation() {
    if (userChoice !== "Rock" && userChoice !== "Paper" && userChoice !== "Scissors") {
        alert("Something went wrong, user selection is invalid!");
        throw "Something went wrong, user selection is invalid! Aborting!";
    }
}


/**
 * Generates computer random choice and 
 * associate the name to number
 * if the selection does not exist, it throws an error
 */
function randomComputerChoice() {
    const randomNumber = Math.floor(Math.random() * buttons.length + 1);
    switch(randomNumber) {
        case 1:
            computerChoiceName = "Rock";
            break;
        case 2:
            computerChoiceName = "Paper";
            break;
        case 3:
            computerChoiceName = "Scissors";
            break;
        default:
            alert("Something went wrong, computer selection is invalid!");
            throw "Something went wrong, computer selection is invalid! Aborting!";
    }

    computerChoiceDisplay.innerHTML = computerChoiceName;
}


/**
 * Compare results and selects winner
 */
function selectWinner() {
    if (userChoice === computerChoiceName) {
        selection = "It's a draw!";
    } else if (userChoice === "Rock" && computerChoiceName === "Paper") {
        selection = "You lost!";
    } else if (userChoice === "Paper" && computerChoiceName === "Rock") {
        selection = "You won!!!";
    } else if (userChoice === "Paper" && computerChoiceName === "Scissors") {
        selection = "You lost!";
    } else if (userChoice === "Scissors" && computerChoiceName === "Paper") {
        selection = "You won!!!";
    } else if (userChoice === "Scissors" && computerChoiceName === "Rock") {
        selection = "You lost!";
    } else if (userChoice === "Rock" && computerChoiceName === "Scissors") {
        selection = "You won!!!";
    }
      
    resultColorChange();
    resultDisplay.innerHTML = selection;
}


/**
 * Add class to result display for styling depending on result
 */
function resultColorChange() {
    if (selection === "You won!!!") {
        resultDisplay.classList.remove("lost-color");
        resultDisplay.classList.remove("draw-color");
        resultDisplay.classList.add("win-color");
    } else if (selection === "You lost!") {
        resultDisplay.classList.remove("draw-color");
        resultDisplay.classList.remove("win-color");
        resultDisplay.classList.add("lost-color");
    } else if (selection === "It's a draw!") {
        resultDisplay.classList.remove("win-color");
        resultDisplay.classList.remove("lost-color");
        resultDisplay.classList.add("draw-color");
    }
}


/**
 * Function counts and increment score
 */
function incrementScore() {
    if (selection === "You won!!!") {
        ++userWins;
    } else if (selection === "You lost!") {
        ++computerWins;
    } else {
        ++drawGames;
    }

    userScore.innerHTML = userWins;
    computerScore.innerHTML = computerWins;
    draw.innerHTML = drawGames;
}


/**
 * Check if someone has 10 wins,
 * display win/lost message,
 * calls reset function
 */
function roundWin() {
    if (userWins === 10) {
        winMessage.style.display = "block";
        resetGame();
    } else if (computerWins === 10) {
        lostMessage.style.display = "block";
        resetGame();
    }
}


/**
 * Add event listener to message buttons
 * and removes message on click
 */
window.onclick = function(event) {
    if (event.target.id === "close-win") {
        winMessage.style.display = "none";
    } else if (event.target.id === "close-lost") {
        lostMessage.style.display = "none";
    }
};


/**
 * Resets all values to 0,
 * empty strings
 * and remove classes
 */
function resetGame() {
    userChoice.innerHTML = "";
    computerChoiceName.innerHTML = "";
    resultDisplay.innerHTML = "";
    userScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    draw.innerHTML = 0;
    userWins = 0;
    drawGames = 0;
    computerWins = 0;
    resultDisplay.classList.remove("win-color");
    resultDisplay.classList.remove("lost-color");
    resultDisplay.classList.remove("draw-color");
}