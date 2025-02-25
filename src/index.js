import './style.css';
import Project from "./project.js";
import Task from "./task.js";

let projects = [];

const addProjectBtn = document.getElementById("addProjectBtn");
const addTaskBtn = document.getElementById("addTaskBtn");
const projectList = document.getElementById("projectList");
const projectName = document.getElementById("projectName");

const addProject = () => {
  const projectNameInput = prompt("Enter project name");
  if (projectNameInput) {
    const newProject = Project(projectNameInput);
    projects.push(newProject);
    renderProjects();
  }
};

const renderProjects = () => {
  projectList.innerHTML = "";
  projects.forEach(project => {
    const projectItem = document.createElement("li");
    projectItem.textContent = project.name;
    projectItem.addEventListener("click", () => selectProject(project));
    projectList.appendChild(projectItem);
  });
};

const selectProject = (project) => {
  projectName.textContent = project.name;
};

addProjectBtn.addEventListener("click", addProject);