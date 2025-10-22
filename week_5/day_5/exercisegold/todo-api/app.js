const express = require('express');
const { v4: uuidv4 } = require('uuid'); // Import the v4 function from uuid

const app = express();
const PORT = 5003; // You can use any port

// --- Middleware ---
// Use express.json() to parse incoming JSON payloads
app.use(express.json());

// --- In-Memory Database ---
// Create an in-memory array to store todo objects
let todos = [
  { id: uuidv4(), title: 'Learn Express.js', completed: true },
  { id: uuidv4(), title: 'Build a Todo API', completed: false },
];

// --- Routes ---

/**
 * @route   GET /api/todos
 * @desc    Get all todo items
 * @access  Public
 */
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

/**
 * @route   POST /api/todos
 * @desc    Create a new todo
 * @access  Public
 */
app.post('/api/todos', (req, res) => {
  const { title, completed = false } = req.body; // Default completed to false

  // Edge case: Handle missing title
  if (!title) {
    return res.status(400).json({ message: 'Title is required.' });
  }

  // Create the new todo object
  const newTodo = {
    id: uuidv4(), // Generate a unique ID
    title: title,
    completed: Boolean(completed), // Ensure 'completed' is a boolean
  };

  // Add it to our "database"
  todos.push(newTodo);

  // Send back the new todo with a 201 (Created) status
  res.status(201).json(newTodo);
});

/**
 * @route   GET /api/todos/:id
 * @desc    Get a specific todo by its ID
 * @access  Public
 */
app.get('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const todo = todos.find(t => t.id === id);

  // Edge case: Handle not found
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found.' });
  }

  res.json(todo);
});

/**
 * @route   PUT /api/todos/:id
 * @desc    Update an existing todo
 * @access  Public
 */
app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todo = todos.find(t => t.id === id);

  // Edge case: Handle not found
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found.' });
  }

  // Update the properties if they were provided in the request body
  if (title !== undefined) {
    todo.title = title;
  }
  if (completed !== undefined) {
    todo.completed = Boolean(completed);
  }

  res.json(todo);
});

/**
 * @route   DELETE /api/todos/:id
 * @desc    Delete a todo by its ID
 * @access  Public
 */
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex(t => t.id === id);

  // Edge case: Handle not found
  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found.' });
  }

  // Remove the todo from the array
  todos.splice(todoIndex, 1);

  // Send a success response with no content
  res.status(204).send();
});

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Todo API server is running on http://localhost:${PORT}`);
});