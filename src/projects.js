import { v4 as uuidv4 } from 'uuid';

export default function createProject(title, desc) {
  return {
    id: uuidv4(),
    title,
    desc,
    todos: [],
    createdDate: new Date(),
    updateTitle(newTitle) {
      this.title = newTitle;
    },

    updateDesc(newDesc) {
      this.desc = newDesc;
    },
    addTodo(todo) {
      const updatedTodoWithId = {
        ...todo,
        projectId: this.id,
      };
      this.todos.push(updatedTodoWithId);
    },
    removeTodo(obj) {
      if (obj) {
        const removedIndex = this.todos.findIndex((item) => item.id === obj.id);
        this.todos.splice(removedIndex, 1);
      }
    },
  };
}
