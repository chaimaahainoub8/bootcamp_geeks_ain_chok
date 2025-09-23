//----exercise 1: Predict the output

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - Prediction: Alerts "inside the funcOne function 3".
// The variable 'a' is reassigned to 3 inside the if block.
funcOne();

// #1.2 - Using 'const' would cause a TypeError because you cannot reassign a constant variable.


//#2
let a2 = 0;
function funcTwo() {
    a2 = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a2}`);
}

// #2.1
// Prediction 1: Alerts "inside the funcThree function 0". It reads the initial global 'a'.
funcThree();
funcTwo(); // This modifies the global 'a' to 5.
// Prediction 2: Alerts "inside the funcThree function 5". It reads the modified global 'a'.
funcThree();

// #2.2 - Using 'const' would cause the first alert to show 0, but funcTwo() would then throw a TypeError.


//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1
funcFour();
// Prediction: Alerts "inside the funcFive function hello".
// funcFour creates a global variable 'a' which funcFive can access.
funcFive();


//#4
let a3 = 1;
function funcSix() {
    let a3 = "test";
    alert(`inside the funcSix function ${a3}`);
}


// #4.1
// Prediction: Alerts "inside the funcSix function test".
// The local variable 'a' inside funcSix shadows the global variable.
funcSix();

// #4.2 - Using 'const' would produce the same result. The local and global constants are in different scopes and don't conflict.


//#5
let a = 2;
if (true) {
    let a = 5;
    // Prediction 1: Alerts "in the if block 5". It uses the block-scoped 'a'.
    alert(`in the if block ${a}`);
}
// Prediction 2: Alerts "outside of the if block 2". It uses the global 'a' because the block-scoped 'a' is gone.
alert(`outside of the if block ${a}`);


// #5.2 - Using 'const' would produce the same result. The block-scoped and global constants are in different scopes.

//----exercise 2: Ternary operator

const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

//----exercise 3: Is it a string?

const isString = (value) => typeof value === 'string';

// Testing the function with the examples provided
console.log(isString('hello'));      // This will show: true
console.log(isString([1, 2, 4, 0])); // This will show: false

//----exercise 4: Find the sum

const findSum = (num1, num2) => num1 + num2;

// Example of how to use it (invoke it)
console.log(findSum(5, 10)); // Will show: 15

//----exercise 5: Kg and grams

function convertKgToGrams(weightInKg) {
  return weightInKg * 1000;
}
console.log("Using Declaration:", convertKgToGrams(2.5));

const convertKgToGramsExpr = function(weightInKg) {
  return weightInKg * 1000;
};
console.log("Using Expression:", convertKgToGramsExpr(2.5));

const convertKgToGramsArrow = (weightInKg) => weightInKg * 1000;
console.log("Using Arrow Function:", convertKgToGramsArrow(2.5));

//----exercise 6: Fortune teller

(function(numOfChildren, partnerName, geographicLocation, jobTitle) {
  const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numOfChildren} kids.`;
  document.body.innerHTML = sentence;
})('0', 'chaimaa', 'casablanca', 'web developer');

//----exercise 7: Welcome

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome Page</title>
</head>
<body>
    <nav class="navbar"></nav>
    <script src="script.js"></script>
</body>
</html>

*/
// 2. create a self invoking funtion
(function(userName) {
  // 3. The function should add a div
  const navbar = document.querySelector('.navbar');
  const userProfile = `
    <div>
      <span>Welcome, ${userName}</span>
      <img src="https://via.placeholder.com/30" alt="Profile Picture">
    </div>
  `;
  navbar.innerHTML = userProfile;
})('John');


//----exercise 8: Juice Bar

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF--8">
    <title>Juice Bar</title>
</head>
<body>
    <h1>Welcome to our Juice Bar!</h1>
    <div id="juice-order"></div>

    <script src="script.js"></script>
</body>
</html> */

function makeJuice(size) {
  // 1. Create an empty array named ingredients.
  let ingredients = [];

  // 2. The addIngredients function should now receive 3 ingredients and push them.
  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1);
    ingredients.push(ing2);
    ingredients.push(ing3);
  }

  // 3. Create a new inner function named displayJuice.
  function displayJuice() {
    const orderDiv = document.querySelector('#juice-order');
    const sentence = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
    orderDiv.innerHTML = sentence;
  }

  // 4. Invoke addIngredients TWICE. Then invoke displayJuice once.
  addIngredients('apples', 'oranges', 'carrots');
  addIngredients('spinach', 'ginger', 'celery');
  displayJuice();
}

// Finally, invoke the makeJuice function in the global scope.
makeJuice('large');
