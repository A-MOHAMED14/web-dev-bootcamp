class Validate {}

Validate.prototype.isPassword = (password) => {
  if (password.length < 8) {
    return false;
  }

  const characters = password.split("");

  for (let i = 0; i < characters.length; i++) {
    const upperCase = characters.find(
      (character) => character[i] === character[i].toUpperCase()
    );

    const lowerCase = characters.find(
      (character) => character[i] === character[i].toLowerCase()
    );

    const number = characters.find(
      (character) => typeof parseInt(character[i]) === "number"
    );

    if (upperCase && lowerCase && number) {
      console.log(upperCase, lowerCase, number, "<======");
      console.log(typeof upperCase, typeof lowerCase, typeof number, "<-----");
      return true;
    }
  }

  return false;

  // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
  // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number. It should return true if it does, and false if not.
};

module.exports = Validate;
