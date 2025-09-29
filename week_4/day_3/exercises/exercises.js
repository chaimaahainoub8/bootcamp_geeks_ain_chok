// Exercise 1
const person = {
  name: 'John Doe',
  age: 25,
  location: {
    country: 'Canada',
    city: 'Vancouver',
    coordinates: [49.2827, -123.1207]
  }
};
const { name, location: { country, city, coordinates: [lat, lng] } } = person;
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`); // I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2
function displayStudentInfo({ first, last }) {
  return `Your full name is ${first} ${last}`;
}
console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' })); // Your full name is Elie Schoppik

// Exercise 3
const users = { user1: 18273, user2: 92833, user3: 90315 };
const usersArray = Object.entries(users); // [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const modifiedUsersArray = usersArray.map(([key, value]) => [key, value * 2]); // [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// Exercise 4
class Person {
  constructor(name) {
    this.name = name;
  }
}
const member = new Person('John');
console.log(typeof member); // object

// Exercise 5
class Dog {
  constructor(name) {
    this.name = name;
  }
}
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

// Exercise 6
//console.log([2] === [2]); // false
//console.log({} === {}); // false

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };
object1.number = 4;
console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}
class Mammal extends Animal {
    sound(animalSound) {
        return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}
const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Moooo')); // Moooo I'm a cow, named Lily and I'm brown and white