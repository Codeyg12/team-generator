const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("github constructor should work properly", () => {
    //Arrange
    const testGithub = "github account";

    //Act
    const engineer = new Engineer("Shylo", 7, "sample@example.com", testGithub);

    //Assert
    expect(engineer.github).toBe(testGithub);
  });

  it("All functions should work properly", () => {
    //Arrange
    const testGithub = "github";
    const test = "Engineer";

    //Act
    const engineer = new Engineer("Shylo", 7, "sample@example.com", testGithub);

    //Assert
    expect(engineer.getGithub()).toBe(testGithub);
    expect(engineer.getRole()).toBe(test);
  });
});
