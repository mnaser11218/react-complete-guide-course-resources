import { useState, useEffect} from "react"

export default function Player({updatePlayer,player, symbol, isActive}){
    // const [player, setPlayer] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)
    let playerName = player;
    let btnCaption = 'Edit'
    if(isEditing){
        playerName = <input value={player} onChange={(e)=>updatePlayer(e.target.value)} />
        btnCaption = 'Save'
    }
    return (
       
        <li className={isActive ? 'active' : undefined}> 
        <span className="player">
        <span className="player-name">{playerName}</span>
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={()=> setIsEditing((editing)=> !editing)}>{btnCaption}</button>
      </li> 
    
     
    )
}