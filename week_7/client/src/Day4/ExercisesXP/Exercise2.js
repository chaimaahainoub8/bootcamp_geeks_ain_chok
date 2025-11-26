import React from 'react';
const data = [
  {id:1, title:"Hello World", content:"Try Reactjs is awesome.", date:"12-04-2017"},
  {id:2, title:"Setup React", content:"Setting up react is easy.", date:"1-28-2018"}
];

const Exercise2 = () => (
  <div className="border p-3 mb-3">
    <h5>Ex 2: Post List (JSON)</h5>
    {data.map(post => (
      <div key={post.id}>
        <h6>{post.title}</h6>
        <p>{post.content}</p>
      </div>
    ))}
  </div>
);
export default Exercise2;