import './style.css';
import Project from "./project.js";
import Task from "./task.js";

let projects = [];

const addProjectBtn = document.getElementById("addProjectBtn");
const addTaskBtn = document.getElementById("addTaskBtn");
const projectList = document.getElementById("projectList");
const projectName = document.getElementById("projectName");
const taskList = document.getElementById("taskList");

const saveProjectsToLocalStorage = () => {
  localStorage.setItem("projects", JSON.stringify(projects));
};

const loadProjectsFromLocalStorage = () => {
  const storedProjects = JSON.parse(localStorage.getItem("projects"));
  if (storedProjects) {
    projects = storedProjects.map(projData => {
      const project = Project(projData.name);
      project.tasks = projData.tasks.map(taskData => Task(taskData.title));
      return project;
    });
  }
};

const addProject = () => {
  const projectNameInput = prompt("Enter project name");
  if (projectNameInput) {
    const newProject = Project(projectNameInput);
    projects.push(newProject);
    saveProjectsToLocalStorage();
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
  renderTasks(project);
};

const renderTasks = (project) => {
  taskList.innerHTML = "";
  const tasks = project.getTasks();
  tasks.forEach(task => {
    const taskItem = document.createElement("li");
    taskItem.textContent = task.title;
    taskList.appendChild(taskItem);
  });
};

const addTask = () => {
  const taskTitle = prompt("Enter task title");
  const selectedProject = projects.find(p => p.name === projectName.textContent);
  if (taskTitle && selectedProject) {
    const newTask = Task(taskTitle);
    selectedProject.addTask(newTask);
    saveProjectsToLocalStorage();
    renderTasks(selectedProject);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  loadProjectsFromLocalStorage();
  renderProjects();
});

addProjectBtn.addEventListener("click", addProject);
addTaskBtn.addEventListener("click", addTask);
