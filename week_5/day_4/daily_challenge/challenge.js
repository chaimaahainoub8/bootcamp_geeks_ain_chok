// 1. Require the modules from the previous tasks
const greet = require('./greeting.js');
const displayColorfulMessage = require('./colorful-message.js');
const displayFileContent = require('./read-file.js');

// 2. Use the greet function to greet the user
const userName = "Alice"; // You can change this name
const greeting = greet(userName);
console.log(greeting);

// 3. Display the colorful message and read the file's content
displayColorfulMessage();
displayFileContent();