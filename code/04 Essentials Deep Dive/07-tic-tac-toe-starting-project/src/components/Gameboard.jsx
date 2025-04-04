function Gameboard({board, onSelectSquare}) {
  

return (
    <ol id="game-board">

        {board.map((row, rowIndex)=>(
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