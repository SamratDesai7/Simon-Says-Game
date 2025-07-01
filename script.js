let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;

const h3 = document.querySelector("h3");
const btns = ["box1", "box2", "box3", "box4"];

// Start game on key press or first touch
document.addEventListener("keypress", startGame);
document.addEventListener("touchstart", startGame, { once: true });

function startGame() {
  if (!started) {
    started = true;
    h3.innerText = "Level 1";
    levelUp();
  }
}

function flashButton(btn) {
  btn.classList.add("flash");
  setTimeout(() => btn.classList.remove("flash"), 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => btn.classList.remove("userflash"), 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  const randomIdx = Math.floor(Math.random() * 4);
  const randomColor = btns[randomIdx];
  const randomBtn = document.querySelector(`#${randomColor}`);

  gameSeq.push(randomColor);
  setTimeout(() => flashButton(randomBtn), 500);
}

function checkAnswer(currentIdx) {
  if (userSeq[currentIdx] === gameSeq[currentIdx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 800);
    }
  } else {
    h3.innerHTML = `Game Over! Your Score Was <b>${level}</b><br>Click to Play Again`;
    document.body.classList.add("game-over");
    setTimeout(() => document.body.classList.remove("game-over"), 300);
    resetGame();
  }
}

function handleButtonPress() {
  const btn = this;
  const userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  userFlash(btn);
  checkAnswer(userSeq.length - 1);
}

document.querySelectorAll(".box-btn").forEach((btn) =>
  btn.addEventListener("click", handleButtonPress)
);

function resetGame() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
