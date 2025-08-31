function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    choice = prompt('What do you want to play?');
    return choice.toLowerCase();
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function printWin(humanChoice, computerChoice) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }

    function printLose(humanChoice, computerChoice) {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }


    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice)
            console.log('Tie!');
        else if (
            (humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")) {
            printWin(humanChoice, computerChoice);
        }
        else {
            printLose(humanChoice, computerChoice);
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore == computerScore) {
        console.log("It's a tie!");
    } else {
        winner = humanScore >= computerScore ? 'YOU' : 'COMPUTER';
        console.log(`${winner} won the game`);
    }
}


playGame()

