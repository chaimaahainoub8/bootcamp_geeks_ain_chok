const getMinutesLived = require('./date.js');
const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for their birthdate
rl.question('Enter your birthdate (e.g., "YYYY-MM-DD"): ', (birthdateString) => {
  
  // Validate the input (basic check)
  if (new Date(birthdateString).toString() === 'Invalid Date') {
    console.log('Invalid date format. Please try again.');
  } else {
    // Call the function with the user's input
    console.log(getMinutesLived(birthdateString));
  }
  
  // Close the interface
  rl.close();
});