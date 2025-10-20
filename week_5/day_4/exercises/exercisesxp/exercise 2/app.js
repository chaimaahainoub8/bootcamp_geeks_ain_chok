import people from './data.js';

function calculateAverageAge(personArray) {
    if (personArray.length === 0) {
        return 0;
    }
    const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
    return totalAge / personArray.length;
}

const averageAge = calculateAverageAge(people);

console.log("List of People:", people);
console.log(`The average age is: ${averageAge.toFixed(2)}`);