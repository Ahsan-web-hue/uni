import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);
  const isDraw = board.every(square => square !== null) && !winner;

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => (
    <button
      className={`border-2 border-gray-400 rounded-lg h-20 w-20 text-4xl font-bold transition duration-200 ease-in-out focus:outline-none ${
        board[index] ? 'bg-gray-200' : 'hover:bg-gray-100'
      }`}
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-semibold mb-4">Tic-Tac-Toe</h1>
      <div className="mb-4 text-xl">
        {winner ? (
          <div className="text-green-600">
            <span className="font-bold animate-bounce">Hooray!</span> {winner} wins! 
            <br />
            {winner === 'X' ? 'O is the loser.' : 'X is the loser.'}
          </div>
        ) : isDraw ? (
          <span className="text-red-600 font-bold">It's a Draw!</span>
        ) : (
          `Next Player: ${isXNext ? 'X' : 'O'}`
        )}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-600 transition duration-300"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

// Function to calculate the winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;
