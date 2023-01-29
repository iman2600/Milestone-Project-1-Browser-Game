//canvas variables
const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");
//tilegrid variables
let tileCount = 50;
let tileSize = canvas.width / tileCount - 2;
//pc variables
let pcX = 500;
let pcY = 900;
let pcRadius = 25;

//movement variables
let moveDown = false;
let moveUp = false;
let moveLeft = false;
let moveRight = false;
let speed = 7.5;

//point pellet variables
let pointX = 5;
let pointY = 5;

function refreshGame() {
  resetScreen();
  pointPellet();
  getPoint();
  controls();
  boundryCheck();
  createPc();
  Circle();
  getDistance();
  init();
  npc1.update();
  //making sure it works
  if (getDistance(pcX, pcY, pointX, pointY) < pcRadius) {
    console.log("contact");
  }
}

function pointPellet() {
  ctx.fillStyle = "white";
  ctx.fillRect(pointX * tileCount, pointY * tileCount, tileSize, tileSize);
}
//fix this
function getPoint() {
  if (pcX == pointX) {
    pointX = Math.floor(Math.random() * tileCount);
    pointY = Math.floor(Math.random() * tileCount);
  }
}

function getDistance(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function resetScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}



setInterval(refreshGame, 1000 / 60);
