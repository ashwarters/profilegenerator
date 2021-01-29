const Employee = require('../lib/Employee');

test("Creates an employee object", () => {
    const employee = new Employee('Ashley', 13, 'ashwarters@gmail.com');
    console.log(employee);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});