function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    
    const randnum = Math.floor(Math.random() * 3);
    return options[randnum];
  }
  console.log(getRandomComputerResult());  


function hasPlayerWonTheRound(player, computer) {
  if(player === "Rock" && computer === "Scissors")
    return true;
    else if(player === "Scissors" && computer === "Paper")
    return true;
    else if(player === "Paper" && computer === "Rock")
    return true;
    else
    return false;
}
  
  console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
  console.log(hasPlayerWonTheRound("Scissors", "Rock")); 


  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if(hasPlayerWonTheRound(userOption, computerResult))
    {
        playerScore+=1;
        return `Player wins! ${userOption} beats ${computerResult}`;
    }
    else if(!hasPlayerWonTheRound(userOption, computerResult)){
        computerScore+=1;
        return `Computer wins! ${computerResult} beats ${userOption}`
    }
    else if(userOption === computerResult)
    return `It's a tie! Both chose ${userOption}`

  }
  
  console.log(getRoundResults("Rock"));
  console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);


  const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    const results = getRoundResults(userOption);
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    roundResultsMsg.innerText = results;

    
    if(playerScore == 3){
        winnerMsgElement.innerText = `Player has won the game!`;
        resetGameBtn.style.display = "initial";
        optionsContainer.style.display = "none";
    }
    else if(computerScore == 3){
        winnerMsgElement.innerText = `Computer has won the game!`;
        resetGameBtn.style.display = "initial";
        optionsContainer.style.display = "none";
    }

   
};

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
}

showResults("Rock");