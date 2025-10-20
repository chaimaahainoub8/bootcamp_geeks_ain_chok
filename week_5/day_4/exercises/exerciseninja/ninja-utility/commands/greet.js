const chalk = require('chalk');

function greet(name) {
  // Use a default name if one isn't provided
  const displayName = name || 'User';
  console.log(chalk.blue.bold(`Hello, ${displayName}! Welcome to the Ninja Utility.`));
}

module.exports = greet;