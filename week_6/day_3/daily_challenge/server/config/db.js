const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create a database file in the config folder
const dbPath = path.resolve(__dirname, 'users.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error('Error opening database:', err.message);
    else console.log('Connected to the SQLite database.');
});

// Initialize Tables based on Requirement #4
db.serialize(() => {
    // Table 1: General User Info
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT,
        username TEXT UNIQUE,
        first_name TEXT,
        last_name TEXT
    )`);

    // Table 2: Security/Auth Info
    db.run(`CREATE TABLE IF NOT EXISTS hashpwd (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    )`);
});

module.exports = db;