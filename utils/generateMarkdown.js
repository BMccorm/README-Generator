function generateMarkdown(userObj) {
  return `
# ${userObj.username}
${userObj.icon}
CONTACT
${userObj.userEmail}
DESCRIPTION
${userObj.projectDescr}
`;
}

module.exports = generateMarkdown;
