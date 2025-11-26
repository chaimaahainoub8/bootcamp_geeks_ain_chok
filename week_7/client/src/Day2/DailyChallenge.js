import React, { useState } from 'react';

const DailyChallenge = () => {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaScript", votes: 0},
    {name: "Java", votes: 0}
  ]);

  const vote = (i) => {
    const newLangs = [...languages];
    newLangs[i].votes++;
    setLanguages(newLangs);
  }

  return (
    <div className="container mt-3">
      <h2>Day 2 Daily Challenge: Voting</h2>
      {languages.map((lang, i) => (
        <div key={i} className="card p-2 mb-2 d-flex flex-row justify-content-between bg-light">
          <span>{lang.votes}</span>
          <span>{lang.name}</span>
          <button onClick={() => vote(i)} className="text-success border-0 bg-transparent">Click Here</button>
        </div>
      ))}
    </div>
  );
}
export default DailyChallenge;