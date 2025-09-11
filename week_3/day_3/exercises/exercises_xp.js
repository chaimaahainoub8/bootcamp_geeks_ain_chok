// ===== Exercise 1
function displayNumberDivisible() {
    let sum = 0;
    let divisbleNumbers = [];
    for (let i=0 ; i <= 500; i++) {
        if (i % 23 === 0) {
            
            divisbleNumbers.push(i);
            sum += i;
        }

    }
    console.log("Numbers divisible by 23:", divisbleNumbers);
    console.log("Sum of numbers divisible by 23:", sum);
}
displayNumberDivisible();

function displayNumbersDivisible(divisor) {
    let sum = 0;
    let divisbleNumbers = [];

    for (let i = 1; i <= 500; i++) {
        if (i % divisor === 0) {
            divisbleNumbers.push(i);
            sum += i;
        }
    }

    console.log(`Numbers divisible by ${divisor}: ${divisbleNumbers.join(', ')}`);
    console.log(`Sum: ${sum}`);
}

displayNumbersDivisible(23);
displayNumbersDivisible(24);
displayNumbersDivisible(57);

// ===== Exercise 2

const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
};

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
};

const shoppingList = ["banana", "blueberry", "apple"];

function myBill() {
    let total = 0;
    for (let fruit of shoppingList) {
    if (stock[fruit] > 0) {
        total += prices[fruit];
        stock[fruit]--;
    }else {
        console.log(fruit + " is out of stock");
    }
    return total;
}   
}

const finalPrice = myBill();
console.log("The tital price is : " + finalPrice);
console.log("The remaining stock is : ", stock);

// ===== Exercise 3

function changeEnough(itemPrice, amountOfChange) {
    const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;

    const totalQuarters = amountOfChange[0] * quarterValue;
    const totalDimes = amountOfChange[1] * dimeValue;
    const totalNickels = amountOfChange[2] * nickelValue;
    const totalPennies = amountOfChange[3] * pennyValue;

    let totalMoney = totalQuarters + totalDimes + totalNickels + totalPennies;

    if (totalMoney >= itemPrice) {
        return true;
    }   else {
        return false;
    }   
}

// Example usage:
console.log(changeEnough(4.25, [25, 20, 5, 0])); 
console.log(changeEnough(14.11, [2, 100, 0, 0])); 
console.log(changeEnough(0.75, [0, 0, 20, 5])); 

// ===== Exercise 4
function hotelCost() {
    let numNights ;
    while (true) {
        let answer = prompt("How many nights would you like to stay?");

        numNights = parseInt(answer);
        if (!isNaN(numNights) && numNights >= 0) {
            break;
        }else {
            alert("Please enter a valid number of nights.");
        }       
    }
    const totalCost = numNights * 140;
    return totalCost;
}
alert("The total cost for your stay is $" + hotelCost());
console.log("The total cost for your stay is $" + hotelCost());

// ===== Exercise 5 ...
/* index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Exercises</title>
</head>
<body>

    <div id="container">Users:</div>
    <ul class="list">
        <li>John</li>
        <li>Pete</li>
    </ul>
    <ul class="list">
        <li>David</li>
        <li>Sarah</li>
        <li>Dan</li>
    </ul>

    <script src="script.js"></script>
</body>
</html> */

// script.js

// ========= Exercise Part 1 =========

// 1. Retrieve the div and console.log it
const containerDiv = document.getElementById('container');
console.log("This is the container div:", containerDiv);

// 2. Change the name "Pete" to "Richard"
// Find the second <li> in the first <ul>
document.querySelector('ul > li:nth-child(2)').textContent = 'Richard';

// 3. Delete the second <li> of the second <ul> ("Sarah")
const secondList = document.querySelectorAll('ul')[1];
const sarahLi = secondList.children[1];
secondList.removeChild(sarahLi);

// 4. Change the name of the first <li> of each <ul> to your name.
const allUls = document.querySelectorAll('ul');
allUls.forEach(ul => {
    // Replace "Your Name" with your actual name
    ul.firstElementChild.textContent = 'Your Name';
});


// ========= Exercise Part 2 =========

// 1. Add a class called `student_list` to both `<ul>`'s.
allUls.forEach(ul => {
    ul.classList.add('student_list');
});

// 2. Add the classes `university` and `attendance` to the first `<ul>`.
const firstUl = document.querySelector('ul');
firstUl.classList.add('university', 'attendance');


// ========= Exercise Part 3 (Styling) =========

// 1. Add a "light blue" background color and some padding to the <div>.
containerDiv.style.backgroundColor = 'lightblue';
containerDiv.style.padding = '10px';

// 2. Do not display the <li> that contains the text node "Dan".
// We need to find all the <li> elements again to check them
let allLiElements = document.querySelectorAll('li');
allLiElements.forEach(li => {
    if (li.textContent === 'Dan') {
        li.style.display = 'none';
    }
});

// 3. Add a border to the <li> that contains the text node "Richard".
// We'll loop through the list items again
allLiElements = document.querySelectorAll('li'); // It's good practice to get a fresh list
allLiElements.forEach(li => {
    if (li.textContent === 'Richard') {
        li.style.border = '2px solid black';
    }
});

// 4. Change the font size of the whole body.
document.body.style.fontSize = '18px';


// ========= Bonus =========

// If the background color of the div is "lightblue", alert "Hello x and y".
if (containerDiv.style.backgroundColor === 'lightblue') {
    // Get the first two names from the first list
    const user1 = firstUl.children[0].textContent;
    const user2 = firstUl.children[1].textContent;
    
    // Show the alert
    alert(`Hello ${user1} and ${user2}`);
}

// ===== Exercise 6

/* index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice Navbar</title>
</head>
<body>

    <div id="navBar">
        <ul>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">My Friends</a></li>
            <li><a href="#">Messenger</a></li>
            <li><a href="#">My Pics</a></li>
        </ul>
    </div>

    <script src="script.js" defer></script>
    
</body>
</html> */
// script.js

const navBarDiv = document.getElementById('navBar');
navBarDiv.setAttribute('id', 'socialNetworkNavigation');

const newListItem = document.createElement('li');
const logoutText = document.createTextNode('Logout');
newListItem.appendChild(logoutText);

const a_ul = document.querySelector('ul');
a_ul.appendChild(newListItem);

const firstItem = a_ul.firstElementChild;
const lastItem = a_ul.lastElementChild;

console.log("Texte du premier élément :", firstItem.textContent);
console.log("Texte du dernier élément :", lastItem.textContent);

// ===== Exercise 7

/* index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Book List</title>
</head>
<body>

    <h1>Ma Liste de Livres</h1>

    <section class="listBooks"></section>

    <script src="script.js" defer></script>
    
</body>
</html> */

// script.js
const allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: true
    },
    {
        title: "Le Seigneur des Anneaux",
        author: "J.R.R. Tolkien",
        image: "https://m.media-amazon.com/images/I/813uO36scVL._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: false
    }
];

const section = document.querySelector('.listBooks');

for (const book of allBooks) {
    const bookDiv = document.createElement('div');

    const bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookImage.style.width = '100px';

    const bookDetails = document.createElement('p');
    bookDetails.textContent = `${book.title} written by ${book.author}`;

    if (book.alreadyRead) {
        bookDetails.style.color = 'red';
    }

    bookDiv.appendChild(bookImage);
    bookDiv.appendChild(bookDetails);

    section.appendChild(bookDiv);
}