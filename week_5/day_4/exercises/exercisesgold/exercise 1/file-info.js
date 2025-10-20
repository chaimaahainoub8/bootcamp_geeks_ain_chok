// Import the 'path' and 'fs' (File System) modules
const path = require('path');
const fs = require('fs');

function getFileInfo() {
  // 1. Create the path to the file
  // __dirname is a global Node.js variable that gives the path of the current directory
  const filePath = path.join(__dirname, 'data', 'example.txt');

  // 2. Check if the file exists
  const fileExists = fs.existsSync(filePath);

  if (fileExists) {
    console.log('File exists.');

    // 3. Get the stats (information) about the file
    const stats = fs.statSync(filePath);

    // 4. Display the information
    console.log(`File size: ${stats.size} bytes`);
    console.log(`Creation time: ${stats.birthtime}`);
  } else {
    console.log('Error: "example.txt" file not found in the "data" directory.');
  }
}

// Export the function so it can be used in app.js
module.exports = getFileInfo;