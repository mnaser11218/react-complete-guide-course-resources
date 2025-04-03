import React from 'react'

function Log({turns}) {
  return (
    <ol id="log">
       {turns.map((turn)=>(
        <li key={turn.square.row + turn.square.col}>
            Square: row: {turn.square.row } col: {turn.square.col}, 
            Player: {turn.player}
        </li>
       ))}
        </ol>
  )
}

export default Log