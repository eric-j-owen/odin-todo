import {
  getAllProjects, getProjectByTitle, getTodoByTitle,
} from './storage';

const projects = getAllProjects();
const projectsList = document.querySelector('.proj-list');
const projTitle = document.querySelector('.proj-title');
const projDesc = document.querySelector('.proj-desc');
const todoList = document.querySelector('.todos-list');

export function updateTodos(project) {
  todoList.innerHTML = '';
  project.todos.forEach((todo) => {
    const todoItemEl = document.createElement('li');
    const todoTitleEl = document.createElement('h6');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('todo-delete');
    todoTitleEl.textContent = todo.title;
    todoItemEl.appendChild(todoTitleEl);
    todoItemEl.appendChild(deleteBtn);
    todoList.appendChild(todoItemEl);
  });
}

projTitle.textContent = projects[0].title;
projDesc.textContent = projects[0].desc;
updateTodos(projects[0]);

export function render() {
  projectsList.innerHTML = '';
  projects.forEach((proj) => {
    const projectItem = document.createElement('li');
    const projectButton = document.createElement('h4');
    projectButton.textContent = proj.title;
    projectItem.appendChild(projectButton);
    projectsList.appendChild(projectItem);

    projectButton.addEventListener('click', () => {
      projTitle.textContent = proj.title;
      projDesc.textContent = proj.desc;
      updateTodos(proj);
    });
  });
}

todoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('todo-delete')) {
    const todoItem = event.target.closest('li');
    const todoTitleText = todoItem.querySelector('h6').textContent;
    const proj = getProjectByTitle(projTitle.textContent);
    const todoObj = getTodoByTitle(todoTitleText, proj.id);
    proj.removeTodo(todoObj);
    updateTodos(proj);
  }
});
