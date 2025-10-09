const allTruthy = (...args) => {
  return args.every(Boolean);
};

// --- Exemples ---
console.log("allTruthy(true, true, true) →", allTruthy(true, true, true));   // Résultat attendu : true
console.log("allTruthy(true, false, true) →", allTruthy(true, false, true)); // Résultat attendu : false
console.log("allTruthy(5, 4, 3, 2, 1, 0) →", allTruthy(5, 4, 3, 2, 1, 0)); // Résultat attendu : false
console.log("allTruthy('hello', 1, []) →", allTruthy('hello', 1, []));     // Résultat attendu : true
console.log("allTruthy('text', '', 123) →", allTruthy('text', '', 123));   // Résultat attendu : false