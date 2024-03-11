import createProject from './projects';
import createTodo from './todos';
import { render, updateTodos } from './render';
import { addProjectToStorage, getProjectByTitle } from './storage';

const miscProject = createProject('Misc', "This is for todo items that don't belong to a specific project.");
const testProject1 = createProject('project1', 'this is a test project');
const testProject2 = createProject('project2', 'this is ANOTHER test project');
const testProject3 = createProject('project3', 'this is YET ANOTHER test project');
addProjectToStorage(miscProject);
addProjectToStorage(testProject1);
addProjectToStorage(testProject2);
addProjectToStorage(testProject3);

const addTodoForm = document.querySelector('.add-todo form');
const addTodoTitle = addTodoForm.querySelector('.add-todo .title');
const addTodoDesc = addTodoForm.querySelector('.add-todo .desc');
addTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const currProj = getProjectByTitle(document.querySelector('.proj-title').innerHTML);
  const todo = createTodo(addTodoTitle.value, addTodoDesc.value, new Date());
  currProj.addTodo(todo);
  updateTodos(currProj);
});

render();
