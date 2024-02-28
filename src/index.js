import createProject from "./projects";
import createTodo from "./todos";

const testProject = createProject("project1", "this is a test project");
const testTodo = createTodo(
    "todo 1",
    "first todo i gotta do",
    new Date(2024, 2, 1),
    1
);
testProject.addTodo(testTodo);

const anotherProject = createProject(
    "project 2",
    "this is a different project"
);
const anotherTodo = createTodo(
    "different todo",
    "this is different from other todos",
    new Date(2024, 11, 25),
    3
);
anotherProject.addTodo(anotherTodo);

console.log(testProject);
console.log(anotherProject);
