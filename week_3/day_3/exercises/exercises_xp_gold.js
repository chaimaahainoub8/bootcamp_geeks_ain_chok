// ===== Exercise 1
function isBlank(inputString) {
  if (inputString.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isBlank(''));    // true  
console.log(isBlank('abc'));   // false
console.log(isBlank(' '));     // false
console.log(isBlank('   '));   // false
// ===== Exercise 2

function abbrevName(fullName) {

  let nameArray = fullName.split(' ');

  let firstName = nameArray[0];

  let lastNameInitial = nameArray[1].charAt(0);

  return firstName + ' ' + lastNameInitial + '.';
}

console.log(abbrevName("Robin Singh")); // "Robin S."
console.log(abbrevName("Elon Musk"));   // "Elon M."

// ===== Exercise 3

function isOmnipresent(arrayOfArrays, value) {
  for (let i = 0; i < arrayOfArrays.length; i++) {
    let subArray = arrayOfArrays[i];

    if (subArray.includes(value) === false) {
      return false;
    }
  }

  return true;
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // Devrait afficher : true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // Devrait afficher : false

// ===== Exercise 4
let table = document.body.firstElementChild;
    
    // Loop through each row of the table
    for (let i = 0; i < table.rows.length; i++) {
        // Get the diagonal cell where row index equals cell index
        let cell = table.rows[i].cells[i];
        // Set the background color of that cell to red
        cell.style.backgroundColor = 'red';
    }
// ===== Exercise 