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
  projectDescr: "",
  projectInsta: "",
  projectUsage: "",
  projectLicense: "",
  projectContrib: "",
  projectTest: "",
  icon: "",
};

function init() {
  // add some error handling for when someone inputs nothing into fields
  inquirer.prompt(questions).then(function ({ username, userEmail }) {
    userObj = {
      username: username,
      userEmail: userEmail,
    };

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
          const repoObj = data.filter(
            (data) => data.name.toLowerCase() == repoName.toLowerCase()
          );
          console.log(repoObj);
          console.log(repoObj.full_name);
        });
    });
  });
}
// projectDescr: "",
//   projectInsta: "",
//   projectUsage: "",
//   projectLicense: "",
//   projectContrib: "",
//   projectTest: "",
init();

// 1. get credentials
// 2.    axios.get(queryUrl).then(({ data }) => {
//       const reposArr = data.map((obj) => obj.name);
//       const repoStr = reposArr.join("\n");
//       console.log("Repositories found:" + "\n" + repoStr);
//       return repoStr;
//     });

// 3. prompt user for repo name using axios call
// repoName = data.name
// contributors = repoName.contributors_url;
// license = repoName.license;

// 4. user input on which repo they want to generate a readme for and assign to a variable

// 5. once repo is determined
// repoName = data.name
// contributors = repoName.contributors_url;
// license = repoName.license;

// repoName = data.name
// contributors = repoName.contributors_url;
// license = repoName.license;

//     // writeToFile();
//   });
// }

//  use a new promise to link them
// search for badges and they give you syn.

// function writeToFile(fileName, data) {
//   axios
//     .get(queryUrl)
//     .then(({ data }) => {
//       console.log(data[0].name);
//       let icon = data[0].owner.avatar_url;
//       userObj.icon = icon;
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
