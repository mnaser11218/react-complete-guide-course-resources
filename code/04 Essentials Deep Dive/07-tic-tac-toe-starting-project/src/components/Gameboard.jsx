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
//     const [board, setBoard] = useState(initialBoard)
// const handleBoardClick = (rowIndex, columnIndex) => {
//     const updatedBoard = [...board]
//     updatedBoard[rowIndex][columnIndex] =symbol
//     setBoard(updatedBoard)
//     updateSym()
// }  
return (
    <ol id="game-board">

        {gameBoard.map((row, rowIndex)=>(
             <li key={rowIndex}>
                <ol>
                {row.map((column, columnIndex)=>(
                    <li key={columnIndex}>
                    <button onClick={()=> onSelectSquare(rowIndex, columnIndex)} >{column}</button>
                    </li>
                ))}
                </ol>
            </li>
        ))}
    </ol>
  )
}

export default Gameboard