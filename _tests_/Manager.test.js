const Manager = require('../lib/Manager')

describe('Manager', () => {
    it('should be able to set and retrive office number', () => {
        //Arrange
        const testOfficeNumber = 303

        //Act
        const manager = new Manager('Dylan', 13, 'sample@example.com', testOfficeNumber)

        //Assert
        expect(manager.officeNumber).toBe(testOfficeNumber)
    }) 

    it('Should return as manager', () => {
        //Arrange
        const test = 'Manager'
        const testOfficeNumber = 719

        //Act
        const manager = new Manager('Dylan', 13, 'sample@example.com', testOfficeNumber)

        //Assert
        expect(manager.getOfficeNumber()).toBe(testOfficeNumber)
        expect(manager.getRole()).toBe(test)
    })
})