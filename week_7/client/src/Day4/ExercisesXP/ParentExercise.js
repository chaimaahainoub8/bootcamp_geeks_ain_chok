import React from 'react';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3 from './Exercise3';
import Exercise4 from './Exercise4';

const ParentExercise = () => {
  return (
    <div className="container">
      <h2 className="text-primary mt-3">Day 4: Exercises XP</h2>
      <Exercise1 />
      <Exercise2 />
      <Exercise3 />
      <Exercise4 />
    </div>
  );
}
export default ParentExercise;