
// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  
  let tocDraft = `## Table of Contents`;
  
  if(userResponses.install !== ''){tocDraft += `
  * [Installation](*installation)`};

  if(userResponses.install !== ''){tocDraft += `
  * [Usage](#usage)`};

  if(userResponses.install !== ''){tocDraft += `
  * [Contributions](#contributions)`};

  if(userResponses.install !== ''){tocDraft += `
  * [Test](#test)`};
  

  
  let readmeDraft = 
  `# ${userResponses.title}

  ## Description

  *Here's whats going on*
  ${userResponses.description} 
  `

  readmeDraft += tocDraft;

  readmeDraft += `
  * [License](*license)`;

  if (userResponses.install !== ''){
    readmeDraft +=
    `
    ## Installation
    *There are steps required to install this project:*
    ${userResponses.install}
    `
  };

  if (userResponses.use !== ''){
    readmeDraft +=
    `
    ## Usage
    💻*Here are some instructions*
    ${userResponses.use}`
  };
  
  if (userResponses.contrubute !== ''){ 
    `
    ## Contributions
    *Want to constribute? Here's how!*
    ${userResponses.contrubute}`
  };

  if (userResponses.test !== ''){
    readmeDraft +=
    `
    ## Test
    *Here are any tests for the application (if neccsary)*
    ${userResponses.test}`
  };
    
  readmeDraft +=
  `
  ## License
  ${userResponses.license}
  `;

  let devDraft =
  `
  ---
  ## Questions
  ![Developer Pic](${userInfo.avatar_url})
  For Question please contact me at:
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  if (userInfo.email !== null){
    readmeDraft +=
    `
    Email: ${userInfo.email}
    `
  };

  readmeDraft +=devDraft;

  return readmeDraft;

}

module.exports = generateMarkdown;
