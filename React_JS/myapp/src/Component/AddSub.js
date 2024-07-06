import React, { useState } from 'react';
import '../CSS/addsub.css'
export default function AddSub() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter app</h1>
      <button onClick={() => setCount(count + 1)}> + </button>
      <spam>{count}</spam>
      <button onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
}
