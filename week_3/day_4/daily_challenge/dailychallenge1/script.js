// --- VARIABLES ---
const libForm = document.getElementById('libform');
const storySpan = document.getElementById('story');
const shuffleButton = document.getElementById('shuffle-button');

// Array of story templates for the bonus challenge
const stories = [
    (noun, adjective, person, verb, place) => `Once upon a time, ${person} found a ${adjective} ${noun} and decided to ${verb} all the way to ${place}.`,
    (noun, adjective, person, verb, place) => `In the land of ${place}, the great hero ${person} had to ${verb} a ${adjective} ${noun} to save the day.`,
    (noun, adjective, person, verb, place) => `It was a shocking discovery! ${person} saw a ${noun} that could ${verb}. It was the most ${adjective} thing in all of ${place}.`
];

let currentInputs = {}; // To store the user's words

// --- FUNCTIONS ---

// Function to generate and display a random story
function generateStory() {
    const { noun, adjective, person, verb, place } = currentInputs;

    // 1. Get a random story from the array
    const randomIndex = Math.floor(Math.random() * stories.length);
    const randomStory = stories[randomIndex];

    // 2. Generate the story text
    const storyText = randomStory(noun, adjective, person, verb, place);

    // 3. Display the story
    storySpan.innerHTML = storyText;
}

// --- EVENT LISTENERS ---

// Listen for the main form submission
libForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Get values from the inputs
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;

    // Validate that no inputs are empty
    if ([noun, adjective, person, verb, place].some(input => input === '')) {
        alert('Please fill out all the fields!');
        return;
    }

    // Store the inputs
    currentInputs = { noun, adjective, person, verb, place };

    // Generate the first story
    generateStory();

    // Show the shuffle button
    shuffleButton.style.display = 'block';
});

// Listen for clicks on the shuffle button
shuffleButton.addEventListener('click', generateStory);