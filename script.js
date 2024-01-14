let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(event) {
    const cellIndex = event.target.dataset.index;

    if (gameBoard[cellIndex] === '' && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        
        if (checkWin()) {
            displayMessage(`Player ${currentPlayer} wins!`);
            gameActive = false;
        } else if (checkDraw()) {
            displayMessage('It\'s a draw!');
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
            return true;
        }
    }

    return false;
}

function checkDraw() {
    return !gameBoard.includes('');
}

function displayMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
}
