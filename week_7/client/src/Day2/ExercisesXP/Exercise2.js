import React, { useState } from 'react';

const Exercise2 = () => {
  const [color, setColor] = useState("red");

  return (
    <div className="border p-3 mb-3">
      <h5>Ex 2: State (Color)</h5>
      <p style={{background: color, padding: '10px'}}>My favorite color is {color}</p>
      <button onClick={() => setColor("blue")}>Change to Blue</button>
    </div>
  );
}
export default Exercise2;