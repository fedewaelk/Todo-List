import './style.css';
import Project from "./project.js";
import Task from "./task.js";

const myProject = Project("My First Project");
console.log("Project created:", myProject);

const task1 = Task("Buy groceries", "Milk, bread, and eggs", "2024-12-01", "high");
const task2 = Task("Do laundry", "", "2024-12-02", "low");

myProject.addTask(task1);
myProject.addTask(task2);

console.log("Project after adding tasks:", myProject.getTasks());

myProject.removeTask(task1.id);
console.log("Project after removing a task:", myProject.getTasks());

