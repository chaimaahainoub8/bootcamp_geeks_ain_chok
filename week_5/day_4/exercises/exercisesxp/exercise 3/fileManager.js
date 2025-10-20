const fs = require('fs');

function readFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        console.log(`Successfully read from ${filePath}`);
        return content;
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
    }
}

function writeFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Successfully wrote to ${filePath}`);
    } catch (error) {
        console.error(`Error writing to file ${filePath}:`, error);
    }
}

module.exports = { readFile, writeFile };