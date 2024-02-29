import { v4 as uuidv4 } from 'uuid';

export default function createTodo(title, desc, dueDate, priority) {
  return {
    id: uuidv4(),
    title,
    desc,
    dueDate,
    priority,
    isComplete: false,
    createdDate: new Date(),
    updateTitle(newTitle) {
      this.title = newTitle;
    },
    updateDesc(newDesc) {
      this.desc = newDesc;
    },
    updateDueDate(newDate) {
      this.dueDate = newDate;
    },
    updatePriority(newPriority) {
      this.priority = newPriority;
    },
    updateIsComplete() {
      this.isComplete = !this.isComplete;
    },
  };
}
