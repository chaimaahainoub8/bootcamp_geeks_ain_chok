// Exercise Gold
// Exercise 1: Analyzing the map method
const mapOutput = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
});
console.log("Exercise 1 (map) Output:", mapOutput);

// Exercise 2: Analyzing the reduce method
const reduceOutput = [[0, 1], [2, 3]].reduce((acc, cur) => {
  return acc.concat(cur);
}, [1, 2]);
console.log("Exercise 2 (reduce) Output:", reduceOutput);

// Exercise 3: Analyze this code (Value of i)

const arrayNum = [1, 2, 4, 5, 8, 9];
console.log("Exercise 3 (map with index):");
const newArrayFromMap = arrayNum.map((num, i) => {
    console.log(`  - Element: ${num}, Index: ${i}`);
    // alert(num); // The alert function is commented out to prevent pop-ups.
    return num * 2;
});
console.log("Resulting new array:", newArrayFromMap);



// Exercise 4: Nested arrays
console.log("\nExercise 4 (Nested Arrays):");

// 4.1 Flatten a deeply nested array
const arrayToFlatten = [[1],[2],[3],[[[4]]],[[[5]]]];
const flatArray = arrayToFlatten.flat(Infinity);
console.log("4.1 Flattened Array:", flatArray);

// 4.2 Join sub-arrays into strings
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const newGreeting = greeting.map(arr => arr.join(' '));
console.log("4.2 Joined Sub-arrays:", newGreeting);

// 4.3 Turn the greeting array into a single string
const greetingString = greeting.map(arr => arr.join(' ')).join(' ');
console.log("4.3 Single Greeting String:", greetingString);

// 4.4 Turn the trapped number 3 into [3]
const trapped = [[[[[[[[[[[[[[[3]]]]]]]]]]]]]]];
const freeNumber = trapped.flat(Infinity);
console.log("4.4 Freed Number:", freeNumber);