import React from 'react';

const Exercise1 = () => {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  return (
    <div className="border p-3 mb-3">
      <h5>Ex 1: No JSX</h5>
      <p>Hello World!</p>
      {myelement}
      <p>React is {sum} times better with JSX</p>
    </div>
  );
}
export default Exercise1;