// Exercice 1 : Âge du chien en années humaines

console.log("## Exercice 1 : Âge du chien en années humaines ##");

const data = [
  { name: 'Butters', age: 3, type: 'dog' },
  { name: 'Cuty', age: 5, type: 'rabbit' },
  { name: 'Lizzy', age: 6, type: 'dog' },
  { name: 'Red', age: 1, type: 'cat' },
  { name: 'Joey', age: 3, type: 'dog' },
  { name: 'Rex', age: 10, type: 'dog' },
];

// --- Solution 1: Avec une boucle `for` ---
let humanYearsSumLoop = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i].type === 'dog') {
    humanYearsSumLoop += data[i].age * 7;
  }
}
console.log("Avec la boucle for :", humanYearsSumLoop); // Résultat : 154

// --- Solution 2: Avec la méthode `reduce()` ---
const humanYearsSumReduce = data
  .filter(animal => animal.type === 'dog')
  .reduce((sum, dog) => sum + (dog.age * 7), 0);
console.log("Avec la méthode reduce() :", humanYearsSumReduce); // Résultat : 154

console.log("\n"); // Pour l'espacement dans la console

// Exercice 2 : Email

console.log("## Exercice 2 : Email ##");

const userEmail3 = ' I cannotfillemailformcorrectly@gmail.com ';

const cleanedEmail = userEmail3.replace(/\s/g, '');

console.log("Email nettoyé :", cleanedEmail); // Résultat : 'Icannotfillemailformcorrectly@gmail.com'

console.log("\n");


// Exercice 3 : Employés #3

console.log("## Exercice 3 : Employés #3 ##");

const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' },
];

const usersObject = {};
users.forEach(user => {
  const fullName = `${user.firstName} ${user.lastName}`;
  usersObject[fullName] = user.role;
});

console.log("Objet des employés :", usersObject);

console.log("\n");

// Exercice 4 : Tableau vers Objet

console.log("## Exercice 4 : Tableau vers Objet ##");

const letters = ['x', 'y', 'z', 'y', 'z', 'z'];

// --- Solution 1: Avec une boucle `for` ---
const letterCountsLoop = {};
for (const letter of letters) {
  if (letterCountsLoop[letter]) {
    letterCountsLoop[letter]++;
  } else {
    letterCountsLoop[letter] = 1;
  }
}
console.log("Avec la boucle for :", letterCountsLoop); // Résultat correct : { x: 1, y: 2, z: 3 }

// --- Solution 2: Avec la méthode `reduce()` ---
const letterCountsReduce = letters.reduce((count, letter) => {
  count[letter] = (count[letter] || 0) + 1;
  return count;
}, {});
console.log("Avec la méthode reduce() :", letterCountsReduce); // Résultat correct : { x: 1, y: 2, z: 3 }