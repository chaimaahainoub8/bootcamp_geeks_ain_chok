const chalk = require('chalk');

// Require the 'fs' (File System) module
const fs = require('fs');
const path = require('path'); // Using 'path' is good practice

function displayFileContent() {
  // Create the full path to the file
  const filePath = path.join(__dirname, 'files', 'file-data.txt');

  try {
    // Read the file's content synchronously
    const data = fs.readFileSync(filePath, 'utf8');
    
    // Display the content (these lines will now work)
    console.log(chalk.yellow('\n--- File Content ---'));
    console.log(data);
    console.log(chalk.yellow('--------------------'));

  } catch (err) {
    // This error message will also work now
    console.error(chalk.red('Error reading the file:', err.message));
  }
}

// Export the function
module.exports = displayFileContent;