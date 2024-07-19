// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function (arr) {
  const sqrArr = arr.map((num) => num ** 2);

  const sortedArr = sqrArr.sort((a, b) => a - b);

  return sortedArr;
};
