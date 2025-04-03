import Gameboard from "./components/Gameboard"
import Log from "./components/Log"
import Player from "./components/Player"
import { useState } from "react"


const deriveActivePlayer = (gameTurns)=> {
  let currentPlayer = 'X'
  if(gameTurns.length > 0 && gameTurns[0].player=== 'X'){
    currentPlayer= 'O'
  }
  return currentPlayer;
}
function App() {
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)

  const handleSelectSquare = (rowIndex, colIndex)=>{
      setGameTurns((prevTurns)=>{
      let currentPlayer = deriveActivePlayer(prevTurns)
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
          <Player initialName="player one" symbol="X" isActive={activePlayer==='X'}/>
          <Player initialName="player two" symbol="O" isActive={activePlayer==='O'} />
        </ol>
        GAME BOARD
        <Gameboard turns={gameTurns} onSelectSquare={handleSelectSquare} />
     
      </div>
    
      Logs:
      <Log turns={gameTurns}/>
           
       
    </main>
  )
}

export default App
