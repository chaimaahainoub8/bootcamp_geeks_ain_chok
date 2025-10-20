function getTimeUntilNextHoliday() {
  const holidayName = "Christmas";
  
  // Get the current date and time
  const now = new Date();
  const currentYear = now.getFullYear();
  
  // Set the target holiday date (Month 11 is December)
  let holidayDate = new Date(currentYear, 11, 25);
  
  // Check if the holiday has already passed this year
  if (now > holidayDate) {
    // If it has, set the target to next year's holiday
    holidayDate.setFullYear(currentYear + 1);
  }
  
  // --- This logic is the same as Exercise 1 ---
  const diffMs = holidayDate - now;
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;
  const pad = (num) => String(num).padStart(2, '0');
  
  // Format the output strings
  const todayStr = `Today is ${now.toLocaleDateString()}`;
  const holidayStr = `The next holiday (${holidayName} on ${holidayDate.toLocaleDateString()}) is in ${days} days and ${pad(hours)}:${pad(minutes)}:${pad(seconds)} hours.`;
  
  return `${todayStr}\n${holidayStr}`;
}

// Export the function
module.exports = getTimeUntilNextHoliday;