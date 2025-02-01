var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 100) + 1;
    var choice;
    if (number <= 33) {
        choice = "rock";
    } else if (number <= 66) {
        choice = "paper";
    } else  if (number <= 100) {
        choice = "scissor";
    } else {
        console.log("Unknown Error...");
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Enter your choice").toLowerCase();
    let trimmedChoice = choice.trim();
    return trimmedChoice;
}





function playRound(humanChoice, computerChoice) {
    console.log(`Your choice: ${humanChoice}`);
    console.log(`Their choice: ${computerChoice}`);
    switch(humanChoice) {
        case "rock":
            if (computerChoice.includes("paper")) {
                computerScore += 1;
                console.log("You lose!");
            } else if (computerChoice.includes("scissor")) {
                humanScore += 1;
                console.log("You win!");
            } else {
                console.log("You drew!");
            }
            break;
        case "paper":
            if (computerChoice.includes("scissor")) {
                computerScore += 1;
                console.log("You lose!");
            } else if (computerChoice.includes("rock")) {
                humanScore += 1;
                console.log("You win!");
            } else {
                console.log("You drew!");
            }
            break;
        case "scissor":
            if (computerChoice.includes("rock")) {
                computerScore += 1;
                console.log("You lose!");
            } else if (computerChoice.includes("paper")) {
                humanScore += 1;
                console.log("You win!");
            } else {
                console.log("You drew!");
            }
            break;
        default:
        console.log("You idiot, you should type a real input next time!");
        break;
    }
    console.log(humanScore);
    console.log(computerScore);
}


function playGame() {
    for (let i = 0; i <= 4; i++) {
        var humanSelection = getHumanChoice();
        var computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`Your score: ${humanScore}`);
    console.log(`Their score: ${computerScore}`);
}

playGame();