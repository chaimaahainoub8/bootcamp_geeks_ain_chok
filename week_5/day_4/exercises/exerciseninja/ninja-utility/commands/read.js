const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function readFile(filePath) {
  try {
    // Use path.resolve to get the full path from the user's input
    const absolutePath = path.resolve(filePath);
    
    // Check if the file exists
    if (!fs.existsSync(absolutePath)) {
      console.error(chalk.red.bold(`Error: File not found at ${absolutePath}`));
      return;
    }

    // Read and display the file content
    const data = fs.readFileSync(absolutePath, 'utf8');
    console.log(chalk.yellow.bold(`--- Content of ${filePath} ---`));
    console.log(data);
    console.log(chalk.yellow.bold('------------------------------'));

  } catch (error) {
    console.error(chalk.red('Error reading file:', error.message));
  }
}

module.exports = readFile;