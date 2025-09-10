//-------exercise 1-------//

const people = ["Greg", "Mary", "Devon", "James"];

people.shift(); 
people[2] = "Jason"; 
people.push("Chaimaa"); 

console.log(people.indexOf("Mary")); 

const newPeople = people.slice(1,3);

console.log(people.indexOf("Foo")); 

const last = people[people.length - 1]; 

console.log("--------------Part 2:-------------");

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
}

//-------exercise 2-------//

let colors = ['red', 'blue', 'green', 'yellow', 'purple'];

for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} + choice is: + ${colors[i]}`);              
}
let suffixes = ['st', 'nd', 'rd', 'th', 'th'];

for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is: ${colors[i]}`);
}

//-------exercise 3-------//

let number;

do {
  let userInput = prompt("S'il te plaît, entre un nombre :");
  number = parseInt(userInput);

} while (isNaN(number) || number < 10);

alert("Bravo ! " + number + " est bien un nombre supérieur ou égal à 10.");

//-------exercise 4-------//

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};

console.log("Number of floors:", building.numberOfFloors);

console.log("Apartments on first floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on third floor:", building.numberOfAptByFloor.thirdFloor);

const secondTenant = building.nameOfTenants[1];
console.log("Name of the second tenant:", secondTenant);
console.log("Number of rooms he has:", building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0]);

const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
  console.log("Dan's rent has been increased.");
}

console.log("Dan's final rent is:", building.numberOfRoomsAndRent.dan[1]);

//-------exercise 5-------//

let family = {
  father: "Karim",
  mother: "Fatima",
  son: "Amine",
  daughter: "Sara"
};


console.log("--- The Keys Are ---");
for (let member in family) {
  console.log(member);
}

console.log("--- The Values Are ---");
for (let member in family) {
  console.log(family[member]);
}

//-------exercise 6-------//

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

let sentence = ""; 

for (const key in details) {
  sentence += key + " " + details[key] + " ";
}

console.log(sentence.trim()); 

//-------exercise 7-------//

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];


let firstLetters = [];


for (const name of names) {


  firstLetters.push(name[0]);
}

firstLetters.sort();

const secretName = firstLetters.join('');

console.log(secretName);

//-------exercise 8-------//

