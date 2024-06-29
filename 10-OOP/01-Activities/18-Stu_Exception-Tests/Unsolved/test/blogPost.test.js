const BlogPost = require("../blogPost.js");

describe("BlogPost", () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  describe("authorName length", () => {
    it.only("Should throw an error if author name is lest than 2 characters", () => {
      const expected = "Author must be at least 2 characters long.";
      const newPost = new BlogPost("Ab");
      const actual = "Author must be at least 2 characters long.";

      expect(actual).toEqual(expected);
    });
  });
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
});
