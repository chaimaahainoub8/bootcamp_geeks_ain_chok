// ===== Exercise 1
const randomNumbers = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1 and 100: " + randomNumbers);
console.log("Even numbers from 1 to " + randomNumbers + ":");
for (let i = 1; i <= randomNumbers; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// ===== Exercise 2

function capitalize(str){
    let evenCaps = "";
    let oddCaps = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenCaps += str[i].toUpperCase();
            oddCaps += str[i].toLowerCase();
        } else {
            evenCaps += str[i].toLowerCase();
            oddCaps += str[i].toUpperCase();
        }
    }
    return [evenCaps, oddCaps];
    

}
console.log(capitalize("abcdef")); // shows ["AbCdEf", "aBcDeF"]
console.log(capitalize("Hello")); // shows ["HeLlO", "hElLo"]
console.log(capitalize("Hello World!")); // Mixed case input
console.log(capitalize("1234!@#$")); // Non-alphabetic characters remain unchanged
// ===== Exercise 3

function isPalindrome(str) {
    const lowerCaseStr = str.toLowerCase();
    const reversedStr = lowerCaseStr.split('').reverse().join('');
    return lowerCaseStr === reversedStr;
}
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("12345")); // false
console.log(isPalindrome("")); // true (empty string is considered a palindrome)

// ===== Exercise 4

function biggestNumberInArray(arrayNumber) {
  if (arrayNumber.length === 0) {
    return 0;
  }

  let biggest = -Infinity;

  
  for (let i = 0; i < arrayNumber.length; i++) {
    const currentItem = arrayNumber[i];

    if (typeof currentItem === 'number' && currentItem > biggest) {
      biggest = currentItem;
    }
  }
  if (biggest === -Infinity) {
    return 0;
  } else {
    return biggest;
  }
}

const array1 = [-1, 0, 3, 100, 99, 2, 99];
console.log(biggestNumberInArray(array1)); // Va afficher : 100

const array2 = ['a', 3, 4, 2];
console.log(biggestNumberInArray(array2)); // Va afficher : 4 (le code gère bien ce cas !)

const array3 = [];
console.log(biggestNumberInArray(array3)); // Va afficher : 0

// ===== Exercise 5

function getUniqueElements(List) {
    const newList = [];
    for (let i = 0; i < List.length; i++) {
        const currentItem = List[i];
        if (!newList.includes(currentItem)) {
            newList.push(currentItem);
        }
    }
    return newList;
}
const list = [1, 2, 3, 2, 4, 5, 1, 3];
const uniqueList = getUniqueElements(list);
console.log(uniqueList); // Va afficher : [1, 2, 3, 4, 5]
