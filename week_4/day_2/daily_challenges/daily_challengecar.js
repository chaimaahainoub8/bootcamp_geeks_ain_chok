// The available cars
const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

// --- PART I ---
// Find the first Honda
function getCarHonda(carInventory) {
  // Find the car where car_make is "Honda"
  const hondaCar = carInventory.find(car => car.car_make === "Honda");

  // Create the result sentence
  return `This is a ${hondaCar.car_make} ${hondaCar.car_model} from ${hondaCar.car_year}.`;
}

// --- PART II ---
// Sort the cars by year
function sortCarInventoryByYear(carInventory) {
  // Sort the array by comparing the years (car_year)
  const sortedInventory = [...carInventory].sort((a, b) => a.car_year - b.car_year);
  
  return sortedInventory;
}


// --- Display the results ---

console.log("--- Result Part I ---");
console.log(getCarHonda(inventory)); // Displays the sentence about the Honda

console.log("\n--- Result Part II ---");
console.log(sortCarInventoryByYear(inventory)); // Displays the sorted listadd 