// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path =require('path');
const generateMarkdown = (generateMarkdown.js)
const userName = "Rhondoid"

// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt([
    {type: "input",
name: "Title",
message: "What is the name of your web application?",

},
{type: "input",
name: "Description?",
message: "Describe your web application",

},
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
function generateMarkdown(ReadmeMd, questions) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    then.((inquirerResponse, questions) => {
        console.log("README in progress");
        fs.writeFileSync("readme-md", inquirerResponse, questions);
    })
    .catch((err) => {
        console.log(questions.data);
    })
}

// Function call to initialize app
init();
const rhondoid = questions.rhondoid
axios.get('https://api.github.com/users/${Rhondoid}')
then(questions => {
    console.log(questions.data)
});

