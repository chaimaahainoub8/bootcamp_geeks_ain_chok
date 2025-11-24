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
    if (err) return console.error('Error acquiring client', err.stack);
    
    // Create 'posts' table if it doesn't exist
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS posts (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT
        )
    `;
    
    client.query(createTableQuery, (err, result) => {
        release();
        if (err) return console.error('Error executing query', err.stack);
        console.log('Connected to Postgres & "posts" table ready.');
    });
});

module.exports = pool;