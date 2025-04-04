import React from 'react'

function GameOver({winner}) {
  return (
    <>
    <div id="game-over">
    <p>{winner} won!</p>
    <button>Restart Match</button>
    </div>
    </>
  )
}

export default GameOver