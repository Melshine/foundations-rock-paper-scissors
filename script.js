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

    const result = document.querySelector("#result")
    result.print = function(text){
        p = document.createElement('p');
        p.textContent = text;
        this.appendChild(p);
    }

    const you = document.querySelector('#you');
    const computer = document.querySelector('#computer');

    let humanScore = 0;
    let computerScore = 0;

    function printWin(humanChoice, computerChoice) {
        you.textContent = ++humanScore;
        text = `You win! ${humanChoice} beats ${computerChoice}`
        result.print(text)
    }

    function printLose(humanChoice, computerChoice) {
        computer.textContent = ++computerScore;
        text = `You lose! ${computerChoice} beats ${humanChoice}`
        result.print(text)
    }


    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice)
            result.print('Tie!');
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

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', event => {
            choice = event.target.textContent;
            playRound(choice, getComputerChoice());
            if(humanScore == 5 || computerScore == 5){
                checkEndgame();
            }     
        });
    })


    function checkEndgame() {
        if (humanScore == computerScore) {
            result.print("RESULT : It's a tie!");
        } else {
            winner = humanScore >= computerScore ? 'YOU' : 'COMPUTER';
            result.print(`RESULT : ${winner} won the game`);
        }
    }
    
}


playGame()


