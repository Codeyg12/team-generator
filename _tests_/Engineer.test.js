const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("github constructor should work properly", () => {
    const testGithub = "github account";
    const engineer = new Engineer("Shylo", 7, "sample@example.com", testGithub);

    expect(engineer.github).toBe(testGithub);
  });

  it("All functions should work properly", () => {
    const testGithub = "github";
    const test = "Engineer";
    const engineer = new Engineer("Shylo", 7, "sample@example.com", testGithub);

    expect(engineer.getGithub()).toBe(testGithub);
    expect(engineer.getRole()).toBe(test);
  });
});
