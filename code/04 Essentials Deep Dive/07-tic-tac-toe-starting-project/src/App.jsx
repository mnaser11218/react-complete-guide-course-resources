import Gameboard from "./components/Gameboard"
import Player from "./components/Player"
import { useState } from "react"

function App() {
  const [symb, setSymb] = useState('X')
  const handleBoxClick = ()=>setSymb((prevSymb)=>prevSymb === 'X' ? 'O' : 'X')
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player one" symbol="X" isActive={symb==='X'}/>
          <Player initialName="player two" symbol="O" isActive={symb==='O'} />
        </ol>
        GAME BOARD
        <Gameboard symbol={symb} updateSym={handleBoxClick} />
      </div>
    
           
       
    </main>
  )
}

export default App
