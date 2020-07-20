const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const nameQuestion = {
  message: "Enter your GitHub username:",
  name: "username",
};

const emailQuestion = {
  message: "What is your GitHub email?",
  name: "userEmail",
};

async function init() {
  let markdown = {
    username: "",
    userEmail: "",
    repoName: "",
    description: "",
    installation: "",
    usage: "",
    license: "",
    contributing: "",
    tests: "",
    icon: "",
  };

  let { username } = await inquirer.prompt(nameQuestion);
  if (username === "") {
    console.log("Username not found. Please try again");
    let answer = await inquirer.prompt(nameQuestion);
    username = answer.username;
  }

  markdown.username = username;

  let { userEmail } = await inquirer.prompt(emailQuestion);
  if (userEmail == "") {
    console.log("Email not found. Please try again");
    let emailAnswer = await inquirer.prompt(emailQuestion);
    userEmail = emailAnswer.userEmail;
  }
  markdown.userEmail = userEmail;

  const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

  const { data } = await axios.get(queryUrl);
  const reposArr = data.map((obj) => obj.name);
  const repoStr = reposArr.join("\n");
  console.log("Repositories found:" + "\n" + repoStr);

  const { repoName } = await inquirer.prompt({
    message: "Enter your repo name:",
    name: "repoName",
  });
  const repoArr = data.filter(
    (data) => data.name.toLowerCase() == repoName.toLowerCase()
  );

  markdown.repoName = repoName;

  if ((await repoArr[0].description) !== null) {
    markdown.description = repoArr[0].description;
  } else {
    await inquirer
      .prompt({
        message: "Enter a project description:",
        name: "projectDesc",
      })
      .then(function ({ projectDesc }) {
        markdown.description = projectDesc;
      });
  }

  const { installation } = await inquirer.prompt({
    message:
      "Installation: create a guide on how to get your project up and running.",
    name: "installation",
  });

  markdown.installation = installation;

  const { usage } = await inquirer.prompt({
    message: "Usage: enter a step by step guide on how to use your project.",
    name: "usage",
  });

  markdown.usage = usage;

  if ((await repoArr[0].license) !== null) {
    markdown.license = repoArr[0].license;
  } else {
    await inquirer
      .prompt({
        message: "License: add a short snippet describing the license.",
        name: "projectLic",
      })
      .then(function ({ projectLic }) {
        markdown.license = projectLic;
      });
  }

  const { contributing } = await inquirer.prompt({
    message:
      "Contributing: enter a guide on how users can contribute to your project.",
    name: "contributing",
  });

  markdown.contributing = contributing;

  const { tests } = await inquirer.prompt({
    message: "Testing: Explain and show how to run tests on the code.",
    name: "tests",
  });

  markdown.tests = tests;

  const icon = repoArr[0].owner.avatar_url;
  markdown.icon = icon;

  console.log(markdown);

  writeToFile(markdown);
}

function writeToFile(markdown) {
  let readmeTemplate = generateMarkdown(markdown);
  fs.writeFile("GeneratedREADME.md", readmeTemplate, function (err) {
    if (err) {
      throw err;
    }
    console.log("good!");
  });
}

init();
