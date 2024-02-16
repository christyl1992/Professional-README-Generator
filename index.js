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
            type: 'input',
            name: 'licence',
            message: 'Provide information on the licence for your project.'
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
            name: 'questions',
            message: 'Add any questions.'
        },
    ])
};

