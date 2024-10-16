const scoreX = document.querySelector(".score-x");
const scoreO = document.querySelector(".score-o");
const scoreDraw = document.querySelector(".score-draw");
const items = document.querySelectorAll(".toe__item");
const modal = document.querySelector(".modal");
const restartBtn = document.querySelector(".modal__btn");

let player = "x";

const winPositions = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let gameEnd = false;

restartBtn.onclick = restartGame;

items.forEach((item) => {
  item.onclick = function () {
    if (item.innerHTML == "" && !gameEnd) {
      item.innerHTML = player;
      checkWin();
      checkDraw();
      if (player == "x") {
        player = "o";
        item.classList.add("x");
      } else {
        player = "x";
        item.classList.add("o");
      }
    }
  };
});

function checkWin() {
  winPositions.forEach((positon) => {
    const id1 = positon[0];
    const id2 = positon[1];
    const id3 = positon[2];
    const item1 = document.getElementById(id1);
    const item2 = document.getElementById(id2);
    const item3 = document.getElementById(id3);
    if (
      item1.innerHTML == player &&
      item2.innerHTML == player &&
      item3.innerHTML == player
    ) {
      console.log(player);
      gameEnd = true;
      calcScore(player);
      openModal();
    }
  });
}

function calcScore(winPlayer) {
  if (winPlayer == "x") {
    const score = +scoreX.innerHTML;
    scoreX.innerHTML = score + 1;
  } else if (winPlayer == "o") {
    const score = +scoreO.innerHTML;
    scoreO.innerHTML = score + 1;
  } else {
    const score = +scoreDraw.innerHTML;
    scoreDraw.innerHTML = score + 1;
  }
}

function openModal() {
  modal.classList.add("modal__active");
}

function restartGame() {
  gameEnd = false;
  modal.classList.remove("modal__active");
  items.forEach((item) => {
    item.innerHTML = "";
    item.classList.remove("x", "o");
  });
}

function checkDraw() {
  let draw = true;
  items.forEach((item) => {
    if (item.innerHTML == "") {
      draw = false;
    }
  });
  if (draw && !gameEnd) {
    gameEnd = true;
    calcScore();
    openModal();
  }
}
