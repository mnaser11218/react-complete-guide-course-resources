import Gameboard from "./components/Gameboard"
import Log from "./components/Log"
import Player from "./components/Player"
import { useEffect, useState } from "react"
import {deriveActivePlayer, deriveGameBoard,deriveWinner, PLAYERS, INITIAL_GAME_BOARD } from "./helperMethods"
import GameOver from "./components/GameOver"

function App() {
  //STATE
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)
  const [players, setPlayers]= useState(PLAYERS)
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players)
  let hasDraw = !winner && gameTurns.length === 9;



  //METHODS
  const restartBoard = ()=>setGameTurns([])
  const handlePlayerNameChange = (symbol, playerName)=>{setPlayers(prevPlayers=> ({...prevPlayers, [symbol]: playerName}))}
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
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer==='X'} onNameChange={handlePlayerNameChange} />
          <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer==='O'} onNameChange={handlePlayerNameChange} />
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
