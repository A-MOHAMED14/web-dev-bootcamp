// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function (num) {
  const sqrt = num ** 0.5;
  const fraction = sqrt - Math.floor(num ** 0.5);

  if (num >= 0 && fraction === 0) {
    return true;
  }

  return false;
};
