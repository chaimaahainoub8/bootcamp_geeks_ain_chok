// Exercise 1: Nested Functions
const landscape = () => {
  let result = "";
  const flat = (x) => {
    for (let count = 0; count < x; count++) { result += "_"; }
  }
  const mountain = (x) => {
    result += "/";
    for (let counter = 0; counter < x; counter++) { result += "'"; }
    result += "\\"
  }

  flat(4);
  mountain(4);
  flat(4);
  return result;
};

// Why? The `landscape` function builds a string by calling
// its inner functions (`flat` and `mountain`) in a specific order.
// Output: "____/'́'́'́'́\\____"
console.log("Exercise 1:", landscape());


// Exercise 2: Closure
const addTo = x => y => x + y;
const addToTen = addTo(10); // addToTen becomes a new function that "remembers" x = 10.
const result2 = addToTen(3);   // We execute y => 10 + y, with y = 3.

// Why? `addToTen` is a "closure". It remembered the value `10` from the
// environment where it was created and uses it when called later with `3`.
// Output: 13
console.log("Exercise 2:", result2);


// Exercise 3: Currying
const curriedSum1 = (a) => (b) => a + b;
const result3 = curriedSum1(30)(1); // We provide the first argument `30`, then the second `1` immediately.

// Why? This is a chained call. `curriedSum(30)` returns a function
// which is immediately called with `(1)`, performing the calculation 30 + 1.
// Output: 31
console.log("Exercise 3:", result3);


// Exercise 4: Currying
const curriedSum2 = (a) => (b) => a + b;
const add5_ = curriedSum2(5); // We create a specialized function that adds 5.
const result4 = add5_(12);       // We use this new function with the argument 12.

// Why? We "pre-configured" a function. `add5` is a new function
// created from `curriedSum` that has stored in its memory that `a` is 5.
// Output: 17
console.log("Exercise 4:", result4);


// Exercise 5: Composing
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
const result5 = compose(add1, add5)(10); // This is equivalent to add1(add5(10))

// Why? Composition applies functions from the inside out (or right to left).
// First, `add5(10)` is calculated (= 15), and its result
// is then passed to `add1`, so `add1(15)` = 16.
// Output: 16
console.log("Exercise 5:", result5);