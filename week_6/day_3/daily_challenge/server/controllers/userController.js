const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');

const register = async (req, res) => {
    const { username, password, email, first_name, last_name } = req.body;

    try {
        // Requirement #7: Hash password using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = { username, email, first_name, last_name };
        
        // Call the transaction model
        await UserModel.createUserTransaction(userData, hashedPassword);
        
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Get the hashed password from hashpwd table
        const userAuth = await UserModel.findUserByUsername(username);

        if (!userAuth) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare provided password with stored hash
        const isMatch = await bcrypt.compare(password, userAuth.password);

        if (isMatch) {
            res.status(200).json({ message: "Login Successful!" });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await UserModel.getUserById(req.params.id);
        if (user) res.status(200).json(user);
        else res.status(404).json({ message: "User not found" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        await UserModel.updateUser(req.params.id, req.body);
        res.status(200).json({ message: "User updated" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { register, login, getAllUsers, getUserById, updateUser };