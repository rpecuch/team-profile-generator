//all employee types fall under this class
class Employee {
    //fxn to create instance of Employee class
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //methods
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

module.exports = Employee;