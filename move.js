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
