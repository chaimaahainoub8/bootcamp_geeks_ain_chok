const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'source.txt');
const destinationPath = path.join(__dirname, 'destination.txt');

try {
    const content = fs.readFileSync(sourcePath, 'utf8');
    fs.writeFileSync(destinationPath, content, 'utf8');
    console.log(`Successfully copied content from source.txt to destination.txt`);
} catch (error) {
    console.error('An error occurred:', error);
}