const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, github) {
        super(name, id, email)
        this.github = github
    }

    getGithub() {

    }

    getRole() {
        //overrides role to engineer
    }
}

module.exports = Engineer