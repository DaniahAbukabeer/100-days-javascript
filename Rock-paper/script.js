function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    
    const randnum = Math.floor(Math.random() * 3);
    return options[randnum];
  }
  console.log(getRandomComputerResult());