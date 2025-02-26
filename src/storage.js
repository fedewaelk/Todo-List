export const saveProjectsToLocalStorage = (projects) => {
  localStorage.setItem("projects", JSON.stringify(projects));
};

export const loadProjectsFromLocalStorage = () => {
  const storedProjects = JSON.parse(localStorage.getItem("projects"));
  return storedProjects || [];
};
