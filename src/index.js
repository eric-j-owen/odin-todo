import createProject from './projects';
import createTodo from './todos';
import render from './render';
import { addProjectToStorage } from './storage';

const miscProject = createProject('Misc', "This is for todo items that don't belong to a specific project.")
const testProject1 = createProject('project1', 'this is a test project');
const testProject2 = createProject('project2', 'this is ANOTHER test project');
const testProject3 = createProject('project3', 'this is YET ANOTHER test project');
addProjectToStorage(miscProject);
addProjectToStorage(testProject1);
addProjectToStorage(testProject2);
addProjectToStorage(testProject3);

const testTodo = createTodo(
  'todo 1',
  'first todo i gotta do',
  new Date(2024, 2, 1),
  1,
);
const testTodo2 = createTodo(
  'todo 2',
  'second todo i gotta do',
  new Date(2024, 4, 15),
  2,
);
const testTodo3 = createTodo(
  'todo 3',
  'third todo i gotta do',
  new Date(2025, 1, 20),
  3,
);
const testTodo4 = createTodo(
  'todo 4',
  'fourth todo i gotta do',
  new Date(2025, 1, 20),
  3,
);

testProject1.addTodo(testTodo);
testProject1.addTodo(testTodo2);
testProject1.addTodo(testTodo3);

testProject2.addTodo(testTodo4);

render();
