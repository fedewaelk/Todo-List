export const renderProjects = (projects, projectList, selectProject, deleteProject) => {
    projectList.innerHTML = "";
    projects.forEach(project => {
      const projectItem = document.createElement("li");
      projectItem.textContent = project.name;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
      deleteBtn.classList.add("delete-project");
      deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        deleteProject(project.id);
      });
  
      projectItem.appendChild(deleteBtn);
      projectItem.addEventListener("click", () => selectProject(project));
      projectList.appendChild(projectItem);
    });
  };

export const renderTasks = (project) => {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    if (!project.tasks || !Array.isArray(project.tasks)) {
        console.warn("El proyecto no tiene tareas definidas.");
        return;
    }

    project.tasks.forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.textContent = task.name;
        taskList.appendChild(taskItem);
    });
};

