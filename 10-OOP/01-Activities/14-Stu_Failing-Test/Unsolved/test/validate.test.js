// TODO: Import the Validate class.
const Validate = require("../validate.js");

// TODO: Describe a testing suite for checking the functionality of the Validate class.
describe("Validate", () => {
  describe("isPassword", () => {
    it("Should return false for an empty password", () => {
      const expected = false;
      const passwordCheck = new Validate();
      const actual = passwordCheck.isPassword("");
      expect(actual).toEqual(expected);
    });
  });
});

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
