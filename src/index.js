import "./style.css";
import { loadProjectsFromLocalStorage } from "./storage.js";
import { renderProjects } from "./dom.js";
import { setupModalHandlers } from "./modal.js";
import { addProject, deleteProject, selectProject } from "./projectController.js";
import { addTask } from "./taskController.js";

let projects = loadProjectsFromLocalStorage();
const projectList = document.getElementById("projectList");

document.addEventListener("DOMContentLoaded", () => {
  renderProjects(projects, projectList, selectProject, deleteProject);
  setupModalHandlers();
});
