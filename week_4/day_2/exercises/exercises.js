// Data for Exercises
const users = [
    { firstname: 'Bradley', lastname: 'Bouley', role: 'Full Stack Resident' },
    { firstname: 'Chloe', lastname: 'Alnaji', role: 'Full Stack Resident' },
    { firstname: 'Jonathan', lastname: 'Baughn', role: 'Enterprise Instructor' },
    { firstname: 'Michael', lastname: 'Herman', role: 'Lead Instructor' },
    { firstname: 'Robert', lastname: 'Hajek', role: 'Full Stack Resident' },
    { firstname: 'Wes', lastname: 'Reid', role: 'Instructor' },
    { firstname: 'Zach', lastname: 'Klabunde', role: 'Instructor' },
];

const students = [
    {name: "Ray", course: "Computer Science", isPassed: true},
    {name: "Liam", course: "Computer Science", isPassed: false},
    {name: "Jenner", course: "Information Technology", isPassed: true},
    {name: "Marco", course: "Robotics", isPassed: true},
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
    {name: "Jamie", course: "Big Data", isPassed: false}
];

// Exercise 1 & 2: Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["st", "nd", "rd", "th", "th", "th", "th"];

// Exercise 1, Part 1: Display all choices
colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

// Exercise 1, Part 2: Check for "Violet"
console.log(colors.includes("Violet") ? "yeah" : "no...");

// Exercise 2: Display choices with ordinal suffixes
colors.forEach((color, index) => {
  console.log(`${index + 1}${ordinal[index]} choice is ${color}.`);
});

// Exercise 3: Analyzing
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

const country = "USA";
console.log([...country]);

let newArray = [...[,]];
console.log(newArray);

// Exercise 4: Employees
// 1. Create welcome messages with .map()
const welcomeStudents = users.map(user => `Hello ${user.firstname}`);
console.log(welcomeStudents);

// 2. Filter for Full Stack Residents with .filter()
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);

// 3. Chain .filter() and .map() for last names
const fullStackLastNames = users
  .filter(user => user.role === 'Full Stack Resident')
  .map(user => user.lastname);
console.log(fullStackLastNames);

// Exercise 5: Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Combine array into a single string with .reduce()
const singleString = epic.reduce((acc, word) => `${acc} ${word}`);
console.log(singleString);

// Exercise 6: Employees #2
// 1. Filter for students who passed
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);

// 2. Congratulate the students who passed
students
  .filter(student => student.isPassed)
  .forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
  });