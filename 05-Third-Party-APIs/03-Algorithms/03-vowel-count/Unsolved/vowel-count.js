// Write code to return the the number of vowels in `str`

const vowelCount = function (str) {
  let vowelsTotal = 0;

  const lowerCaseStr = str.toLowerCase();

  for (let i = 0; i < lowerCaseStr.length; i++) {
    const letter = lowerCaseStr[i];
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      vowelsTotal += 1;
    } else {
      vowelsTotal;
    }
  }

  return vowelsTotal;
};
