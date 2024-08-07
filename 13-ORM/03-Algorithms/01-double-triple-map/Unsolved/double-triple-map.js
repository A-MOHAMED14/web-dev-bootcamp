// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element

var doubleTripleMap = function (arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];

    if (currentNum % 2 !== 0) {
      newArr.push(currentNum * 3);
    } else {
      newArr.push(currentNum * 2);
    }
  }

  return newArr;
};
