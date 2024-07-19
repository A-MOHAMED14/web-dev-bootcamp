// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function (arr1, arr2) {
  let intersectionArr = [];

  for (let i = 0; i < arr1.length; i++) {
    const num1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const num2 = arr2[j];

      if (num1 === num2) {
        intersectionArr.push(num2);
      }
    }
  }

  return intersectionArr;
};
