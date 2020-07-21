function generateMarkdown(markdown) {
  return `

->![GitHub repo size](https://img.shields.io/github/repo-size/${markdown.username}/${markdown.repoName})<-
->![GitHub stars](https://img.shields.io/github/stars/${markdown.username}/${markdown.repoName}?style=social)<-
->![GitHub forks](https://img.shields.io/github/forks/${markdown.username}/${markdown.repoName}?style=social)<-

# ${markdown.repoName}
-> Created by ${markdown.username} <-

->Add link to project<-

->![Github icon image](https://avatars1.githubusercontent.com/u/64443618?v=4)<-


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

## Interested in contributing? Here's how:
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
