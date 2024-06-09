// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
};
