const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, school) {
        super(name, id, email)
        this.school = school
    }

    getSchool() {

    }

    getRole() {
        //overrides to Intern
    }
}

module.exports = Intern