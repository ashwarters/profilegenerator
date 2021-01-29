const Intern = require('../lib/Intern');

test("Creates a new Intern object", () => {
    const intern = new Intern('Adub', 131, 'ash@tests.com', 'UCF')
    console.log(intern);

    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getRole()).toBe('Intern');
});