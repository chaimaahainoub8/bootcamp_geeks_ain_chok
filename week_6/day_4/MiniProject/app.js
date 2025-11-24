const express = require('express');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Mount the router at /tasks
app.use('/tasks', tasksRouter);

// Error handling (Requirement #5)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});