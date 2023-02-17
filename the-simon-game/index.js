const start = document.querySelector("#start");
const buttons = document.querySelectorAll(".btn");
const levelTitle = document.querySelector("#level-title");

const randomSequence = [];
const playerSequence = [];

const randomNum = () => {
  return Math.floor(Math.random() * 4);
};

function getRandomSeq(lengthSeq) {
  for (let i = 0; i < lengthSeq; i++) {
    let number;
    setTimeout(() => {
      number = randomNum();
      randomSequence.push(buttons[number].id);
      console.log(randomSequence);
    }, 800);
  }
}

function getPlayerSeq(button) {
  button.addEventListener("click", () => {
    let clickedButton = button.id;
    button.classList;
    playerSequence.push(clickedButton);
    console.log(playerSequence);
  });
}

buttons.forEach((button) => getPlayerSeq(button));

function game() {
  let level = 1;
  levelTitle.textContent = `Level ${level}`;
}
game();

