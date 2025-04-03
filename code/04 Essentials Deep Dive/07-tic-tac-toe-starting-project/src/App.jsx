import Gameboard from "./components/Gameboard"
import Log from "./components/Log"
import Player from "./components/Player"
import { useState } from "react"

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [symb, setSymb] = useState('X')
  const handleSelectSquare = (rowIndex, colIndex)=>{
    setSymb((prevSymb)=>prevSymb === 'X' ? 'O' : 'X')
    setGameTurns((prevTurns)=>{
      let currentPlayer = 'X'
      if(prevTurns.length > 0 && prevTurns[0].player=== 'X'){
        currentPlayer= 'O'
      }
      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns,
      ]
      return updatedTurns;
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player one" symbol="X" isActive={symb==='X'}/>
          <Player initialName="player two" symbol="O" isActive={symb==='O'} />
        </ol>
        GAME BOARD
        <Gameboard turns={gameTurns} onSelectSquare={handleSelectSquare} />
        Logs:
        <Log turns={gameTurns}/>
      </div>
    
           
       
    </main>
  )
}

export default App
