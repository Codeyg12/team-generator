const Intern = require('../lib/Intern')

describe('Intern', () => {
    it('Should take in school', () => {
        const testSchool = 'ASU'
        const intern = new Intern('Calypso', 7, 'sample@example.com', testSchool)

        expect(intern.school).toBe(testSchool)
    })

    it('All functions should work properly', () => {
        const test = 'Intern'
        const testSchool = 'ASU'
        const intern = new Intern('Calypso', 7, 'sample@example.com', testSchool)

        expect(intern.getSchool()).toBe(testSchool)
        expect(intern.getRole()).toBe(test)
    })
})