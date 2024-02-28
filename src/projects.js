import { v4 as uuidv4 } from "uuid";

export default function createProject(title, desc) {
    return {
        id: uuidv4(),
        title,
        desc,
        todos: [],
        createdDate: new Date(),
        addTodo(todo) {
            this.todos.push(todo);
        },
    };
}
