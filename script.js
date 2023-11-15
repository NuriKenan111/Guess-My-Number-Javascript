const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

const setBackgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const setNumberWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

let score = 20;
let number = Math.trunc(Math.random() * 20) + 1;
displayNumber("?");
document.querySelector(".number").value = number;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === number) {
    displayMessage("Correct Number!");
    setBackgroundColor("#60b347");
    displayNumber(number);
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "Too High!" : "Too Low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("You lost the game!");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  displayScore(score);
  displayNumber("?");
  document.querySelector(".guess").value = "";
  setBackgroundColor("#222");
  setNumberWidth("15rem");
});
