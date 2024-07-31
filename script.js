function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toUpperCase();
        computerChoice = computerChoice.toUpperCase();

        if (humanChoice === computerChoice) {
            return "It's a tie!";
        }

        if (
            (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
            (humanChoice === "PAPER" && computerChoice === "ROCK") ||
            (humanChoice === "SCISSORS" && computerChoice === "PAPER")
        ) {
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
        } else {
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        }
    }

    function getComputerChoice() {
        const choices = ["ROCK", "PAPER", "SCISSORS"];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function getHumanChoice() {
        while (true) {
            let input = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
            if (input === "rock" || input === "paper" || input === "scissors") {
                return input.toUpperCase();
            } else {
                alert("Invalid choice. Please enter rock, paper, or scissors.");
            }
        }
    }

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        console.log(result);
        console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();