//Include inquirer and fs for running inquirer and creating html and css

const inquirer = require('inquirer');
const fs = require('fs');

//Include all of the constructors we will use to hold variables

const Manager = require('../Team-Profile-Generator-Challenge/lib/Manager'); // manager has name, id, email, officenumber
const Intern = require('../Team-Profile-Generator-Challenge/lib/Intern'); // intern has name, id, email, school
const Engineer = require('../Team-Profile-Generator-Challenge/lib/Engineer'); // engineer has name, id, email, githubuser

const team = [];

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


const init = () => {
    inquirer.prompt(managerQuestions).then((answer) => {
        const manager = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerOfficeNumber)
        console.log(manager);
        team.push(manager);
    }); 

    
        
};

init();




// Create second prompt to see which role we are working with
const WhichRole = inquirer
    .prompt([
        {
            type: 'list',
            message: 'Would you like to add another team member? (select an option)',
            name: 'role',
            choices: ['Engineer', 'Intern', 'NO'],
        }
    ])

    //feed the answer into this function to 

  .then((data) => {
    const otherRole = (data) => {
        switch (data){
            case 'Engineer':
                return inquirer
                .prompt([
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

                    
                ]);
            
             case 'Intern':
                return inquirer
                .prompt([
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
]);

case 'NO':
    return 
   ;

   

}}});

//I want to use these switch statements to fill an object like we did for the manager and then I need to write a file to push each new created team member to the html file
//I also need to make sure the manager function runs first and then the switch statement that selects either engineer intern or NO

const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub);
team.push(engineer);
const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);
team.push(intern);


//may need to have a const HTML to include everything that will be in the HTML
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

    <div class="card" style="width: 20rem;">
        <div class="card-body">
        <h4 class="card-title">${answer.managerName}</h4>
        <p class="card-text">${answer.managerID}</p>
        <p class="card-text">${answer.managerEmail}</p>
        <p class="card-text">${answer.managerOfficeNumber}</p>
        </div>
    </div>

    </div>

</body>
</html>


`



//How to I put the index.html in the dist/ folder with the style.css?
fs.writeFile('index.html', HTML, (err) =>
   err ? console.log(err) : console.log('Success!')
    ); 