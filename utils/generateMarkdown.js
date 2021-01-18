
// TODO: Create a function to generate markdown for README
function generateMarkdown(userInfo) {
  
  let tocDraft = `## Table of Contents`;
  
  if(userInfo.install !== ''){tocDraft += `
  * [Installation](*installation)`};

  if(userInfo.install !== ''){tocDraft += `
  * [Usage](#usage)`};

  if(userInfo.install !== ''){tocDraft += `
  * [Contributions](#contributions)`};

  if(userInfo.install !== ''){tocDraft += `
  * [Test](#test)`};
  

  let readmeDraft = 
  
  `# ${userInfo.title}


  ## Description
  *Here's whats going on*
  ${userInfo.description} 
  `

  readmeDraft += tocDraft;

  readmeDraft += `* [License](*license)`;

  if (userInfo.install !== ''){
    readmeDraft +=
    `
    ## Installation
    *There are steps required to install this project:*
    ${userInfo.install}
    `
  };




  if (userInfo.use !== ''){
    readmeDraft +=
    `
    ## Usage
    💻*Here are some instructions*
    ${userInfo.use}
    `
  };
  
  if(userInfo.contrubute !== ''){ 
    `
    ## Contributions
    *want to constribute here how!*
    ${userInfo.contrubute}
    `
  };

  if(userInfo.test !== ''){
    readmeDraft +=
    `
    ## Test

    *Here are any tests for the application (if neccsary)*
    ✏️
    ${userInfo.test}
    `
  };
    
  readmeDraft +=
  `
  ## License
  
  ${userInfo.test}

  `

  let devDraft = 

  `
  ---
  ## Questions
  ![Developer Pic]($()
  
  ${userInfo.questions}

`;
}

module.exports = generateMarkdown;
