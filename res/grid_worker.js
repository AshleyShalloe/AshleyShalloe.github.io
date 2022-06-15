addEventListener("message", event => {
  const [currentGrid, newGrid] = event.data;
  var cellsToToggle = []
    for (var i=0; i<currentGrid.length; i++){
        cellsToToggle.push(currentGrid[i] != newGrid[i])
    }
  postMessage(cellsToToggle);
});