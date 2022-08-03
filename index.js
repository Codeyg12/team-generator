const inquirer = require('inquirer')
const fs = require('fs')
const generateNewCard = require('./src/template')

const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the team managers name?'
    },
    {
        type: 'number',
        name: 'managerId',
        message: 'What is the team managers id'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the team managers email?'
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: 'What is the office number?'
    }
]