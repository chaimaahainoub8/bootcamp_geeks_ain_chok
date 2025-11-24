const express = require('express');
const postRoutes = require('./server/routes/postRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/', postRoutes);

// Error Handling
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});