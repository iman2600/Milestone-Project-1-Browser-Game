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
