const Employee = require('./Employee');
//subclass of Employee class
class Engineer extends Employee {
    //fxn to create new instance of Engineer
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    //methods
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;