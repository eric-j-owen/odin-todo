import { v4 as uuidv4 } from 'uuid';
import { updateTitleUtil, updateDescUtil } from './utility';

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
      return updateTitleUtil(this, newTitle);
    },
    updateDesc(newDesc) {
      return updateDescUtil(this, newDesc);
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
