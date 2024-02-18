const fs = require('fs');
const path = require ('path');
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

//array of questions for user
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add a description of your project.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Provide information on the license for your project.',
            choices: ["MIT license", "Apache 2.0", "BSD 3", "None"]

        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Include details of how other developers can contribute to your project.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Include tests for your project.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Provide your GitHub username.'
        },
    ])
};

const generateBadge = (license) => {
    if (license !== "None") {
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;
    }
    return ``
}

const generateLink = (license) => {
    if (license !== "None") {
    return `- [license](#license)`;
    }
    return ``
}

const generateSection = (license) => {
    if (license !== "None") {
    return `## license\nThis project is licensed under the ${license} license.`;
    }
    return ``
}

//function to write a README file
const generateMarkdown = (answers) => {
  return `# ${answers.title}
  ${generateBadge(answers.license)}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  ${generateLink(answers.license)}
  - [Contributing](#contributing)
  - [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Tests
  ${answers.tests}

  ${generateSection(answers.license)}

  ## Contributions
  ${answers.contributing}

  ## Questions
  If you have any questions you can email me at ${answers.email} and if you want to see more of my work you can visit my github page at [${answers.github}](https://github.com/${answers.github})

  `
}
;

promptUser()
  .then((answers) => writeFileAsync('dist/README.md', generateMarkdown(answers)))
  .then(() => console.log('Your README is ready!'))
  .catch((err) => console.error(err));

