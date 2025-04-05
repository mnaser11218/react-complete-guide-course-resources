import React from 'react'

function GameOver({winner, restartBoard}) {
  return (
    <>
    <div id="game-over">
   { winner ? <p>{winner} won!</p> :
   <p>It's a draw</p> }
    <button onClick={restartBoard}>Restart Match</button>
    </div>
    </>
  )
}

export default GameOver