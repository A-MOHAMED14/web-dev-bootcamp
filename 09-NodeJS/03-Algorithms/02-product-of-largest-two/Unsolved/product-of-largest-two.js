// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
  const ascArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < ascArr.length; i++) {
    const largest = ascArr[ascArr.length - 1];
    const secondLargest = ascArr[ascArr.length - 2];

    const product = largest * secondLargest;
    console.log(product);
    return product;
  }
};
