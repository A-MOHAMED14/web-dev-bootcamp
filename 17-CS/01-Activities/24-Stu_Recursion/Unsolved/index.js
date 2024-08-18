// TODO: Add a comment describing what the `position` parameter means for this function.
// The value we are trying to find in the Fibonacci sequence
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  // If the value in the sequence is less than 2, stop the recursive call and return the position value,
  // This is called a base condition.
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  // The current value at this position is evaluated by adding the sum of the values at the two preceding positions of the sequence
  // Here, the function calls it self repeatedly while the base condition is false, this is called a recursive call
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
// The value in the 9th position in the Fibonaci sequence
console.log(fibonacci(9));
