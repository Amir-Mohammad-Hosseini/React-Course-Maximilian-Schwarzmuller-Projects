import React from 'react'

const Log = ({turns}) => {
    const calculateSquareNumber = (rowIndex , colIndex) => {
        let squareNumber = (rowIndex * 3) + colIndex + 1
        return squareNumber
    }
  return (
    <ol id='log'>
      {turns.length>0 && turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>{turn.player}  Selected {calculateSquareNumber(turn.square.row , turn.square.col)}</li>
      ))}
    </ol>
  )
}

export default Log
