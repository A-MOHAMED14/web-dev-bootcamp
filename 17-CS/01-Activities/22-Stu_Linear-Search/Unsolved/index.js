const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
// const linearSearch = (array, element) => {
//   for (let i = 0; i < array.length; i++) {
//     const currentNum = array[i];

//     if (currentNum === element) return i;
//   }
//   return -1;
// };

const linearSearchMultipleElements = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    let matchedIndexes = [];
    const currentNum = array[i];

    if (currentNum === element) {
      matchedIndexes.push[i];
    }
  }

  if (matchedIndexes.length === 0) {
    return "No matches found";
  } else {
    return matchedIndexes;
  }
};

module.exports = { linearSearch, linearSearchMultipleElements };
