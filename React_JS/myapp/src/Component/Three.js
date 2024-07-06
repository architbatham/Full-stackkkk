import React, { useState } from 'react';
import '../CSS/three.css'; 

export default function Three() {
  const [input, setInput] = useState('');

  return (
    <div>
      <h4>Write anyting</h4>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <p>Output: {input}</p>
    </div>
  );
}
