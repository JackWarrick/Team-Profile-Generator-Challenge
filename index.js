//Include inquirer and fs for running inquirer and creating html and css
const inquirer = require('inquirer');
const fs = require('fs');

//Include all of the constructors we will use to hold variables
const Employee = require('../Team-Profile-Generator-Challenge/lib/Employee');
const Manager = require('../Team-Profile-Generator-Challenge/lib/Manager'); // manager has name, id, email, officenumber
const Intern = require('../Team-Profile-Generator-Challenge/lib/Intern'); // intern has name, id, email, school
const Engineer = require('../Team-Profile-Generator-Challenge/lib/Engineer'); // engineer has name, id, email, githubuser

const team = [];

//Questions for manager creation flow
const managerQuestions = [

    {
        type: 'input',
        message: 'What is the name of the manager?',
        name: 'managerName',
    },
    {
        type: 'number',
        message: 'What is the employee ID?',
        name: 'managerID',
    },
    {
        type: 'input',
        message: 'What is email of the manager?',
        name: 'managerEmail',
    },
    {
        type: 'number',
        message: 'What is the office number of the manager?',
        name: 'managerOfficeNumber',
    },

];

//Questions for engineer flow
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Name of engineer:',
        },

        {
        type: 'number',
        name: 'engineerID',
        message: 'Employee ID of engineer:',
        },

        {
        type: 'input',
        name: 'engineerEmail',
        message: 'Email of engineer:',
        },

         {
        type: 'input',
        name: 'engineerGithub',
        message: 'GitHub username of engineer:',
        },
];

//Questions for intern flow
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'Name of intern:',
        },
        {
        type: 'number',
        name: 'internID',
        message: 'Employee ID of intern:',
        },
        {
        type: 'input',
        name: 'internEmail',
        message: 'Email of intern:',
        },
        {
        type: 'input',
        name: 'internSchool',
        message: 'School of intern:',
        },

];

//Questions to decide what role we are creating after manager
const whichRoleQuestion = [
    {
        type: 'list',
        message: 'Would you like to add another team member? (select an option)',
        name: 'role',
        choices: ['Engineer', 'Intern', 'NO'],
    }

];

//The content for the HTML file with added user input
const HTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="Coding-Challenges/Team-Profile-Generator-Challenge/dist/style.css"/>
    <title>Team</title>
  </head>

<body>

    <header class="jumbotron">
        <h1 class="display-2">THE TEAM</h1>
    </header>

    <div> 

    ${team.map((employee) => `
    <div class="card" style="width: 20rem;">
        <div class="card-body">
            <h2 class = "card-title">${employee.getRole()}</h2>
            <h3 class = "card-title">${employee.name}<h3>
            <p class = "card-text">${employee.id} </p>
            <p class = "card-text">${employee.email} </p>
            <p class = "card-text">${employee?.officeNumber} </p>
            <p class = "card-text">${employee?.github} </p>
            <p class = "card-text">${employee?.school} </p>
            </div>
            </div>
            `).join('')}

    </div>

</body>
</html>


`

//First function to create data for Manager
const managerFunction = () => {
    inquirer.prompt(managerQuestions).then((answer) => {
        const manager = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerOfficeNumber)
        console.log(manager);
        team.push(manager);
        otherRoleFunction();
        //Go to OtherRoleFunction after this function runs
    });

}

//Function for adding another role after manager
 const otherRoleFunction = () =>  {
    inquirer.prompt(whichRoleQuestion).then((data) => {
        if (data.role === 'Engineer'){
            inquirer.prompt(engineerQuestions).then((data1) => {
            const engineer = new Engineer(data1.engineerName, data1.engineerID, data1.engineerEmail, data1.engineerGithub);
            console.log(engineer);
            team.push(engineer);
            otherRoleFunction();
            //Back to start
            } 
        
    )} else if (data.role === 'Intern'){
            inquirer.prompt(internQuestions).then((data2) => {
            const intern = new Intern(data2.internName, data2.internID, data2.internEmail, data2.internSchool);
            console.log(intern);
            team.push(intern);
            otherRoleFunction();
            //Back to start
            }
            
            
    )} else {

        //Write the function if user selects NO
        writeFileFunction();
    }})};

//Function for writing the html file
const writeFileFunction = () => {fs.writeFile('index.html', HTML, (err) =>
   err ? console.log(err) : console.log('Success!')
    ); };

//Call the starter function
managerFunction();
