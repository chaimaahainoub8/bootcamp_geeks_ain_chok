//----- Exercise 1 ------
let numbers = [123, 8409, 100053, 33333333, 7];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}


//----- Exercise 2 ------
let guestlist = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

 
let name = "wendy"; 

if (name in guestlist) {
  console.log(`Hi! I'm ${name}, and I'm from ${guestlist[name]}.`);
} else {
  console.log("Hi! I'm a guest.");
}


//----- Exercise 3 ------
let age = [20, 5, 12, 43, 98, 55];

let sum = 0;
for (let i = 0; i < age.length; i++) {
  sum = sum + age[i];
}
console.log(sum);

let highestAge = age[0];
for (let i = 1; i < age.length; i++) {
  if (age[i] > highestAge) {
    highestAge = age[i];
  }
}
console.log(highestAge);