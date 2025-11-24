// routes/books.js
import { Router } from 'express';
const router = Router();

// In-memory 'database' for books
let books = [];
let nextId = 1;

// GET /books (Get all books)
router.get('/', (req, res) => {
  res.json(books);
});

// POST /books (Add a new book)
router.post('/', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }
  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id (Update a book)
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return res.status(4404).json({ error: 'Book not found' });
  }
  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;
  res.json(book);
});

// DELETE /books/:id (Delete a book)
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(b => b.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  books.splice(index, 1);
  res.status(204).send();
});

export default router;
