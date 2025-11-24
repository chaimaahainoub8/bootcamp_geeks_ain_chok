// app.js
import express from 'express';

// Import all routers
import indexRouter from './routes/index.js';
import todoRouter from './routes/todos.js';
import bookRouter from './routes/books.js';

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// --- Mount Routers ---
// Exercise 1: / and /about
app.use('/', indexRouter);

// Exercise 2: /todos
app.use('/todos', todoRouter);

// Exercise 3: /books
app.use('/books', bookRouter);

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 