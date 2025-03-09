import React from 'react'

function TabButton({children, onSelect, setValue}) {
  return (
    <li>
        <button onClick={()=>setValue(children)}>{children}</button>
    </li>
  )
}

export default TabButton