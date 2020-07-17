// * At least one badge -> is a badge just an icon/graphic?
//     * Project title
//         * Description -> should this be pulled from repo or entered by user?
//         * Table of Contents
//             * Installation -> written by user?
//             * Usage -> written by user?
//             * License
//             * Contributing -> is this "contributions" pulled from url?
//             * Tests -> written by user?
//             * Questions -> just question prompt below?
//             * User GitHub profile picture
//                 * User GitHub email

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
let userObj = {};

const questions = [
  {
    message: "Enter your GitHub username:",
    name: "username",
  },
  {
    message: "What is your GitHub email?",
    name: "userEmail",
  },
];

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

function init() {
  // add some error handling for when someone inputs nothing into fields
  inquirer.prompt(questions).then(function ({ username, userEmail }) {
    markdown.username = username;
    markdown.userEmail = userEmail;
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(({ data }) => {
      const reposArr = data.map((obj) => obj.name);
      const repoStr = reposArr.join("\n");
      console.log("Repositories found:" + "\n" + repoStr);

      inquirer
        .prompt({
          message: "Enter your repo name:",
          name: "repoName",
        })

        .then(function ({ repoName }) {
          markdown.repoName = repoName;
          const repoArr = data.filter(
            (data) => data.name.toLowerCase() == repoName.toLowerCase()
          );

          if (repoArr[0].description !== null) {
            markdown.description = repoArr[0].description;
          } else if (
            inquirer
              .prompt({
                message: "Enter a project description:",
                name: "projectDesc",
              })
              .then(function (projectDesc) {
                markdown.description = projectDesc;
              })
          );
          console.log(markdown);

          // markdown.license = repoArr[0].license;
          // markdown.contributing = repoArr[0].contributors_url;
        });
    });
  });
}
init();

//     // writeToFile();

// search for badges and they give you syn.

// function writeToFile(fileName, data) {
//   axios
//     .get(queryUrl)
//     .then(({ data }) => {
//       console.log(data[0].name);
//       let icon = data[0].owner.avatar_url;
// markdown.icon = icon;
//       console.log("user object", userObj);
//       return userObj;
//     })
//     .then(function (userObj) {
//       let readmeTemplate = generateMarkdown(userObj);
//       fs.writeFile("README.md", readmeTemplate, function (err) {
//         if (err) {
//           throw err;
//         }
//         console.log("good!");
//       });
//     })
//     .catch((error) => console.log(error));
// }
