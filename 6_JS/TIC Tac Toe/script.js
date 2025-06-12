document.addEventListener("DOMContentLoaded", () => {
  let board = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let gameActive = true;
  let scores = {
    player: 0,
    computer: 0,
    ties: 0,
  };

  const boardElement = document.getElementById("board");
  const cells = document.querySelectorAll(".cell");
  const statusElement = document.getElementById("status");
  const restartBtn = document.getElementById("restart-btn");
  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");
  const tiesElement = document.getElementById("ties");

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  cells.forEach((cell) => { // Add event listener to each cell
    cell.addEventListener("click", () => handleCellClick(cell));
  });

  restartBtn.addEventListener("click", restartGame); // Add event listener to restart button

  function handleCellClick(cell) {
    const index = cell.getAttribute("data-index"); // Get the index of the clicked cell
    if (board[index] !== "" || !gameActive) return; // If the cell is already filled or the game is not active, do nothing

    board[index] = currentPlayer; // Update the board with the current player's move
    cell.textContent = currentPlayer; // Display the current player's symbol in the cell
    cell.classList.add("x"); // Add class for styling

    if (checkWin()) { // Check if the current player has won   **************clear till here
      endGame(false); // If the player has won, end the game
      return;   
    }

    if (checkDraw()) { // Check if the game is a draw
      endGame(true);  // If it's a draw, end the game
      return;
    }
    currentPlayer = "O";  // Switch to the computer's turn
    statusElement.textContent = "Computer's turn (0)";  // Update the status message
    setTimeout(computerMove, 500); // Delay the computer's move for better UX
  }

  // Function to handle the computer's move
  function computerMove() {   
    if (!gameActive) return;  // If the game is not active, do nothing
    const bestMove = findBestMove();  // Find the best move for the computer
    board[bestMove] = currentPlayer; // Update the board with the computer's move
    cells[bestMove].textContent = currentPlayer;  // Display the computer's symbol in the cell
    cells[bestMove].classList.add("o");   // Add class for styling
    if (checkWin()) { // Check if the computer has won
      endGame(false); // If the computer has won, end the game
      return;
    }

    if (checkDraw()) {  // Check if the game is a draw
      endGame(true);  // If it's a draw, end the game
      return;
    }
    currentPlayer = "X";  // Switch back to the player's turn
    statusElement.textContent = "Your turn (X)";  // Update the status message
  }

  function findBestMove() {  // Function to find the best move for the computer
    // Try to win
    for (let i = 0; i < board.length; i++) {  // loop goes true till board length - 1
      if (board[i] === "") { // check if the cell is empty
        board[i] = "O";   // Place computer's symbol in the cell
        if (checkWin()) {  // Check if this move wins the game
          board[i] = "";  // Reset the cell
          return i; // Return the index of the winning move
        }
        board[i] = "";    // Reset the cell
      }
    }

    // Block player from winning
    for (let i = 0; i < board.length; i++) { // loop goes true till board length - 1
      if (board[i] === "") {  // check if the cell is empty
        board[i] = "X";  //place player's symbol in the cell
        if (checkWin()) { //check if this move wins the game
          board[i] = "";// if it does, reset the cell 
          return i; // Return the index of the blocking move
        }
        board[i] = "";
      }
    }

    // Try to take center
    if (board[4] === "") return 4; // If the center is empty, take it

    // Try to take corners    
    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter((corner) => board[corner] === "");
    if (availableCorners.length > 0) {
      return availableCorners[
        Math.floor(Math.random() * availableCorners.length)
      ];
    }

    // Take any available edge 
    const edges = [1, 3, 5, 7];
    const availableEdges = edges.filter((edge) => board[edge] === "");
    if (availableEdges.length > 0) {
      return availableEdges[Math.floor(Math.random() * availableEdges.length)];
    }

    // Take any available spot
    const availableMoves = board
      .map((cell, index) => (cell === "" ? index : null))
      .filter((cell) => cell !== null);
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  }

  function checkWin() { // Function to check if the current player has won
    return winningCombinations.some((combination) => {
      return combination.every((index) => {
        return board[index] === currentPlayer;
      });
    });
  }
  function checkDraw() { // Function to check if the game is a draw
    return board.every((cell) => cell !== "");
  }
  function endGame(isDraw) {  // Function to end the game is draw or not if drow ties increment or else player or computer score increment
    gameActive = false;
    restartBtn.classList.remove("hidden");

    if (isDraw) {
      statusElement.textContent = "Draw";
      scores.ties += 1;
      tiesElement.textContent = scores.ties;
    } else {
      if (currentPlayer == "X") {
        statusElement.textContent = "You win";
        scores.player += 1;
        playerScoreElement.textContent = scores.player;
      } else {
        statusElement.textContent = "Computer wins";
        scores.computer += 1;
        computerScoreElement.textContent = scores.computer;
      }
    }
  }

  function restartGame() {  // Function to restart the game  
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    statusElement.textContent = "Your turn (x)";
    restartBtn.classList.add("hidden");

    cells.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("x", "o");
    });
  }
});