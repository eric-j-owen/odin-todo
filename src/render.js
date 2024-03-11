import { getAllProjects } from './storage';

const projects = getAllProjects();
const projectsList = document.querySelector('.proj-list');
const projTitle = document.querySelector('.proj-title');
const projDesc = document.querySelector('.proj-desc');
const todoList = document.querySelector('.todos-list');

export function render() {
  projects.forEach((proj) => {
    const projectItem = document.createElement('li');
    const projectButton = document.createElement('button');
    projectButton.textContent = proj.title;
    projectItem.appendChild(projectButton);
    projectsList.appendChild(projectItem);

    projectButton.addEventListener('click', () => {
      projTitle.textContent = proj.title;
      projDesc.textContent = proj.desc;

      todoList.innerHTML = '';
      proj.todos.forEach((todo) => {
        const todoItem = document.createElement('li');
        const todoTitleEl = document.createElement('h6');
        todoTitleEl.textContent = todo.title;
        todoItem.appendChild(todoTitleEl);
        todoList.appendChild(todoItem);
      });
    });
  });
}

export function updateTodos(project) {
  todoList.innerHTML = '';

  project.todos.forEach((todo) => {
    const todoItemEl = document.createElement('li');
    const todoTitleEl = document.createElement('h6');
    todoTitleEl.textContent = todo.title;
    todoItemEl.appendChild(todoTitleEl);
    todoList.appendChild(todoItemEl);
  });
}
