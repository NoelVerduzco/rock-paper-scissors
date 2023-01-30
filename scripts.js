// Have the computer randomly choose rock, paper, or scissors
let cpuScore = 0;
let userScore = 0;

function checkScore() {
    if (cpuScore == 5) {
        p3.innerText = "The computer wins!";
        cpuScore = 0;
        userScore = 0;
    } else if (userScore == 5) {
        p3.innerText = "The user wins!";
        cpuScore = 0;
        userScore = 0;
    } else {
        p3.innerText = `Score: CPU ${cpuScore} - USER ${userScore}`;
    }
    score.append(p3);
}

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
    }

    return choice;
}

// Play a round and compare the computer and user choices to determine the winner

function playRound(myChoice) {
    let cpuHand = getComputerChoice();
    let userHand = myChoice;
    p1.innerText = `You chose ${userHand} and the computer chose ${cpuHand}.`;
    hands.appendChild(p1);

    switch (userHand) {
        case cpuHand:
            p2.innerText = "The game is a tie";
        
            break;
        case "rock":
            if (cpuHand == "paper") {
                p2.innerText = "You lost! Paper beats rock";
                cpuScore += 1;
            } else {
                p2.innerText = "You won! Rock beats scissors";
                userScore += 1;
            }
            break;
        case "paper":
            if (cpuHand == "scissors") {
                p2.innerText = "You lost! Scissors beats rock";
                cpuScore += 1;
            } else {
                p2.innerText = "You won! Paper beats scissors";
                userScore += 1;
            }
            break;
        case "scissors":
            if (cpuHand == "rock") {
                p2.innerText = "You lost! Rock beats scissors";
                cpuScore += 1;
            } else {
                p2.innerText = "You won! Scissors beats paper";
                userScore += 1;
            }
            break;
    }
    result.append(p2);

    checkScore();
}

const hands = document.querySelector('#hands');
const p1 = document.createElement('p');

const result = document.querySelector('#result');
const p2 = document.createElement('p');

const score = document.querySelector('#score');
const p3 = document.createElement('p');

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});