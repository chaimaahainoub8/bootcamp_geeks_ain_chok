// --- DOM Elements ---
const cells = document.querySelectorAll('.cell');
const endgameDisplay = document.querySelector('.endgame');
const endgameText = document.querySelector('.endgame .text');
const selectXBtn = document.getElementById('selectX');
const selectOBtn = document.getElementById('selectO');
const difficultySelect = document.getElementById('difficulty');

// --- Game Variables ---
let origBoard; // Array that keeps track of the board
let huPlayer = 'O'; // Human player's symbol
let aiPlayer = 'X'; // AI player's symbol
const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [6, 4, 2]             // diagonals
];

// --- Event Listeners ---
selectXBtn.addEventListener('click', () => setPlayerSymbol('X'));
selectOBtn.addEventListener('click', () => setPlayerSymbol('O'));

// --- Functions ---

// Function to set the player's symbol
function setPlayerSymbol(symbol) {
    huPlayer = symbol;
    aiPlayer = symbol === 'O' ? 'X' : 'O';
    
    // Update button styles
    selectXBtn.classList.toggle('active', symbol === 'X');
    selectOBtn.classList.toggle('active', symbol === 'O');

    startGame();
}

// Start the game
function startGame() {
    endgameDisplay.style.display = 'none';
    // Initialize the board as an array of numbers 0-8
    origBoard = Array.from(Array(9).keys()); 
    
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
    
    // Let AI play first if it's 'X'
    if (aiPlayer === 'X') {
        turn(bestSpot(), aiPlayer);
    }
}

// **MODIFIED** Handles a click on a cell
function turnClick(square) {
    // Make sure the spot is empty before playing
    if (typeof origBoard[square.target.id] === 'number') {
        // The human takes a turn. The 'gameEnded' variable will be true if the human won or tied.
        const gameEnded = turn(square.target.id, huPlayer);
        
        // If the game did NOT end after the human's turn, it's the AI's turn.
        if (!gameEnded) {
            turn(bestSpot(), aiPlayer); // The AI takes its turn.
        }
    }
}

// **MODIFIED** Places a symbol on the board and checks for game-ending conditions
function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    
    let gameWon = checkWin(origBoard, player);
    if (gameWon) {
        gameOver(gameWon);
        return true; // Return true because the game is over
    }
    // checkTie() will handle its own UI and return true if it's a tie
    if (checkTie()) {
        return true; // Return true because the game is over
    }
    
    return false; // Return false because the game is still going
}

// Checks if a player has won
function checkWin(board, player) {
    // Find all the indexes on the board that the player has played in
    // 'a' is the accumulator, 'e' is the element, 'i' is the index
    let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
    
    let gameWon = null;
    // Check if any of the winCombos have been satisfied by the player's plays
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = {index: index, player: player};
            break;
        }
    }
    return gameWon;
}

// Declares the winner
function gameOver(gameWon) {
    // Highlight the winning combination
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor = 
            gameWon.player === huPlayer ? "blue" : "red";
    }
    // Remove click listeners to stop the game
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
    declareWinner(gameWon.player === huPlayer ? "You win! 🎉" : "You lose. 😢");
}

// Shows the endgame message
function declareWinner(who) {
    endgameDisplay.style.display = "flex";
    endgameText.innerText = who;
}

// Finds all empty squares
function emptySquares() {
    return origBoard.filter(s => typeof s === 'number');
}

// Determines the AI's move
function bestSpot() {
    const difficulty = difficultySelect.value;
    if (difficulty === 'easy') {
        // Easy mode: pick a random empty spot
        const empty = emptySquares();
        const randomIndex = Math.floor(Math.random() * empty.length);
        return empty[randomIndex];
    } else {
        // Hard mode: use the minimax algorithm
        return minimax(origBoard, aiPlayer).index;
    }
}

// Checks for a tie
function checkTie() {
    if (emptySquares().length === 0) {
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "green";
            cells[i].removeEventListener('click', turnClick, false);
        }
        declareWinner("Tie Game! 🤝");
        return true;
    }
    return false;
}

// --- AI Minimax Algorithm ---
// This is the "unbeatable" part of the AI
function minimax(newBoard, player) {
    const availSpots = emptySquares();

    // Base cases: check for terminal states (win, lose, tie)
    if (checkWin(newBoard, huPlayer)) {
        return {score: -10};
    } else if (checkWin(newBoard, aiPlayer)) {
        return {score: 10};
    } else if (availSpots.length === 0) {
        return {score: 0};
    }

    // Collect all possible moves
    let moves = [];
    for (let i = 0; i < availSpots.length; i++) {
        let move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;

        if (player === aiPlayer) {
            let result = minimax(newBoard, huPlayer);
            move.score = result.score;
        } else {
            let result = minimax(newBoard, aiPlayer);
            move.score = result.score;
        }

        newBoard[availSpots[i]] = move.index; // Reset the spot
        moves.push(move);
    }

    // Find the best move
    let bestMove;
    if (player === aiPlayer) {
        let bestScore = -10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = 10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}

// --- Initial Setup ---
setPlayerSymbol('O'); // Default to 'O' on page load