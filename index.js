// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path =require('path');
const generateMarkdown = (generateMarkdown.js)

// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt([
    {type: "input",
name: "What was your motivation?",
message: "Why was it built, problem it solve, what was learned?",

}, 
{type: "input",
    name: "Table of Contents",
    message: "Include a table of Contents",
},
{type: "input",
    name: "Installation",
    message: "How do you install it?",
},
{type: "input",
    name: "Usage",
    message: "Include usage?",
},
{type: "input",
    name: "Credits",
    message: "Add creditors?",
},
{type: "input",
    name: "License",
    message: "What license do you want to include",
},
{type: "input",
    name: "Badges",
    message: "Do you have badges to include",
},
{type: "input",
    name: "Features",
    message: "Does your web application have a lot of features?",
},
{type: "input",
    name: "How to Contribute",
    message: "Do you want to add how to contribute",
},
]

)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

