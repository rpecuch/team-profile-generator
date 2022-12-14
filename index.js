//import needed packages
const fs = require('fs');
const inquirer = require('inquirer');
//import classes/subclasses
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//empty arrays to store generated data
const managers = [];
const engineers = [];
const interns = [];

//collects information about the manager role
generateManager = function() {
    inquirer
    //questions to ask
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
            message: 'Enter office number:',
            name: 'officeNumber',
        }
    ])
    .then((answers) => {
        //create new instance of Manager subclass
        manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        console.log("Manager added!");
        //create card for html
        generateManagerCard(manager);
        //ask about additional employees
        generateEmployees();
    })
    .catch((err) => console.log(err));
}

//runs when application starts
generateManager();

//allows user to choose the type of employee to add
generateEmployees = function() {
    inquirer
    //questions to ask
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
        //call next fxn based on type of employee selected
        if(type === 'Engineer') {
            generateEngineer();
        }
        else if(type === 'Intern') {
            generateIntern();
        }
        //create file if done building team
        else {
            createFile(managers, engineers, interns);
        }
    })
    .catch((err) => console.log(err));
}

//collects information about engineer role if selected
generateEngineer = function () {
    inquirer
    //questions to ask
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
        //create new instance of Engineer subclass
        engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
        console.log('Engineer added!');
        //create html card
        generateEngineerCard(engineer);
        //ask about additional employees
        generateEmployees();
    })
    .catch((err) => console.log(err));
}

//collects information about intern role if selected
generateIntern = function () {
    inquirer
    //questions to ask
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
        //create new instance of Intern subclass
        intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
        console.log('Intern added!');
        //create intern html card
        generateInternCard(intern);
        //ask about additional employees
        generateEmployees();
    })
    .catch((err) => console.log(err));
}

//creates html from manager object
generateManagerCard = function(manager) {
    const managerCard = `<div class="row justify-content-center">
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-info">
          <h5 class="card-title">${manager.name}</h5>
          <h6 class="card-subtitle mb-2 font-weight-bold"><i class="fa-solid fa-mug-saucer pr-1"></i>Manager</h6>
          <p class="card-text">ID: ${manager.id}</p>
          <p>Email: <a class= "text-light" href="mailto: ${manager.email}">${manager.email}</a></p>
          <p>Office number: ${manager.officeNumber}</p>
        </div>
      </div>\n`;
    //add to managers array
    managers.push(managerCard);
}

//creates html from engineer object
generateEngineerCard = function(engineer) {
    const engineerCard = `<div class="card" style="width: 18rem;">
    <div class="card-body bg-danger">
      <h5 class="card-title">${engineer.name}</h5>
      <h6 class="card-subtitle mb-2 font-weight-bold"><i class="fa-solid fa-computer pr-1"></i>Engineer</h6>
      <p class="card-text">ID: ${engineer.id}</p>
      <p>Email: <a class= "text-light" href="mailto: ${engineer.email}">${engineer.email}</a></p>
      <p>GitHub: <a class= "text-light" href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
  </div>\n`;
    //add to engineers array
    engineers.push(engineerCard);
}

//createst html from intern object
generateInternCard = function(intern) {
    const internCard = `<div class="card" style="width: 18rem;">
    <div class="card-body bg-success">
      <h5 class="card-title">${intern.name}</h5>
      <h6 class="card-subtitle mb-2 font-weight-bold"><i class="fa-solid fa-graduation-cap pr-1"></i>Intern</h6>
      <p class="card-text">ID: ${intern.id}</p>
      <p>Email: <a class= "text-light" href="mailto: ${intern.email}">${intern.email}</a></p>
      <p>School: ${intern.school}</p>
    </div>
  </div>\n`;
  //add to interns array
  interns.push(internCard);
}

//generates complete html document
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
        <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />
    <script src="https://kit.fontawesome.com/73525b73cb.js" crossorigin="anonymous"></script>
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
    //join different sections of html doc
    const document = [head, jumbo, managers, engineers.join(" "), interns.join(" "), end]
    return document.join(" ");
}

//writes generated html document to a file
createFile = function(managers, engineers, interns) {
    const fileContent = generateHtml(managers, engineers, interns);
    //save to file system
    fs.writeFile('./dist/index.html', fileContent, (error) => error ? console.error(error) : console.log("Team profile successfully generated!"));
}
