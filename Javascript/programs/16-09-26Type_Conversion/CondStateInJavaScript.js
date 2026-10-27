// Conditional Statements in JavaScript

// Definition:
// Conditional statements allow a block of code to execute
// only when a specified condition is true.

// Real-Time Examples:
// If it rains -> Carry an umbrella.
// If marks >= 35 -> Student passes.
// If age >= 18 -> Person can vote.
// If stock > 0 -> Customer can purchase the product.

// Types of Conditional Statements
// ============================================================
// 1. if
// 2. if...else
// 3. if...else if
// 4. Nested if
// 5. switch
// 6. Ternary Operator

// ============================================================
// 1. if Statement

// Definition:
// The if statement executes a block of code only when
// the specified condition is true.

// If the condition is false, the block is skipped.

// Syntax:
//
// if (condition) {
//     // Code executes when condition is true
// }

// Condition Result:
//
// true  -> Execute the code block
// false -> Skip the code block

// Example 1: Student Marks
// ============================================================
console.log("Program started");
let marks = 50;

if (marks >= 60) {
    // 50 >= 60 -> false
    // Code inside the if block will not execute.

    console.log("Congratulations, you passed");
}
marks = 80
if (marks >= 60) {
    // 80 >= 60 -> true
    // Code inside the if block will execute.

    console.log("Congratulations, you passed");
}
console.log("*".repeat(40));

// ============================================================
// Example 2: Product Stock
let stockCount = 0;

if (stockCount > 0) {
    // 0 > 0 -> false
    // Code will not execute.

    console.log("Item is available");
    console.log("You can add it to the cart");
}
stockCount = 10;

if (stockCount > 0) {
    // 10 > 0 -> true
    // Code will execute.

    console.log("Item is available");
    console.log("You can add it to the cart");
}
console.log("*".repeat(40));

// Example 3: Login Status
// ============================================================
let isLoggedIn = true;
if (isLoggedIn === true) {
    // true === true -> true

    console.log("Welcome to Dashboard");
    console.log("Loading your data");
}
console.log("*".repeat(40));
// Important: Assignment (=) vs Comparison (===)
// ============================================================
// =
// Assignment operator.
// It assigns a value to a variable.
// ===
// Strict equality operator.
// It compares both value and data type
// Incorrect:
let x = 5;
// if (x = 10) {
//     console.log("Hi");
// }
// x = 10 assigns 10 to x.
// The assignment expression evaluates to 10.
// Since 10 is a truthy value, the if block executes.
// Correct:
x = 5;

if (x === 10) {
    console.log("Hi");
}
// 5 === 10 -> false
// Therefore, the code block will not execute.

// ============================================================
// Important Automation Example
// ============================================================

// Suppose we want to perform an action only when
// a product is available.
let productAvailable = true;
if (productAvailable === true) {
    console.log("Click on Add to Cart");
}

// Simplified Boolean Condition
//=========================================================
// When the variable itself contains a Boolean value,
// we can directly use it as the condition.
let loggedIn = true;
if (loggedIn) {
    console.log("User is logged in");
}
// Instead of:
if (loggedIn === true) {
    console.log("User is logged in");
}
// Both work, but if (loggedIn) is simpler.
console.log("Program completed");