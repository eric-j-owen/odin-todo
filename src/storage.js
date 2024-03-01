export const projects = [];

export function getAllProjects() {
  return projects;
}

export function getProjectByIndex(index) {
  return projects[index];
}

export function getProjectByTitle(title) {
  return projects.find((project) => project.title.includes(title));
}

export function addProjectToStorage(project) {
  projects.push(project);
}
