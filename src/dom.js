import { Project } from './factories';

const projectList = document.getElementById('my-projects');
const projectForm = document.getElementById('projectForm');
const projectModal = document.getElementById('projectModal');

let projects = [];

const renderProjects = () => {
  projectList.innerHTML = '';
  projects.forEach((project) => {
    const projectItem = document.createElement('li');
    const projectButton = document.createElement('button');

    projectButton.textContent = project.name;
    projectButton.dataset.projectId = project.id;

    projectItem.appendChild(projectButton);
    projectList.appendChild(projectItem);
  });
};

projectForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const projectName = document.getElementById('projectName').value;
  if (!projectName.trim()) return;

  const newProject = Project(projectName);
  projects.push(newProject);
  
  renderProjects();

  projectForm.reset();
  projectModal.style.display = 'none';
});

export { renderProjects };
