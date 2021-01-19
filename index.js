// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const api = require("./utils/api.js");
const generate = require("./utils/generateMarkdown.js");

const questions = [
    {
        type:"input",
        name: "username",
        message: "Enter your GitHub username",
    },
    {
        type:"input",
        name: "repo",
        message: "What is the Repo name?",
    },
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
        message: "Where can I ask questions?", 
    },
    {
        type:"input",
        name: "license",
        message: "Choose a license",
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
        const userResponses = await inquirer.prompt(questions)
        console.log("Your Responses: ", userResponses);
        console.log("Responses have been logged!")
        
        const userInfo = await api.getUserInfo(userResponses);
        console.log("Github info: ", userInfo)

        const markdown = generate(userResponses, userInfo)
        console.log(markdown);

        await writeAsync('README.md', markdown)
    }
    catch(error){
        console.log(error)
    }
};

init();
