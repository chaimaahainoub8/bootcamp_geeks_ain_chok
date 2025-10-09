// Exercise 1: Analyzing the map method
const mapOutput = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return; // This line is never reached in this specific case
});
console.log("Exercise 1 (map) Output:", mapOutput); // Expected: [2, 4, 6]

---

// Exercise 2: Analyzing the reduce method
const reduceOutput = [[0, 1], [2, 3]].reduce((acc, cur) => {
  return acc.concat(cur);
}, [1, 2]);
console.log("Exercise 2 (reduce) Output:", reduceOutput); // Expected: [1, 2, 0, 1, 2, 3]

---

// Exercise 3: Analyze this code (Value of i)
// 'i' represents the index of the element during each iteration (0, 1, 2, 3, 4, 5).
const arrayNum = [1, 2, 4, 5, 8, 9];
console.log("Exercise 3 (map with index):");
const newArrayFromMap = arrayNum.map((num, i) => {
    console.log(`  - Element: ${num}, Index: ${i}`);
    // alert(num); // The alert function is commented out to prevent pop-ups.
    return num * 2;
});
console.log("Resulting new array:", newArrayFromMap);

---

// Exercise 4: Nested arrays
console.log("\nExercise 4 (Nested Arrays):");

// 4.1 Flatten a deeply nested array
const arrayToFlatten = [[1],[2],[3],[[[4]]],[[[5]]]];
const flatArray = arrayToFlatten.flat(Infinity);
console.log("4.1 Flattened Array:", flatArray); // Expected: [1, 2, 3, 4, 5]

// 4.2 Join sub-arrays into strings
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const newGreeting = greeting.map(arr => arr.join(' '));
console.log("4.2 Joined Sub-arrays:", newGreeting); // Expected: ["Hello young grasshopper!", "you are", "learning fast!"]

// 4.3 Turn the greeting array into a single string
const greetingString = greeting.map(arr => arr.join(' ')).join(' ');
console.log("4.3 Single Greeting String:", greetingString); // Expected: "Hello young grasshopper! you are learning fast!"

// 4.4 Turn the trapped number 3 into [3]
const trapped = [[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]];
const freeNumber = trapped.flat(Infinity);
console.log("4.4 Freed Number:", freeNumber); // Expected: [3]