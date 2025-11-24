const db = require('../config/db');

// Helper to wrap db.run in a Promise (since sqlite3 is callback-based)
const runQuery = (query, params) => {
    return new Promise((resolve, reject) => {
        db.run(query, params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
};

// Helper for getting data
const getQuery = (query, params) => {
    return new Promise((resolve, reject) => {
        db.get(query, params, (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
};

const getAllQuery = (query) => {
    return new Promise((resolve, reject) => {
        db.all(query, [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
};

const UserModel = {
    // Requirement #5: Use transaction to add a user
    createUserTransaction: async (userData, hashedPassword) => {
        return new Promise(async (resolve, reject) => {
            // 1. Begin Transaction
            db.serialize(() => {
                db.run("BEGIN TRANSACTION");

                const insertUser = `INSERT INTO users (email, username, first_name, last_name) VALUES (?, ?, ?, ?)`;
                const insertPwd = `INSERT INTO hashpwd (username, password) VALUES (?, ?)`;

                // Insert into users table
                db.run(insertUser, [userData.email, userData.username, userData.first_name, userData.last_name], function(err) {
                    if (err) {
                        db.run("ROLLBACK");
                        return reject(err);
                    }

                    // Insert into hashpwd table
                    db.run(insertPwd, [userData.username, hashedPassword], function(err) {
                        if (err) {
                            db.run("ROLLBACK");
                            return reject(err);
                        }

                        // Commit if both succeed
                        db.run("COMMIT");
                        resolve({ message: "User registered successfully via transaction" });
                    });
                });
            });
        });
    },

    findUserByUsername: (username) => {
        // We join the tables to get full info if needed, or just check hashpwd for login
        return getQuery(`SELECT * FROM hashpwd WHERE username = ?`, [username]);
    },

    getAllUsers: () => {
        return getAllQuery(`SELECT * FROM users`);
    },

    getUserById: (id) => {
        return getQuery(`SELECT * FROM users WHERE id = ?`, [id]);
    },

    updateUser: (id, data) => {
        const sql = `UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE id = ?`;
        return runQuery(sql, [data.first_name, data.last_name, data.email, id]);
    }
};

module.exports = UserModel;