// Part 1: Setting Up the Express Server
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5002;

// This is a secret key for signing JWTs.
// In a real app, store this in an environment variable!
const JWT_SECRET = 'my_super_secret_key123';

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// In-memory "database" to store users
// In a real app, you would use a database like MongoDB or PostgreSQL.
let users = [];
let userIdCounter = 1; // Simple counter for unique user IDs

// --- Part 2 & 3: Creating User Routes & Implementing Logic ---

/**
 * @route   POST /api/register
 * @desc    Register a new user
 * @access  Public
 */
app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // 1. Check for missing data
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    // 2. Check if user already exists
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken.' });
    }

    // 3. Hash the password
    // A salt round of 10 is standard
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create and store the new user
    const newUser = {
      id: userIdCounter++,
      username: username,
      password: hashedPassword,
      role: 'user' // Default role for Bonus Challenge
    };
    users.push(newUser);

    console.log('Users:', users); // For debugging
    res.status(201).json({ message: 'User registered successfully!' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during registration.' });
  }
});

/**
 * @route   POST /api/login
 * @desc    Login a user and return a JWT
 * @access  Public
 */
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // 1. Check for missing data
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    // 2. Find the user in the "database"
    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // 3. Compare the provided password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // 4. User is validated. Create a JWT payload.
    const payload = {
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      }
    };

    // 5. Sign the token
    const token = jwt.sign(
      payload,
      JWT_SECRET,
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    // 6. Send the token back to the client
    res.json({
      message: 'Login successful!',
      token: token
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during login.' });
  }
});

// --- Authentication Middleware ---
// This function will check the token on protected routes
const authenticateToken = (req, res, next) => {
  // Get the token from the Authorization header
  // Format is "Bearer TOKEN"
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Get the token part

  if (token == null) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  // Verify the token
  jwt.verify(token, JWT_SECRET, (err, userPayload) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' }); // Forbidden
    }

    // Token is valid. Add the user payload to the request object
    req.user = userPayload.user;
    next(); // Move on to the next function (the route handler)
  });
};

/**
 * @route   GET /api/profile
 * @desc    Get the profile of the logged-in user
 * @access  Private (Requires a valid token)
 */
app.get('/api/profile', authenticateToken, (req, res) => {
  // Because of the `authenticateToken` middleware,
  // we have access to `req.user` which contains the user's payload.
  
  // Find the full user object from our "database"
  // We do this to get the most up-to-date user info
  const user = users.find(u => u.id === req.user.id);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  // Send the profile data (NEVER send the password)
  res.json({
    id: user.id,
    username: user.username,
    role: user.role
  });
});


// Part 1.5: Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});