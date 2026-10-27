// Conditional Statements - Automation Examples
// 1. if Statement
// ============================================================
// Syntax:
// if (condition) {
//     // Code executes if condition is true
// }
// Definition:
// The if statement executes a block of code only when
// the specified condition is true.

console.log("========Example 1: API Status Code Validation=======")
let statusCode = 200;
if (statusCode === 200) {
    // 200 === 200 -> true
    console.log("API Test Passed");
}
console.log("Program Completed");
console.log("==============Example 2: Condition is False============")
statusCode = 400;
if (statusCode === 200) {
    // 400 === 200 -> false
    // The if block will not execute.
    console.log("API Test Passed");
}
console.log("Program Completed");
console.log("==============2. if...else Statement=========")
// Definition:
// The if...else statement provides two execution paths.
//
// If the condition is TRUE:
//     if block executes.
//
// If the condition is FALSE:
//     else block executes.

// Syntax:
//
// if (condition) {
//     // Executes when condition is true
// }
// else {
//     // Executes when condition is false
// }

console.log("===============Example 2: Page Title Validation - Pass========")
let actualTitle = "Amazon";

if (actualTitle === "Amazon") {
    // "Amazon" === "Amazon" -> true

    console.log("Title Validation Passed");
}
else {
    console.log("Title Validation Failed");
}
// Output:
// Title Validation Passed
console.log("===============Example 2: Page Title Validation - Fail========")
actualTitle = "Facebook";
if (actualTitle === "Amazon") {
    // "Facebook" === "Amazon" -> false
    console.log("Title Validation Passed");
}
else {
    console.log("Title Validation Failed");
}
// Output:
// Title Validation Failed

// Automation Testing Use Cases

// if statement:
// Used when an action should happen only when
// a specific condition is true.
//
// Examples:
// - Execute code only when API status is 200.
// - Click a button only when a condition is satisfied.
// - Validate a specific application state.

// if...else:
// Used when there are two possible outcomes.
//
// Examples:
// - Test Passed / Test Failed
// - Login Successful / Login Failed
// - Element Found / Element Not Found
// - API Success / API Failure
// - Title Matched / Title Mismatched

// ============================================================
// Important Point
// ============================================================
console.log("==========Prefer strict equality (===) for exact comparisons.=======");
//
// Example:
if (statusCode === 200) {
    console.log("Status code is 200");
}
// Instead of:
if (statusCode == 200) {
    console.log("Status code is 200");
}


