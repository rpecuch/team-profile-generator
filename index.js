const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
        },
        {
            type: 'list',
            message: 'Which team member would you like to add?',
            name: 'employeeType',
            choices: ['Engineer', 'Intern', 'Done building team'],
        },
        //here need to have a way to distinguish based on what user selects but here are just the questions for now
        //if engineer selected
        {
            type: 'input',
            message: 'Enter engineer name:',
            name: 'name',
        },
        {
            type: 'input',
            message: "Enter engineer's employee ID:",
            name: 'id',
        },
        {
            type: 'input',
            message: "Enter engineer's email address:",
            name: 'email',
        },
        {
            type: 'input',
            messsage: "Enter engineer's github username:",
            name: 'github',
        },
        //now take back to menu to select team member to add
        //if intern selected
        {
            type: 'input',
            message: 'Enter intern name:',
            name: 'name',
        },
        {
            type: 'input',
            message: "Enter intern's employee ID:",
            name: 'id',
        },
        {
            type: 'input',
            message: "Enter intern's email address:",
            name: 'email',
        },
        {
            type: 'input',
            message: "Enter intern's school:",
            name: 'school',
        }
        //now take back to menu to select team member to add
        //html generated when team finished building
    ])
    //send answers to function where objects are created
    .then()
    .catch(error => console.log(error));

//take values from answers object and put into the classes you made
newFunction = function(answers) {
    manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);

}

//function to generate html
generateHtml = function() {
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
    const managerCard = `<div class="row justify-content-center">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
          <p class="card-text">ID: ${manager.id}</p>
          <p>Email: ${manager.email}</p>
          <p>Office number: ${manager.officeNumber}</p>
        </div>
      </div>\n`
    //cards for the employees
    const end = `</div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
  </body>
</html>`
    //also need to return employee cards
    return(head, jumbo, managerCard, end);
}
