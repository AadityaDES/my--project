// ============================================================
// 2. if...else Statement
// ============================================================

// Definition:
// The if...else statement provides two execution paths.
//
// One block executes when the condition is TRUE.
// The other block executes when the condition is FALSE.

// Syntax:
//
// if (condition) {
//     // Executes when condition is TRUE
// }
// else {
//     // Executes when condition is FALSE
// }
console.log("======Example 1: Pass or Fail=========")
let marks = 45;
if (marks >= 50) {
    // 45 >= 50 -> false
    console.log("Result: Pass");
}
else {
    console.log("Result: Fail");
}
// Output:
// Result: Fail

marks = 55;
if (marks >= 50) {
    // 55 >= 50 -> true
    console.log("Result: Pass");
}
else {
    console.log("Result: Fail");
}
// Output:
// Result: Pass

console.log("PC");
console.log("-----------------------");
console.log("=========Example 2: Even or Odd Number============")

// % (Modulus) returns the remainder after division.
//
// Even number -> remainder is 0 when divided by 2.
// Odd number  -> remainder is 1 when divided by 2.
let number = 7;
if (number % 2 === 0) {
    // 7 % 2 -> 1
    // 1 === 0 -> false
    console.log(`${number} is an Even number`);
}
else {
    console.log(`${number} is an Odd number`);
}
// Output:
// 7 is an Odd number
number = 10;

if (number % 2 === 0) {
    // 10 % 2 -> 0
    // 0 === 0 -> true

    console.log(`${number} is an Even number`);
}
else {
    console.log(`${number} is an Odd number`);
}
// Output:
// 10 is an Even number
console.log("========Example 3: Login Validation=======")

let password = "Correct123";
let input = "wrong123";
if (password === input) {
    console.log("Login successful");
    console.log("Redirecting to dashboard");
}
else {
    console.log("Incorrect password");
    console.log("Please try again");
}

// Output:
// Incorrect password
// Please try again
password = "Correct123";
input = "Correct123";
if (password === input) {
    console.log("Login successful");
    console.log("Redirecting to dashboard");
}
else {
    console.log("Incorrect password");
    console.log("Please try again");
}
// Output:
// Login successful
// Redirecting to dashboard

console.log(" =========Example 3: Login Validation================")

let orderAmount = 1200;
if (orderAmount >= 1000) {
    // 1200 >= 1000 -> true
    let discount = orderAmount * 0.10;
    let finalAmount = orderAmount - discount;
    console.log(`Discount applied: ${discount}`);
    console.log(`Final Amount: ${finalAmount}`);
}
else {
    console.log("No discount for order below ₹1000");
    console.log("Add more items to unlock the discount");
}
// Output:
// Discount applied: 120
// Final Amount: 1080

orderAmount = 900;
if (orderAmount >= 1000) {
    // 900 >= 1000 -> false
    let discount = orderAmount * 0.10;
    let finalAmount = orderAmount - discount;
    console.log(`Discount applied: ${discount}`);
    console.log(`Final Amount: ${finalAmount}`);
}
else {
    console.log("No discount for order below ₹1000");
    console.log("Add more items to unlock the discount");
}
// Output:
// No discount for order below ₹1000
// Add more items to unlock the discount
console.log("-------------------------------");
console.log("=============Example 5: Age Validation==========")
let age = 16;
if (age >= 18) {
    console.log("Access granted - You are an adult");
}
else {
    console.log("Access denied - You must be 18 or older");
}
// Output:
// Access denied - You must be 18 or older
console.log("-------------------------------");
age = 26;

if (age >= 18) {
    console.log("Access granted - You are an adult");
}
else {
    console.log("Access denied - You must be 18 or older");
}
// Output:
// Access granted - You are an adult

// Important Points
// ============================================================

// 1. if...else always provides two possible execution paths.

// 2. If the condition is true, the if block executes.

// 3. If the condition is false, the else block executes.

// 4. Only one of the two blocks will execute.

// 5. Use === for strict comparison whenever possible.

// 6. if...else is commonly used in automation for:
//    - Login validation
//    - Test result validation
//    - Status validation
//    - Product availability
//    - User access validation
//    - Conditional test execution