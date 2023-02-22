const start = document.querySelector("#start");
const next = document.querySelector("#next");
const buttons = document.querySelectorAll(".btn");
const levelTitle = document.querySelector("#level-title");

let randomSequence = [];
let playerSequence = [];
let level = 1;

const randomNum = () => {
  return Math.floor(Math.random() * 4);
};

const animation = (button) => {
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 200);
};

const winGame = () => {
  start.classList.add("active");
  levelTitle.textContent = "YOU WIN!";
  level = 1;
};

const endGame = () => {
  levelTitle.textContent = "END GAME";
  start.classList.add("active");
  console.log("END GAME");
  level = 1;
};

const nextLevel = () => {
  next.classList.add("active");
  next.addEventListener("click", () => {
    if (level < 10) {
      level++;
      playGame(level);
    } else if (level === 10) {
      winGame();
    }
  });
};

const checkAnswer = () => {
  for (let i = 0; i < playerSequence.length; i++) {
    if (randomSequence[i] !== playerSequence[i]) {
      endGame();
    } else if (i === 2) {
      nextLevel();
    } else {
      continue;
    }
  }
};

const getRandomSeq = () => {
  let getPattern = setInterval(() => {
    let number = randomNum();
    let button = buttons[number];

    animation(button);

    console.log(number);
    randomSequence.push(buttons[number].id);
    console.log(randomSequence);

    if (randomSequence.length >= 3) {
      clearInterval(getPattern);
    }
  }, 800);
};

const getPlayerSeq = (button) => {
  button.addEventListener("click", () => {
    animation(button);
    let clickedButton = button.id;
    playerSequence.push(clickedButton);
    console.log(randomSequence);
    console.log(playerSequence);

    if (playerSequence.length <= randomSequence.length) {
      checkAnswer();
    }
  });
};

const playGame = (level) => {
  start.classList.remove("active");
  levelTitle.textContent = `Level ${level}`;
  randomSequence = [];
  playerSequence = [];

  getRandomSeq();
};

const game = () => {
  playGame(level);
};

start.addEventListener("click", game);
buttons.forEach((button) =>
  button.addEventListener("click", getPlayerSeq(button))
);
