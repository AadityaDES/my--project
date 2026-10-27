// ============================================================
// JavaScript Operators
// ============================================================

// Definition:
// An operator is a symbol that performs an operation
// on one or more values.

// The values on which an operator performs an operation
// are called operands.

// Example:
// a + b
// a and b -> Operands
// +       -> Operator

// ============================================================
// 1. Arithmetic Operators
// ============================================================

// Arithmetic operators are used to perform mathematical
// calculations.

// Operators:
// +   Addition
// -   Subtraction
// *   Multiplication
// /   Division
// %   Modulus
// **  Exponentiation

let a = 10;
let b = 3;

console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.3333333333333335
console.log(a % b);   // 1
console.log(a ** 2);  // 100

// % returns the remainder after division.

// ============================================================
// 2. Assignment Operators
// ============================================================

// Assignment operators are used to assign or update
// the value of a variable.

// =    Assignment
// +=   Addition assignment
// -=   Subtraction assignment
// *=   Multiplication assignment
// /=   Division assignment
// %=   Modulus assignment
// **=  Exponentiation assignment

let x = 5;

x += 2;   // x = x + 2  -> 7
x -= 1;   // x = x - 1  -> 6
x *= 3;   // x = x * 3  -> 18
x /= 2;   // x = x / 2  -> 9

console.log(x);  // 9

// ============================================================
// 3. Comparison Operators
// ============================================================

// Comparison operators compare two values
// and return either true or false.

// >    Greater than
// <    Less than
// >=   Greater than or equal to
// <=   Less than or equal to
// ==   Equal to
// ===  Strictly equal to
// !=   Not equal to
// !==  Strictly not equal to

console.log(10 > 3);       // true
console.log(10 < 3);       // false
console.log(10 >= 10);     // true
console.log(10 <= 5);      // false

// ==
// Compares values after type conversion when necessary.

console.log(10 == "10");   // true

// ===
// Compares both value and data type.
// No automatic type conversion is performed.

console.log(10 === "10");  // false

console.log(10 != 5);      // true
console.log(10 !== "10");  // true

// In automation testing, === is generally preferred
// when you want an exact value and data type comparison.

// ============================================================
// 4. Logical Operators
// ============================================================

// Logical operators are mainly used to combine
// multiple conditions.

// && -> AND
// || -> OR
// !  -> NOT

// ------------------------------------------------------------
// AND (&&)
// ------------------------------------------------------------

// Both conditions must be true for the overall
// condition to be true.

console.log(true && false); // false
console.log(true && true);  // true
console.log(false && true); // false
console.log(false && false);// false

// Truth Table:
//
// A      B      A && B
// true   true   true
// true   false  false
// false  true   false
// false  false  false

// ------------------------------------------------------------
// OR (||)
// ------------------------------------------------------------

// At least one condition must be true
// for the overall condition to be true.

console.log(true || false); // true
console.log(true || true);  // true
console.log(false || true); // true
console.log(false || false);// false

// Truth Table:
//
// A      B      A || B
// true   true   true
// true   false  true
// false  true   true
// false  false  false

// ============================================================
// 5. Increment and Decrement Operators
// ============================================================

// ++ -> Increment by 1
// -- -> Decrement by 1

let n = 5;

n++;   // n = 6
n--;   // n = 5
n--;   // n = 4

console.log(n); // 4

// ------------------------------------------------------------
// Post-Increment
// ------------------------------------------------------------

// value++
// First returns/uses the current value,
// then increases the value by 1.

let p = 5;

console.log(p++); // 5
console.log(p);   // 6

// ------------------------------------------------------------
// Pre-Increment
// ------------------------------------------------------------

// ++value
// First increases the value by 1,
// then returns/uses the updated value.

let q = 5;

console.log(++q); // 6

// ------------------------------------------------------------
// Post-Decrement
// ------------------------------------------------------------

let r = 5;

console.log(r--); // 5
console.log(r);   // 4

// ------------------------------------------------------------
// Pre-Decrement
// ------------------------------------------------------------

let s = 5;

console.log(--s); // 4

// ============================================================
// 6. Ternary Operator
// ============================================================

// The ternary operator is a short form of if...else.

// Syntax:
// condition ? valueIfTrue : valueIfFalse;

// Example:

let marks = 80;

let result = marks > 35 ? "Pass" : "Fail";

console.log(result); // Pass

marks = 30;

result = marks > 35 ? "Pass" : "Fail";

console.log(result); // Fail

// Another Example:

let age = 20;

let status = age >= 18 ? "Adult" : "Minor";

console.log(status); // Adult

// ============================================================
// Automation Testing Examples
// ============================================================

// Comparison operators are frequently used in assertions.

let actualTitle = "OrangeHRM";
let expectedTitle = "OrangeHRM";

console.log(actualTitle === expectedTitle); // true

// Logical operators can combine multiple conditions.

let username = "Admin";
let password = "admin123";

let validUser = username === "Admin";
let validPassword = password === "admin123";

console.log(validUser && validPassword); // true

// Ternary operator can be used for simple conditional values.

let testPassed = true;

let testResult = testPassed ? "Test Passed" : "Test Failed";

console.log(testResult); // Test Passed