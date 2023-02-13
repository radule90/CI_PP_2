/**
 * Declare variables for DOM elements
 */

const buttons = document.querySelectorAll("[data-selection]");
const userChoiceDisplay = document.getElementById("user-choice-display");
const computerChoiceDisplay = document.getElementById("computer-choice-display");
const resultDisplay = document.getElementById("result-display");
const userScore = document.getElementById("user-score");
const draw = document.getElementById("draw");
const computerScore = document.getElementById("computer-score");



/**
 * Add event listener to all the buttons
 */

for (let button of buttons) {
        button.addEventListener("click", function() {
        const userChoice = this.getAttribute("data-selection");
        userChoiceDisplay.innerHTML = userChoice;
        randomComputerChoice();
    })
}

/**
 * Generates computer random choice and associate the name to number
 */

function randomComputerChoice() {
    const randomNumber = Math.floor(Math.random() * buttons.length + 1);
    let computerChoiceName;
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
    }

    computerChoiceDisplay.innerHTML = computerChoiceName;
}