const BookModel = require('../models/bookModel');

// Step 8: Read all route
const getAllBooks = async (req, res) => {
    try {
        const books = await BookModel.getAllBooks();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Step 9: Read specific book by ID
const getBookById = async (req, res) => {
    const { bookId } = req.params;
    try {
        const book = await BookModel.getBookById(bookId);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Step 10: Create route
const createBook = async (req, res) => {
    const { title, author, publishedYear } = req.body;
    try {
        const newBook = await BookModel.createBook(title, author, publishedYear);
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAllBooks, getBookById, createBook };