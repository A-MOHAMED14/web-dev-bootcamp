// Import readFile and writeFile from the fs/promises module. The fs/promises module exports methods that return
// promises for common file system tasks.
const { readFile, writeFile } = require("fs/promises");
const BlogPost = require("./lib/blogPost");
const { create } = require("domain");

// TODO: First, call readFile to asynchronously read the data from data/post.json.
readFile("./data/post.json", "utf-8")
  .then((json) => {
    console.log("Received data from post.json");
    return json;
  })
  // TODO: parse the json string and assign the resulting object to a variable
  .then((data) => {
    const postData = JSON.parse(data);
    return postData;
  })
  // TODO: Use the BlogPost class to create a new BlogPost object and use its `render()` method to return an html string.

  .then((postData) => {
    const { title, text, author, createdOn } = postData;
    const newPost = new BlogPost(title, text, author, createdOn);
    const htmlString = newPost.render();
    return htmlString;
  })
  // TODO: Write the html to file
  .then((htmlString) => {
    writeFile("blogPost.html", htmlString);
  })
  // TODO: print a message in the console only after the html file is written.
  .then(() => {
    console.log("File written successfully");
  });
