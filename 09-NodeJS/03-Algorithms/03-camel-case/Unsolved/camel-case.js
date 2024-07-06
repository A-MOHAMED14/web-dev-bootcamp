// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function (str) {
  const wordsArr = str.split(" ");

  let camelCaseStr = "";

  for (let i = 0; i < wordsArr.length; i++) {
    const currentWord = wordsArr[i];

    if (i === 0) {
      const firstWord = currentWord.toLowerCase();
      camelCaseStr += firstWord;
    } else {
      const capFirstLetter =
        currentWord.charAt(0).toUpperCase() +
        currentWord.slice(1).toLowerCase();

      camelCaseStr += capFirstLetter;
    }
  }

  return camelCaseStr;
};
