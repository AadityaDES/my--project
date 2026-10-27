// ============================================================
// JavaScript Variables
// ============================================================

// Definition:
// A variable is a named container used to store a value.
// The value stored in a variable can be used and modified
// during program execution.

// JavaScript provides three keywords to declare variables:
// 1. var
// 2. let
// 3. const

// ============================================================
// 1. var
// ============================================================

// Syntax:
// var variableName = value;

// Declaration and Initialization
var city = "Mumbai";
var age = 30;
var country = "India";

// ------------------------------------------------------------
// Redeclaration
// ------------------------------------------------------------

// A variable declared using var can be redeclared
// in the same scope.

var city = "Pune";

console.log(city);     // Pune
console.log(age);      // 30
console.log(country);  // India

// ------------------------------------------------------------
// Reassignment
// ------------------------------------------------------------

// A var variable can be reassigned.
// We do not need to use the var keyword again.

age = 35;

console.log(age);      // 35

// ------------------------------------------------------------
// Function Scope
// ------------------------------------------------------------

// var is function-scoped, not block-scoped.
// A var variable declared inside an if block can be
// accessed outside that block, as long as it is within
// the same function/global scope.

if (true) {
    var name1 = "Java";
}

console.log(name1);   // Java

// ============================================================
// 2. let
// ============================================================

// let was introduced in ES6 (2015).

// Syntax:
// let variableName = value;

let city1 = "Mumbai";
let age1 = 40;
let country1 = "India";

console.log(city1);     // Mumbai
console.log(age1);      // 40
console.log(country1);  // India

// ------------------------------------------------------------
// Redeclaration
// ------------------------------------------------------------

// A variable declared using let cannot be redeclared
// in the same scope.

// let city1 = "Pune";   // Error

// ------------------------------------------------------------
// Reassignment
// ------------------------------------------------------------

// A let variable can be reassigned.

city1 = "Pune";

console.log(city1);    // Pune

// ------------------------------------------------------------
// Block Scope
// ------------------------------------------------------------

// let is block-scoped.
// A variable declared inside a block cannot be accessed
// outside that block.

if (true) {
    let name2 = "Python";
}

// console.log(name2);  // Error

// ============================================================
// 3. const
// ============================================================

// const is used to declare a variable whose binding
// cannot be reassigned after initialization.

// Syntax:
// const variableName = value;

// const must be initialized at the time of declaration.

const pi = 3.14;

console.log(pi);       // 3.14

// Reassignment is not allowed.

// pi = 4.12;           // Error

// Redeclaration is also not allowed.

// const pi = 4.12;     // Error

// ============================================================
// var vs let vs const
// ============================================================

// var:
// - Function scoped
// - Can be redeclared
// - Can be reassigned
// - Older way of declaring variables

// let:
// - Block scoped
// - Cannot be redeclared in the same scope
// - Can be reassigned

// const:
// - Block scoped
// - Cannot be redeclared in the same scope
// - Cannot be reassigned
// - Must be initialized during declaration

// ============================================================
// Rules for Naming Variables
// ============================================================

// Rule 1:
// Variable names can start with a letter, underscore (_),
// or dollar sign ($).

let firstName = "Raj";
let _scope = 100;
let $price = 200;

// Rule 2:
// Variable names can contain letters, numbers, underscore,
// and dollar sign.

// The number cannot be the first character.

let url1 = "Admin";

// let 1name = "x";    // Error

// Rule 3:
// Spaces are not allowed in variable names.

// let first Name = "x";  // Error

// Use camelCase instead.

let firstName1 = "Raj";

// Rule 4:
// Reserved keywords cannot be used as variable names.

// let for = "x";       // Error
// let class = "Java";  // Error

// Rule 5:
// JavaScript variable names are case-sensitive.

let test = "java";

// These are different variable names:
// test
// Test
// TEST

console.log(test);    // java

// console.log(Test); // Error

// ============================================================
// Recommended Practice
// ============================================================

// Use let when the value needs to change.

let browser = "Chrome";
browser = "Firefox";

// Use const when the variable should not be reassigned.

const baseUrl = "https://example.com";

// In modern JavaScript, prefer let and const.
// Avoid var unless there is a specific reason to use it.

// For Playwright automation:
// const is commonly used for locators, URLs, configuration,
// test data references, and objects that should not be reassigned.

// let is commonly used for values that change during execution,
// such as counters or calculated values.