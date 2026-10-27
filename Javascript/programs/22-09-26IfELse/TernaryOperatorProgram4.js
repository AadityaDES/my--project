// ============================================================
// Ternary Operator in JavaScript
// ============================================================

// Definition:
// The ternary operator is a short way of writing a simple
// if...else statement.

// It has three parts:
//
// 1. Condition
// 2. Value if condition is TRUE
// 3. Value if condition is FALSE

// Syntax:
//
// let variableName = condition ? valueIfTrue : valueIfFalse;

// ============================================================
// Example 1: Using if...else
// ============================================================

let age = 10;
let access;

if (age >= 18) {
    // 10 >= 18 -> false

    access = "Allowed";
}
else {
    access = "Denied";
}

console.log(access);

// Output:
// Denied

console.log("*".repeat(50));

// ============================================================
// Example 2: Same Logic Using Ternary Operator
// ============================================================

age = 20;

access = age >= 18 ? "Allowed" : "Denied";

console.log(access);

// Output:
// Allowed

age = 10;

access = age >= 18 ? "Allowed" : "Denied";

console.log(access);

// Output:
// Denied

console.log("*".repeat(50));

// ============================================================
// Example 3: Pass or Fail
// ============================================================

let marks = 22;

let result = marks >= 35 ? "Pass" : "Fail";

console.log(result);

// Output:
// Fail

console.log("*".repeat(50));

marks = 75;

result = marks >= 35 ? "Pass" : "Fail";

console.log(result);

// Output:
// Pass

console.log("*".repeat(50));

// ============================================================
// Example 4: Chained Ternary Operator
// ============================================================

// A ternary operator can be chained when multiple
// conditions need to be checked.
//
// However, chained ternary expressions can become
// difficult to read when there are many conditions.

// Grade Rules:
//
// >= 90 -> A+
// >= 80 -> A
// >= 60 -> C
// >= 50 -> D
// Otherwise -> F

let score = 30;

let grade = score >= 90 ? "A+"
    : score >= 80 ? "A"
    : score >= 60 ? "C"
    : score >= 50 ? "D"
    : "F";

console.log(grade);

// Output:
// F

console.log("*".repeat(50));

// ============================================================
// Example 5: Score = 55
// ============================================================

score = 55;

grade = score >= 90 ? "A+"
    : score >= 80 ? "A"
    : score >= 60 ? "C"
    : score >= 50 ? "D"
    : "F";

console.log(grade);

// Output:
// D

console.log("*".repeat(50));

// ============================================================
// Example 6: Even or Odd
// ============================================================

let number = 15;

let output = number % 2 === 0
    ? "Even Number"
    : "Odd Number";

console.log(output);

// Output:
// Odd Number

// ============================================================
// Example 7: Voting Eligibility
// ============================================================

let voterAge = 27;

let status = voterAge >= 18
    ? "Eligible to Vote"
    : "Not Eligible to Vote";

console.log(status);

// Output:
// Eligible to Vote

// ============================================================
// Example 8: Login Status
// ============================================================

let isLoggedIn = true;

let loginStatus = isLoggedIn
    ? "User is Logged In"
    : "User is Not Logged In";

console.log(loginStatus);

// Output:
// User is Logged In

// ============================================================
// Ternary Operator vs if...else
// ============================================================

// if...else:
//
// if (condition) {
//     value = "Yes";
// }
// else {
//     value = "No";
// }

// Ternary:
//
// value = condition ? "Yes" : "No";

// Ternary is useful when:
// - There are only two possible outcomes.
// - The logic is simple.
// - We want to assign a value based on a condition.

// ============================================================
// Automation Testing Example
// ============================================================

// Ternary operators can be useful for simple test
// data or status decisions.

let testPassed = true;

let testResult = testPassed
    ? "Test Passed"
    : "Test Failed";

console.log(testResult);

// Output:
// Test Passed

// ============================================================
// Important Points
// ============================================================

// 1. Ternary operator is also called the conditional operator.

// 2. It has three parts:
//    condition ? valueIfTrue : valueIfFalse

// 3. It is mainly used as a short form of if...else.

// 4. The condition must produce a truthy or falsy result.

// 5. Ternary is best for simple conditions.

// 6. Avoid deeply nested/chained ternary expressions
//    when they make the code difficult to understand.

// 7. For complex business logic, use if...else or
//    if...else if instead.