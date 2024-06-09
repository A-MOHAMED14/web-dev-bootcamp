// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  const letters = str.split("");

  let reversedLettersArr = [];

  for (let i = letters.length - 1; i >= 0; i--) {
    reversedLettersArr.push(letters[i]);
  }

  const reversedWord = reversedLettersArr.join("");

  console.log(reversedWord);

  if (reversedWord === str) {
    return true;
  } else {
    return false;
  }
};
