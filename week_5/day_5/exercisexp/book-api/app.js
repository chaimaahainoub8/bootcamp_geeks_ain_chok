// 4. Import express and create the instance
const express = require('express');
const app = express();

// Middleware to parse JSON (necessary for POST and PUT)
// This is the equivalent of step 9 (express.json())
app.use(express.json());

// 5. Define the data array
let books = [
    { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
    { id: 2, title: "Dune", author: "Frank Herbert", publishedYear: 1965 }
];

// 6. Set up the listening port
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// --- ROUTE DEFINITIONS ---

// 7. "Read all" (GET /api/books)
app.get('/api/books', (req, res) => {
    res.status(200).json(books);
});

// 8. "Read" (GET /api/books/:bookId)
app.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(b => b.id === bookId);

    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// 9. "Create" (POST /api/books)
app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;

    // Calculate the new ID
    const newId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;
    
    const newBook = {
        id: newId,
        title: title,
        author: author,
        publishedYear: publishedYear
    };

    books.push(newBook);
    res.status(201).json(newBook); // 201 = Created
});

// --- ADDITIONAL CRUD ROUTES (not listed but implied) ---

// "Update" (PUT /api/books/:bookId)
app.put('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex !== -1) {
        // Updates the book with new data
        books[bookIndex] = { ...books[bookIndex], ...req.body };
        res.status(200).json(books[bookIndex]);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

// "Delete" (DELETE /api/books/:bookId)
app.delete('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex !== -1) {
        books.splice(bookIndex, 1); // Deletes the book
        res.status(204).send(); // 204 = No Content (success)
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});