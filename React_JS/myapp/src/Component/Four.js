import React from 'react'

export default function Four() {

const item = ['item1' , 'item2' ,'item3' , 'item4' ,'item5' ]

  return (
    <div>
        {item.map((item,index)=>{
            return <li key={index}>{item}</li>
        })}
    </div>
  )
}
