function returnNumbers(str) {
  // \d means 'any digit'
  // + means 'one or more'
  // g means 'global' (find all matches, not just the first)
  const regex = /\d+/g;

  // .match() returns an array of all strings found
  const matches = str.match(regex);

  // If matches are found, .join('') combines them into a single string
  // Otherwise, return an empty string
  return matches ? matches.join('') : '';
}

// Example usage:
const a = 'KSK3q2G5z6x9bn';
const b = 'abc123def456';
const c = 'No numbers here';

console.log(`'${a}' -> ${returnNumbers(a)}`); // Expected output: 32569
console.log(`'${b}' -> ${returnNumbers(b)}`); // Expected output: 123456
console.log(`'${c}' -> ${returnNumbers(c)}`); // Expected output: