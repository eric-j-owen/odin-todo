import { v4 as uuidv4 } from "uuid";

export default function createTodo(title, desc, dueDate, priority) {
    return {
        uuid: uuidv4(),
        title,
        desc,
        dueDate,
        priority,
        isComplete: false,
        createdDate: new Date(),
    };
}
