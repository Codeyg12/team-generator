const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const inquirer = require("inquirer");
const fs = require("fs");
const generateNewCard = require("./src/template");

let teamArray = [];

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the team managers name?",
  },
  {
    type: "number",
    name: "managerId",
    message: "What is the team managers id",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the team managers email?",
  },
  {
    type: "number",
    name: "officeNumber",
    message: "What is the office number?",
  },
  {
    type: "list",
    name: "nextEmployee",
    message: "Who else would you like to add you your team?",
    choices: ["Engineer", "Intern", "No more team members are needed."],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the engineers name?",
  },
  {
    type: "number",
    name: "engineerId",
    message: "What is the engineers id",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is the engineers email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineers Github username?",
  },
  {
    type: "list",
    name: "nextEmployee",
    message: "Who else would you like to add you your team?",
    choices: ["Engineer", "Intern", "No more team members are needed."],
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is the interns name?",
  },
  {
    type: "number",
    name: "internId",
    message: "What is the interns id",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is the interns email?",
  },
  {
    type: "number",
    name: "currentSchool",
    message: "What school is the intern in?",
  },
  {
    type: "list",
    name: "nextEmployee",
    message: "Who else would you like to add you your team?",
    choices: ["Engineer", "Intern", "No more team members are needed."],
  },
];

function startBuilding() {
  inquirer.prompt(managerQuestions).then((data) => {
    const manager = new Manager(
      data.managerName,
      data.managerId,
      data.managerEmail,
      data.officeNumber
    );
    teamArray.push(manager);
    switch (data.nextEmployee) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;

      default:
        httmlllBuilder();
    }
  });
}

function addEngineer() {
  inquirer.prompt(engineerQuestions).then((data) => {
    const engineer = new Engineer(
      data.engineerName,
      data.engineerId,
      data.engineerEmail,
      data.github
    );
    teamArray.push(engineer);
    switch (data.nextEmployee) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;

      default:
        httmlllBuilder();
    }
  });
}

function addIntern() {
  inquirer(internQuestions).then((data) => {
    const intern = new Intern(
      data.internName,
      data.internId,
      data.internEmail,
      data.currentSchool
    );
    teamArray.push(intern);
    switch (data.nextEmployee) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;

      default:
        httmlllBuilder();
    }
  });
}

startBuilding();
