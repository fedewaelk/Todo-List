const Project = (name) => {
    let tasks = [];
  
    const addTask = (task) => {
      tasks.push(task);
    };
  
    const getTasks = () => tasks;
  
    return {
      id: Date.now().toString(),
      name,
      addTask,
      getTasks,
    };
  };
  
  const Task = (title, description = "", dueDate = null, priority = "normal") => {
    let completed = false;
  
    const toggleCompleted = () => {
      completed = !completed;
    };
  
    return {
      id: Date.now().toString(),
      title,
      description,
      dueDate,
      priority,
      completed,
      toggleCompleted,
    };
  };
  
  export { Project, Task };
  