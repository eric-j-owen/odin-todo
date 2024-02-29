import { v4 as uuidv4 } from 'uuid';
import { updateTitleUtil, updateDescUtil } from './utility';

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
    removeTodo(id) {
      const removedIndex = this.todos.findIndex((todo) => todo.id === id);
      this.todos.splice(removedIndex, 1);
    },
    updateTitle(newTitle) {
      return updateTitleUtil(this, newTitle);
    },

    updateDesc(newDesc) {
      return updateDescUtil(this, newDesc);
    },
  };
}
