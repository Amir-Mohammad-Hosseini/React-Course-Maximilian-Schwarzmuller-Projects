import { useState } from "react";

const GameBoard = ({ onSelectPlayer, board }) => {

  //   Worse Way =>

  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //   const handleBoardClick = (rowIndex, playerSymbolIndex) => {
  //     if (!gameBoard[rowIndex][playerSymbolIndex]) {
  //       setGameBoard((prevGameBoard) => {
  //         const updatedBoard = [...prevGameBoard].map((rowArray) => [
  //           ...rowArray,
  //         ]);
  //         updatedBoard[rowIndex][playerSymbolIndex] =
  //           activePlayerSymbol === "X" ? "X" : "O";
  //         return updatedBoard;
  //       });
  //       onSelectPlayer();
  //     }
  //   };

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={`${colIndex}${colIndex}`}>
                <button
                  onClick={() => onSelectPlayer(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
