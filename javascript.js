function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1;
    
    if (rand === 1) {
        return "rock";
    }
    else if (rand === 2) {
        return "paper";
    }
    else if (rand === 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = parseInt(prompt("Choose: 1 = Rock, 2 = Paper, 3 = Scissors"));

    if (choice === 1) {
        return "Rock";
    }
    else if (choice === 2) {
        return "Paper";
    }
    else if (choice === 3) {
        return "Scissors";
    }
}



function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice)
        {
            return "Tie!";
        }

        /* 1 = Rock
           2 = Paper
           3 = Scissors
        */
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            return `Player wins! ${humanChoice} beats ${computerChoice}`;
        }
        else {
            computerScore++;
            return `Computer Wins! ${computerChoice} beats ${humanChoice}`;
        }
    }  

    for (let i = 1; i <= 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }

    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Player wins the game!");
    }
    else if(computerScore > humanScore) {
        console.log("Computer wins the game!");
    }
    else {
        console.log("The game is a tie!");
    }
}

playGame();
