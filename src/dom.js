import { Project, Task } from "./factories";

const projectList = document.getElementById("my-projects");
const projectForm = document.getElementById("projectForm");
const projectModal = document.getElementById("projectModal");
const currentProjectTitle = document.getElementById("current-project-title");
const taskForm = document.getElementById("taskForm");
const taskModal = document.getElementById("taskModal");
const taskContainer = document.getElementById("task-container");

let projects = [];
let selectedProject = null;

const allTasksProject = Project("All Tasks");
projects.push(allTasksProject);
selectedProject = allTasksProject;
currentProjectTitle.textContent = allTasksProject.name;

const renderProjects = () => {
  projectList.innerHTML = "";
  projects.forEach((project) => {
    const projectItem = document.createElement("li");
    const projectButton = document.createElement("button");

    projectButton.textContent = project.name;
    projectButton.dataset.projectId = project.id;

    projectButton.addEventListener("click", () => {
      selectedProject = project;
      currentProjectTitle.textContent = project.name;
      renderTasks();
    });

    projectItem.appendChild(projectButton);
    projectList.appendChild(projectItem);
  });
};

const renderTasks = () => {
  taskContainer.innerHTML = "";
  selectedProject.getTasks().forEach((task) => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p>Due: ${task.dueDate}</p>
      <p>Priority: ${task.priority}</p>
    `;
    taskContainer.appendChild(taskItem);
  });
};

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const projectName = document.getElementById("projectName").value;
  if (!projectName.trim()) return;

  const newProject = Project(projectName);
  projects.push(newProject);
  
  renderProjects();

  projectForm.reset();
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!selectedProject) return alert("Selecciona un proyecto antes de agregar tareas");

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;
  const priority = document.getElementById("priority").value;

  const newTask = Task(title, description, dueDate, priority);
  selectedProject.addTask(newTask);

  renderTasks();

  taskForm.reset();
});

export { renderProjects, renderTasks, selectedProject };

