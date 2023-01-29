/*function createPc() {
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(pcX, pcY, pcRadius, 0, Math.PI * 2);
  ctx.fill();
}
*/
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

//add npc1
let pc;
let npc1;
let pellet;
function init() {
  npc1 = new Circle(npcX, npcY, 25, "red");
  pc = new Circle(pcX, pcY, 25, "green");
  pellet = new Circle(pelletX, pelletY, 10, "white");
}
