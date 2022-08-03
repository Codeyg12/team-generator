// const { describe } = require('yargs')
const Manager = require('../lib/Manager')

describe('Manager', () => {
    it('should be able to set and retrive office number', () => {
        const testOfficeNumber = 303
        const manager = new Manager('Dylan', 13, 'sample@example.com', testOfficeNumber)

        expect(manager.officeNumber).toBe(testOfficeNumber)
    }) 

    it('Should return as manager', () => {
        const test = 'Manager'
        const manager = new Manager('Dylan', 13, 'sample@example.com')

        expect(manager.getRole()).toBe(test)
    })
})