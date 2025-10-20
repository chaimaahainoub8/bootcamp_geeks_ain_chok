// Require the chalk package
const chalk = require('chalk');

function displayColorfulMessage() {
  // Create and display a colorful message
  console.log(chalk.green.bold('This is a successful and colorful message!'));
}

// Export the function
module.exports = displayColorfulMessage;