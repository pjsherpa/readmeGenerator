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
  1. [Project Descrition](#Project-Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Contribution](#Contribution)
  5. [Tests](#Tests)
  6. [Deployment](#Deployment)
  7. [Contact](#Contact)
  8. [Steps Made](#Steps-Made)
  9. [Questions](#Questions)
  10. [Video Walkthrough](#Video-Walkthrough)

### Project Description:

${data.project}

### Installation:
${data.Installation}

### Usage:

${data.Usage}

### Contribution:

${data.Contributing}

### Tests:

${data.Test}

### Deployment:

[https://github.com/${data.Github}/readmeGenerator]

### Contact:
If any further questions were required relating this readme Generator. You can contact me via email [${
    data.email
  }].

### Steps made:

Step 1: Also imported generateMarkdown on index.js locally.

Step 2: To access the following we used the require function.

Step 3: Generated the questionaires to fill in for the readme.

Step 4: Once the information was received then a code using fs module was used to created and write in the readme.md

### Questions:
1. What is the name of this project?
2. Why did you build this project?
3. What was your Installation?
4. Usage:
5. Which License did you use?
6. Who was the contributer?
7. What is your email address?
7. Please provide githubURL?
9. Please provide how you will run your test?

### Video Walkthrough:
Please find videolink attached of walkthrough demonstrating the functionality of this application:
https://drive.google.com/file/d/1dkkFz6rbfg69WlcwDJeDNASG1DSOXgRk/view
`;
}

module.exports = generateMarkdown;
