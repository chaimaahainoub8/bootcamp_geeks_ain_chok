// Exercise 1: print Full Name
function printFullName({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

// Exercise 2: keys and values
function keysAndValues(obj) {
  const sortedKeys = Object.keys(obj).sort();
  const correspondingValues = sortedKeys.map(key => obj[key]);
  return [sortedKeys, correspondingValues];
}

// Exercise 3: Counter class
// The output of console.log(counterOne.count) is 3.