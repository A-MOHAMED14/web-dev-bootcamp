const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "username",
    },

    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "languages",
      choices: ["HTML", "CSS", "JavaScript", "MySQL"],
    },

    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "method",
      choices: ["phone", "email", "letter"],
    },
  ])
  .then((response) => {
    fs.writeFile("responses.json", JSON.stringify(response), (err) => {
      err
        ? console.error(err)
        : console.log('File has been written successfully"');
    });
  });
