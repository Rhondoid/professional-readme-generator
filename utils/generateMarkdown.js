// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(badge) {
  if (badge !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(link) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license !== "None") {
    return "#license";
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `

  # Table_of_Contents:
  1. [ Title ](#Title)
  2. [ Description ](#Description)
  3. [ Motivation ](#Motivation)
  4. [ Credits ](#Credits)
  5. [ Installation ](#Installation)
  6. [ Usage ](#Usage)
  7. [ License ](#License)
  8. [ Contribute ](#Contribute)
  9. [ Test ](#Test)
  10. [ Questions ](#Questions)

  <a name="title"></a
  ## Title
  ${response.title}

  <a name="description"></a>
  ## Description
  ${response.description}

  <a name="motivation"></a> 
  ## Motivation
  ${response.motivation}

  <a name="credits"></a>
  ## Credits
  ${response.credits}

  <a name="license"></a>
  ## License
  ${response.license}

  <a name="badge"></a>
  ## Badge
  ${response.badge}

  <a name="features"></a>
  ## Features
  ${response.features}

  <a name="contribution"></a>
  ## Contribute
  ${response.contribute}
  
  <a name="test"></a>
  ## Test
  ${response.test}

  <a name="questions"></a>
  ## Questions
  ${response.questions}



  
`;
}

module.exports = generateMarkdown;
