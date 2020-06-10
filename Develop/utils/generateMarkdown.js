
function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**

## Description 

${data.description}

## Table of contents

        ${data.table}

## Installation

${data.installation}

## Usage

${data.usage}

## Licence

        ${data.licence}

## Contributors

${data.contributing}

## Tests

${data.test}


## Repository Link

- [Project Repo](${data.repo})

## GitHub Info 

![Image of me](${githubInfo.githubImage})
- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
- <${githubInfo.email}>

`;
}

module.exports = generateMarkdown;
