"use strict";

// random secret/guess number:
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// initial score:
let score = 20;
// highscore
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");

// handling CLICK on check btn
checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // IF NO INPUT(no guess):
  if (!guess) {
    displayMessage("NO NUMBER!");
  }
  // IF INPUT CORRECT:
  else if (guess === secretNumber) {
    displayMessage("CORRECT NUMBER!");
    document.querySelector(".number").textContent = secretNumber;
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // WHEN guess is wrong / Different from secretNumber
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "TOO HEIGH!!" : "TOO LOW!!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("YOU LOST THE GAME");
      document.querySelector(".score").textContent = 0;
    }
  }
  // IF INPUT too heigh:
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     message.textContent = "TOO HEIGH!!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     message.textContent = "YOU LOST THE GAME";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  // // IF INPUT too low:
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     message.textContent = "TOO LOW!!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     message.textContent = "YOU LOST THE GAME";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

// handling CLICK on again btn

againBtn.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
