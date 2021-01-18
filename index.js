// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown.js");


const questions = [
    {
        type:"input",
        name: "username",
        message: "Enter your GitHub username",
        validate: function(answer){
            if (answer.length <1){
                return console.log("enter a valid GitHub username")
            }
            return true;
        } 
    },
       {
        type:"input",
        name: "repo",
        message: "What is the Repo name?",
        validate: function(answer){
            if (answer.length <1){
                return console.log("enter a valid GitHub repo")
            }
            return true;
        } 
    },
    
    {
        type:"input",
        name: "title",
        message: "What is the title of the project?",
        validate: function(answer){
            if (answer.length <1){
                return console.log("enter title")
            }
            return true;
        } 
    },
    {
        type:"input",
        name: "description",
        message: "Please give a short description of the project",
        validate: function(answer){
            if (answer.length <1){
                return console.log("Please give a short description")
            }
            return true;
        }  
    },
    {
        type:"input",
        name: "install" ,
        message: "Please describe the install process (if any)", 
    },
    {
        type:"input",
        name: "use",
        message: "What is the use of the app?", 
    },
    {
        type:"input",
        name: "contribute",
        message: "Name the people who are contributing", 
    },
    {
        type:"input",
        name: "test",
        message: "Is there tests to be done?", 
    },
    {
        type:"input",
        name: "questions",
        message: "Where can I get ask questions?", 
    },

    {
        type:"list",
        name: "license",
        message: "Choose a license",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if (err){
            return console.log(err);
        }
        console.log("Success!")
    });
}
const writeAsync = util.promisify(writeToFile);


// TODO: Create a function to initialize app
async function init() {
    try{
        const userResponses = inquirer.prompt(questions)
        console.log("", userResponses);
        
        const userInfo = await ;

        const markdown = generate(userResponses)
        console.log(markdown);

        await writeAsync('exampleREADME.md', markdown)
    }
    catch(error){
        console.log(error)
    }
}


init();
