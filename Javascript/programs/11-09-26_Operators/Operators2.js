
// 37. Logical Operators
// Logical operators are used to combine multiple conditions.
// JavaScript provides 3 main logical operators:
// &&  → Logical AND
// ||  → Logical OR
// !   → Logical NOT

// ============================================================
console.log("==========38)Logical AND (&&)===========")
// AND returns true only when BOTH conditions are true.
// Truth Table:
// A       B       Result
// ----------------------
// true    true    true
// true    false   false
// false   true    false
// false   false   false


let age = 20;
let hasID = true;
let has = false;

console.log(age >= 18 && hasID);
// true && true → true

console.log(age >= 28 && hasID);
// false && true → false

console.log(age >= 28 && has);
// false && false → false

console.log(age >= 18 && has);
// true && false → false


// ============================================================
console.log("=========// 39. Logical OR (||)===============")
// OR returns true when AT LEAST ONE condition is true.
// Truth Table:
// A       B       Result
// ----------------------
// true    true    true
// true    false   true
// false   true    true
// false   false   false

console.log(age >= 18 || hasID);
// true || true → true

console.log(age >= 28 || hasID);
// false || true → true

console.log(age >= 28 || has);
// false || false → false

console.log(age >= 18 || has);
// true || false → true


// ============================================================
console.log("==================// 40. Logical NOT (!)===============")
// NOT reverses the Boolean value.
//
// true  → false
// false → true
console.log(!true);
// false

console.log(!false);
// true

let isLoggedIn = true;

console.log(!isLoggedIn);
// false

// ============================================================
// 41. Logical Operators with Non-Boolean Values
// ============================================================

// Logical operators do not always return true or false.
//
// && and || can return one of the actual operand values.
//
// JavaScript considers some values as falsy.
//

// Common falsy values:
// false
// 0
// ""
// null
// undefined
// NaN
//
// Other values are generally truthy.


// ============================================================
console.log("===========42. AND (&&) with Values=================")
// ============================================================
// For &&:
// If the first value is falsy,
// JavaScript returns the first value.
// If the first value is truthy,
// JavaScript evaluates and returns the second value.

console.log(false && "Hello");
// Output:
// false

console.log("Hello" && true);
// Output:
// true

console.log(0 && "Hello");
// Output:
// 0

console.log(1 && "Hello");
// Output:
// Hello

console.log("Hello" && 0);
// Output:
// 0

//A falsy hai → A return
//A truthy hai → B return

// ============================================================
console.log("===================43. OR (||) with Values=====================")
// For ||:
// If the first value is truthy,
// JavaScript returns the first value.
//
// If the first value is falsy,
// JavaScript evaluates and returns the second value.

console.log(true || "Hello");
// Output:
// true

console.log("Hello" || "JavaScript");
// Output:
// Hello

console.log(0 || "Hello");
// Output:
// Hello

console.log(false || "Hello");
// Output:
// Hello

console.log("" || "Guest");
// Output:
// Guest


console.log("================Ternary Operator========================");
// ============================================================
// Ternary operator is a short form of if...else.
//
// Syntax:
//
// condition ? valueIfTrue : valueIfFalse
let age1 = 20;

let status1 = age1 >= 18 ? "Adult" : "Minor";

console.log(status1);
// Output:
// Adult

age1 = 10;

let status2 = age1 >= 18 ? "Adult" : "Minor";

console.log(status2);
// Output:
// Minor


// Same logic using if...else:
//
// if (age1 >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }
console.log("========45. Ternary Operator - Practical Example================");

let marks = 75;

let result = marks >= 35 ? "Pass" : "Fail";

console.log(result);
// Output:
// Pass


result = marks <= 35 ? "Pass" : "Fail";

console.log(result);
// Output:
// Fail


// Important:
// If the requirement is "marks greater than or equal to 35",
// use:
// marks >= 35
//
// Using:
// marks <= 35
// means marks are less than or equal to 35.


console.log(" ===========46. typeof Operator=========================")

// typeof is used to check the data type of a value.
//
// Syntax:
//
// typeof value

let name = "Rohit";

console.log(typeof name);
// Output:
// string

console.log(typeof 10);
// Output:
// number

console.log(typeof true);
// Output:
// boolean

console.log(typeof undefined);
// Output:
// undefined

console.log(typeof null);
// Output:
// object


console.log(" ===========47. Type Conversion with + Operator============")
// ============================================================

// The + operator can perform:
// 1. Addition
// 2. String concatenation
//
// If a string is involved with +,
// JavaScript can convert the other value to a string.

console.log(1 + "2" + 3);
// Output:
// 123
//
// Step 1:
// 1 + "2" → "12"
//
// Step 2:
// "12" + 3 → "123"


console.log(1 + 2 + "3");
// Output:
// 33
//
// Step 1:
// 1 + 2 → 3
//
// Step 2:
// 3 + "3" → "33"


console.log("3" + 2 + 1);
// Output:
// 321
//
// Once the expression starts with a string,
// + performs string concatenation from left to right.


console.log("=======48)Boolean Type Conversion in Arthimetac==============");
// When Boolean values are used in arithmetic operations:
//
// true  → 1
// false → 0
console.log(true + true);
// 1 + 1
// Output:
// 2


console.log(true + false);
// 1 + 0
// Output:
// 1


console.log(false + false);
// 0 + 0
// Output:
// 0


console.log(true + 1);
// 1 + 1
// Output:
// 2


// ============================================================
// 49. Important Points for Automation Testing
// ============================================================

// && is commonly used when ALL conditions must be satisfied.
//
// Example:
//
// Username should be valid AND password should be valid.
//
// usernameValid && passwordValid


// || is commonly used when ANY ONE condition can be satisfied.
//
// Example:
//
// User can access the page if they are Admin OR Manager.
//
// isAdmin || isManager


// ! is used to reverse a condition.
//
// Example:
//
// !isLoggedIn


// Ternary operator is useful for simple if...else decisions.
//
// Example:
//
// status = isValid ? "Pass" : "Fail"


// typeof is useful when validating the data type
// of test data or API response values.