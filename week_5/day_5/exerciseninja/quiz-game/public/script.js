// --- 1. DEFINE QUESTIONS ---
// (Requirement 3)
const questions = [
  {
    question: 'What does `res.send()` do in Express?',
    answers: [
      { text: 'Sends a JSON response', correct: false },
      { text: 'Sends a response of various types (HTML, text, JSON, etc.)', correct: true },
      { text: 'Redirects the client to another URL', correct: false },
      { text: 'Renders a view template', correct: false }
    ]
  },
  {
    question: 'What is middleware in Express?',
    answers: [
      { text: 'A function that has access to req, res, and next objects', correct: true },
      { text: 'A database for storing user data', correct: false },
      { text: 'A templating engine', correct: false },
      { text: 'The final route handler', correct: false }
    ]
  },
  {
    question: 'Which command is used to install Express?',
    answers: [
      { text: 'npm get express', correct: false },
      { text: 'npm express', correct: false },
      { text: 'npm install express', correct: true },
      { text: 'npm add express', correct: false }
    ]
  },
  {
    question: 'How do you get the value of a URL parameter named `id`?',
    answers: [
      { text: 'req.body.id', correct: false },
      { text: 'req.query.id', correct: false },
      { text: 'req.id', correct: false },
      { text: 'req.params.id', correct: true }
    ]
  }
];

// --- 2. GET HTML ELEMENTS ---
const questionTextElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const feedbackTextElement = document.getElementById('feedback-text');
const nextButton = document.getElementById('next-btn');
const scoreTextElement = document.getElementById('score-text');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const finalScoreTextElement = document.getElementById('final-score-text');
const restartButton = document.getElementById('restart-btn');

// --- 3. INITIALIZE STATE ---
let currentQuestionIndex = 0;
let score = 0;

// --- 4. EVENT LISTENERS ---
nextButton.addEventListener('click', showNextQuestion);
restartButton.addEventListener('click', startQuiz);

// --- 5. START QUIZ ---
startQuiz();

/**
 * Initializes or restarts the quiz.
 */
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreTextElement.innerText = 'Score: 0';
  quizContainer.classList.remove('hidden');
  resultsContainer.classList.add('hidden');
  showQuestion();
}

/**
 * Displays the current question and its answers.
 * (Requirement 4: Display one question at a time)
 */
function showQuestion() {
  // Reset previous state
  resetState();
  
  const question = questions[currentQuestionIndex];
  questionTextElement.innerText = question.question;

  // Create buttons for each answer
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    
    // Store the correct answer info on the button itself
    if (answer.correct) {
      button.dataset.correct = true;
    }
    
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

/**
 * Resets the UI for the next question.
 */
function resetState() {
  nextButton.classList.add('hidden');
  feedbackTextElement.innerText = '';
  feedbackTextElement.className = ''; // Remove .correct or .wrong
  
  // Remove all old answer buttons
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

/**
 * Handles the user's answer selection.
 * (Requirement 5: Allow user to select and submit)
 * (Requirement 6: Provide immediate feedback)
 */
function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === 'true';

  // Provide feedback
  if (isCorrect) {
    feedbackTextElement.innerText = 'Correct!';
    feedbackTextElement.classList.add('correct');
    score++; // (Requirement 7: Keep track of score)
  } else {
    feedbackTextElement.innerText = 'Wrong!';
    feedbackTextElement.classList.add('wrong');
  }

  // Update score display
  scoreTextElement.innerText = `Score: ${score}`;
  
  // Show correct answer and disable all buttons
  Array.from(answerButtonsElement.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  // Show the "Next" button
  nextButton.classList.remove('hidden');
}

/**
 * Loads the next question or ends the quiz.
 */
function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

/**
 * Displays the final score at the end of the quiz.
 * (Requirement 8: Display final score)
 */
function showResults() {
  quizContainer.classList.add('hidden');
  resultsContainer.classList.remove('hidden');
  finalScoreTextElement.innerText = `Your final score is ${score} / ${questions.length}`;
}