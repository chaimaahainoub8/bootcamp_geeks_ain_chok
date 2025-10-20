/**
 * Calculates the total minutes lived since a given birthdate.
 * @param {string} birthdateString - A date string (e.g., "1995-10-25T10:00:00")
 * @returns {string} A formatted string with the total minutes.
 */
function getMinutesLived(birthdateString) {
  // Get the current date and time
  const now = new Date();
  
  // Create a Date object from the birthdate string
  const birthDate = new Date(birthdateString);
  
  // Calculate the difference in milliseconds
  const diffMs = now - birthDate;
  
  // Convert milliseconds to minutes
  const totalMinutes = Math.floor(diffMs / 1000 / 60);

  // Use toLocaleString() to format the large number with commas
  return `You have lived for approximately ${totalMinutes.toLocaleString()} minutes.`;
}

// Export the function
module.exports = getMinutesLived;