export function findObjIndexUtil(obj, storage) {
  return storage.findIndex((item) => item.id === obj.id);
}

export function updateTitleUtil(obj, newTitle, storage) {
  const updatedObj = {
    ...obj,
    title: newTitle,
  };

  if (storage !== undefined) {
    const index = findObjIndexUtil(updatedObj, storage);

    if (index !== -1) {
      storage[index] = updatedObj;
    } else {
      throw new Error('Not found');
    }
  }

  return updatedObj;
}

export function updateDescUtil(obj, newDesc) {
  return {
    ...obj,
    desc: newDesc,
  };
}
