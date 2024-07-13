const multiplyInto20 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const firstNum = arr[i];

    for (let j = 1; j < arr.length; j++) {
      const secondNum = arr[j];

      if (firstNum * secondNum === 20) {
        return true;
      }
    }
  }

  return false;
};
