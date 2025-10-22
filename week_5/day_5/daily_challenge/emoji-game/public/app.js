document.addEventListener('DOMContentLoaded', () => {
    // Get references to all DOM elements
    const scoreEl = document.getElementById('score');
    const emojiDisplayEl = document.getElementById('emoji-display');
    const optionsContainerEl = document.getElementById('options-container');
    const feedbackEl = document.getElementById('feedback');
    const leaderboardListEl = document.getElementById('leaderboard-list');
    
    // End-game elements
    const gameContainer = document.getElementById('game-container');
    const endGameForm = document.getElementById('end-game-form');
    const finalScoreEl = document.getElementById('final-score');
    const playerNameInput = document.getElementById('player-name');
    const submitScoreBtn = document.getElementById('submit-score-btn');

    let gameActive = true;
    let questionsAsked = 0;
    const TOTAL_QUESTIONS = 5; // Let's make the game 5 questions long

    // Function to fetch the next question from the server
    async function fetchQuestion() {
        if (questionsAsked >= TOTAL_QUESTIONS) {
            endGame();
            return;
        }

        feedbackEl.textContent = '';
        optionsContainerEl.innerHTML = ''; // Clear old options
        gameActive = true;

        try {
            const response = await fetch('/api/question');
            const data = await response.json();

            emojiDisplayEl.textContent = data.emoji;
            data.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.className = 'option-btn';
                button.onclick = () => handleGuess(option);
                optionsContainerEl.appendChild(button);
            });
        } catch (error) {
            console.error('Error fetching question:', error);
            feedbackEl.textContent = 'Error loading game. Please refresh.';
        }
    }

    // 5. Allow the player to submit their guess (using Fetch API)
    async function handleGuess(guess) {
        if (!gameActive) return; // Prevent multiple clicks
        gameActive = false;
        questionsAsked++;

        try {
            const response = await fetch('/api/guess', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ guess: guess })
            });

            const result = await response.json();

            // 7. Provide feedback to the player
            feedbackEl.textContent = result.feedback;
            feedbackEl.className = result.correct ? 'correct' : 'incorrect';
            scoreEl.textContent = result.score; // Update score display

            // 8. Continue presenting new emojis (after a short delay)
            setTimeout(fetchQuestion, 1500);

        } catch (error) {
            console.error('Error submitting guess:', error);
        }
    }

    // Function to fetch and display the leaderboard
    async function fetchLeaderboard() {
        try {
            const response = await fetch('/api/leaderboard');
            const leaderboard = await response.json();

            leaderboardListEl.innerHTML = ''; // Clear old list
            leaderboard.forEach(entry => {
                const li = document.createElement('li');
                li.textContent = `${entry.name}: ${entry.score}`;
                leaderboardListEl.appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
        }
    }
    
    // Function to handle the end of the game
    function endGame() {
        gameContainer.style.display = 'none';
        endGameForm.style.display = 'block';
        finalScoreEl.textContent = scoreEl.textContent;
    }

    // Event listener for submitting score
    submitScoreBtn.addEventListener('click', async () => {
        const name = playerNameInput.value.trim() || 'Anonymous';
        
        try {
            await fetch('/api/leaderboard', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name })
            });

            // Reset UI for a new game
            gameContainer.style.display = 'block';
            endGameForm.style.display = 'none';
            playerNameInput.value = '';
            scoreEl.textContent = '0';
            questionsAsked = 0;

            // Refresh leaderboard and start new game
            fetchLeaderboard();
            fetchQuestion();

        } catch (error) {
            console.error('Error submitting score:', error);
        }
    });

    // Initial game start
    fetchQuestion();
    fetchLeaderboard();
});