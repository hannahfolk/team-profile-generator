// ===================== DEPENDENCIES =====================
const inquirer = require("inquirer");
const fs = require("fs");

// ===================== CONSTRUCTOR CLASSES =====================
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generateHTML = require("./src/generateHTML");

const team = [];

// Ask manager questions and then use the constructor class to build one, then push it into the team array
const manager = async () => {
  const managerQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email?",
    },
    {
      type: "number",
      name: "id",
      message: "What is the manager's id?",
    },
    {
      type: "number",
      name: "officeNumber",
      message: "What is the manager's office number?",
    },
  ];

  const { name, id, email, officeNumber } = await inquirer.prompt(
    managerQuestions
  );
  const manager = new Manager(name, id, email, officeNumber);
  team.push(manager);
  another();
};

// Ask engineer questions and then use the constructor class to build one, then push it into the team array
const engineer = async () => {
  const engineerQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email?",
    },
    {
      type: "number",
      name: "id",
      message: "What is the engineer's id?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's github username?",
    },
  ];

  const { name, id, email, github } = await inquirer.prompt(engineerQuestions);
  const engineer = new Engineer(name, id, email, github);
  team.push(engineer);
  another();
};

// Ask intern questions and then use the constructor class to build one, then push it into the team array
const intern = async () => {
  const internQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email?",
    },
    {
      type: "number",
      name: "id",
      message: "What is the intern's id?",
    },
    {
      type: "input",
      name: "school",
      message: "What is the intern's school?",
    },
  ];

  const { name, id, email, school } = await inquirer.prompt(internQuestions);
  const intern = new Intern(name, id, email, school);
  team.push(intern);
  another();
};

// Ask if they want to add an engineer, intern, or no one. If no one, build html
const another = async () => {
  const addQuestion = {
    type: "list",
    name: "addAnother",
    message: "Would you like to add an engineer, intern, or no one?",
    choices: ["Engineer", "Intern", "None"],
  };

  const { addAnother } = await inquirer.prompt(addQuestion);

  switch (addAnother) {
    case "Engineer":
      engineer();
      break;
    case "Intern":
      intern();
      break;
    default:
      writeHTML();
  }
};

const writeHTML = () => {
  fs.writeFileSync("./output/index.html", generateHTML(team));
};

manager();
