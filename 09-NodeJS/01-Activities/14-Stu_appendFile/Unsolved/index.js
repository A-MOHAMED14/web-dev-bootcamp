// TODO: What are we importing?
// The fs module to allow interaction with the file system
const fs = require("fs");

// TODO: Add comments to explain each of the three arguments of appendFile()
// first parameter is the file path to which text will be appened to
// second parameter is the data which will be the text that will be appened to the log.txt file
// third parameter is a callback function

fs.appendFile("log.txt", `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // The ternary operator is a simplified conditional operator like if / else.
  // It takes a condition which will be evaluated, followed by a ?
  // Then an expression which will be executed if truthy, followed by a :
  // Then an expression which will be executed if falsy

  err ? console.error(err) : console.log("Commit logged!")
);
