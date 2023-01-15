//  PSUDOCODE

// Have the computer randomly choose rock, paper, or scissors
//
//  function getComputerChoice() {
//      initialize choice;
//      choice = random number between 1 and 3;
//
//      if (number == 1): => choice = rock;
//      else if (number == 2): => choice = paper;
//      else: => choice = scissors;
//
//      return choice;
//  }

console.log("Penis")

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
//
//  function playerSelection() {
//      initialize choice;
//      choice = prompt("Choose rock, paper, or scissors");
//      while choice is not a string, repeat prompt;
//      make choice all lowercase;
//      while choice is not "rock, paper, or scissors", repeat prompt;
//      
//      return choice;
//  }


function playerSelection() {
    let choice;
    choice = prompt("Choose rock, paper, or scissors");
    return choice;
}


// Compare the computer and user choices to determine the winner
//  function playRound() {
//      cpuHand = getComputerChoice();
//      userHand = playerSelection();
//      
//      switch (userHand) {
//      case cpuHand:
//          tie;
//      case rock:
//          if cpuHand == paper: User loses;
//          else: User wins;
//          break;
//      case paper:
//          is cpuHand == scissors: User loses;
//          else: User wins;
//          break;
//      case scissors:
//          if cpuHand == rock: User loses;
//          else: User wins;
//          break;
//      default:
//          something went wrong text
//      }
//  }

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
//  function playGame() {
//      for (let i=1, i<=5, i++) {
//          playRound();
//      }
//  }

function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound();
    }
}

playGame();