const Validate = require("../validate.js");

describe("Validate", () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  describe("invalidLength", () => {
    it("Should return false for password less than 8 characters", () => {
      const expected = false;
      const passwordCheck = new Validate();
      const actual = passwordCheck.isPassword("Hello");

      expect(actual).toEqual(expected);
    });
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  describe("upperCase", () => {
    it("Should return false for passwords that does not contain at least 1 uppercase", () => {
      const expected = false;
      const passwordCheck = new Validate();
      const actual = passwordCheck.isPassword("hello");

      expect(actual).toEqual(expected);
    });
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  describe("lowerCase", () => {
    it("Should return false for passwords that does not contain at least 1 lowercase", () => {
      const expected = false;
      const passwordCheck = new Validate();
      const actual = passwordCheck.isPassword("HELLO");

      expect(actual).toEqual(expected);
    });
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  describe("number", () => {
    it("should return false for passwords that does not contain atleast one number", () => {
      const expected = false;
      const passwordCheck = new Validate();
      const actual = passwordCheck.isPassword("helloWorld");

      expect(actual).toEqual(expected);
    });
  });
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
  describe("correct", () => {
    it.only("Should return true if password contains atleast one uppercase, lowercase, number and is at least 8 characters long", () => {
      const expected = true;
      const passwordCheck = new Validate();
      const actual = passwordCheck.isPassword("helloWorld1");

      expect(actual).toEqual(expected);
    });
  });
});
