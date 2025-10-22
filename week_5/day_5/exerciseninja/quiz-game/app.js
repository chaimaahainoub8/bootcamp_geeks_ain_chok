const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// --- Serve Static Files ---
// This is the key part:
// It tells Express to serve any files it finds in the 'public' directory.
app.use(express.static(path.join(__dirname, 'public')));

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Quiz server is running on http://localhost:${PORT}`);
});