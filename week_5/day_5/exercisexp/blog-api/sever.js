// Import express
const express = require('express');
const app = express();

// Middleware to parse JSON (essential for POST and PUT)
app.use(express.json());

// Port to listen on
const PORT = 3000;

// Simulate a database (in-memory array)
let data = [
    { id: 1, title: "First Post", content: "Content of the first post" },
    { id: 2, title: "Second Post", content: "Content of the second post" }
];

// ---- ROUTE DEFINITIONS ----

// 8. GET /posts (Read all)
app.get('/posts', (req, res) => {
    res.status(200).json(data);
});

// 9. GET /posts/:id (Read one)
app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = data.find(p => p.id === postId);

    if (post) {
        res.status(200).json(post);
    } else {
        // 13. Handle invalid routes (resource not found)
        res.status(404).json({ message: "Post not found" });
    }
});

// 10. POST /posts (Create)
app.post('/posts', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required" });
    }

    const newId = data.length > 0 ? Math.max(...data.map(p => p.id)) + 1 : 1;
    const newPost = {
        id: newId,
        title: title,
        content: content
    };

    data.push(newPost);
    res.status(201).json(newPost); // 201 = Created successfully
});

// 11. PUT /posts/:id (Update)
app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = data.findIndex(p => p.id === postId);

    if (postIndex !== -1) {
        // Update the existing post
        data[postIndex] = { ...data[postIndex], ...req.body };
        res.status(200).json(data[postIndex]);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

// 12. DELETE /posts/:id (Delete)
app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = data.findIndex(p => p.id === postId);

    if (postIndex !== -1) {
        data.splice(postIndex, 1); // Deletes the item
        res.status(204).send(); // 204 = No Content (success)
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

// 13. Error handling (route not found)
app.use((req, res) => {
    res.status(404).json({ message: "Sorry, route not found!" });
});

// 13. Server error handling (Error Middleware)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Oops! Something went wrong." });
});

// 14. Start the server
app.listen(PORT, () => {
    console.log(`Server started and listening on http://localhost:${PORT}`);
});