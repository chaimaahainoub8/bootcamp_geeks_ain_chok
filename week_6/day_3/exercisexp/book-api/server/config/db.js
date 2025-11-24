const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    
    // Step 5: Define a basic data books table
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS books (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            publishedYear INTEGER
        )
    `;
    
    client.query(createTableQuery, (err, result) => {
        release();
        if (err) {
            return console.error('Error creating table', err.stack);
        }
        console.log('Connected to Postgres & "books" table ready.');
    });
});

module.exports = pool;