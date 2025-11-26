const express = require('express');
const cors = require('cors');
const bp = require('body-parser');

const app = express();
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// --- Routes for Day 4 Daily Challenge ---
app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
  console.log("Received POST request:", req.body);
  res.send(`I received your POST request. This is what you sent me: ${req.body.message}`);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));