const Engineer = require('../lib/Engineer');

test("Creates Engineer object", () => {
    const engineer = new Engineer('Shlee', 2, 'ash@test.com', 'ashwarters/github.com')
    console.log(engineer);

    expect(engineer.getGithub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe('Engineer');
});