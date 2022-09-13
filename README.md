# Team Profile Generator

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description

The purpose of this project was to apply principals of Node.js and object-oriented programming to create a simple but practical application. This application generates an HTML file with team profile information based on user input, which saves time for managers. While building this project, I became comfortable with object-oriented programming and practiced the implementation of classes, subclasses, and promises. Furthermore, I learned about the importance of test-driven development and wrote my own test scripts for the first time.

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  The inquirer package is required to run this application. Run the following command in the command line to initialize a new package:

  ~~~
  npm init
  ~~~
  
Then, run the following command in the command line to install the required package:
 
  ~~~
  npm i inquirer@8.2.4
  ~~~

  ## Usage

  To run this application, enter the following command in the command line:

  ~~~
  node index
  ~~~
  
The user will be prompted to answer a series of questions. The user will type their input to answer most of the questions. To select a team member to add, use the arrow keys to scroll up and down through the list. Once the user selects "Done building team", an index.html file will be generated with all of the information inputted by the user.

[Click here for a demonstration.](https://user-images.githubusercontent.com/109092365/189984433-1a4dff75-99af-43e9-99be-0b64617b6a64.webm)

  ## License

  This application is covered under the MIT License.
  To view a description of this license type, refer to the repo or click [here](https://opensource.org/licenses/MIT).

  ## Contributing

  Ways to contribute include suggesting bug fixes.
  
  ## Tests

  The Jest testing framework is required to run tests on this application. If you have not already set up a package.json file, run the following command in the command line to initialize a new package:

  ~~~
  npm init
  ~~~

  Then, run the following command in the command line to install the required jest package:
 
  ~~~
  npm i jest@29.0.3
  ~~~

  Before running tests, open your package.json file to ensure that under "scripts" you have {"test": "jest"} listed. Run the following command in the command line to run tests:

  ~~~
  npm run test
  ~~~

  ## Questions

  If you have any questions or would like to provide feedback, do not hesitate to view my GitHub profile at [https://github.com/rpecuch](https://github.com/rpecuch) or contact me at rpecuch@comcast.net.
