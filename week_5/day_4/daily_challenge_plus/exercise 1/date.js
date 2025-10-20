function getTimeUntilNewYear() {
  // Get the current date and time
  const now = new Date();
  
  // Get the current year and set the target date to Jan 1st of the *next* year
  const currentYear = now.getFullYear();
  const newYearDate = new Date(currentYear + 1, 0, 1, 0, 0, 0); // Month 0 is January
  
  // Calculate the difference in milliseconds
  const diffMs = newYearDate - now;
  
  // Convert milliseconds into days, hours, minutes, and seconds
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;

  // Helper function to pad numbers with a leading zero
  const pad = (num) => String(num).padStart(2, '0');

  // Return the formatted string
  return `The 1st of January is in ${days} days and ${pad(hours)}:${pad(minutes)}:${pad(seconds)} hours`;
}

// Export the function
module.exports = getTimeUntilNewYear;