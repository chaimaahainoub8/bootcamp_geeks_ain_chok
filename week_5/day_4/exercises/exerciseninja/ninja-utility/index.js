#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

// Import the command functions
const greet = require('./commands/greet.js');
const fetchPosts = require('./commands/fetch.js');
const readFile = require('./commands/read.js');

program
  .version('1.0.0')
  .description('A Ninja Command-Line Utility');

// Greet Command
program
  .command('greet [name]') // [name] is an optional argument
  .description('Displays a colorful greeting to the user')
  .action(greet); // Runs the greet function, passing 'name' if provided

// Fetch Command
program
  .command('fetch')
  .description('Fetches sample data from a public API')
  .action(fetchPosts);

// Read Command
program
  .command('read <file>') // <file> is a required argument
  .description('Reads and displays the content of a file')
  .action(readFile); // Runs the readFile function, passing the 'file' argument

// Parse the arguments from the command line
program.parse(process.argv);
/*
Example Usage:
1. Greet a user named "Ninja":
   node index.js greet Ninja
2. Fetch sample data from the API:
   node index.js fetch
3. Read and display the content of "example.txt":
   node index.js read example.txt

   
*/