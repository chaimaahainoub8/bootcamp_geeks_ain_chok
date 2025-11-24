const express = require('express');
const bookRoutes = require('./server/routes/bookRoutes');
require('dotenv').config();

const app = express();
// Step 7: Listen on port 5000
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Mount the routes at /api
app.use('/api', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});