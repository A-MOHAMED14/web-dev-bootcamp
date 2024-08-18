// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
  console.log(str);

  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    const currentChar = str[i];
    reversedStr = reversedStr + currentChar;
  }

  return reversedStr;
};
