// Use ES6 import syntax
import express from 'express';
import quizRouter from './quizRouter.js';

// Create the Express app
const app = express();
const PORT = 3000;

// --- Middleware ---
// This is crucial for parsing JSON data from the body of POST requests
app.use(express.json());

// --- Routes ---
// Mount the quiz router on the /quiz path
// All routes defined in quizRouter will be prefixed with /quiz
app.use('/quiz', quizRouter);

// A simple home route
app.get('/', (req, res) => {
  res.send('Welcome to the Trivia Quiz API! Go to /quiz to start a new game.');
});

// Start the server
app.listen(PORT, () => {
  // Use a template literal for the console log
  console.log(`Server is running on http://localhost:${PORT}`);
});