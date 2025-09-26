// The provided data array
const gameInfo = [
  { username: "john", team: "red", score: 5, items: ["ball", "book", "pen"] },
  { username: "becky", team: "blue", score: 10, items: ["tape", "backpack", "pen"] },
  { username: "susy", team: "red", score: 55, items: ["ball", "eraser", "pen"] },
  { username: "tyson", team: "green", score: 1, items: ["book", "pen"] },
];

// Question 1: Create an array that contains all the usernames with an exclamation point.
const usernames = gameInfo.map(player => `${player.username}!`);
console.log("Usernames:", usernames);

// Question 2: Create an array with the usernames of players with a score bigger than 5.
const winners = gameInfo
  .filter(player => player.score > 5)
  .map(player => player.username);
console.log("Winners:", winners);

// Question 3: Find and display the total score of the users.
const totalScore = gameInfo.reduce((total, player) => total + player.score, 0);
console.log("Total Score:", totalScore);