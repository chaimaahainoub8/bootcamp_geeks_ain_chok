// Import the necessary functions from date-fns
const { addDays, format } = require('date-fns');

function performDateOperations() {
  // 1. Get the current date and time
  const currentDate = new Date();
  console.log(`Current date: ${currentDate}`);

  // 2. Add 5 days to the current date
  const futureDate = addDays(currentDate, 5);

  // 3. Format the resulting date as a string
  // You can change the format as you like.
  // 'PPpp' is a long, readable format (e.g., "Oct 23, 2025, 10:30:00 PM")
  // 'yyyy-MM-dd' would give "2025-10-23"
  const formattedDate = format(futureDate, 'PPpp');

  // 4. Display the formatted date
  console.log(`Date in 5 days: ${formattedDate}`);
}

// Export the function
module.exports = performDateOperations;