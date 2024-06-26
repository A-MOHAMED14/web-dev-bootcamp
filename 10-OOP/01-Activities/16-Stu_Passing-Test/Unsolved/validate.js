class Validate {}

Validate.prototype.isPassword = (password) => {
  if (password.length < 8) {
    return false;
  }

  const pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$");

  if (pattern.test(password)) {
    return true;
  }

  return false;

  // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
  // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number. It should return true if it does, and false if not.
};

module.exports = Validate;
