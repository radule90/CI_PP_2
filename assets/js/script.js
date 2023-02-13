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
    })
}