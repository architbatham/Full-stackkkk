//Fetch Data API || React JS
// import { response } from 'express'
import React, { useEffect, useState } from 'react'

export default function Six() {

    const[data,setData] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((Json) => console.log(Json))
    })
  return (
    <div>
        {
            data? (
                <div>
                    <h1>Title: {data.title}</h1>
                </div>

            ):(
                <p>
                    Loading....
                </p>
            )}

    </div>
  )
}
