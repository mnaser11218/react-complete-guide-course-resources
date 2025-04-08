import React from 'react'

function InputGroups({labelOne, onUpdateInputOne, secondLabel,onUpdateSecondInput}) {
  return (
    
    <div  className="input-group">

      <div>
      <label for="initial-investment">{labelOne}</label>
    <input id="initial-investment"></input>
   
    </div>

    <div >
      <label for="annual-investment">{secondLabel}</label>
    <input id="annual-investment" ></input>
  
    </div>
    </div>
  )
}

export default InputGroups