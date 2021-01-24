const questions = require("./lib/questions");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];

function writeToFile() {
  renderedHTML = render(employees);
  const dir = "../output";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.writeFile("./output/team.html", renderedHTML, () => {
    console.log("HTML file created.");
  });
}

let askNext = () => {
  inquirer
    .prompt({
      type: "list",
      message: "Would you like to enter another employee?",
      name: "askNext",
      choices: ["Yes", "No"],
    })
    .then((response) => {
      if (response.askNext === "Yes") {
        getEmployeeDeets();
      } else {
        writeToFile();
      }
    });
};

const getEmployeeDeets = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is this employee's Role?",
        choices: ["Engineer", "Manager", "Intern"],
        name: "role",
      },
    ])
    .then((response) => {
      switch (response.role) {
        case "Engineer":
          inquirer
            .prompt(questions.questionsEngineer)
            .then((response) => {
              let engineer = new Engineer(
                response.name,
                response.id,
                response.email,
                response.github
              );
              employees.push(engineer);
              console.log(`Employee created.`);
            })
            .then(() => {
              askNext();
            });

          break;
        case "Manager":
          inquirer
            .prompt(questions.questionsManager)
            .then((response) => {
              let manager = new Manager(
                response.name,
                response.id,
                response.email,
                response.officeNum
              );
              employees.push(manager);
              console.log(`Employee created.`);
            })
            .then(() => {
              askNext();
            });

          break;
        case "Intern":
          inquirer
            .prompt(questions.questionsIntern)
            .then((response) => {
              let intern = new Intern(
                response.name,
                response.id,
                response.email,
                response.school
              );
              employees.push(intern);
              console.log(`Employee created.`);
            })
            .then(() => {
              askNext();
            });
          break;
        default:
          break;
      }
    });
};
getEmployeeDeets();
