let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector(".msg");
const userScoreDisplay = document.getElementById("userScore");
const compScoreDisplay = document.getElementById("computerScore");
const resetButton = document.getElementById("resetButton");
const compGame = () => {
  const options = ["rock", "paper", "scissors"];
  const genRandom = Math.floor(Math.random() * 3);
  return options[genRandom];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playerGame(userChoice);
  });
});

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    console.log("You Won");
    msgPara.innerText = "You Won!";
  } else {
    compScore++;
    console.log("Computer Won");
    msgPara.innerText = "Computer Won!";
  }
  updateScores();
};
const resetGame = () => {
  userScore = 0;
  compScore = 0;
  msgPara.innerText = "Your Move";
  updateScores();
  console.log("Game Reset");
};
const drawGame = () => {
  console.log("It's a Tie!");
  msgPara.innerText = "It's a Tie!";
};

const updateScores = () => {
  userScoreDisplay.innerText = userScore;
  compScoreDisplay.innerText = compScore;
};

const playerGame = (userChoice) => {
  console.log("user choice =", userChoice);

  const compChoice = compGame();
  console.log("comp choice =", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

resetButton.addEventListener("click", resetGame);
