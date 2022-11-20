// Included are packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { log } = require("util");

let renderLicenseBadge= ("badge")
let renderLicenseLink=("license")

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your web application?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your web application",
  },
  {
    type: "input",
    name: "motivation",
    message: "Why was it built, problem it solve, what was learned?",
  },
  { type: "input", name: "credits", message: "Any creditors?" },
  { type: "input", name: "installation", message: "How do you install it?" },
  { type: "input", name: "usage", message: "What usage do you have" },
  {
    type: "input",
    name: "license",
    message: "What license do you want to include",
  },
  { type: "input", 
    name: "badge", 
    message: "Do you have badges to include" 
  },
  {
    type: "input",
    name: "features",
    message: "Does your web application have a lot of features?",
  },
  {
    type: "input",
    name: "contribute",
    message: "Do you want to add how to contribute",
  },
  {
    type: "input",
    name: "test",
    message: "Do you have any tests?",
  },
  {
    type: "input",
    name: "questions",
    message: "Do you have any questions?",
  },
];

// This function writes README file and initiates app

function init() {
  inquirer
    .prompt(questions)
    .then((answersResponse) => {
      console.log(answersResponse.title);
      let generatedString = generateMarkdown(answersResponse);
      console.log(generatedString);
      fs.writeFileSync("./Output/README.md", generatedString, function (err) {
        if (err) console.log(err);
        console.log("readme generator successful");
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
