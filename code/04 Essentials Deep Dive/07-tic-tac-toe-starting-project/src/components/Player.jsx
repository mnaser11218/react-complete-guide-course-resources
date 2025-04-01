import { useState, useEffect} from "react"

export default function Player({name, symbol}){
    const [player, setPlayer] = useState(name)
    const [isEditing, setIsEditing] = useState(false)
    let playerName = player;
    let btnCaption = 'Edit'
    if(isEditing){
        playerName = <input onChange={(e)=>setPlayer(e.target.value)} />
        btnCaption = 'Save'
    }
    return (
        <li>
        <span className="player">
        <span className="player-name">{playerName}</span>
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={()=> setIsEditing(!isEditing)}>{btnCaption}</button>
      </li> 
    )
}