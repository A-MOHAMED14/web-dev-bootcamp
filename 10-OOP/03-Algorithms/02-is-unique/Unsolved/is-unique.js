// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    const firstNum = arr[0];
    const currentNum = arr[i + 1];

    if (firstNum === currentNum) {
      return false;
    }
  }

  return true;
};
