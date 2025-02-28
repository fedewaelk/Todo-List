import Task from "./task.js";
import { renderTasks } from "./dom.js";

let currentProject = null;

export const setCurrentProject = (project) => {
  console.log("Proyecto activo asignado:", currentProject);
  currentProject = project;
};

export const addTask = () => {
  console.log("addTask fue llamado!");
  if (!currentProject) {
    console.log("Error: No hay un proyecto activo.");
    return;
  }

  const taskTitle = document.getElementById("taskTitle").value.trim();
  const taskDescription = document.getElementById("taskDescription").value.trim();
  const taskDueDate = document.getElementById("taskDueDate").value;
  const taskPriority = document.getElementById("taskPriority").value;

  if (!taskTitle) return;

  const newTask = Task(taskTitle, taskDescription, taskDueDate, taskPriority);
  currentProject.addTask(newTask);
  renderTasks(currentProject);
  console.log(taskTitle, taskDescription, taskDueDate, taskPriority)

  document.getElementById("taskModal").style.display = "none";
};