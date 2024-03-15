import createProject from './projects';
import createTodo from './todos';
import { render, updateTodos } from './render';
import { addProjectToStorage, getProjectByTitle } from './storage';

const miscProject = createProject('Misc', "This is for todo items that don't belong to a specific project.");
addProjectToStorage(miscProject);

const addProjectForm = document.querySelector('.add-project.form');
const addProjectTitle = document.querySelector('.add-project.title');
const addProjectDesc = document.querySelector('.add-project.desc');

addProjectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const proj = createProject(addProjectTitle.value, addProjectDesc.value);
  addProjectToStorage(proj);
  render();
});
const addTodoForm = document.querySelector('.add-todo.form');
const addTodoTitle = addTodoForm.querySelector('.add-todo.title');
const addTodoDesc = addTodoForm.querySelector('.add-todo.desc');
addTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const currProj = getProjectByTitle(document.querySelector('.proj-title').innerHTML);
  const todo = createTodo(addTodoTitle.value, addTodoDesc.value);
  currProj.addTodo(todo);
  updateTodos(currProj);
});

render();
