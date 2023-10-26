# TestWork
Project Setup 

!Necessarily!
Install all additional dependencies (update them to the latest version)

Playwright
// in command line
npm install playwright
npm install playwright

Dotenv
//in command line
npm install dotenv

Tests
The tests are written in js and Playwright with using page object pattern.
In the page folder there are locators and actions related to tests.
The tests are in the tests folder.

.env file
The env file contains the passwords and logins of all test users.
Also, the file is added to gitignore according to the task.

Docker
To connect docker, first create a docker file and fill it.
Then, using the build command, we build a docker image.
!!Necessarily!! Install and Update all additional dependencies to the latest version.
//in command line
docker build -t playwright-autotests .

Then it runs and gets our expected result, autotests in docker and getting the result in playwright-results.
//in command line
docker run -it playwright-autotests 

Git
The last thing I need is to dump our files into a remote git repository.
We create a repository in GitHub and copy the commands from there to the console.
Next commands -git add, -git commit, -gi push.

If there are any questions, I will wait for them!