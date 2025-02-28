import { addProject } from "./projectController.js";
import { addTask } from "./taskController.js";

export const setupModalHandlers = () => {
  // Project Modal
  const projectModal = document.getElementById("projectModal");
  const closeProjectModalBtn = projectModal.querySelector(".close");
  const addProjectBtn = document.getElementById("addProjectBtn");
  const saveProjectBtn = document.getElementById("saveProjectBtn");

  addProjectBtn.addEventListener("click", () => {
    projectModal.style.display = "block";
  });

  closeProjectModalBtn.addEventListener("click", () => {
    projectModal.style.display = "none";
  });

  saveProjectBtn.addEventListener("click", () => {
    addProject();
  });

  // Task Modal
  const taskModal = document.getElementById("taskModal");
  const closeTaskModalBtn = document.getElementById("closeTaskModal");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const saveTaskBtn = document.getElementById("saveTaskBtn");

  addTaskBtn.addEventListener("click", () => {
    taskModal.style.display = "block";
  });

  closeTaskModalBtn.addEventListener("click", () => {
    taskModal.style.display = "none";
  });

  saveTaskBtn.addEventListener("click", () => {
    addTask();
    console.log('saveBtn apretado')
  });

  window.addEventListener("click", (e) => {
    if (e.target === projectModal) projectModal.style.display = "none";
    if (e.target === taskModal) taskModal.style.display = "none";
  });
};
