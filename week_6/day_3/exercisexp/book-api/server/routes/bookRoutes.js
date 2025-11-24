const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Define routes as per instructions
router.get('/books', bookController.getAllBooks);
router.get('/books/:bookId', bookController.getBookById);
router.post('/books', bookController.createBook);

module.exports = router;