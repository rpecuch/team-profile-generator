const Employee = require('./Employee');
//subclass of Employee class
class Manager extends Employee {
    //fxn to create new instance of Manager
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //method
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;