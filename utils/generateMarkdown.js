function generateMarkdown(markdown) {
  return `

![GitHub repo size](https://img.shields.io/github/repo-size/${markdown.username}/${markdown.repoName})
![GitHub stars](https://img.shields.io/github/stars/${markdown.username}/${markdown.repoName}?style=social)
![GitHub forks](https://img.shields.io/github/forks/${markdown.username}/${markdown.repoName}?style=social)

# ${markdown.repoName}
Created by [${markdown.username}](https://github.com/${markdown.username}) 

![Github icon image](https://avatars1.githubusercontent.com/u/64443618?v=4)

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributors)
- [Testing](#Testing)
- [License](#License)
- [Questions](#Questions)

## Description
${markdown.description}

## Installation
${markdown.installation}

## Usage
${markdown.usage}

## Interested in contributing? Here's how:

1. Fork this repository
2. Create a branch: git checkout -b "create_a_branch_name"
3. Make and commit your changes: git commit -m "add your message here"
4. Push to the master branch: git push origin "branch_name"
5. Create the pull request

Additional information on creating a pull request can be found [here](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request). 

## Contributors
${markdown.contributing}

## Testing
${markdown.tests}

## License
${markdown.license}

## Questions
For more information, please email me at ${markdown.userEmail}
The link for this project can be found [here.](https://${markdown.username}.github.io/${markdown.repoName}/)

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
