function gameStart(labyrinth_l) {
  // Generate labyrinth
  var nRows = 25;
  var nCols = 25;
  var labyrinth = labyrinth_l;

  // Initialize array to count number of times the player stepped in each location
  var floorTiles = [];
  for (var i = 0; i < nRows * nCols; i++) floorTiles[i] = 0;
  var playerCell = 0;
  floorTiles[playerCell] = 1;

  // How big to draw the cells
  var CELL_SIZE = 21;

  // Set up kayboard event listener and keyCodes
  window.addEventListener("keydown", keyboardHandler, false);
  var LEFT = 37;
  var UP = 38;
  var RIGHT = 39;
  var DOWN = 40;

  // Set up HTML5 canvas
  var canvas = document.querySelector("canvas");
  var drawingSurface = canvas.getContext("2d");
  canvas.width = nRows * CELL_SIZE;
  canvas.height = nCols * CELL_SIZE;

  // Set up paragraph to show game messages
  var gameMessages = document.querySelector("#gameMessages");
  gameMessages.innerHTML =
    "Use the arrow keys to escape the <strong>MAZE OF DEATH</strong> <em>Mwahahahaahaaa...</em><br><br>You are blue, get to green.";

  // Set up timer
  var timer = document.querySelector("#timer");
  var timeLeft = 0;
  var gameRunning = false;

  // Draw starting situation
  render();

  // Handles keyboard input
  function keyboardHandler(event) {
    // Start the game
    if (!gameRunning && event.keyCode >= 37 && event.keyCode <= 40) {
      timerTick();
      gameRunning = true;
    }

    // Get player (x, y) position from index
    var playerRow = Math.floor(playerCell / nRows);
    var playerCol = playerCell % nCols;

    // Find out where the player wants to go
    var nextCell = -1;
    switch (event.keyCode) {
      case UP:
        if (playerRow > 0) nextCell = playerCell - nCols;
        break;
      case DOWN:
        if (playerRow < nRows - 1) nextCell = playerCell + nCols;
        break;
      case LEFT:
        if (playerCol > 0) nextCell = playerCell - 1;
        break;
      case RIGHT:
        if (playerCol < nCols - 1) nextCell = playerCell + 1;
        break;
    }

    // If arrow key was pressed and cells playerCell and nextCell are adjacent, move player and update game state
    if (nextCell >= 0 && labyrinth[playerCell][nextCell]) {
      playerCell = nextCell;
      floorTiles[playerCell] = floorTiles[playerCell] + 1;
      render();
    }

    // If the player is at the bottom right corner he has won
    if (playerCell == nRows * nCols - 1) {
      document.getElementById("btn").disabled = false;
      window.removeEventListener("keydown", keyboardHandler, false);
      var nSteps = 0;
      var nBacktrack = 0;
      for (var i = 0; i < nRows * nCols; i++) {
        nSteps += floorTiles[i] > 0;
        nBacktrack += floorTiles[i];
      }
      nBacktrack = nBacktrack - nSteps;
      gameMessages.innerHTML =
        "Congrats, you made it out...<br>It took you " +
        nSteps +
        " steps of which " +
        nBacktrack +
        " were feeble and confused backtracking.";
    }
  }

  // Handles updating the timer
  function timerTick() {
    // If the player is not at the goal
    if (playerCell != nRows * nCols - 1) {
      // Set up next call of timerTick
      window.setTimeout(function () {
        timerTick();
      }, 1000);
      timeLeft++;

      // Update timer display
      var msg = timeLeft + " Seconds so far";
      if (timeLeft % 2) msg = "<b>TICK!</b>     " + msg + "          ";
      else msg = "          " + msg + "     <b>TOCK!</b>";
      timer.innerHTML = msg;
    }
  }

  // Draws the labyrinth walls and heatmap of player steps
  function render() {
    // Draw player position, exit and heatmap
    drawingSurface.clearRect(0, 0, canvas.width, canvas.height);
    for (var cell = 0; cell < nRows * nCols; cell++) {
      var cellRow = Math.floor(cell / nRows);
      var cellCol = cell % nCols;
      if (cell == playerCell) drawingSurface.fillStyle = "rgba(0, 0, 255, 0.4)";
      else if (cell == nRows * nCols - 1)
        drawingSurface.fillStyle = "rgba(0, 255, 0, 0.6)";
      else
        drawingSurface.fillStyle =
          "rgba(255, 0, 0, " + floorTiles[cell] / 10 + ")";
      drawingSurface.fillRect(
        cellCol * CELL_SIZE,
        cellRow * CELL_SIZE,
        CELL_SIZE,
        CELL_SIZE
      );
    }

    // Draw walls over heatmap
    drawingSurface.lineWidth = 2;
    for (var cell = 0; cell < nRows * nCols; cell++) {
      var cellRow = Math.floor(cell / nRows);
      var cellCol = cell % nCols;
      if (cellRow < nRows - 1)
        if (!labyrinth[cell][cell + nCols]) {
          drawingSurface.beginPath();
          drawingSurface.moveTo(cellCol * CELL_SIZE, (cellRow + 1) * CELL_SIZE);
          drawingSurface.lineTo(
            (cellCol + 1) * CELL_SIZE,
            (cellRow + 1) * CELL_SIZE
          );
          drawingSurface.stroke();
        }
      if (cellCol < nCols - 1)
        if (!labyrinth[cell][cell + 1]) {
          drawingSurface.beginPath();
          drawingSurface.moveTo((cellCol + 1) * CELL_SIZE, cellRow * CELL_SIZE);
          drawingSurface.lineTo(
            (cellCol + 1) * CELL_SIZE,
            (cellRow + 1) * CELL_SIZE
          );
          drawingSurface.stroke();
        }
    }
  }
}
