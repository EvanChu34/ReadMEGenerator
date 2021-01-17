// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown.js");


const questions = [
    {
        type:"input",
        name: "title",
        message: "What is the title of the project?",
    },
    {
        type:"input",
        name: "description",
        message: "Please give a short description of the project", 
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
        type:"input",
        name: "username",
        message: "Enter your GitHub username", 
    },
    {
        type:"input",
        name: "email",
        message: "Please enter your email: ", 
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
        const userInfo = inquirer.prompt(questions)
        console.log("", userInfo);
        
        const markdown = generate(userInfo)
        console.log(markdown);

        await writeAsync('exampleREADME.md', markdown)
    }
    catch(error){
        console.log(error)
    }
}


init();
