// TODO: Create a function that returns a license badge with based on which license is passed in
// If there is no license, return an empty string
function generateMarkdown(data) {
  function renderLicenseBadge(license) {
    if (license !== "None") {
      return `![License](https://img.shields.io/badge/license-${license}-blue.svg)
      `;
    } else {
      return "";
    }
  }

  function renderLicenseLink(license) {
    if (license !== "None") {
      return `https://opensource.org/licenses/${license}`;
    } else {
      return "";
    }
  }

  return `# ${data.title} 
  [${renderLicenseBadge(data.License)}](${renderLicenseLink(data.License)})
  
  Table of Content:
  1. [Project Description](#Project-Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Contribution Guideline](#Contribution-Guideline)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
  7. [Steps Made](#Steps-Made)
  8. [Video Walkthrough](#Video-Walkthrough)

### Project Description:

${data.project}

### Installation:
${data.Installation}

### Usage:

${data.Usage}

### Contribution Guideline:

${data.Contributing}

### Tests:

${data.Test}

### Questions:

Github Profile:
[${data.Github}](https://github.com/${data.Github})


If any further questions were required relating this Readme Generator. 
Please contact me via email: ${data.email}.

Deployment:
(https://github.com/${data.Github}/readmeGenerator)

### Steps made:

Step 1: Imported generateMarkdown on index.js locally.

Step 2: To access the following we used the require function.

Step 3: Generated the questionaires to fill in for the readme.

Step 4: Once the information was received then a code using fs module was used to create and write in the readme.md

The following questions were prompted:

1. What is the name of this project?
2. Why did you build this project?
3. What was your Installation?
4. Usage:
5. Which License did you use?
6. Contribution Guideline?
7. What is your email address?
8. Please provide github Username?
9. Please provide how you will run your test?

### Video Walkthrough:
Please find videolink attached of walkthrough demonstrating the functionality of this application:

[Walkthrough Video by Pj](https://drive.google.com/file/d/1FKn4by1GY6aHwEOxVTyuNyA8qSB0UrLQ/view)
`;
}

module.exports = generateMarkdown;
