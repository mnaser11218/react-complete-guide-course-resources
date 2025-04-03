import React, { useState }  from 'react'

let initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
function Gameboard({turns, onSelectSquare}) {
    const gameBoard = initialBoard;
    for(const turn of turns){
        const {square, player}= turn;
        const {row, col}=square;
        gameBoard[row][col]=player;
    }

return (
    <ol id="game-board">

        {gameBoard.map((row, rowIndex)=>(
             <li key={rowIndex}>
                <ol>
                {row.map((column, columnIndex)=>(
                    <li key={columnIndex}>
                    <button onClick={()=> onSelectSquare(rowIndex, columnIndex)} disabled={column} >{column}</button>
                    </li>
                ))}
                </ol>
            </li>
        ))}
    </ol>
  )
}

export default Gameboard