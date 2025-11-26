import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Components
import Day1XP from './Day1/ExercisesXP/ParentExercise';
import Day1Daily from './Day1/DailyChallenge';

import Day2XP from './Day2/ExercisesXP/ParentExercise';
import Day2Daily from './Day2/DailyChallenge';

import Day3XP from './Day3/ExercisesXP/ParentExercise';
import Day3Daily from './Day3/DailyChallenge';

import Day4XP from './Day4/ExercisesXP/ParentExercise';
import Day4Daily from './Day4/DailyChallenge';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        {/* Sidebar Menu */}
        <div className="bg-light p-3 vh-100" style={{ minWidth: '220px' }}>
          <h3>Week 7</h3>
          <hr />
          
          <h6 className="fw-bold mt-3">Day 1</h6>
          <ul className="list-unstyled ps-2">
            <li><Link to="/day1/xp">Exercises XP</Link></li>
            <li><Link to="/day1/daily">Daily Challenge</Link></li>
          </ul>

          <h6 className="fw-bold mt-3">Day 2</h6>
          <ul className="list-unstyled ps-2">
            <li><Link to="/day2/xp">Exercises XP</Link></li>
            <li><Link to="/day2/daily">Daily Challenge</Link></li>
          </ul>

          <h6 className="fw-bold mt-3">Day 3</h6>
          <ul className="list-unstyled ps-2">
            <li><Link to="/day3/xp">Exercises XP</Link></li>
            <li><Link to="/day3/daily">Daily Challenge</Link></li>
          </ul>

          <h6 className="fw-bold mt-3 text-primary">Day 4</h6>
          <ul className="list-unstyled ps-2">
            <li><Link to="/day4/xp">Exercises XP</Link></li>
            <li><Link to="/day4/daily">Daily Challenge</Link></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<h2>Select a Day from the menu to start!</h2>} />
            
            {/* Day 1 Routes */}
            <Route path="/day1/xp" element={<Day1XP />} />
            <Route path="/day1/daily" element={<Day1Daily />} />

            {/* Day 2 Routes */}
            <Route path="/day2/xp" element={<Day2XP />} />
            <Route path="/day2/daily" element={<Day2Daily />} />

            {/* Day 3 Routes */}
            <Route path="/day3/xp" element={<Day3XP />} />
            <Route path="/day3/daily" element={<Day3Daily />} />

            {/* Day 4 Routes (With nested routes for Ex 1) */}
            <Route path="/day4/xp/*" element={<Day4XP />} />
            <Route path="/day4/daily" element={<Day4Daily />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;