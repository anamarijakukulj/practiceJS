const imageOne = document.querySelector(".img1");
const imageTwo = document.querySelector(".img2");
const result = document.querySelector("h1");
const play = document.querySelector("button");

const randomNum = () => {
  return Math.floor(Math.random() * 6 + 1);
};

const game = () => {
  let playerOne = randomNum();
  let playerTwo = randomNum();

  imageOne.src = `images/dice${playerOne}.png`;
  imageTwo.src = `images/dice${playerTwo}.png`;

  if (playerOne > playerTwo) {
    result.innerText = "Player 1 win!";
  } else if (playerOne < playerTwo) {
    result.innerText = "Player 2 win!";
  } else {
    result.innerText = "Tie";
  }
};

play.addEventListener("click", game);

