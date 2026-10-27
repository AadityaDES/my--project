// ============================================================
// 1. Variables in JavaScript
// ============================================================
let name = "Rahul";
console.log(name);
// let       → Keyword that tells JavaScript that we want to create a variable.
// name      → Label/Name that we choose for the variable.
// =         → Assignment operator. It means we are assigning or storing a value in the variable.
// "Rahul"   → The value being stored.
// ;         → Semicolon. It indicates the end of the statement.

// ============================================================
// 2. Why are Variables Required?
// ============================================================
// Variables are used to store data and reuse that data whenever required.
//
// Without variables:
console.log("Hello Raj");
console.log("Welcome Raj");
console.log("Bye Raj");
// If the name changes, we need to change it at multiple places.
//
// With variables:
let name1 = "Rohit";
console.log("Hello " + name1);
console.log("Welcome " + name1);
console.log("Bye " + name1);

// Now, if the name changes, we only need to update the variable.
//
// Variables are very useful in Automation Testing for storing:
// 1. URLs
// 2. Username
// 3. Password
// 4. Test Data
// 5. Expected Results
// 6. Locators
// 7. API Data

// ============================================================
// 3. Naming Rules for Variables
// ============================================================
// Rule 1 - Variable names can start with a letter.
//
// Examples:
let demo = "10";
let test = "20";
let name2 = "Rahul";
// Variable names cannot start with a number.
//
// Incorrect:
// let 123Test = "20";

// Rule 2 - Variable names can start with _ or $
//
// Examples:
let _demo = "Res";
let $Test = "Demo";
// The following is incorrect:
// let #DD = 10;

// Rule 3 - Variable names cannot start with a number.
//
// Incorrect:
// let 455Demo = "Test";

// Rule 4 - Variable names are case-sensitive.
// JavaScript treats uppercase and lowercase letters as different characters.
let Name = "Raj";
// let name4 = "Rohit";
console.log(Name);
// console.log(name4);
// Name and name are two different variable names.

// Rule 5 - Spaces are not allowed in variable names.
//
// Incorrect:
// let first Name = "Ketan";
//
// Correct:
let firstName = "Ketan";
let lastName = "Ketan";

// Rule 6 - Do not use JavaScript reserved keywords as variable names.
//
// Examples of reserved keywords:
// if
// else
// for
// while
// let
// const
// var
// class
// function
//
// Incorrect:
// let if = "Test";
// let for = "Demo";

// ============================================================
// 4. Naming Convention - camelCase
// ============================================================
// JavaScript commonly uses camelCase for variable names.
//
// In camelCase:
// 1. First word starts with lowercase.
// 2. Every new word starts with uppercase.
//
// Examples:
let firstName1 = "Rahul";
let lastName1 = "Sharma";
let employeeId = "EMP001";
let userName = "Admin";
let loginPassword = "admin123";



// ============================================================
// 5. Keywords Used to Declare Variables
// ============================================================
// JavaScript provides three keywords to declare variables:
// 1. var
// 2. let
// 3. const
//
// var   → Introduced in ES1 (1997)
// let   → Introduced in ES6 (2015)
// const → Introduced in ES6 (2015)

// ============================================================
// 6. var
// ============================================================
// var is the older way of declaring variables in JavaScript.
//
// Syntax:
// var variableName = value;
var name3 = "Akshay";
console.log(name3);
var name4 = 10;
var name5 = true;
// var can store different types of values.

// ============================================================
// 7. Re-declaration
// ============================================================
// Re-declaration means creating a variable with the same name again using the same keyword.
//
// Example:
var color = "Red";
var color = "Blue";
console.log(color);
// Output:
// Blue
//
// Explanation:
// var allows re-declaration of the same variable in the same scope.

// ============================================================
// 8. Re-assignment
// ============================================================
// Re-assignment means changing the value of an existing variable without using the declaration keyword again.
//
// Example:
var age = 25;
age = 30;
console.log(age);
// Output:
// 30

// ============================================================
// 9. Function Scope of var
// ============================================================
// var is function-scoped.
// var does NOT have block scope.
//
// Blocks include:
// 1. if
// 2. else
// 3. for
// 4. while
// 5. etc.
//
// Example:
if (true) {
    var x = 10;
}
console.log(x);
// Output:
// 10
//
// Explanation:
// Even though x was created inside the if block, it can still be accessed outside the block 
// because var is function-scoped.

// ============================================================
// 10. Hoisting with var
// ============================================================
// JavaScript moves the declaration of var variables to the top of their scope during the creation phase.
//
// Example:
console.log(a);
var a = 5;
// Output:
// undefined
//
// Explanation:
// The declaration is hoisted, but the value is assigned only when JavaScript reaches:
// var a = 5;

// ============================================================
// 11. Why is var Problematic?
// ============================================================
// Problem 1 - Re-declaration is allowed.
// This can accidentally overwrite an existing variable.

var city = "Pune";
var city = "Mumbai";
console.log(city);
// Output:
// Mumbai
//
// Problem 2 - var is not block-scoped.
// The variable can be accessed outside an if or for block.

if (true) {
    var employeeName = "Rahul";
}
console.log(employeeName);
// Output:
// Rahul
//
// Problem 3 - Hoisting can cause unexpected behavior.
//
// Example:
console.log(value);
var value = 100;
// Output:
// undefined