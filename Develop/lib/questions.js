function checkEmail(email) {
  if (
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
      email
    )
  ) {
    return true;
  } else {
    return "Must be a valid email address.";
  }
}
function checkIsNum(id) {
  if (isNaN(id)) {
    return "Must be a number.";
  } else {
    return true;
  }
}

exports.questionsEngineer = [
  {
    type: "input",
    message: "What is their Name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is this their ID number?",
    name: "id",
    validate: checkIsNum,
  },
  {
    type: "input",
    message: "What is this their email address?",
    name: "email",
    validate: checkEmail,
  },
  {
    type: "input",
    message: "What is their Github?",
    name: "github",
  },
];
exports.questionsManager = [
  {
    type: "input",
    message: "What is their Name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is this their ID number?",
    name: "id",
    validate: checkIsNum,
  },
  {
    type: "input",
    message: "What is this their email address?",
    name: "email",
    validate: checkEmail,
  },
  {
    type: "input",
    message: "What is their office number?",
    name: "officeNum",
  },
];
exports.questionsIntern = [
  {
    type: "input",
    message: "What is their Name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is this their ID number?",
    name: "id",
    validate: checkIsNum,
  },
  {
    type: "input",
    message: "What is this their email address?",
    name: "email",
    validate: checkEmail,
  },
  {
    type: "input",
    message: "What school did they attend?",
    name: "school",
  },
];
