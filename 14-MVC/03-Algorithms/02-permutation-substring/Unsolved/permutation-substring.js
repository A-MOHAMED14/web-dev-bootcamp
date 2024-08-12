// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

const permutationSubstring = function (str, sub) {
  const charCount = {};

  for (let i = 0; i < sub.length; i++) {
    const char = sub[i];

    if (char in charCount) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in charCount) {
      charCount[char] -= 1;
    }
  }

  for (const key in charCount) {
    if (charCount[key] > 0) {
      return false;
    }
  }

  return true;
};
