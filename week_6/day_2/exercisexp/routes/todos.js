// routes/todos.js
import { Router } from 'express';
const router = Router();

// In-memory 'database' for todos
let todos = [];
let nextId = 1;

// GET /todos (Get all items)
router.get('/', (req, res) => {
  res.json(todos);
});

// POST /todos (Add a new item)
router.post('/', (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: 'Task is required' });
  }
  const newTodo = { id: nextId++, task, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT /todos/:id (Update an item)
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;
  const todo = todos.find(t => t.id === parseInt(id));

  if (!todo) {
    return res.status(404).json({ error: 'To-do item not found' });
  }
  if (task !== undefined) todo.task = task;
  if (completed !== undefined) todo.completed = completed;
  res.json(todo);
});

// DELETE /todos/:id (Delete an item)
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'To-do item not found' });
  }
  todos.splice(index, 1);
  res.status(204).send();
});

export default router;