import React, { useState } from 'react'

export default function Nine() {

    const [backgroundColor,setBackgroundColour] = useState('red');

    const handleClick =() =>{
        const newColour = backgroundColor === 'red' ? 'blue' : 'red';
        setBackgroundColour(newColour);
    };

  return (
    <div onClick={handleClick}
    style={
        {backgroundColor,
        width:'200px',
        height:'200px',
        cursor:'pointer'
        }

    }>
        Click me to Change colour
    </div>
  );
}
