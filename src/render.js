import { getAllProjects } from './storage';

export default function render() {
  const projects = getAllProjects();
  const projectsDiv = document.querySelector('.projects');
  
  projects.forEach((proj) => {
    const projectDivEl = document.createElement('div');
    projectDivEl.classList.add('project');
    const projectTitleEl = document.createElement('h4');
    const projectDescEl = document.createElement('p');
    const todosDiv = document.createElement('div');

    projectTitleEl.textContent = proj.title;
    projectDescEl.textContent = proj.desc;

    proj.todos.forEach((todo) => {
      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo')
      const todoTitleEl = document.createElement('h5');
      todoTitleEl.textContent = todo.title;
      todoDiv.appendChild(todoTitleEl);

      todosDiv.appendChild(todoDiv);
    });

    projectDivEl.appendChild(projectTitleEl);
    projectDivEl.appendChild(projectDescEl);
    projectDivEl.appendChild(todosDiv);

    projectDivEl.append(document.createElement('hr'));
    console.log(projectDivEl);
    projectsDiv.appendChild(projectDivEl);
  });
}
