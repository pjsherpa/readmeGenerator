// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the name of this project?",
  },

  {
    name: "project",
    type: "input",
    message: "Why did you build this project?",
  },
  {
    name: "Installation",
    type: "input",
    message: "What was your Installation?",
    default: "npm i",
  },

  {
    name: "Usage",
    type: "input",
    message: "Usage:",
  },
  {
    name: "License",
    type: "checkbox",
    message: "Which License is it using?",
    choices: ["bsd", "mit", "apache"], //apache/bsd/MIT
  },
  {
    name: "Contributing",
    type: "input",
    message: "Who was the contributer?",
  },
  {
    name: "email",
    type: "input",
    message: "What is your email address?",
  },
  {
    name: "Github",
    type: "input",
    message: "Please provide github username?",
  },
  {
    name: "Test",
    type: "Input",
    message: "Please provide how you will run your test?",
    default: "npm test",
  },
];

// TODO: Create a function to write README file // purpose of this function

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Success! A readme file has now been created.");
    }
  });
}

// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    writeToFile("readme.md", generateMarkdown(data));
  });
}

// // Function call to initialize app
init();
