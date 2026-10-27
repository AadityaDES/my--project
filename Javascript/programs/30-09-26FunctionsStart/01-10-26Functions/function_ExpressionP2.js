// ============================================================
// FUNCTION EXPRESSION
// ============================================================

// A function expression is a function assigned to a variable.
//
// Syntax:
//
// let functionName = function () {
//     // code
// };

// ============================================================
// RETURN STATEMENT
// ============================================================

// 1. A function can return any data type:
//    Number, String, Boolean, Array, Object,
//    Function, null, undefined, etc.
//
// 2. return sends a value back to the caller.
//
// 3. return immediately stops the function execution.
//
// 4. Code written after return is called
//    unreachable / dead code.
//
// 5. A function can have multiple return statements,
//    but only ONE return statement executes
//    during a single function call.
//
// 6. Returned values can be:
//    - Stored in a variable
//    - Reused
//    - Passed to another function


/*
function hello() {

    console.log("Hi Java");

    return "Hi";

    // This code will never execute
    console.log("Hi JavaScript");
}

console.log(hello());

console.log("Hello");
*/


// ============================================================
// JAVASCRIPT HOISTING
// ============================================================

// Hoisting is a JavaScript behavior where declarations
// of variables and functions are processed before
// the code is executed.
//
// JavaScript processes declarations before executing
// the code line by line.


// ============================================================
// 1. var Hoisting
// ============================================================

console.log(a);

var a = 10;

console.log(a);


// Conceptually JavaScript processes it like:

// var a;

// console.log(a);  // undefined

// a = 10;

// console.log(a);  // 10


// Important:
// var declaration is hoisted.
// var is initialized with undefined.

// ============================================================
// 2. var Can Be Accessed Before Declaration
// ============================================================

console.log(d);
var d = 20;

// Output:
// undefined


// ============================================================
// 3. let and Temporal Dead Zone (TDZ)
// ============================================================

// let is hoisted, but it is NOT initialized.

// Accessing let before its declaration
// results in ReferenceError.

// console.log(b);
// let b = 10;

// Error:
// ReferenceError: Cannot access 'b' before initialization


// ============================================================
// 4. const and Temporal Dead Zone (TDZ)
// ============================================================

// const also has the Temporal Dead Zone.

// console.log(name);
// const name = "Ketan";

// Error:
// ReferenceError: Cannot access 'name' before initialization

console.log("----5.Function Declaration Hosting-------------")

// Function declarations are fully hoisted.
//
// Therefore, we can call the function
// before its declaration.

test();

function test() {

    console.log("Hello");
}

test();

// ============================================================
// 6. Another Function Declaration Example
// ============================================================

addition(10, 20);

function addition(a, b) {

    console.log(a + b);
}


// Output:
// 30


// ============================================================
// IMPORTANT SUMMARY
// ============================================================

// var    ↓
// Declaration is hoisted
// Initialized with undefined

// let     ↓
// Declaration is hoisted
// Remains in TDZ until declaration is reached

// const    ↓
// Declaration is hoisted
// Remains in TDZ until declaration is reached

// Function Declaration
//     ↓
// Fully hoisted
// Can be called before declaration

// ============================================================
// 7. Function Expression with var
// ============================================================

// A function expression is assigned to a variable.
//
// Here, the variable 'greet' is declared using var.
//
// var greet is hoisted and initialized with undefined.
//
// But the function assignment happens only
// when execution reaches this line.

// greet();

var greet = function () {

    console.log("Java");

};

greet();


// If we call it BEFORE the assignment:
//
// greet();

// var greet = function () {
//     console.log("Java");
// };

// Result:
// TypeError: greet is not a function


// ============================================================
// IMPORTANT DIFFERENCE
// ============================================================

// Function Declaration:

sayHello();

function sayHello() {
    console.log("Hello");
}

// Works because function declarations
// are fully hoisted.


// Function Expression:

// sayHi();
//
// var sayHi = function () {
//     console.log("Hi");
// };
//
// Does NOT work because:
//
// var sayHi;
// sayHi();             // undefined is not a function
// sayHi = function(){} // assignment happens later


// ============================================================
// FINAL INTERVIEW SUMMARY
// ============================================================

// 1. var declaration is hoisted and initialized as undefined.
//
// 2. let and const are hoisted but remain in TDZ
//    until their declaration is reached.
//
// 3. Function declarations are fully hoisted.
//
// 4. Function expressions follow the hoisting behavior
//    of the variable used to store the function.
//
// 5. return sends a value back to the caller.
//
// 6. return immediately stops function execution.