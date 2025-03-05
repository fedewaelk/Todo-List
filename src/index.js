import "./styles.css";
import { Project, Task } from './factories';

const myProject = Project('Proyecto');

const myTask = Task('Tarea', 'Descripción', '2025-03-10', 'alta');

myProject.addTask(myTask);

console.log(myProject.getTasks());