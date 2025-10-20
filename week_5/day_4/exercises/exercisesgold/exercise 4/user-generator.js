// Import the faker module
const { faker } = require('@faker-js/faker');

// 2. Create an empty array
const users = [];

// 3. Create a function that adds objects
function createRandomUser() {
  const user = {
    name: faker.person.fullName(),
    address: faker.location.streetAddress(),
    country: faker.location.country()
  };
  
  users.push(user);
}

// Let's call the function 3 times to populate the array
createRandomUser();
createRandomUser();
createRandomUser();

// Display the resulting array
console.log('List of fake users:');
console.log(users);


// 4. BONUS: Find a node module that allows to prompt the user
// This code uses the 'readline' module, which is built into Node.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n--- Bonus: Add your own user ---');

rl.question('What is your name? ', (name) => {
  rl.question('What is your address? ', (address) => {
    rl.question('What is your country? ', (country) => {
      
      // Add the user-provided info to the array
      users.push({ name, address, country });
      
      console.log('\nUpdated array with your addition:');
      console.log(users);
      
      // Close the readline interface
      rl.close();
    });
  });
});