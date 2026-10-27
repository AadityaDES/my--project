// ============================================================
// Non-Primitive Data Types
// ============================================================

// Non-primitive data types are used to store collections
// of values or more complex data structures.

// Common Non-Primitive Data Types:
// 1. Object
// 2. Array
// 3. Function

// Non-primitive values are reference types.

// ============================================================
// 1. Object
// ============================================================

// Definition:
// An object is a collection of related data stored
// in key-value pairs.

// Syntax:
// let objectName = {
//     key: value
// };

// Example:

let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025
};

console.log(car);
console.log(typeof car);    // object

// Accessing Object Properties
// Using dot notation

console.log(car.brand);     // Toyota
console.log(car.model);     // Fortuner
console.log(car.year);      // 2025

// Object representation:
//
// car = {
//     brand: "Toyota",
//     model: "Fortuner",
//     year: 2025
// }

// brand, model, year -> Keys / Properties
// Toyota, Fortuner, 2025 -> Values

// ============================================================
// 2. Array
// ============================================================

// Definition:
// An array is an ordered collection of values.

// Array elements are stored using indexes.
// Index starts from 0.

// Syntax:
// let arrayName = [value1, value2, value3];

// Example:

let arr = [10, 20, 30, 40, "Test", true, -20];

// Index:
//          0   1   2   3      4       5    6

console.log(arr);

// Accessing Array Elements

console.log(arr[0]);    // 10
console.log(arr[1]);    // 20
console.log(arr[4]);    // Test
console.log(arr[5]);    // true

// Array can store different data types in JavaScript.

// Example:
// Number  -> 10
// String  -> "Test"
// Boolean -> true

// Internally, an array is an object with special
// behavior for ordered elements and indexes.

// Conceptually:
//
// arr = {
//     0: 10,
//     1: 20,
//     2: 30,
//     3: 40,
//     4: "Test",
//     5: true,
//     6: -20
// }

// typeof Array returns "object"

console.log(typeof arr);  // object

// To specifically check whether a value is an array,
// use Array.isArray().

console.log(Array.isArray(arr)); // true

// ============================================================
// 3. Function
// ============================================================

// Definition:
// A function is a reusable block of code designed
// to perform a specific task.

// Instead of writing the same code multiple times,
// we can write it once inside a function and call it
// whenever required.

// Without Function:

console.log("Hi this is javascript function");
console.log("Hi this is javascript function");
console.log("Hi this is javascript function");
console.log("Hi this is javascript function");
console.log("Hi this is javascript function");

console.log("--------------------------");

// ------------------------------------------------------------
// Using Function
// ------------------------------------------------------------

// Syntax:
// function functionName() {
//     // code
// }

// Function Declaration

function message() {
    console.log("Hi this is javascript function");
}

// Calling the function

message();
message();
message();
message();
message();

// typeof function

console.log(typeof message);  // function

// Non-Primitive:
// Used for collections or more complex structures.

// Examples:
// Object
// Array
// Function

// ============================================================
// Important Points
// ============================================================

// 1. Object stores data in key-value pairs.
// 2. Array stores ordered elements using indexes.
// 3. Array indexing starts from 0.
// 4. JavaScript arrays can contain different data types.
// 5. typeof array returns "object".
// 6. Array.isArray() is used to check whether a value is an array.
// 7. Function is a reusable block of code.
// 8. Functions are also objects in JavaScript's object model,
//    although typeof function returns "function".
// 9. Object, Array, and Function are reference types.