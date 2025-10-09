// Le tableau de données initial
const gameInfo = [
  { username: "john", team: "red", score: 5, items: ["ball", "book", "pen"] },
  { username: "becky", team: "blue", score: 10, items: ["tape", "backpack", "pen"] },
  { username: "susy", team: "red", score: 55, items: ["ball", "eraser", "pen"] },
  { username: "tyson", team: "green", score: 1, items: ["book", "pen"] },
];

// 1. Créer un tableau avec les noms d'utilisateur et un "!"
const usernames = []; // On initialise un tableau vide

gameInfo.forEach(player => {
  // Pour chaque joueur, on ajoute son nom + "!" au tableau
  usernames.push(player.username + "!");
});

console.log(usernames);
// Résultat attendu : ["john!", "becky!", "susy!", "tyson!"]


// 2. Créer un tableau des joueurs avec un score > 5
const winners = []; // On initialise un tableau vide pour les gagnants

gameInfo.forEach(player => {
  // On vérifie si le score du joueur est strictement supérieur à 5
  if (player.score > 5) {
    // Si c'est le cas, on ajoute son nom au tableau des gagnants
    winners.push(player.username);
  }
});

console.log(winners);
// Résultat attendu : ["becky", "susy"]