//Include inquirer and fs for running inquirer and creating html and css

const inquirer = require('inquirer');
const fs = require('fs');


//Create prompts to get the info to fill in the html file - Do the jest stuff first though
const createHTML = inquirer
    .prompt([
        {
            type: 'list',
            message: 'Is the team member a Manager, Engineer, or Intern?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
        }
    ])

  .then((data) => {
    const witchRole = (data) => {
        switch (data){
            case 'Manager':
                return inquirer
                .prompt([
                    {
                    type: 'input',
                    name: 'managerName',
                    message: 'Name of manager:',
                    },

                    {
                    type: 'input',
                    name: 'managerID',
                    message: 'Employee ID of manager:',
                    },

                    {
                    type: 'input',
                    name: 'managerEmail',
                    message: 'Email of manager:',
                    },

                     {
                    type: 'input',
                    name: 'managerOfficeNumber',
                    message: 'Office number of manager:',
                    },
                ]);
            
             case 'Engineer':
                return inquirer
                .prompt([
                    {
                    type: 'input',
                    name: 'name',
                    message: 'Name of manager:',
                    }]);




  }


    }





  }




  )



// The application must include Employee, Manager, Engineer, and Intern classes. The tests for these classes (in the _tests_ directory) must ALL pass.

// The first class is an Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Employee'

// The other three classes will extend Employee.

// In addition to Employee's properties and methods, Manager will also have the following:

// officeNumber

// getRole()—overridden to return 'Manager'

// In addition to Employee's properties and methods, Engineer will also have the following:

// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'

// In addition to Employee's properties and methods, Intern will also have the following:

// school

// getSchool()

// getRole()—overridden to return 'Intern'

// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.