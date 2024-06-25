const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition.
const doubledArray = originalArray.map(function (data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});

console.log(doubledArray);
console.log(originalArray);

// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
const tripledArray = originalArray.map((data) => data * 3);
// A map loops through the original array, and creates a new array with same length as the originalArray, but with each array item multiplied by 3
// [3, 9, 6, 15, 30]

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
const oddOrEven = originalArray.map((num) => {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
});

// A map loops through the original array, and creates a new array with same length as the originalArray
// each array item goes through a check to determine whether it is even or odd
// if even, the string 'even' will be returned in the new array in place of the number, vice versa for odd numbers
// ["odd", "odd", "even", "odd", "even"]
