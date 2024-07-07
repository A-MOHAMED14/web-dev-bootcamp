// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function (strA, strB) {
  const stringA = strA.toLowerCase();
  const stringB = strB.toLowerCase();

  if (stringA.length === stringB.length) {
    const arrA = stringA.split("");
    const arrB = stringB.split("");

    const str1 = arrA.sort().join("");
    const str2 = arrB.sort().join("");

    if (str1 === str2) {
      return true;
    }
  }

  return false;
};
