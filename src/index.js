import './style.css';
import { saveProjectsToLocalStorage, loadProjectsFromLocalStorage } from "./storage.js";
import { renderProjects, renderTasks } from "./dom.js";
import Project from "./project.js";
import Task from "./task.js";

let projects = loadProjectsFromLocalStorage();

const projectModal = document.getElementById("projectModal");
const closeModalBtn = document.querySelector(".close");
const saveProjectBtn = document.getElementById("saveProjectBtn");
const projectNameInput = document.getElementById("projectNameInput");
const projectList = document.getElementById("projectList");
const addProjectBtn = document.getElementById("addProjectBtn");
const addTaskBtn = document.getElementById("addTaskBtn");
const projectName = document.getElementById("projectName");
const taskList = document.getElementById("taskList");

const addProject = () => {
  const name = projectNameInput.value.trim();
  if (!name) return; // Evita agregar proyectos sin nombre

  const newProject = Project(name);
  projects.push(newProject);
  saveProjectsToLocalStorage(projects);
  renderProjects(projects, projectList, selectProject, deleteProject);

  projectNameInput.value = ""; // Limpiar input
  projectModal.style.display = "none"; // Cerrar modal
};

// Mostrar el modal
addProjectBtn.addEventListener("click", () => {
  projectModal.style.display = "block";
});

// Cerrar el modal
closeModalBtn.addEventListener("click", () => {
  projectModal.style.display = "none";
});

// Guardar nuevo proyecto
saveProjectBtn.addEventListener("click", addProject);

// Cerrar modal al hacer clic fuera de él
window.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    projectModal.style.display = "none";
  }
});

const selectProject = (project) => {
  projectName.textContent = project.name;
  renderTasks(project, taskList);
};

const deleteProject = (projectId) => {
  projects = projects.filter(project => project.id !== projectId);
  saveProjectsToLocalStorage(projects);
  renderProjects(projects, projectList, selectProject, deleteProject);
};

// Cargar proyectos al iniciar la página
document.addEventListener("DOMContentLoaded", () => {
  renderProjects(projects, projectList, selectProject, deleteProject);
});

// Validar que `addTask` esté definido antes de agregar event listener
if (addTaskBtn && typeof addTask === "function") {
  addTaskBtn.addEventListener("click", addTask);
}

