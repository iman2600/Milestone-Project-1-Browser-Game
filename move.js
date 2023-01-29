//pc movement

function controls() {
    if (start) {
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
    }}

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
  if (event.keyCode == 32) {
    start = true;
  }

  //if (event.keyCode == 32) {
  // start = true;
  //}
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

//npc movement
function npcMove() {
     
  if (start && score<10) {
    if (npcX < pcX && npcY < pcY) {
      npcX = npcX + npcSpeed;
      npcY = npcY + npcSpeed;
    } else if (npcX > pcX && npcY > pcY) {
      npcX = npcX - npcSpeed;
      npcY = npcY - npcSpeed;
    } else if (npcX < pcX && npcY > pcY) {
      npcX = npcX + npcSpeed;
      npcY = npcY - npcSpeed;
    } else if (npcX > pcX && npcY < pcY) {
      npcX = npcX - npcSpeed;
      npcY = npcY + npcSpeed;
    } else if (npcX > pcX) {
      npcX = npcX - npcSpeed;
    } else if (npcX < pcX) {
      npcX = npcX + npcSpeed;
    } else if (npcY > pcY) {
      npcY = npcY - npcSpeed;
    } else if (npcY < pcY) {
      npcY = npcY + npcSpeed;
    }
  }
}
