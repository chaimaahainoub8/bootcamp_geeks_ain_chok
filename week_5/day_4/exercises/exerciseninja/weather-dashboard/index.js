const startDashboard = require('./dashboard.js');
const chalk = require('chalk');

console.log(chalk.blue.bold('--- Welcome to the Weather Dashboard ---'));

// Start the interactive dashboard
startDashboard();