let pcX = 100;
let pcY = 100;
let pcRadius = 25;
let npcX = 100;
let npcY = 100;
let npcRadius = 25;
const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let moveDown = false;
let moveUp = false;
let moveLeft = false;
let moveRight = false;
let speed = 7.5;

function refreshGame() {
  resetScreen();
  controls();
  boundryCheck();
  createPc();
  createNpc();
}

function boundryCheck() {
  //up
  if (pcY < pcRadius + 5) {
    pcY = pcRadius + 5;
  }
  //left
  if (pcX < pcRadius + 5) {
    pcX = pcRadius + 5;
  }
  //down
  if (pcY > canvas.height - pcRadius - 5) {
    pcY = canvas.height - pcRadius - 5;
  }

  //right
  if (pcX > canvas.width - pcRadius - 5) {
    pcX = canvas.width - pcRadius - 5;
  }
}

function controls() {
  if (moveDown) {
    pcY = pcY + speed;
  }
  if (moveUp) {
    pcY = pcY - speed;
  }
  if (moveLeft) {
    pcX = pcX - speed;
  }
  if (moveRight) {
    pcX = pcX + speed;
  }
}

function createPc() {
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(pcX, pcY, pcRadius, 0, Math.PI * 2);
  ctx.fill();
}

function createNpc() {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(npcX, npcY, npcRadius, 0, Math.PI * 2);
  ctx.fill();
}

function resetScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

function keyDown(event) {
  //down
  if (event.keyCode == 40) {
    moveDown = true;
  }
  //up
  if (event.keyCode == 38) {
    moveUp = true;
  }
  //left
  if (event.keyCode == 37) {
    moveLeft = true;
  }
  //right
  if (event.keyCode == 39) {
    moveRight = true;
  }
}
function keyUp(event) {
  //down
  if (event.keyCode == 40) {
    moveDown = false;
  }
  //up
  if (event.keyCode == 38) {
    moveUp = false;
  }
  //left
  if (event.keyCode == 37) {
    moveLeft = false;
  }
  //right
  if (event.keyCode == 39) {
    moveRight = false;
  }
}

setInterval(refreshGame, 1000 / 60);
