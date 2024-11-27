

Make sure you have [Node.js](https://nodejs.org/en) 18 or later installed. Then, in this directory, run:

```bash
npm install             # install dependencies
npx playwright install  # setup Playwright browsers
npm run test            # run your tests!
```
##Configuration

See :https://playwright.dev/docs/intro
     

import { test } from '@appetize/playwright';

test.use({
    config: {
        /* some config */
    },
});

## Reporting 
I have used Allure for reporting or 
You can replace the test name in the following command and run in the terminal:

npx playwright show-trace test-results/tc6yestvguidetest-Home-Page-Test/trace.zip

## Running your Tests
I have used a simulator which will run on Embed browser by appetize 
To run the tests on a simulator using the Embed browser by Appetize and Playwright, you can follow these steps. Ensure you have Visual Studio Code installed on your system:

Instructions to Set Up and Run Tests
Open the Project:

Launch Visual Studio Code and open the project folder.
Open the Terminal:

In Visual Studio Code, open the integrated terminal by selecting Terminal > New Terminal from the menu.
Install Dependencies:

Run the following command to install Node Package Manager (npm) dependencies:
npm install
This will ensure all required packages specified in the package.json file are installed.

Install Playwright:
Install Playwright and its required dependencies by running:
npx playwright install
This step will set up browsers and dependencies required by Playwright.

Run the Tests:
Execute the following command to run the tests:
npx playwright test
This will initiate the tests using the Playwright framework.

View Test Results:
Once the tests are complete, Playwright will generate a report. You can view detailed test results in the terminal or, for an HTML report, run:

npx playwright show-report or

You can replace the test name in the following command and run in the terminal:

npx playwright show-trace test-results/tc6yestvguidetest-Home-Page-Test/trace.zip

Test case names

tc1 = Scenario 1
tc2 = Scenario 2
tc3 = Scenario 3
tc4 = Scenario 4
tc5 = Scenario 5
tc6 = Scenario 6
tc7 = Scenario 7

