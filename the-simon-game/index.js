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

function winGame() {
  start.style.display = "block";
  levelTitle.textContent = "YOU WIN!";
  level = 1;
  randomSequence = [];
  playerSequence = [];
}

function endGame() {
  levelTitle.textContent = "END GAME";
  start.style.display = "block";
  console.log("END GAME");
  level = 1;
  randomSequence = [];
  playerSequence = [];
}

function nextLevel() {
  next.style.display = "block";
  next.addEventListener("click", () => {
    if (level < 10) {
      level++;
      playGame(level);
    } else if (level === 10) {
      winGame();
    }
  });
}

function checkAnswer() {
  for (let i = 0; i < playerSequence.length; i++) {
    if (randomSequence[i] !== playerSequence[i]) {
      endGame();
    } else if (i === 2) {
      nextLevel();
    } else {
      continue;
    }
  }
}

function getRandomSeq() {
  let getPattern = setInterval(() => {
    let number = randomNum();

    buttons[number].classList.add("pressed");
    setTimeout(() => {
      buttons[number].classList.remove("pressed");
    }, 200);

    console.log(number);
    randomSequence.push(buttons[number].id);
    console.log(randomSequence);

    if (randomSequence.length === 3) {
      clearInterval(getPattern);
    }
  }, 800);
}

const getPlayerSeq = (button) => {
  button.addEventListener("click", () => {
    button.classList.add("pressed");
    setTimeout(() => {
      button.classList.remove("pressed");
    }, 200);
    let clickedButton = button.id;
    playerSequence.push(clickedButton);
    console.log(randomSequence);
    console.log(playerSequence);

    if (playerSequence.length <= randomSequence.length) {
      checkAnswer();
    }
  });
};

function playGame(level) {
  start.style.display = "none";
  next.style.display = "none";
  levelTitle.textContent = `Level ${level}`;
  randomSequence = [];
  playerSequence = [];

  getRandomSeq();
  buttons.forEach((button) =>
    button.addEventListener("click", getPlayerSeq(button))
  );
}

const game = () => {
  playGame(level);
};
start.addEventListener("click", game);
