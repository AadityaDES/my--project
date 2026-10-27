
// Types of Comments in JavaScript

// Q)What is a Comment?
// A comment is a line or group of lines written inside the code
// to explain the code or provide additional information.
//Comments are ignored by JavaScript during program execution.

// Comments are mainly used for:
// 1. Explaining the code
// 2. Improving code readability
// 3. Providing information to other developers
// 4. Temporarily disabling code
// 5. Debugging the program

// JavaScript supports two types of comments:
// 1. Single-Line Comment
// 2. Multi-Line Comment

// Type 1 - Single-Line Comment

// A single-line comment starts with double forward slash (//).
// Everything written after // on the same line is treated as
// a comment and JavaScript will not execute it.
//
// Syntax:
// Example of Single-Line Comment
// console.log("Hello World");
// console.log("Javascript");
console.log("Typescript");
// In the above example:
// console.log("Hello World"); is commented, so it will not execute.
// console.log("Javascript"); is commented, so it will not execute.
// console.log("Typescript"); is not commented, so it will execute.

// Type 2 - Multi-Line Comment

// A multi-line comment starts with /* and ends with */.
// It is used when we want to comment multiple lines of code.
// Syntax:
// 
 /*
//    Your comment
//    Your comment
//    Your comment
// */


// Example of Multi-Line Comment

/*
console.log("Hello World");

console.log("Javascript");

console.log("Typescript");
*/

// All the statements between /* and */ are treated as comments.
// Therefore, none of the above console.log() statements will execute.

// ============================================================
// Example of Multi-Line Comment with Theory
// ============================================================

/*
Multi-Line Comment Example:

A multi-line comment can contain multiple lines of text or code.

It is useful when:
1. We want to explain a block of code.
2. We want to temporarily disable multiple lines.
3. We want to provide detailed information.
4. We want to document a section of the program.
*/


// ============================================================
// Code Outside Comments
// ============================================================

// The following code will execute because it is not commented.

console.log("Program Started");
console.log("Program End");

// ============================================================
// Output
// ============================================================

// Typescript
// Program Started
// Program End


// ============================================================
// Important Points
// ============================================================

// 1. Comments are ignored during JavaScript execution.

// 2. Single-line comments use:
//    //

// 3. Multi-line comments use:
//    /*
//    */

// 4. Comments do not affect the output of the program.

// 5. Comments are useful for explaining and documenting code.

// 6. Comments are very useful in Automation Testing for
//    explaining test steps, locators, test data, and logic.

// Example in Playwright Automation:
//
// // Navigate to login page
// await page.goto("https://example.com");
//
// // Enter username
// await page.locator("#username").fill("admin");
//
// // Click on Login button
// await page.locator("#login").click();


// ============================================================
// End of Program
// ============================================================