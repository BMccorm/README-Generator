function generateMarkdown(userObj) {
  return `
# ${userObj.username}
DESCRIPTION
${userObj.icon}
${userObj.userEmail}

`;
}

module.exports = generateMarkdown;

// // function init() {
//   //1. get all inquirer data
//   // inquirer.prompt(questions)

//     .then(function ({ username, userEmail }) {
//       // userObj = {
//       //   username: username,
//       //   userEmail: userEmail,
//       // };

//       //2. grab github icon
//       // const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//       // make ajax call and map response to new name which gives you a new array. join array with new line "\n" to become string with all names.
//       axios.get(queryUrl)
//         .then(({ data }) => {
//           //3. githubicon
//           let icon = data[0].owner.avatar_url;
//           userObj.icon = icon;
//           console.log(userObj);

//     .then(function (userObj) {

//             // after you call write file function to make the new document with info
//             // below line parameters-> file name you want to create, content you wanted added to file, error message and console.log if no error
//             //4. update the generateMarkdown template with all our data
//             let readmeTemplate = generateMarkdown(userObj);
//             //5. write to our readme with all the updated template data
//             fs.writeFile("Readme.md", readmeTemplate, function (err) {
//               if (err) {
//                 throw err;
//               }
//               console.log("good!");
//             });
//           }
//     });
//     });
