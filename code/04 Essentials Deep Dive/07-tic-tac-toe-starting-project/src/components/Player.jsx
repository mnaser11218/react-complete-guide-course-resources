import { useState, useEffect} from "react"

export default function Player({name, symbol}){
    const [player, setPlayer] = useState(name)
    const [isEditing, setIsEditing] = useState(false)
    const inputField = <input onChange={(e)=>setPlayer(e.target.value)}></input>

   
    return (
        <li>
        <span className="player">
        <span className="player-name">{ isEditing ? inputField : player }</span>
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={()=> setIsEditing(!isEditing)}>Edit</button>
      </li> 
    )
}