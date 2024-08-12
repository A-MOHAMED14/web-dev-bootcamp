// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

const concertFlyer = function (magazine, flyer) {
  const magazineArr = magazine.split(" ");
  const flyerArr = flyer.split(" ");

  const wordCount = {};

  for (let i = 0; i < flyerArr.length; i++) {
    const word = flyerArr[i];

    if (word in wordCount) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  for (let i = 0; i < magazineArr.length; i++) {
    const word = magazineArr[i];

    if (word in wordCount) {
      wordCount[word]--;
    }
  }

  for (const key in wordCount) {
    if (wordCount[key] > 0) {
      return false;
    }
  }

  return true;
};
