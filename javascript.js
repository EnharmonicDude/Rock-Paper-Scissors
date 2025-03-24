function getComputerChoice() {//the function getComputerChoice does the following ...
    let randomValue = Math.random(); // Generate the random number once

    if (randomValue <= 0.33) {//if the random value is below 0.33
        return "Rock";//return Rock
    } else if (randomValue <= 0.66) {//if the random value is below 0.66 -> since we have an if for the 0.33, we needn't specifiy that it has to be between 0.33 and 0.66!
        return "Paper";//return Paper
    } else {
        return "Scissors";
    }
}

// console.log(getComputerChoice());

function getHumanChoice(){

let userInput = prompt("Your turn.")

    return userInput[0].toUpperCase() + userInput.substring(1).toLowerCase(); //returns the userInput case-insensitive
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    //get the HumanChoice
    console.log("Human: " + humanChoice);
    //get the ComputerChoice
    console.log("Computer: " + computerChoice);
    //check if it is a tie
    if (humanChoice === computerChoice){
        console.log("Tie!");
    }
    //if the human wins
    else if(
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper"))
        {//increase his score and declare him the winner
            humanScore ++;
            console.log("You win!");
        }
    else{//otherwise do the same for the computer
        computerScore ++;
        console.log("Computer wins!");
    }

  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  