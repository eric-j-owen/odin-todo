import createProject from './projects';
import createTodo from './todos';
import render from './render';
import { getAllProjects, addProjectToStorage } from './storage';

const testProject = createProject('project1', 'this is a test project');
addProjectToStorage(testProject);

const testTodo = createTodo(
  'todo 1',
  'first todo i gotta do',
  testProject.id,
  new Date(2024, 2, 1),
  1,
);
const testTodo2 = createTodo(
  'todo 2',
  'second todo i gotta do',
  testProject.id,
  new Date(2024, 4, 15),
  2,
);
const testTodo3 = createTodo(
  'todo 3',
  'third todo i gotta do',
  new Date(2025, 1, 20),
  3,
);
testProject.addTodo(testTodo);
testProject.addTodo(testTodo2);
testProject.addTodo(testTodo3);

testProject.removeTodo(testTodo2);
render(getAllProjects());
