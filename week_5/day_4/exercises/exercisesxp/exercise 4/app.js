import TodoList from './todo.js';

// Create a new instance of the TodoList
const myTodoList = new TodoList();

// Add a few tasks
myTodoList.addTask("Buy groceries");
myTodoList.addTask("Finish Node.js exercises");
myTodoList.addTask("Go for a run");

// List all tasks
myTodoList.listAllTasks();

// Mark a task as complete
myTodoList.markTaskAsComplete(2);

// List all tasks again to see the change
myTodoList.listAllTasks();