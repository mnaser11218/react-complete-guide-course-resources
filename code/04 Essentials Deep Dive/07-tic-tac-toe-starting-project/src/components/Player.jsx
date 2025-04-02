import { useState, useEffect} from "react"

export default function Player({initialName, symbol}){
    const [player, setPlayer] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)
    let playerName = player;
    let btnCaption = 'Edit'
    if(isEditing){
        playerName = <input value={player} onChange={(e)=>setPlayer(e.target.value)} />
        btnCaption = 'Save'
    }
    return (
        <li>
        <span className="player">
        <span className="player-name">{playerName}</span>
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={()=> setIsEditing((editing)=> !editing)}>{btnCaption}</button>
      </li> 
    )
}