// ============================================================
// JavaScript Type Casting / Type Conversion
// ============================================================

// Definition:
// Type Conversion means changing a value from one data type
// into another data type.

// JavaScript Type Conversion is mainly divided into:
// 1. Implicit Type Conversion
// 2. Explicit Type Conversion

// ============================================================
// 1. Implicit Type Conversion
// ============================================================

// Definition:
// Implicit Type Conversion means JavaScript automatically
// converts one data type into another when required.

// It is also called:
// Automatic Type Conversion
// Type Coercion
console.log(" ======String Conversion with +=============")
// Important Rule:
// If one operand of + is a String,
// JavaScript converts the other operand into a String
// and performs string concatenation.

console.log("10" + 2);       // "102"
let a = "10";
let b = 2;
let c = a + b;
console.log(c);              // "102"
console.log(typeof c);       // string
// Another Example:
console.log(5 + "2");        // "52"
console.log(5 + "2" + 1);    // "521"
console.log("5" + 2 + 1);    // "521"

console.log(" ======Arithmetic Conversion=============")
// Important Rule:
// Arithmetic operators such as -, *, /, and %
// automatically convert numeric strings into numbers
// when possible.

// - operator
console.log("5" - 2);        // 3
let x = "5";
let y = 2;
let z = x - y;
console.log(z);              // 3
console.log(typeof z);       // number

// * operator
console.log("5" * 2);        // 10
// / operator
console.log("10" / 2);       // 5
// % operator
console.log("10" % 3);       // 1

console.log(" ======Boolean Conversion in Arithmetic=============")
// When Boolean values are used in arithmetic:
// true  -> 1
// false -> 0

console.log(true + 1);       // 2
console.log(false + 1);      // 1
console.log(true * 2);       // 2
console.log(false * 2);      // 0
// String + Number
// ============================================================
// + with a String performs concatenation.
console.log("Hi" + 1);       // "Hi1"
// Other arithmetic operators try to convert
// the values into numbers.
console.log("Hi" - 1);       // NaN
console.log("Hi" * 1);       // NaN
console.log("Hi" / 1);       // NaN

// NaN means Not a Number.
console.log("======================2. Explicit Type Conversion===================")
// ============================================================
// Definition:
// Explicit Type Conversion means manually converting
// one data type into another data type.
// Common JavaScript functions:
// String()
// Number()
// Boolean()
// parseInt()
// parseFloat()
// String()
// ============================================================
// Converts a value into a String.

console.log("100");
let d = "100";
console.log(d, typeof d);    // 100 string
let stringValue = String(200);
console.log(stringValue, typeof stringValue); // 200 string

// Number()
// Converts a value into a Number.
let numberValue = Number(d);
console.log(numberValue, typeof numberValue); // 100 number
console.log(Number("50"));     // 50
console.log(Number("3.14"));   // 3.14
console.log(Number(true));     // 1
console.log(Number(false));    // 0
// Invalid numeric string
console.log(Number("Hello"));  // NaN
console.log("=======================Boolean()========================")
// Converts a value into true or false.
console.log(Boolean(0));        // false
console.log(Boolean(1));        // true
console.log(Boolean("Hello"));  // true
console.log(Boolean(""));       // false

console.log("========================parseInt()============================")
// Converts/extracts an integer from the beginning
// of a string.
console.log(parseInt("100tdd")); // 100
console.log(parseInt("4.233"));  // 4
console.log(parseInt("123.99")); // 123
// If the value does not start with a valid number:
console.log(parseInt("Hi"));     // NaN

console.log("===========================parseFloat()================================")
// Converts/extracts a floating-point number from
// the beginning of a string.
console.log(parseFloat("4.233"));    // 4.233
console.log(parseFloat("123.45ABC")); // 123.45

// Type Conversion in Conditions
// ============================================================
// JavaScript can automatically convert values to Boolean
// when they are used in a condition.
// Example:

let age = 20;
if (age > 18) {
    console.log("Eligible");
}

// age > 18 is a comparison expression.
// The result of the comparison is a Boolean value.
// true  -> condition executes
// false -> condition does not execute
console.log("===========================Implicit vs Explicit Type Conversion================")
// Implicit:
// JavaScript performs the conversion automatically.
let value1 = "10";
let value2 = 2;
console.log(value1 - value2);  // 8
// Explicit:
// Programmer performs the conversion manually.
let value3 = "10";
let value4 = Number(value3);
console.log(value4 + 2);       // 12

// Automation Testing Note
// ============================================================
// Type conversion is important in automation because
// test data from JSON, Excel, CSV, API responses,
// environment variables, or configuration files
// may be received as strings.

// Example:

let expectedCount = "10";
console.log(typeof expectedCount); // string
let count = Number(expectedCount);
console.log(typeof count);         // number
console.log(count + 5);             // 15

// In Playwright automation, commonly used conversions are:
// String()
// Number()
// Boolean()
// parseInt()
// parseFloat()