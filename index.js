const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter team manager name:',
            name: 'name',
        },
        {
            type: 'input',
            message: "Enter team manager's employee ID:",
            name: 'id',
        },
        {
            type: 'input',
            message: "Enter team manager's email address:",
            name: 'email',
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

    //take values from answers object and put into the classes you made
    
    //function to generate html
