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

//function to write a README file
const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <title>Document</title>
</head>
<body>
  <div class="p-5 mb-4 bg-body-tertiary rounded-3">
  <div class="container-fluid py-5">
    <h1 class="display-5 fw-bold">${answers.title}</h1>
    <p class="col-md-8 fs-4">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

promptUser()
  .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));

