import React, { useState }  from 'react'

let initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
function Gameboard() {
    const [board, setBoard] = useState(initialBoard)
const handleBoardClick = (rowIndex, column, columnIndex) => {
    const updatedBoard = [...board]
    updatedBoard[rowIndex][columnIndex] ='X'
    setBoard(updatedBoard)
}  
return (
    <ol id="game-board">

        {board.map((row, rowIndex)=>(
             <li key={rowIndex}>
                <ol>
                {row.map((column, columnIndex)=>(
                    <li key={columnIndex}>
                    <button onClick={()=>handleBoardClick(rowIndex, column, columnIndex)} >{column}</button>
                    </li>
                ))}
                </ol>
            </li>
        ))}
    </ol>
  )
}

export default Gameboard