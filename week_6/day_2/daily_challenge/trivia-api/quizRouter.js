import { Router } from 'express';
const router = Router();

// --- 1. Model ---
// Hard-coded trivia questions
const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

// --- 2. Game State ---
// Simple in-memory state. This will be shared by all users.
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;

// --- 3. Routes ---

/**
 * GET /quiz
 * Starts the quiz and displays the first question.
 */
router.get('/', (req, res) => {
  // Reset the game state
  currentQuestionIndex = 0;
  score = 0;
  quizOver = false;
  
  res.json({
    message: "Quiz started! Here is your first question.",
    question: triviaQuestions[0].question
  });
});

/**
 * POST /quiz
 * Submits an answer to the current question and moves to the next.
 */
router.post('/', (req, res) => {
  // ES6 Destructuring to get the answer from the request body
  const { answer } = req.body;

  // Check if the quiz is already over
  if (quizOver) {
    return res.status(400).json({ 
      message: "The quiz is over. Please go to /quiz/score to see your score." 
    });
  }

  // Check if an answer was provided
  if (!answer) {
    return res.status(400).json({ error: "Please provide an 'answer' in the request body." });
  }

  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;
  let feedback = "";

  // Check the answer (case-insensitive)
  if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    feedback = "Correct! Well done.";
  } else {
    feedback = `Incorrect. The correct answer was "${correctAnswer}".`;
  }

  // Move to the next question
  currentQuestionIndex++;

  // Check if the quiz is now finished
  if (currentQuestionIndex >= triviaQuestions.length) {
    quizOver = true;
    res.json({
      feedback,
      message: "You have completed the quiz! Go to /quiz/score to see your final score."
    });
  } else {
    // Send feedback and the next question
    res.json({
      feedback,
      nextQuestion: triviaQuestions[currentQuestionIndex].question
    });
  }
});

/**
 * GET /quiz/score
 * Displays the user's final score at the end of the quiz.
 */
router.get('/score', (req, res) => {
  // Check if the quiz has been completed
  if (!quizOver) {
    return res.status(400).json({
      message: "The quiz is not yet finished.",
      currentProgress: `${currentQuestionIndex} / ${triviaQuestions.length} questions answered.`
    });
  }

  // Send the final score
  res.json({
    message: "Quiz Complete!",
    finalScore: `${score} out of ${triviaQuestions.length}`
  });
});

// Use ES6 export default
export default router;