let userScore = 0;
let computerScore = 0;

function pickChoice(fromUser) {
    if (fromUser == 'rock') {
        let userChoice = "rock";
        checkPilihan(userChoice);
    } else if (fromUser == 'paper') {
        let userChoice = "paper";
        checkPilihan(userChoice);
    } else if (fromUser == 'scissor') {
        let userChoice = "scissor";
        checkPilihan(userChoice);
    }
}

function acakPilihan() {
    // randomize 1-3
    let computer = Math.floor(Math.random() * 3);

    // return com's selection
    if (computer == 0) {
        return "rock";
    } else if (computer == 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

//function clearing previous selection
function reset() {
    document.getElementById("rock-user").classList.remove("box-selected");
    document.getElementById("paper-user").classList.remove("box-selected");
    document.getElementById("scissor-user").classList.remove("box-selected");
    document.getElementById("rock-com").classList.remove("box-selected");
    document.getElementById("paper-com").classList.remove("box-selected");
    document.getElementById("scissor-com").classList.remove("box-selected");
}

//Scoring the game ;)
function updateScore(score) {

    if (score == "COM WIN") {
        computerScore++;
        document.getElementById("comScore").innerText = computerScore;
    } else if (score == "Player 1 Win") {
        userScore++;
        document.getElementById("playerScore").innerText = userScore++;
    }

}

function checkPilihan(userChoice) {
    // calling reset function to clear all selected boxes
    reset();

    document.getElementById(`${userChoice}-user`).classList.add("box-selected");
    let comChoice = acakPilihan();
    document.getElementById(`${comChoice}-com`).classList.add("box-selected");

    let result;

    // Print Player's and Com's choices
    console.log(`User's choice: ${userChoice}`);
    console.log(`Com's choice: ${comChoice}`);

    // Validation of the winner, yay!
    if (userChoice == comChoice) {
        console.log("Draw");
        document.getElementById("result").classList.add("box-result");
        document.getElementById("result").classList.remove("status");
        document.getElementById("result").innerText = "DRAW";
    } else if (userChoice == "rock" && comChoice == "paper") {
        console.log("COM WIN");
        document.getElementById("result").classList.add("box-result");
        document.getElementById("result").classList.remove("status");
        result = document.getElementById("result").innerText = "COM WIN";
        updateScore(result);
    } else if (userChoice == "rock" && comChoice == "scissor") {
        console.log("Player 1 Win");
        document.getElementById("result").classList.add("box-result");
        document.getElementById("result").classList.remove("status");
        result = document.getElementById("result").innerText = "Player 1 Win";
        updateScore(result);
    } else if (userChoice == "paper" && comChoice == "rock") {
        console.log("Player 1 Win");
        document.getElementById("result").classList.add("box-result");
        document.getElementById("result").classList.remove("status");
        result = document.getElementById("result").innerText = "Player 1 Win";
        updateScore(result);
    } else if (userChoice == "paper" && comChoice == "scissor") {
        console.log("COM WIN");
        document.getElementById("result").classList.add("box-result");
        document.getElementById("result").classList.remove("status");
        result = document.getElementById("result").innerText = "COM WIN";
        updateScore(result);
    } else if (userChoice == "scissor" && comChoice == "rock") {
        console.log("COM WIN");
        document.getElementById("result").classList.add("box-result");
        document.getElementById("result").classList.remove("status");
        result = document.getElementById("result").innerText = "COM WIN";
        updateScore(result);
    } else if (userChoice == "scissor" && comChoice == "paper") {
        console.log("Player 1 Win");
        document.getElementById("result").classList.add("box-result");
        document.getElementById("result").classList.remove("status");
        result = document.getElementById("result").innerText = "Player 1 Win";
        updateScore(result);
    }
}