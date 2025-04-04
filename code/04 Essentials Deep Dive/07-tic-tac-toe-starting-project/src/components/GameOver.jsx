import React from 'react'

function GameOver({winner}) {
  return (
    <>
    <div id="game-over">
   { winner ? <p>{winner} won!</p> :
   <p>It's a draw</p> }
    <button >Restart Match</button>
    </div>
    </>
  )
}

export default GameOver