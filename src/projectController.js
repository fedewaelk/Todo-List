import Project from "./project.js";
import { saveProjectsToLocalStorage } from "./storage.js";
import { renderProjects, renderTasks } from "./dom.js";

let projects = [];

export const setProjects = (loadedProjects) => {
  projects = loadedProjects;
};

export const addProject = () => {
  const projectNameInput = document.getElementById("projectNameInput");
  const projectList = document.getElementById("projectList");
  const projectModal = document.getElementById("projectModal");

  const name = projectNameInput.value.trim();
  if (!name) return;

  const newProject = Project(name);
  projects.push(newProject);
  saveProjectsToLocalStorage(projects);
  renderProjects(projects, projectList, selectProject, deleteProject);

  projectNameInput.value = "";
  projectModal.style.display = "none";
};

export const selectProject = (project) => {
  const projectName = document.getElementById("projectName");
  const taskList = document.getElementById("taskList");

  projectName.textContent = project.name;
  renderTasks(project, taskList);
};

export const deleteProject = (projectId) => {
  projects = projects.filter((project) => project.id !== projectId);
  saveProjectsToLocalStorage(projects);

  const projectList = document.getElementById("projectList");
  renderProjects(projects, projectList, selectProject, deleteProject);
};
