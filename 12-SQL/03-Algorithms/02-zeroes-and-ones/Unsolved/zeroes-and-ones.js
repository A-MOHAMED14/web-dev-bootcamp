// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function (str) {
  const charArr = str.split("");

  let zeroes = 0;
  let ones = 0;

  charArr.forEach((char) => {
    if (char === "0") {
      zeroes++;
    } else {
      ones++;
    }
  });

  if (zeroes === ones) return true;
  else return false;
};
