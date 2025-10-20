class TodoList {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }

    addTask(description) {
        const task = {
            id: this.nextId++,
            description: description,
            completed: false
        };
        this.tasks.push(task);
        console.log(`Task added: "${description}"`);
    }

    markTaskAsComplete(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
            console.log(`Task ${id} marked as complete.`);
        } else {
            console.log(`Task with id ${id} not found.`);
        }
    }

    listAllTasks() {
        console.log("\n--- To-Do List ---");
        this.tasks.forEach(task => {
            const status = task.completed ? "[x]" : "[ ]";
            console.log(`${status} ${task.id}: ${task.description}`);
        });
        console.log("------------------\n");
    }
}

export default TodoList;