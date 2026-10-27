// ============================================================
// 3. if...else if...else Statement
// ============================================================

// Definition:
// The if...else if...else statement is used when we need
// to check multiple conditions.

// JavaScript checks the conditions from top to bottom.

// The first condition that is TRUE will execute,
// and the remaining conditions will be skipped.

// Syntax:
//
// if (condition1) {
//     // Executes when condition1 is true
// }
// else if (condition2) {
//     // Executes when condition1 is false
//     // and condition2 is true
// }
// else if (condition3) {
//     // Executes when condition1 and condition2 are false
//     // and condition3 is true
// }
// else {
//     // Executes when all conditions are false
// }

// Example 1: Grade Calculation

let marks = 60;
if (marks >= 90) {
    // 60 >= 90 -> false

    console.log("Grade: A+");
}
else if (marks >= 80) {
    // 60 >= 80 -> false

    console.log("Grade: A");
}
else if (marks >= 60) {
    // 60 >= 60 -> true
    // This block will execute.
    console.log("Grade: C");
}
else if (marks >= 50) {
    console.log("Grade: D");
}
else {
    console.log("Failed");
}
// Output:
// Grade: C
console.log("=======Example 2: Another Grade Calculation============")
marks = 35;

if (marks >= 90) {
    // 35 >= 90 -> false
    console.log("Grade: A+");
}
else if (marks >= 80) {
    // 35 >= 80 -> false
    console.log("Grade: A");
}
else if (marks >= 60) {
    // 35 >= 60 -> false
    console.log("Grade: C");
}
else if (marks >= 50) {
    // 35 >= 50 -> false
    console.log("Grade: D");
}
else {
    // All above conditions are false.
    console.log("Failed");
}

// Output:
// Failed
// Important Point: Order of Conditions
// ============================================================
// Conditions should generally be written from the
// highest range to the lowest range.
// Correct:
let score = 85;
if (score >= 90) {
    console.log("Grade: A+");
}
else if (score >= 80) {
    console.log("Grade: A");
}
else if (score >= 60) {
    console.log("Grade: C");
}
else {
    console.log("Failed");
}

// 85 >= 90 -> false
// 85 >= 80 -> true
// Grade A is printed.
// Remaining conditions are skipped.

console.log("==========4.Nested if Statement===========")
// Definition:
// A nested if means placing one if statement inside
// another if statement.

// Syntax:
//
// if (condition1) {
//
//     if (condition2) {
//         // Code executes when both conditions are true
//     }
//
// }

// Example:

let age = 25;
let hasID = true;

if (age >= 18) {
    // First condition

    console.log("Age requirement satisfied");

    if (hasID === true) {
        // Second condition

        console.log("ID verified");
        console.log("Access granted");
    }
}
console.log("==========Nested If Calculations===========")
age = 25;
hasID = false;

if (age >= 18) {
    console.log("Age requirement satisfied");

    if (hasID === true) {
        console.log("ID verified");
        console.log("Access granted");
    }
}
// Outer if is true,
// but inner if is false,
// so the inner block will not execute.
console.log("==========Nested if vs else if===========")
// else if:
// Used to check multiple alternative conditions.
// Example:
// Grade calculation
// Marks >= 90
// Marks >= 80
// Marks >= 60

// Nested if:
// Used when one condition depends on another condition.
// Example:
// Age >= 18
//     AND
// Has valid ID
console.log("============Automation Testing Examples=======")

// if...else if can be used for different application statuses.
let statusCode = 200;
if (statusCode === 200) {
    console.log("Request successful");
}
else if (statusCode === 401) {
    console.log("Unauthorized request");
}
else if (statusCode === 404) {
    console.log("Resource not found");
}
else {
    console.log("Unexpected status code");
}
// Nested if can be used when one validation depends
// on another validation.
let isLoggedIn = true;
let isAdmin = true;
if (isLoggedIn === true) {
    console.log("User is logged in");

    if (isAdmin === true) {
        console.log("Admin dashboard can be accessed");
    }
}
// ============================================================
// Important Points
// ============================================================

// 1. if...else if...else is used for multiple conditions.

// 2. Conditions are checked from top to bottom.

// 3. The first TRUE condition is executed.

// 4. After one condition is executed,
//    the remaining else-if conditions are skipped.

// 5. else is optional.

// 6. Multiple else-if blocks can be used.

// 7. Nested if means an if statement inside another
//    if statement.

// 8. Use nested if when one condition depends on another.

// 9. Use else if when conditions represent
//    alternative choices.