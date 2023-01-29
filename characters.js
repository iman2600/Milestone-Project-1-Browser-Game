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
let npc1;
function init() {
  npc1 = new Circle(20, 20, 20, "red");
}
