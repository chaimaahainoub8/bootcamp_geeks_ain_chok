const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the regular expression
// ^                  -> Start of the string
// [A-Z]              -> Must start with one uppercase letter
// [a-z]+             -> Must be followed by one or more lowercase letters
// \s                 -> Must have a single space (replaced with ' ' below)
// [A-Z]              -> Must have a second uppercase letter (start of last name)
// [a-z]+             -> Must be followed by one or more lowercase letters
// $                  -> End of the string
const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

rl.question('Please enter your full name (example: "John Doe"): ', (answer) => {
  
  // .test() is a regex method that returns true or false
  if (nameRegex.test(answer)) {
    console.log('Valid format. Thank you!');
  } else {
    console.log('Invalid format. Please make sure:');
    console.log('- The name contains only letters and a single space.');
    console.log('- The first letter of each name is capitalized.');
  }
  
  rl.close();
});