import { test, expect } from "@playwright/test";

// Import: A keyword used to load code from another module or package.

// ============================================================
// TEST CASE 1
// ============================================================

test("My First Test Case - TC001", async ({ page }) => {

    // Navigate to Facebook
    await page.goto("https://www.facebook.com/"); // Default timeout: 30 seconds

    // Verify the page title
    await expect(page).toHaveTitle("Facebook"); // Default assertion timeout: 5 seconds

});

/*
============================================================
PLAYWRIGHT CONCEPTS
============================================================

1. test
   Used to define a test case.

2. expect
   Used to validate the actual result against the expected result.

3. page
   Represents a browser tab.
   Playwright provides the page fixture automatically.

   Selenium equivalent:
   WebDriver driver = new ChromeDriver();

4. async
   The async keyword is used before a function to make it an
   async function.
   An async function always returns a Promise.

5. Promise
   A built-in JavaScript object representing the eventual
   result of an asynchronous operation.

   Promise states:
   a. Pending   - Result is not available yet.
   b. Fulfilled - Operation completed successfully.
   c. Rejected  - Operation failed.

6. await
   Waits for a Promise's result before continuing inside the
   current async function.

   It does not block the entire JavaScript program.

============================================================
PLAYWRIGHT EXECUTION COMMANDS
============================================================

1. Execute all tests:
   npx playwright test

2. Run tests with a visible browser:
   npx playwright test --headed

3. Run tests using one worker:
   npx playwright test --workers=1

4. Execute a specific test file:
   npx playwright test 2026_10_27_P2.spec.js

5. Execute tests using Chromium:
   npx playwright test --project=chromium

============================================================
NPM AND NPX
============================================================

npm:
Node Package Manager. Used to install and manage packages.

npx:
A command-line tool used to execute package commands,
such as the Playwright test runner.

============================================================
*/