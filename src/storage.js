import createProject from './projects';

export const projects = [createProject('Miscellaneous Tasks', "This is for tasks that don't belong to a specific project.")];

export function getAllProjects() {
  return projects;
}

export function getProjectByIndex(index) {
  return projects[index];
}

export function getProjectByTitle(title) {
  return projects.find((project) => project.title.includes(title));
}

export function getTodoByTitle(todoTitle, projectId) {
  const project = projects.find((proj) => proj.id === projectId);
  return project.todos.find((todo) => todo.title.includes(todoTitle));
}

export function addProjectToStorage(project) {
  projects.push(project);
}
