//canvas variables
const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");
//tilegrid variables
let tileCount = 50;
let tileSize = canvas.width / tileCount - 2;
//pc variables
let pcX = 10;
let pcY = 10;
let pcRadius = 25;
//npc variables
let npcX;
let npcY;
let npcRadius = 25;

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
npc1.update()
  //making sure it works
  if (getDistance(pcX, pcY, pointX, pointY) < pcRadius) {
    console.log("contact");
  }

  if (getDistance(pcX, pcY, npcX, npcY) < pcRadius + npcRadius) {
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
/*
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
*/

function createPc() {
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(pcX, pcY, pcRadius, 0, Math.PI * 2);
  ctx.fill();
}

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.update = function () {
    this.draw();
  };

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  };
}

//add npc
let npc1
function init(){
    npc1 = new Circle(20, 20, 20, "red");
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
