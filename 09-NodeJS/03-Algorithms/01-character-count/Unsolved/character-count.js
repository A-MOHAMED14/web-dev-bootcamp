// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function (str) {
  let characterCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char in characterCount) {
      characterCount[char]++;
    } else {
      characterCount[char] = 1;
    }
  }

  return characterCount;
};
