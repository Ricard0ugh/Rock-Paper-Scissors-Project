function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1;
    
    if (rand === 1) {
        return "Computer: Rock!";
    }
    else if (rand === 2) {
        return "Computer: Paper!";
    }
    else if (rand === 3) {
        return "Computer: Scissors!";
    }
}

function getHumanChoice() {
    let choice = parseInt(prompt("Choose: 1 = Rock, 2 = Paper, 3 = Scissors"));

    if (choice === 1) {
        return "Player: Rock!";
    }
    else if (choice === 2) {
        return "Player: Paper!";
    }
    else if (choice === 3) {
        return "Player: Scissors";
    }
}

console.log(getHumanChoice());

