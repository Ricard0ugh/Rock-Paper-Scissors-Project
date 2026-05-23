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


console.log(getComputerChoice());
