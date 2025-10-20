const fs = require('fs');
const path = require('path');

const directoryPath = __dirname; // This means the current directory

try {
    const files = fs.readdirSync(directoryPath);
    console.log(`\nFiles in directory "${directoryPath}":`);
    files.forEach(file => {
        console.log(`- ${file}`);
    });
} catch (error) {
    console.error('Could not list the directory.', error);
}