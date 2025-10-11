// --- Exercise 1: Comparison ---
const compareToTen = (num) => {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} is less than or equal to 10.`);
    } else {
      reject(`${num} is greater than 10.`);
    }
  });
};

// Example usage for Exercise 1:
compareToTen(15)
  .then(result => console.log('Exercise 1 Success:', result))
  .catch(error => console.log('Exercise 1 Error:', error)); // This will run

compareToTen(8)
  .then(result => console.log('Exercise 1 Success:', result)) // This will run
  .catch(error => console.log('Exercise 1 Error:', error));


// --- Exercise 2: Timed Promise ---
const timedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

// Example usage for Exercise 2:
timedPromise.then(result => console.log('Exercise 2 Success:', result));


// --- Exercise 3: Resolve & Reject ---
// Part 1: Using Promise.resolve()
const resolvedPromise = Promise.resolve(3);

// Example usage for Exercise 3, Part 1:
resolvedPromise.then(value => console.log('Exercise 3 (Resolve) Value:', value));

// Part 2: Using Promise.reject()
const rejectedPromise = Promise.reject("Boo!");

// Example usage for Exercise 3, Part 2:
rejectedPromise.catch(error => console.log('Exercise 3 (Reject) Error:', error));

