import React from 'react'

function UserInput({ secondInput, secondLabel,onUpdateInputTwo}) {
  return (
    <div  className="input-group">
    <div>
      <label htmlFor="initial-investment">{secondLabel}</label>
    <input type="text" id="initial-investment" onChange={(e)=>onUpdateInputTwo(e.target.value)} value={secondInput}/>
    </div>
    </div>
  )
}

export default UserInput