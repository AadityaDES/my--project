// ============================================================
// JavaScript Data Types
// ============================================================

// Data Type:
// A data type defines what kind of value a variable stores.

// JavaScript is a dynamically typed language.
// We do not need to specify the data type while declaring
// a variable. The data type is determined at runtime.

// JavaScript data types are mainly divided into two categories:
//
// 1. Primitive Data Types
// 2. Non-Primitive Data Types

// ============================================================
// Primitive Data Types
// ============================================================

// Primitive data types represent a single value.

// JavaScript has 7 primitive data types:
//
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol

// ============================================================
// 1. String
// ============================================================

// A String is a sequence of characters used to represent text.

// Strings can be created using:
// 1. Double quotes ""
// 2. Single quotes ''
// 3. Backticks ``

// Double Quotes
let topic = "DataType 4567%^& 456789#pe";

// Single Quotes
let topic1 = 'Variables';

// Backticks
let topic2 = `Type conversion`;

console.log(typeof topic);   // string
console.log(typeof topic1);  // string
console.log(typeof topic2);  // string

console.log(topic);

// ------------------------------------------------------------
// String Concatenation
// ------------------------------------------------------------

let a = "Hello";
let b = "World";

// Using + operator
console.log(a + " " + b);    // Hello World

// Using Template Literal
console.log(`${a} ${b}`);    // Hello World

// Template Literal with variable
let c = `Hi ${a}`;

console.log(c);              // Hi Hello

// ------------------------------------------------------------
// Multi-Line String
// ------------------------------------------------------------

// Single and double quotes cannot directly create
// a multi-line string in this way.

// let demo = "string
// string
// string";

// let demo = 'string
// string
// string';

// Backticks can be used to create multi-line strings.

let demo = `string
string
string`;

console.log(demo);

// ============================================================
// 2. Number
// ============================================================

// Number is used to store numeric values.

// JavaScript Number supports:
// 1. Integer
// 2. Decimal
// 3. Positive numbers
// 4. Negative numbers

let whole = 100;
let decimal = 3.14;
let negative = -50;

console.log(typeof whole);    // number
console.log(typeof decimal);  // number
console.log(typeof negative); // number

// Important:
// JavaScript uses the Number data type for both
// integer and floating-point values.

// ============================================================
// 3. Boolean
// ============================================================

// Boolean can contain only two values:
// true
// false

let isOnline = true;
const isPaid = false;

let isAdult = 20 > 10;

console.log(isAdult);          // true
console.log(typeof isOnline);  // boolean
console.log(typeof isPaid);    // boolean
console.log(typeof isAdult);   // boolean

// Boolean values are commonly used in conditions
// and automation validations.

// ============================================================
// 4. Undefined
// ============================================================

// Undefined means a variable has been declared
// but has not been assigned a value.

let notAssigned;

console.log(notAssigned);       // undefined
console.log(typeof notAssigned); // undefined

// ============================================================
// 5. Null
// ============================================================

// Null represents an intentional absence of a value.
// It is explicitly assigned by the programmer.

let emptyPurpose = null;

console.log(emptyPurpose);        // null
console.log(typeof emptyPurpose); // object

// Important:
// typeof null returns "object".
// This is a historical behavior in JavaScript.
// Null itself is a primitive data type.

// ============================================================
// 6. BigInt
// ============================================================

// BigInt is used to store very large integer values
// beyond the safe integer range of the Number data type.

// A BigInt value is created by adding n at the end
// of an integer.

let normalMax = 3456098764567;

console.log(typeof normalMax);    // number

normalMax = 3456098764567n;

console.log(typeof normalMax);    // bigint

// Example:
let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);    // bigint

// Important:
// BigInt and Number should not be directly mixed
// in arithmetic operations.

// ============================================================
// 7. Symbol
// ============================================================

// Symbol creates a unique primitive value.

// Even if two Symbols have the same description,
// they are still different values.

let id1 = Symbol("Test");
let id2 = Symbol("Test");

console.log(id1 == id2);      // false
console.log(id1 === id2);     // false

console.log(typeof id1);      // symbol
console.log(typeof id2);      // symbol

// ============================================================
// Primitive Data Types - Summary
// ============================================================

// String    -> Text
// Number    -> Numeric values
// Boolean   -> true / false
// Undefined -> Declared but no value assigned
// Null      -> Intentional absence of value
// BigInt    -> Very large integers
// Symbol    -> Unique identifier/value

// ============================================================
// Automation Testing Example
// ============================================================

// Different types of test data are commonly used
// in Playwright automation.

let username = "Admin";       // String
let retryCount = 3;           // Number
let isLoggedIn = true;        // Boolean
let testData;                 // Undefined
let optionalValue = null;     // Null

console.log(typeof username);
console.log(typeof retryCount);
console.log(typeof isLoggedIn);
console.log(typeof testData);
console.log(typeof optionalValue);