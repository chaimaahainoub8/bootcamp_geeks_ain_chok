const { readFile, writeFile } = require('./fileManager.js');

// Read the content of "Hello World.txt"
const helloContent = readFile('Hello World.txt');

if (helloContent) {
    console.log('Content of "Hello World.txt":', helloContent);
}

// Write new content to "Bye World.txt"
const newContent = "Writing to the file";
writeFile('Bye World.txt', newContent);

// Verify by reading the new content
const byeContent = readFile('Bye World.txt');
if (byeContent) {
    console.log('Content of "Bye World.txt":', byeContent);
}