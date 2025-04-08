import React from 'react'

function InputGroups({ firstInput,secondInput,labelOne, onUpdateInputOne, secondLabel,onUpdateInputTwo}) {
  return (
    
    <div  className="input-group">
      <div>
      <label htmlFor="initial-investment">{labelOne}</label>
    <input type="text" id="initial-investment" onChange={(e)=>onUpdateInputOne(e.target.value)} value={firstInput}/>
   
    </div>

    <div>
      <label htmlFor="annual-investment">{secondLabel}</label>
    <input id="annual-investment"  onChange={(e)=>onUpdateInputTwo(e.target.value)} value={secondInput} />
  
    </div>
    </div>
  )
}

export default InputGroups