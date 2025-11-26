import React from 'react';

const Exercise1 = () => {
  const clickMe = () => alert("I was clicked!");
  const handleInput = (e) => console.log(e.target.value);

  return (
    <div className="border p-3 mb-3">
      <h5>Ex 1: Events</h5>
      <button onClick={clickMe}>Click Me</button>
      <input type="text" onKeyDown={handleInput} placeholder="Press key..." className="d-block mt-2" />
    </div>
  );
}
export default Exercise1;