// Función para renderizar la lista de proyectos
export const renderProjects = (projects, projectListElement, selectProjectCallback, deleteProjectCallback) => {
  // Limpiar la lista de proyectos existente
  projectListElement.innerHTML = "";

  // Iterar sobre cada proyecto y crear su elemento correspondiente
  projects.forEach(project => {
    // Crear el elemento de lista para el proyecto
    const projectItem = document.createElement("li");
    projectItem.textContent = project.name;

    // Crear el botón de eliminar para el proyecto
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-project");

    // Asignar el evento de clic al botón de eliminar
    deleteBtn.addEventListener("click", (event) => {
      event.stopPropagation(); // Evitar que el clic se propague al elemento padre
      deleteProjectCallback(project.id); // Llamar a la función de eliminación con el ID del proyecto
    });

    // Añadir el botón de eliminar al elemento de lista del proyecto
    projectItem.appendChild(deleteBtn);

    // Asignar el evento de clic al elemento de lista para seleccionar el proyecto
    projectItem.addEventListener("click", () => selectProjectCallback(project));

    // Añadir el elemento de lista al contenedor de la lista de proyectos
    projectListElement.appendChild(projectItem);
  });
};

// Función para renderizar la lista de tareas de un proyecto
export const renderTasks = (project) => {
  // Obtener el elemento de la lista de tareas
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = ""; // Limpiar la lista de tareas existente

  // Obtener las tareas del proyecto utilizando el método getTasks()
  const tasks = project.getTasks();

  // Verificar si el proyecto tiene tareas definidas
  if (!tasks || !Array.isArray(tasks)) {
    console.warn("El proyecto no tiene tareas definidas.");
    return;
  }

  // Iterar sobre cada tarea y crear su elemento correspondiente
  tasks.forEach(task => {
    // Crear el elemento de lista para la tarea
    const taskItem = document.createElement("li");
    taskItem.textContent = task.title; // Mostrar el título de la tarea

    // Añadir el elemento de lista al contenedor de la lista de tareas
    taskListElement.appendChild(taskItem);
  });
};
