export function updateTitleUtil(obj, newTitle) {
  return {
    ...obj,
    title: newTitle,
  };
}

export function updateDescUtil(obj, newDesc) {
  return {
    ...obj,
    desc: newDesc,
  };
}
