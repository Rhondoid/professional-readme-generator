// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return LicenseBadge === LicenseBadge : => {}
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${response.title} 
  #Title:

  ${response.description}
  #Description:

  ${response.motivation}
  #Motivation:

   ${response.tableOfContents}
   #Table of Contents:
  -[description](#Description)
  -[installation](#installation)
  -[usage](#usage)
  -[license](#license)
  -[contribution](#contribution)
  -[test](#test)

   ${response.installation}
   #Installation:

  ${response.usage}
  #Usage:

  ${response.credits}
  #Credits:

  ${response.license}
  #License:

  ${response.badges}
  #Badges:

  ${response.features}
  #Features:

  ${response.contribute}
  #How to Contribute:



  
`;
}

module.exports = generateMarkdown;
