// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
  const combinedArr = [...arr1, ...arr2];

  const sortedArr = combinedArr.sort((a, b) => a - b);

  return sortedArr;
};
