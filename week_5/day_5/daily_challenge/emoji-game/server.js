const express = require('express');
const app = express();
const PORT = 3000;

// --- Middleware ---
// To parse JSON bodies (for POST requests)
app.use(express.json());
// To serve static files (like index.html, app.js) from the 'public' directory
app.use(express.static('public'));

// --- In-Memory Game Data ---

// 2. Create an array of emoji objects
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🎉', name: 'Party Popper' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '💻', name: 'Laptop' },
    { emoji: '📚', name: 'Books' }
];

// 9. Keep track of the player's total score
let score = 0;
let currentCorrectAnswer = '';

// 10. Implement a leaderboard
let leaderboard = [
    { name: 'Bot1', score: 3 },
    { name: 'Bot2', score: 1 }
];

// --- Utility Functions ---

// Helper function to get a random item from an array
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Helper function to shuffle an array
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

// --- API Endpoints ---

/**
 * GET /api/question
 * Generates a new question with one correct emoji and 3 distractors.
 */
app.get('/api/question', (req, res) => {
    // 3. Generate a random emoji from the array
    const correctEmoji = getRandomItem(emojis);
    currentCorrectAnswer = correctEmoji.name; // Store the correct answer

    // Get 3 unique distractors
    const distractors = [];
    while (distractors.length < 3) {
        const distractor = getRandomItem(emojis);
        if (distractor.name !== currentCorrectAnswer && !distractors.some(d => d.name === distractor.name)) {
            distractors.push(distractor);
        }
    }

    // 4. Create multiple choice options (including the correct name)
    const options = [correctEmoji.name, ...distractors.map(d => d.name)];
    
    res.json({
        emoji: correctEmoji.emoji,
        options: shuffleArray(options)
    });
});

/**
 * POST /api/guess
 * Checks the player's guess and returns feedback and the current score.
 */
app.post('/api/guess', (req, res) => {
    const { guess } = req.body;

    // 6. Check if the guess is correct
    if (guess === currentCorrectAnswer) {
        // 6. ...and update the player's score
        score++;
        // 7. Provide feedback
        res.json({ correct: true, feedback: 'Correct!', score: score });
    } else {
        // 7. Provide feedback
        res.json({ correct: false, feedback: `Wrong! The answer was ${currentCorrectAnswer}.`, score: score });
    }
    // 8. (Continuing) The front-end will call /api/question again
});

/**
 * GET /api/leaderboard
 * Returns the current leaderboard.
 */
app.get('/api/leaderboard', (req, res) => {
    res.json(leaderboard);
});

/**
 * POST /api/leaderboard
 * Submits a new score to the leaderboard and resets the game.
 */
app.post('/api/leaderboard', (req, res) => {
    const { name } = req.body;
    if (name) {
        leaderboard.push({ name: name, score: score });
        // Sort by score (highest first) and keep top 5
        leaderboard.sort((a, b) => b.score - a.score);
        leaderboard = leaderboard.slice(0, 5);
    }
    score = 0; // Reset score for the next game
    res.json(leaderboard);
});


// 1. Set up an Express server to handle the game
app.listen(PORT, () => {
    console.log(`Emoji game server running on http://localhost:${PORT}`);
});