function generateMarkdown(markdown) {
  return `

![GitHub repo size](https://img.shields.io/github/repo-size/${markdown.username}/${markdown.repoName})

# ${markdown.repoName}

![Github icon image](https://avatars1.githubusercontent.com/u/64443618?v=4)

Created by ${markdown.username}

![Github icon image]
${markdown.icon}

# CONTACT
${markdown.userEmail}

# DESCRIPTION
${markdown.description}

# USAGE
${markdown.usage}

# INSTALLATION 
${markdown.installation}

# LICENSE
${markdown.license}

# Interested in contributing? Here's how:
${markdown.contributing}

# TESTING
${markdown.tests}


`;
}

// username: "",
//     userEmail: "",
//     repoName: "",
//     description: "",
//     installation: "",
//     usage: "",
//     license: "",
//     contributing: "",
//     tests: "",
//     icon: "",

module.exports = generateMarkdown;

// new Promise((resolve, reject) => {
//   console.log("Initial");

//   resolve();
// })
//   .then(() => {
//     throw new Error("Something failed");

//     console.log("Do this");
//   })
//   .catch(() => {
//     console.error("Do that");
//   })
//   .then(() => {
//     console.log("Do this, no matter what happened before");
//   });

// let promise = new Promise((resolve, reject) => {
//   inquirer.prompt(questions);
// }).then(function ({ username, userEmail }) {
//   const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//   axios.get(queryUrl).then(({ data }) => {
//     const reposArr = data.map((obj) => obj.name);
//     const repoStr = reposArr.join("\n");
//     console.log("Repositories found:" + "\n" + repoStr);
//     return repoStr;
//   });
//   resolve();
//   console.log("done");
// });
// promise.then(function () {
//   inquirer.prompt({
//     message: "Please enter your repo name:",
//     name: "repoName",
//   })
//   .then(function ({ repoName}) {
//   userObj = {
//     username: username,
//     userEmail: userEmail,
//   };
// });

// if (repoArr[0].description === null) {
//   inquirer
//     .prompt({
//       message: "Enter a project description:",
//       name: "projectDesc",
//     })
//     .then(function (projectDesc) {
//       markdown.description = projectDesc;
//     });
// } else if ((markdown.description = repoArr[0].description));

// //////////////////////////
// const markdown,description =  if (repoArr[0].description !== null) {
//               markdown.description = repoArr[0].description;
//               console.log(markdown);
//             } else {
//               inquirer
//                 .prompt({
//                   message: "Enter a project description:",
//                   name: "projectDesc",
//                 })

// inquirer
//   .prompt(questions)
//   .then(function (answers) {
//     console.log(answers);
//   })

//   .then(function ({ username, userEmail }) {
//     markdown.username = username;
//     markdown.userEmail = userEmail;
//     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//     axios.get(queryUrl).then(({ data }) => {
//       const reposArr = data.map((obj) => obj.name);
//       const repoStr = reposArr.join("\n");
//       console.log("Repositories found:" + "\n" + repoStr);

//       inquirer
//         .prompt({
//           message: "Enter your repo name:",
//           name: "repoName",
//         })

// .then(function ({ repoName }) {
//   markdown.repoName = repoName;
//   const repoArr = data.filter(
//     (data) => data.name.toLowerCase() == repoName.toLowerCase()
//   );

//         if (repoArr[0].description !== null) {
//           markdown.description = repoArr[0].description;
//           console.log(markdown);
//         } else {
//           inquirer
//             .prompt({
//               message: "Enter a project description:",
//               name: "projectDesc",
//             })
//             .then(function ({ projectDesc }) {
//               markdown.description = projectDesc;
//               console.log(markdown);
//             });
//         }
//       });
//   });
// });
