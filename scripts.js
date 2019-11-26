
//variables
var playerScore = 0;
var computerScore = 0;
var outcomes = ["rock", "paper", "scissors"];
var winner = "";
var playerWin = "You Win!";
var computerWin = "You Lose!";
var tie = "Tie!";

const container = document.querySelector("#container");
const initBtn = document.getElementById("init")
const options = ["rock", "paper", "scissors"];
const h3 = document.createElement("h3");

function createBtns(arr) {
    arr.forEach(element => {
        var i = document.createElement("button");
        i.textContent = element;
        i.addEventListener("click", function(e) {
            game(element);
        })
        container.appendChild(i);
    });
}

function init() {
    createBtns(options);
}

/* 
Take player imput via prompt
Display outcome from RPS function to show who won round
Tally score
First to reach a score of 5 is displayed as the winner via an alert()
*/
function game(playerInput) {
    var computerSelection = computerPlay();
    var outcome = RPS(playerInput, computerSelection);

    h3.textContent = "You played: " + playerInput + ":&nbsp" + "Computer played: " + computerSelection;
    container.appendChild(h3);


    

    document.getElementById("results").innerHTML = outcome;

    if (outcome === "You Win!") {
        playerScore++;
        document.getElementById("playerscore").innerHTML = playerScore;
        if (playerScore >= 5) {
            alert("Player wins!");
        }
    }

    if (outcome === "You Lose!") {
        computerScore++;
        document.getElementById("computerscore").innerHTML = computerScore;
        if (computerScore >= 5) {
            alert("Computer wins!");
        }
    }
}

// Computer chooses random select of Rock, Paper or Scissors
function computerPlay() {
    return outcomes[Math.floor(Math.random() * Math.floor(3))];
}

// Determin winner and return outcome
function RPS(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "paper") {
    winner = computerWin;
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
    winner = playerWin;
    }
    if (playerSelection === "rock" && computerSelection === "rock") {
    winner = tie;
    }
    if (playerSelection === "paper" && computerSelection === "paper") {
    winner = tie;
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
    winner = computerWin;
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
    winner = playerWin;
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
    winner = playerWin;
    }
    if (playerSelection === "scissors" && computerSelection === "scissors") {
    winner = tie;
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
    winner = computerWin;
    }

return winner;
}
