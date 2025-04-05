import Gameboard from "./components/Gameboard"
import Log from "./components/Log"
import Player from "./components/Player"
import { useEffect, useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"
let initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
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
  const [players, setPlayers]= useState({
    'X': 'Player One',
    'O': 'Player Two'
  })
  let gameBoard= [...initialBoard.map(board=>[...board])]
  let winner = null;
  let hasDraw = !winner && gameTurns.length === 9;
  const restartBoard = ()=>setGameTurns([])

const handlePlayerNameChange = ()=>{
  setPlayers(prevPlayers=> ({...prevPlayers, 'X': 'kk'}))
}
  


  for(const turn of gameTurns){
      const {square, player}= turn;
      const {row, col}=square;
      gameBoard[row][col]=player;
  }


  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]
    if(firstSquareSymbol && firstSquareSymbol == secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol){
    winner=firstSquareSymbol;
    }
  }
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
          <Player initialName="player one" symbol="X" isActive={activePlayer==='X'} onNameChange={handlePlayerNameChange} />
          <Player initialName="player two" symbol="O" isActive={activePlayer==='O'} onNameChange={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) ? <GameOver winner={winner} hasDraw={hasDraw} restartBoard={restartBoard} />: 
        "GAME BOARD"}
        
        <Gameboard board={gameBoard} onSelectSquare={handleSelectSquare} />
     
      </div>
    
      Logs:
      <Log turns={gameTurns}/>
           
       
    </main>
  )
}

export default App
