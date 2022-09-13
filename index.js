const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const managers = [];
const engineers = [];
const interns = [];
const fs = require('fs');
//need to add email links

generateManager = function() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter team manager name:',
            name: 'managerName',
        },
        {
            type: 'input',
            message: "Enter team manager's employee ID:",
            name: 'managerId',
        },
        {
            type: 'input',
            message: "Enter team manager's email address:",
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'Enter office phone number:',
            name: 'officeNumber',
        }
    ])
    .then((answers) => {
        manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        console.log("Manager added!");
        generateManagerCard(manager);
        generateEmployees();
    })
    .catch((err) => console.log(err));
}

generateManager();

generateEmployees = function() {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'Which team member would you like to add?',
            name: 'employeeType',
            choices: ['Engineer', 'Intern', 'Done building team'],
        },
    ])
    .then((answer) =>{
        const type = answer.employeeType;
        if(type === 'Engineer') {
            generateEngineer();
        }
        else if(type === 'Intern') {
            generateIntern();
        }
        else {
            createFile(managers, engineers, interns);
        }
    })
    .catch((err) => console.log(err));
}

generateEngineer = function () {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter engineer name:',
            name: 'engineerName',
        },
        {
            type: 'input',
            message: "Enter engineer's employee ID:",
            name: 'engineerId',
        },
        {
            type: 'input',
            message: "Enter engineer's email address:",
            name: 'engineerEmail',
        },
        {
            type: 'input',
            messsage: "Enter engineer's github username:",
            name: 'github',
        }
    ])
    .then((answers) => {
        engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
        console.log('Engineer added!');
        generateEngineerCard(engineer);
        generateEmployees();
    })
    .catch((err) => console.log(err));
}

generateIntern = function () {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter intern name:',
            name: 'internName',
        },
        {
            type: 'input',
            message: "Enter intern's employee ID:",
            name: 'internId',
        },
        {
            type: 'input',
            message: "Enter intern's email address:",
            name: 'internEmail',
        },
        {
            type: 'input',
            message: "Enter intern's school:",
            name: 'school',
        }
    ])
    .then( (answers) => {
        intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
        console.log('Intern added!');
        generateInternCard(intern);
        generateEmployees();
    })
    .catch((err) => console.log(err));
}

//create html from each object created
generateManagerCard = function(manager) {
    const managerCard = `<div class="row justify-content-center">
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-info">
          <h5 class="card-title">${manager.name}</h5>
          <h6 class="card-subtitle mb-2 font-weight-bold">Manager</h6>
          <p class="card-text">ID: ${manager.id}</p>
          <p>Email: <a class= "text-light" href="mailto: ${manager.email}">${manager.email}</a></p>
          <p>Office number: ${manager.officeNumber}</p>
        </div>
      </div>\n`;
    managers.push(managerCard);
}

generateEngineerCard = function(engineer) {
    const engineerCard = `<div class="card" style="width: 18rem;">
    <div class="card-body bg-danger">
      <h5 class="card-title">${engineer.name}</h5>
      <h6 class="card-subtitle mb-2 font-weight-bold">Engineer</h6>
      <p class="card-text">ID: ${engineer.id}</p>
      <p>Email: <a class= "text-light" href="mailto: ${engineer.email}">${engineer.email}</a></p>
      <p>GitHub: <a class= "text-light" href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
  </div>\n`;
    engineers.push(engineerCard);
}

generateInternCard = function(intern) {
    const internCard = `<div class="card" style="width: 18rem;">
    <div class="card-body bg-success">
      <h5 class="card-title">${intern.name}</h5>
      <h6 class="card-subtitle mb-2 font-weight-bold">Intern</h6>
      <p class="card-text">ID: ${intern.id}</p>
      <p>Email: <a class= "text-light" href="mailto: ${intern.email}">${intern.email}</a></p>
      <p>School: ${intern.school}</p>
    </div>
  </div>\n`;
  interns.push(internCard);
}

//function to generate html
generateHtml = function(managers, engineers, interns) {
    const head = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="Description" content="Enter your description here" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link rel="stylesheet" href="assets/css/style.css" />
        <title>My Team</title>
      </head>\n`;
    
    const jumbo = `<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 text-center">My Team</h1>
        </div>
      </div>\n`

    const end = `</div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
  </body>
</html>`

    const document = [head, jumbo, managers, engineers.join(" "), interns.join(" "), end]
    return document.join(" ");
}

//now write file
createFile = function(managers, engineers, interns) {
    const fileContent = generateHtml(managers, engineers, interns);
    fs.writeFile('./dist/index.html', fileContent, (error) => error ? console.error(error) : console.log("Success!"));
}
