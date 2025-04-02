import React, { useState }  from 'react'

let initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
function Gameboard({symbol, updateSym}) {
    const [board, setBoard] = useState(initialBoard)
const handleBoardClick = (rowIndex, columnIndex) => {
    const updatedBoard = [...board]
    updatedBoard[rowIndex][columnIndex] =symbol
    setBoard(updatedBoard)
    updateSym()
}  
return (
    <ol id="game-board">

        {board.map((row, rowIndex)=>(
             <li key={rowIndex}>
                <ol>
                {row.map((column, columnIndex)=>(
                    <li key={columnIndex}>
                    <button onClick={()=>handleBoardClick(rowIndex, columnIndex)} >{column}</button>
                    </li>
                ))}
                </ol>
            </li>
        ))}
    </ol>
  )
}

export default Gameboard