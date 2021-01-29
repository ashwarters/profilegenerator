const inquirer = require('inquirer');
const fs = require('fs');
const generateSite = require('./src/generate');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const employees = [];

const questions = {
    // manager q's
    manager: [{
            type: 'input',
            name: 'name',
            message: "Enter the name of the Team Manager.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("A name is required!");
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "id",
            message: "Enter the Team Manager's id number.",
            validate: function(value) {
                var valid = !isNaN(parseFloat(value));
                return valid || "A number is required!";
            },
            filter: Number
        },

        {
            type: 'input',
            name: 'email',
            message: "Enter the Team Manager's email address.",
            validate: emailInput => {
                if (emailInput.includes('.com') && emailInput.includes('@')) {
                    return true;
                } else {
                    console.log('A valid email address is required.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the Manager's office number.",
            validate: function(value) {
                var valid = !isNaN(parseFloat(value));
                return valid || "An office number is required";
            },
            filter: Number
        }
    ],

    // Engineer q's
    engineer: [{
            type: 'input',
            name: 'name',
            message: "Enter the Engineer's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("A name is required!");
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "id",
            message: "Enter the Engineer's id.",
            validate: function(value) {
                var valid = !isNaN(parseFloat(value));
                return valid || "A number is required.";
            },
            filter: Number
        },

        {
            type: 'input',
            name: 'email',
            message: "Enter the Engineer's email address.",
            validate: emailInput => {
                if (emailInput.includes('.com') && emailInput.includes('@')) {
                    return true;
                } else {
                    console.log('You must enter a valid email address.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: "Enter the Engineer's GitHub username",
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log("A valid GitHub username is required.")
                    return false;
                }
            }
        },
    ],

    // Intern q's
    intern: [{
            type: 'input',
            name: 'name',
            message: "Enter the Intern's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("An Intern name is required.");
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "id",
            message: "Enter the Intern's id number",
            validate: function(value) {
                var valid = !isNaN(parseFloat(value));
                return valid || "An id number is required";
            },
            filter: Number
        },

        {
            type: 'input',
            name: 'email',
            message: "Enter the Intern's email address",
            validate: emailInput => {
                if (emailInput.includes('.com') && emailInput.includes('@')) {
                    return true;
                } else {
                    console.log('A valid email address is required.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'school',
            message: "Enter the Intern's school name",
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log("A name of the Intern's school is required.")
                    return true;
                }
            }
        },
    ]
}


//return positions
const addManager = () => {
    return inquirer.prompt(questions.manager)
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            employees.push(manager);
            addEmployee();
        })
};


const addIntern = () => {
    return inquirer.prompt(questions.intern)
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employees.push(intern);
            addEmployee();
        })
};

const addEngineer = () => {
    return inquirer.prompt(questions.engineer)
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            employees.push(engineer);
            addEmployee();
        })
};

const addEmployee = () => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'newEmployee',
            message: "Would you like to add another Employee?",
            choices: ['Engineer', 'Intern', 'Complete Profile']
        })
        .then(answers => {
            switch (answers.newEmployee) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'Complete Profile':
                    writeToFile()
            }
        })
};

function writeToFile(fileName) {
    // creates the html file
    fileName = fs.writeFile('./dist/index.html', generateSite((employees)), (err => {
        if (err) throw err;
    }));
};

addManager();