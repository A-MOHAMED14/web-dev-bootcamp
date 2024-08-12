// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

const commonElement = function (arrA, arrB) {
  for (let i = 0; i < arrA.length; i++) {
    const numA = arrA[i];
    for (let j = 0; j < arrB.length; j++) {
      const numB = arrB[j];

      if (numA === numB) return numA;
    }
  }
};
