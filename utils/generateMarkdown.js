function generateMarkdown(markdown) {
  return `

![GitHub repo size](https://img.shields.io/github/repo-size/${markdown.username}/${markdown.repoName})
![GitHub stars](https://img.shields.io/github/stars/${markdown.username}/${markdown.repoName}?style=social)
![GitHub forks](https://img.shields.io/github/forks/${markdown.username}/${markdown.repoName}?style=social)

# ${markdown.repoName}
 Created by ${markdown.username} 

https://${markdown.username}.github.io/${markdown.repoName}/

![Github icon image](https://avatars1.githubusercontent.com/u/64443618?v=4)


## Description
${markdown.description}

## Installation
${markdown.installation}

## Usage
${markdown.usage}

## License
${markdown.license}

## Testing
${markdown.tests}

## Questions 
${markdown.questions}

## Interested in contributing? Here's how:

1. Fork this repository
2. Create a branch: git checkout -b "Create_A_Branch_Name"
3. Make and commit your changes: git commit -m "add your message here"
4. Push to the master branch: git push origin "Branch_Name"
5. Create the pull request.

More information on creating a pull request can be found [here](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request). 

## Contributors
${markdown.contributing}

## Contact
For more information, please email me at ${markdown.userEmail}

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
