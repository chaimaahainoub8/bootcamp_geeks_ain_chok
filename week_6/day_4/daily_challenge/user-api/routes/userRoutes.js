const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const usersFilePath = path.join(__dirname, '../users.json');

// Helper: Read Users
const readUsers = async () => {
    try {
        const data = await fs.readFile(usersFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) { return []; }
};

// Helper: Write Users
const writeUsers = async (users) => {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
};

// POST /register
router.post('/register', async (req, res) => {
    const { name, lastname, email, username, password } = req.body;

    // Validation
    if (!username || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const users = await readUsers();
        
        // Check if user exists
        if (users.find(u => u.username === username)) {
            return res.status(400).json({ message: "Username already exists" });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            id: Date.now(),
            name, lastname, email, username, 
            password: hashedPassword // Store the hash, NOT the real password
        };

        users.push(newUser);
        await writeUsers(users);

        res.status(201).json({ message: "Hello Your account is now created!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST /login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const users = await readUsers();
        const user = users.find(u => u.username === username);

        if (!user) {
            return res.status(400).json({ message: "Username is not registered" });
        }

        // Compare Password
        const validPassword = await bcrypt.compare(password, user.password);
        
        if (!validPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }

        res.json({ message: `Hi ${user.username} welcome back again!` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /users (For checking)
router.get('/users', async (req, res) => {
    const users = await readUsers();
    res.json(users); // In a real app, never send passwords back!
});

// GET /users/:id
router.get('/users/:id', async (req, res) => {
    const users = await readUsers();
    const user = users.find(u => u.id == req.params.id);
    if(user) res.json(user);
    else res.status(404).json({message: "User not found"});
});

// PUT /users/:id
router.put('/users/:id', async (req, res) => {
    const users = await readUsers();
    const index = users.findIndex(u => u.id == req.params.id);
    if (index !== -1) {
        users[index] = { ...users[index], ...req.body };
        await writeUsers(users);
        res.json(users[index]);
    } else {
        res.status(404).json({message: "User not found"});
    }
});

module.exports = router;