// * At least one badge
//     * Project title
//         * Description
//         * Table of Contents
//             * Installation
//             * Usage
//             * License
//             * Contributing
//             * Tests
//             * Questions
//             * User GitHub profile picture
//                 * User GitHub email

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
let userObj = {};

const questions = [
  {
    message: "Enter your GitHub username",
    name: "username",
  },
  {
    message: "What is your GitHub email?",
    name: "userEmail",
  },
];

// function writeToFile(fileName, data) {}

function init() {
  inquirer.prompt(questions).then(function ({ username, userEmail }) {
    userObj = {
      username: username,
      userEmail: userEmail,
    };

    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(({ data }) => {
      let icon = data[0].owner.avatar_url;
      userObj.icon = icon;
      console.log("user object", userObj);
    });

    then(function (userObj) {
      let readmeTemplate = generateMarkdown(userObj);
      fs.writeFile("Readme.md", readmeTemplate, function (err) {
        if (err) {
          throw err;
        }
        console.log("good!");
      });
    });
  });
}

init();
