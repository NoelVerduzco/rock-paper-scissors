// Have the computer randomly choose rock, paper, or scissors

function getComputerChoice() {
    let choice;
    let num;
    num = Math.floor(Math.random() * 3) + 1;

    switch (num) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
        default:
            console.log("Error 1: Something went wrong!");
            break;
    }

    return choice;
}

// Have the use choose rock, paper, or scissors
// Include validation and standardization of input

function playerSelection() {
    let choice;
    choice = prompt("Choose rock, paper, or scissors");
    return choice;
}

// Play a round and compare the computer and user choices to determine the winner

function playRound() {
    cpuHand = getComputerChoice();
    userHand = playerSelection();
    gameMessage = "";

    switch (userHand) {
        case cpuHand:
            console.log("The game is a tie");
            break;
        case "rock":
            if (cpuHand == "paper") {
                console.log("You lost! Paper beats rock");
            } else {
                console.log("You won! Rock beats scissors");
            }
            break;
        case "paper":
            if (cpuHand == "scissors") {
                console.log("You lost! Scissors beats rock");
            } else {
                console.log("You won! Paper beats scissors");
            }
            break;
        case "scissors":
            if (cpuHand == "rock") {
                console.log("You lost! Rock beats scissors");
            } else {
                console.log("You won! Scissors beats paper")
            }
            break;
        default:
            console.log("Error 2: Something went wrong!")
            break;
    }
}

// Play multiple rounds of the game

function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound();
    }
}

playGame();