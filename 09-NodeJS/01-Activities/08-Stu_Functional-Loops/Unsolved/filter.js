const originalArray = [1, 3, 2, 5, 10];

// evenNumbers is equal to a new array of even numbers returned by filter(). filter() will use an anonymous function as a condition.
const evenNumbers = originalArray.filter(function (data) {
  // The anonymous function uses a conditional to check if a number is divisible by 2.
  if (data % 2 === 0) {
    // If a number is even (divisible by 2), the condition returns true.
    return true;
  }
});

console.log(evenNumbers);
console.log(originalArray);

const isPrime = (num) => {
  // Set up a loop the starts with 2 and continues to increment i as long as i is less than 2
  for (let i = 2; i < num; i++) {
    // isPrime will return false if num is divisible by any number other than 1 or num.
    if (num % i === 0) return false;
  }
  // Otherwise, isPrime will return num, unless num == 1.
  return num !== 1;
};

// TODO: Describe how filter is working in this example. What will the value of primeArray be?
const primeArray = originalArray.filter(isPrime);
// primeArray is equal to a new array returned by filter().
// filter() invokes the isPrime function which checks if the numbers in the originalArray is a prime number
// if a number is prime, it will return that number to the new array, primeArray
// [3,2,5]

// TODO: Describe how filter is working in this example. What will the value of moreThan5Array be?
const moreThan5Array = originalArray.filter((num) => num > 5);
// moreThan5Array is equal to a new array returned by filter().
// a filter runs through the originalArray.
// if a number is greater than 5, it will return that number to the new array, moreThan5Array
// [10]
