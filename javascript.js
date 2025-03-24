
//PLAY GAME
function playGame(){

//COMPUTER
function getComputerChoice() {
    let randomValue = Math.random(); // Generate the random number once

    if (randomValue <= 0.33) {//if the random value is below 0.33
        return "Rock";//return Rock
    } else if (randomValue <= 0.66) {//if the random value is below 0.66 -> since we have an if for the 0.33, we needn't specifiy that it has to be between 0.33 and 0.66!
        return "Paper";//return Paper
    } else {
        return "Scissors";
    }
}


//HUMAN
function getHumanChoice(){

let userInput = prompt("Your turn.")

    return userInput[0].toUpperCase() + userInput.substring(1).toLowerCase(); //returns the userInput case-insensitive
}
  
let humanScore = 0;
let computerScore = 0;

//WHAT HAPPENS EACH ROUND
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

  //PLAY IT 5 TIMES BEFORE IT ENDS
  for (let i = 0; i < 5; i++) {
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);

  //in rounds 3 to 5 check if the human won
    if (humanScore === 3){
        console.log("Human wins! Congrats. Refresh the page to start anew.");
        break;
    }
    else if (computerScore === 3){
        console.log("Computer wins! Get your revenge by refreshing the page.");
        break;
    }
  }
}
playGame();