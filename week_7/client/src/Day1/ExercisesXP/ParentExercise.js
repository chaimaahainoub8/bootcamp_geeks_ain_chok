import React from 'react';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3 from './Exercise3';

const ParentExercise = () => (
  <div className="container mt-3">
    <h2 className="text-primary">Day 1 Exercises XP</h2>
    <Exercise1 />
    <Exercise2 />
    <Exercise3 />
  </div>
);
export default ParentExercise;