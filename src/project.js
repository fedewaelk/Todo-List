const Project = (name) => {
    let tasks = [];
  
    const addTask = (task) => {
      tasks.push(task);
    };
  
    const removeTask = (taskId) => {
      tasks = tasks.filter(task => task.id !== taskId);
    };
  
    const getTasks = () => tasks;
  
    return {
      id: Date.now().toString(),
      name,
      addTask,
      removeTask,
      getTasks,
    };
  };
  
  export default Project;
  