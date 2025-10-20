const readline = require('readline');
const getWeather = require('./weather.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startDashboard() {
  rl.question('\nEnter a city name (or type "exit" to quit): ', (cityName) => {
    
    if (cityName.toLowerCase() === 'exit') {
      console.log(chalk.blue('Goodbye!'));
      rl.close();
      return; // Stop the function
    }
    
    // Call the async getWeather function.
    // When the promise resolves (after the weather is printed),
    // we use .then() to ask the question again, creating a loop.
    getWeather(cityName).then(() => {
      startDashboard(); // Ask for another city
    });
  });
}

// We need chalk here just for the "exit" message
const chalk = require('chalk');
module.exports = startDashboard;