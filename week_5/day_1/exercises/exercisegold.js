
// Exercise 1: Promise.all()

console.log("--- Starting Exercise 1 ---");
console.log("The result will appear in 3 seconds...");

const promise1 = Promise.resolve(3);
const promise2 = 42; // Treated as a resolved promise with value 42
const promise3 = new Promise((resolve, reject) => {
  // This promise resolves with 'foo' after 3 seconds
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    // This block runs after all promises have resolved
    console.log("\nResult from Exercise 1:");
    console.log(values); // Expected output: [3, 42, "foo"]
  })
  .catch((error) => {
    // This block would run if any promise were rejected
    console.error("Error in Exercise 1:", error);
  });


// Exercise 2: Analyze Promise.all()

console.log("\n--- Starting Exercise 2 ---");

function timesTwoAsync(x) {
  // Returns a promise that resolves immediately with x * 2
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
// .map creates an array of promises
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log("Result from Exercise 2:");
    console.log(result); // Expected output: [2, 4, 6]
  });