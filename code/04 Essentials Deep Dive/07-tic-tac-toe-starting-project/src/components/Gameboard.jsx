import React from 'react'

let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
function Gameboard() {
  return (
    <ol id="game-board">

        {board.map((row, rowIndex)=>(
             <li key={rowIndex}>
                <ol>
                {row.map((column, columnIndex)=>(
                    <li key={columnIndex}>
                    <button  >{column}</button>
                    </li>
                ))}
                </ol>
            </li>
        ))}
    </ol>
  )
}

export default Gameboard