// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
  const wordsArr = str.split(" ");
  let strArr = [];

  for (let i = 0; i < wordsArr.length; i++) {
    strArr.push(
      wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1, wordsArr[i].length)
    );
  }
  const capitalizedStr = strArr.join(" ");

  return capitalizedStr;
};
