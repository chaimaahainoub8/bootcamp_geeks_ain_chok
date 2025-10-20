const _ = require('lodash');
const customMath = require('./math.js');

// Using our custom math module
const sum = customMath.add(15, 7);
const product = customMath.multiply(8, 6);

console.log(`Custom sum: ${sum}`);
console.log(`Custom product: ${product}`);

// Using a utility function from the lodash package
const numbers = [10, 20, 30, 40, 50];
const shuffledNumbers = _.shuffle(numbers);

console.log(`\nOriginal numbers: ${numbers}`);
console.log(`Shuffled numbers (using lodash): ${shuffledNumbers}`);