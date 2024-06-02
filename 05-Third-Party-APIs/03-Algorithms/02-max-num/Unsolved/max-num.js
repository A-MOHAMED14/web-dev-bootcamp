// Write code to return the largest number in the given array

const maxNum = function (arr) {
  let largestNum = 0;

  arr.forEach((number) => {
    if (number > largestNum) {
      largestNum = number;
    }
  });

  return largestNum;
};
