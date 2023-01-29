//canvas variables
const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

//pc variables
let pcX = 375;
let pcY = 700;
let pcRadius = 25;

//npc variables
let npcX = 375;
let npcY = 50;
let npcSpeed = 3;

//score pellet
let pelletX = 375;
let pelletY = 375;
let score = 0;

//movement variables
let moveDown = false;
let moveUp = false;
let moveLeft = false;
let moveRight = false;
let speed = 7.5;
let start = false;

function refreshGame() {
  resetScreen();
  point();
  controls();
  boundryCheck();
  init();
  npcMove();
  npc1.update();
  pc.update();
  pellet.update();
  if (die(pc.x, pc.y, npc1.x, npc1.y) < 50) {
    pcX = 375;
    pcY = 700;
    npcX = 375;
    npcY = 50;
    score = 0;
    pelletX = 375;
    pelletY = 375;
    start = false;
  }
  if (point(pc.x, pc.y, pellet.x, pellet.y) < 35) {
    pelletX = Math.random() * 670 + 30;
    pelletY = Math.random() * 670 + 30;
    score++;
    console.log(score);
  }
  npc1.update();
  pc.update();
  pellet.update();
  if (score === 10) {
    console.log("You Win");
  }
  drawScore();
  Win();
}

function point(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function die(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "2em arial";
  ctx.fillText("Score: " + score, canvas.width - 145, 32.5);
}
function Win() {
  if (score === 10) {
    ctx.fillStyle = "gold";
    ctx.font = "5em arial";
    ctx.fillText("YOU WIN!!!", canvas.width - 580, 375);
    ctx.fillStyle = "gold";
    ctx.font = "2.5em arial";
    ctx.fillText("Press F5 to Play Again", canvas.width - 572, 450);
  }
}

function resetScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

setInterval(refreshGame, 1000 / 60);
