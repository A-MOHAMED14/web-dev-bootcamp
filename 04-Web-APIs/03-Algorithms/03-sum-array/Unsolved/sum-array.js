// Write code to add all the numbers in `arr` and return the total

const sumArray = function (arr) {
  let total = 0;

  arr.forEach((number) => {
    total += number;
  });

  return total;
};
