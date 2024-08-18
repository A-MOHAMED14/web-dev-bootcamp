const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];

    if (currentNum === element) return i;
  }
  return -1;
};

module.exports = { linearSearch };
