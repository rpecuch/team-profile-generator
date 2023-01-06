const Employee = require('./Employee');
//subclass of Employee class
class Intern extends Employee {
    //fxn to create new instance of Intern
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    //methods
    getSchool(){
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;