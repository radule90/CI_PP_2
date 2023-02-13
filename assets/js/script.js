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

let userChoice;
let computerChoiceName;


/**
 * Add event listener to all the buttons
 */

for (let button of buttons) {
        button.addEventListener("click", function() {
        userChoice = this.getAttribute("data-selection");
        userChoiceDisplay.innerHTML = userChoice;
        randomComputerChoice();
        selectWinner();
    })
}


/**
 * Generates computer random choice and associate the name to number
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
    }

    computerChoiceDisplay.innerHTML = computerChoiceName;
}


/**
 * Compare results and selects winner
 */

function selectWinner() {
    let selection;
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

    resultDisplay.innerHTML = selection;
}