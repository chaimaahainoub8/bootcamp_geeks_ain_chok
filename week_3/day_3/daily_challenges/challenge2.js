// 1. Prompt the user for several words.
const userInput = prompt("Please enter several words, separated by commas:");

// This function will draw the frame.
function logInFrame(words) {
    // 2. Find the length of the longest word.
    let maxLength = 0;
    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    // 3. Create the top and bottom border string.
    // It's the longest word's length + 4 characters for padding (* space ... space *).
    const border = '*'.repeat(maxLength + 4);

    // 4. Print the top border.
    console.log(border);

    // 5. Loop through the words to print each one inside the frame.
    for (const word of words) {
        // Calculate the empty spaces needed for alignment.
        const padding = ' '.repeat(maxLength - word.length);
        // Construct the full line.
        const line = '* ' + word + padding + ' *';
        console.log(line);
    }

    // 6. Print the bottom border.
    console.log(border);
}


// --- Main part of the script ---
// We check if the user actually wrote something.
if (userInput) {
    // 7. Split the user's string into an array of words, and trim whitespace.
    const wordsArray = userInput.split(',').map(word => word.trim());
    // 8. Call our function to draw the frame with the user's words.
    logInFrame(wordsArray);
} else {
    console.log("You didn't enter any words!");
}