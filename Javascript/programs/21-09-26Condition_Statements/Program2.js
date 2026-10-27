// ============================================================
// 3. if...else if Ladder in JavaScript
// ============================================================

// Definition:
// An if...else if ladder is used when there are multiple
// conditions to check.

// JavaScript checks the conditions from top to bottom.
// The first condition that is TRUE will execute.
// After one block executes, the remaining conditions
// are skipped.

// Syntax:
//
// if (condition1) {
//     // Executes if condition1 is true
// }
// else if (condition2) {
//     // Executes if condition1 is false
//     // and condition2 is true
// }
// else if (condition3) {
//     // Executes if condition1 and condition2 are false
//     // and condition3 is true
// }
// else {
//     // Executes if all conditions are false
// }

// ============================================================
// Example 1: Discount Based on Purchase Amount
// ============================================================

let purchaseAmount = 8500;

if (purchaseAmount >= 10000) {
    // 8500 >= 10000 -> false

    console.log("20% Discount");
}
else if (purchaseAmount >= 5000) {
    // 8500 >= 5000 -> true

    console.log("10% Discount");
}
else if (purchaseAmount >= 2000) {
    console.log("5% Discount");
}
else {
    console.log("No Discount");
}

// Output:
// 10% Discount

// ============================================================
// Example 2: Purchase Amount = 10500
// ============================================================

purchaseAmount = 10500;

if (purchaseAmount >= 10000) {
    // 10500 >= 10000 -> true
    // This block executes.
    // Remaining conditions are skipped.

    console.log("20% Discount");
}
else if (purchaseAmount >= 5000) {
    console.log("10% Discount");
}
else if (purchaseAmount >= 2000) {
    console.log("5% Discount");
}
else {
    console.log("No Discount");
}

// Output:
// 20% Discount

// ============================================================
// Example 3: Purchase Amount = 500
// ============================================================

purchaseAmount = 500;

if (purchaseAmount >= 10000) {
    // 500 >= 10000 -> false

    console.log("20% Discount");
}
else if (purchaseAmount >= 5000) {
    // 500 >= 5000 -> false

    console.log("10% Discount");
}
else if (purchaseAmount >= 2000) {
    // 500 >= 2000 -> false

    console.log("5% Discount");
}
else {
    // All conditions are false.

    console.log("No Discount");
}

// Output:
// No Discount

// ============================================================
// Example 4: Age Classification
// ============================================================

let age = 22;

if (age >= 60) {
    // 22 >= 60 -> false

    console.log("Senior Citizen");
}
else if (age >= 18) {
    // 22 >= 18 -> true

    console.log("Adult");
}
else if (age >= 13) {
    console.log("Teenager");
}
else {
    console.log("Child");
}

// Output:
// Adult

// ============================================================
// Example 5: Age = 15
// ============================================================

age = 15;

if (age >= 60) {
    // 15 >= 60 -> false

    console.log("Senior Citizen");
}
else if (age >= 18) {
    // 15 >= 18 -> false

    console.log("Adult");
}
else if (age >= 13) {
    // 15 >= 13 -> true

    console.log("Teenager");
}
else {
    console.log("Child");
}

// Output:
// Teenager

// ============================================================
// Example 6: Age = 70
// ============================================================

age = 70;

if (age >= 60) {
    // 70 >= 60 -> true
    // First condition is true.

    console.log("Senior Citizen");
}
else if (age >= 18) {
    console.log("Adult");
}
else if (age >= 13) {
    console.log("Teenager");
}
else {
    console.log("Child");
}

// Output:
// Senior Citizen

console.log("Hi");

// ============================================================
// Important Points
// ============================================================

// 1. if...else if is used when multiple conditions
//    need to be checked.

// 2. Conditions are evaluated from top to bottom.

// 3. The first TRUE condition is executed.

// 4. Once a condition is TRUE, the remaining conditions
//    are skipped.

// 5. The final else is optional.

// 6. The order of conditions is very important.

// 7. More specific or higher-range conditions are generally
//    placed before broader conditions.

// ============================================================
// Automation Testing Example
// ============================================================

// if...else if ladders are useful for handling
// different API response status codes.

let statusCode = 404;

if (statusCode === 200) {
    console.log("API Request Successful");
}
else if (statusCode === 400) {
    console.log("Bad Request");
}
else if (statusCode === 401) {
    console.log("Unauthorized");
}
else if (statusCode === 404) {
    console.log("Resource Not Found");
}
else {
    console.log("Unexpected Status Code");
}

// Output:
// Resource Not Found