import React from 'react'

let board = [
    ['k', 'kd', 'kg'],
    ['la', 'lo', 'lk'],
    ['bs', 'bg', 'bh']
]
function Gameboard() {
  return (
    <ol>

        {board.map((row, rowIndex)=>{
            <li key={rowIndex}>
                {row.map((column, columnIndex)=>{
                    <button key={columnIndex} style={{color:"red"}}>{column}</button>
                })}
            </li>
        })}
    </ol>
  )
}

export default Gameboard