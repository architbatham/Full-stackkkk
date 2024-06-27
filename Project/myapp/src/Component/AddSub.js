import React, { useState } from 'react'

export default function AddSub() {

    const[count,setCount] = useState(0);
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}> + </button>
        <spam>{count}</spam>
        <button onClick={()=>setCount(count-1)}> - </button>
    </div>
  )
}
