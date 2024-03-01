import { v4 as uuidv4 } from 'uuid';
import { findObjIndexUtil, updateTitleUtil, updateDescUtil } from './utility';
import { projects } from './storage';

export default function createProject(title, desc) {
  return {
    id: uuidv4(),
    title,
    desc,
    todos: [],
    createdDate: new Date(),
    updateTitle(newTitle) {
      return updateTitleUtil(this, newTitle, projects);
    },

    updateDesc(newDesc) {
      return updateDescUtil(this, newDesc);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(obj) {
      const removedIndex = findObjIndexUtil(obj, this.todos);
      this.todos.splice(removedIndex, 1);
    },
    addProjectToStorage() {
      projects.push(this);
    },
  };
}
