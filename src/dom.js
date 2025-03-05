import { Project } from "./factories";

const projectList = document.getElementById("my-projects");
const projectForm = document.getElementById("projectForm");
const projectModal = document.getElementById("projectModal");
const currentProjectTitle = document.getElementById("current-project-title");

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
    });

    projectItem.appendChild(projectButton);
    projectList.appendChild(projectItem);
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
  projectModal.style.display = "none";
});

export { renderProjects, selectedProject };

