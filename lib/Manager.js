const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        //overrides role to manager
    }
}

module.exports = Manager