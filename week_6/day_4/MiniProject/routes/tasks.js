const express = require('express');
const router = express.Router();
const fs = require('fs').promises; // Use promises for easier async/await
const path = require('path');

const tasksFilePath = path.join(__dirname, '../tasks.json');

// Helper function to read tasks
const readTasks = async () => {
    try {
        const data = await fs.readFile(tasksFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error('Error reading tasks file');
    }
};

// Helper function to write tasks
const writeTasks = async (tasks) => {
    try {
        await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
    } catch (error) {
        throw new Error('Error writing to tasks file');
    }
};

// 1. GET /tasks - Retrieve all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await readTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 2. GET /tasks/:id - Retrieve specific task
router.get('/:id', async (req, res) => {
    try {
        const tasks = await readTasks();
        const task = tasks.find(t => t.id === parseInt(req.params.id));
        
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 3. POST /tasks - Create new task
router.post('/', async (req, res) => {
    const { title, description } = req.body;

    // Validation (Requirement #4)
    if (!title || !description) {
        return res.status(400).json({ message: "Title and description are required" });
    }

    try {
        const tasks = await readTasks();
        
        const newTask = {
            id: Date.now(), // Simple unique ID generator
            title,
            description,
            completed: false
        };

        tasks.push(newTask);
        await writeTasks(tasks);

        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 4. PUT /tasks/:id - Update a task
router.put('/:id', async (req, res) => {
    const { title, description, completed } = req.body;
    const taskId = parseInt(req.params.id);

    try {
        const tasks = await readTasks();
        const taskIndex = tasks.findIndex(t => t.id === taskId);

        if (taskIndex === -1) return res.status(404).json({ message: "Task not found" });

        // Update fields if provided
        const updatedTask = {
            ...tasks[taskIndex],
            title: title || tasks[taskIndex].title,
            description: description || tasks[taskIndex].description,
            completed: completed !== undefined ? completed : tasks[taskIndex].completed
        };

        tasks[taskIndex] = updatedTask;
        await writeTasks(tasks);

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 5. DELETE /tasks/:id - Delete a task
router.delete('/:id', async (req, res) => {
    const taskId = parseInt(req.params.id);

    try {
        const tasks = await readTasks();
        const newTasks = tasks.filter(t => t.id !== taskId);

        if (tasks.length === newTasks.length) {
            return res.status(404).json({ message: "Task not found" });
        }

        await writeTasks(newTasks);
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;