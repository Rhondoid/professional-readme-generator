// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
// }
// function addLicenseBadge(license) {
//   if(license !== 'none'){
//     return '![GitHub license]https://img.shields.io/badge/license-${license}-blue.svg';
//     }
//     return "license"}
// let licenseType = 'https://img.shields.io/badge/license-${license}-blue.svg'
// function renderLicenseBadge(licenseType) {
//   if(licenseType == license){
//     return license
// //   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {

// }
// function generateMarkdown(data){
//   return '${response.license}'
//   #License:;
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `

  # Table_of_Contents:
  1. [ Title. ](#title)
  2. [ Description. ](#Description)
  3. [ Motivation. ](#Motivation)
  4. [ Credits. ](#Credits)
  5. [ Installation. ](#Installation)
  6. [ Usage. ](#Usage)
  7. [ License. ](#License)
  8. [ Contribute. ](#Contribute)
  9. [ Test. ](#Test)

  <a name="title"></a>
  ## Title
  ${response.title}

  <a name="title"></a>
  ## Description
  ${response.description}

  <a name="title"></a> 
  ## Motivation
  ${response.motivation}

  <a name="title"></a>
  ## Credits
  ${response.credits}

  <a name="title"></a>
  ## License
  ${response.license}

  <a name="title"></a>
  ## Badges
  ${response.badges}

  <a name="title"></a>
  ## Features
  ${response.features}

  <a name="title"></a>
  ## Contribute
  ${response.contribute}
  
  <a name="title"></a>
  ## Tests
  ${response.tests}



  
`;
}

module.exports = generateMarkdown;
