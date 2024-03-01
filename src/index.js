import createProject from './projects';
import createTodo from './todos';
import render from './render';
import { getAllProjects } from './storage';

let testProject = createProject('project1', 'this is a test project');
testProject.addProjectToStorage();

const testTodo = createTodo(
  'todo 1',
  'first todo i gotta do',
  new Date(2024, 2, 1),
  1,
);
let testTodo2 = createTodo(
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
testProject.addTodo(testTodo);
testProject.addTodo(testTodo2);
testProject.addTodo(testTodo3);
testProject.removeTodo(testTodo2);

testProject = testProject.updateTitle('new title');

testTodo2 = testTodo2.updateTitle('newer title');
render(getAllProjects());
