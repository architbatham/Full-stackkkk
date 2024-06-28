//Toggle Switch || React JS 
import React, { useState } from 'react'

export default function Five() {

    const[isToggled,setIsToggles] = useState(false);

    const handleToggle = () => {
        setIsToggles(!isToggled);
    }

  return (
    <div>
        <h1>Toggle Switch || React JS </h1>
        <lable>
            <input type='checkbox' onChange={handleToggle}/>
        </lable>
        <p>{isToggled ? "on" : "off"}</p>
    </div>
  )
}
