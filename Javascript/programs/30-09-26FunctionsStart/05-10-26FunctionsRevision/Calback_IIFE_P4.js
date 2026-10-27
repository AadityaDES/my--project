// ============================================================
// CALLBACK FUNCTION
// ============================================================

// A callback function is a function that is passed as an argument
// to another function and is executed by that function.
//
// Callback functions are commonly used for:
// 1. Executing one function after another
// 2. Asynchronous programming

// ============================================================
// 1. BASIC CALLBACK FUNCTION
// ============================================================

// Syntax:

/*
function outerFunction(callback) {

    // Main function code

    callback();
}

function callbackFunction() {

    // Callback function code
}

outerFunction(callbackFunction);
*/


function outerFunction(callback) {

    console.log("Outer function is executing.");

    // Calling the callback function
    callback();
}

function innerFunction() {

    console.log("Inner function is executing.");
}

// Passing innerFunction as an argument
outerFunction(innerFunction);


// ============================================================
// CALLBACK FLOW
// ============================================================

/*
innerFunction
      ↓
Passed as an argument
      ↓
outerFunction
      ↓
callback()
      ↓
innerFunction executes
*/


// ============================================================
// 2. SIMPLE CALLBACK EXAMPLE
// ============================================================

function mainFunction(callback) {

    callback();
}

function callbackFunction() {

    console.log("Callback function executed.");
}

mainFunction(callbackFunction);

/*
Complete Flow:

callbackFunction
      ↓
Passed as an argument
      ↓
mainFunction(callbackFunction)
      ↓
callback()
      ↓
callbackFunction() executes
*/


// ============================================================
// 3. CALLBACK WITH PARAMETERS
// ============================================================

function greet(name, callback) {

    console.log("Hello " + name);

    // Calling callback function
    callback();
}

function message() {

    console.log("Welcome to JavaScript");
}

greet("Rahul", message);


// ============================================================
// 4. CALLBACK WITH RETURNED RESULT
// ============================================================

function calculate(a, b, callback) {

    let result = a + b;

    // Passing result to callback
    callback(result);
}

function displayResult(result) {

    console.log("Result:", result);
}

calculate(10, 20, displayResult);


// ============================================================
// 5. CALLBACK USING ARROW FUNCTION
// ============================================================

// Callback can also be written using an arrow function.

function cal(a, b, callback) {

    let result = a + b;

    callback(result);
}

cal(10, 20, (result) => {

    console.log("Addition Result:", result);
});


// Shorter syntax

cal(10, 20, result => console.log("Addition Result:", result));


// ============================================================
// CALLBACK SYNTAX
// ============================================================

/*

function mainFunction(callback) {

    // Main function code

    callback();
}

function callbackFunction() {

    // Callback function code
}

mainFunction(callbackFunction);

*/


// ============================================================
// CALLBACK - SIMPLE DEFINITION
// ============================================================

/*

A callback is a function that is passed as an argument
to another function and executed by that function.

Easy way to remember:

"Pass a function → Call it later"

*/


// ============================================================
// IIFE
// ============================================================

// IIFE = Immediately Invoked Function Expression
//
// An IIFE is a function expression that is executed
// immediately after it is created.
//
// IIFE is useful for:
// 1. Immediate execution
// 2. Creating a private scope
// 3. Avoiding unnecessary global variables
// 4. Executing initialization code

// ============================================================
// IIFE SYNTAX
// ============================================================

/*

(function () {

    // Code

})();

*/

// ============================================================
// 1. BASIC IIFE
// ============================================================

(function () {

    console.log("Hello JavaScript");

})();


// ============================================================
// NORMAL FUNCTION VS IIFE
// ============================================================

// Normal Function

function hello() {

    console.log("Hi");
}

hello();


// IIFE

(function () {

    console.log("Hello from IIFE");

})();


// Difference:
//
// Normal Function → Define first, call separately
//
// IIFE → Define and execute immediately


// ============================================================
// 2. IIFE WITH VARIABLES
// ============================================================

(function () {

    let username = "Ketan";
    let role = "QA Automation Engineer";

    console.log("Username:", username);
    console.log("Role:", role);

})();


// username cannot be accessed outside the IIFE.

// console.log(username);
// ReferenceError


// ============================================================
// 3. IIFE WITH PARAMETERS
// ============================================================

(function (name) {

    console.log("Welcome: " + name);

})("Akshay");


// Complete Flow:
//
// "Akshay"
//     ↓
// name parameter
//     ↓
// IIFE executes
//     ↓
// Welcome: Akshay


// ============================================================
// 4. IIFE WITH MULTIPLE PARAMETERS
// ============================================================

(function (a, b) {

    console.log("Addition:", a + b);

})(10, 20);


// Output:
// Addition: 30


// ============================================================
// 5. IIFE WITH RETURN VALUE
// ============================================================

let result = (function () {

    let a = 20;
    let b = 30;

    return a + b;

})();

console.log("Result:", result);


// Output:
// Result: 50


// ============================================================
// IIFE USING ARROW FUNCTION
// ============================================================

(() => {

    console.log("Arrow Function IIFE");

})();


// IIFE with parameter

((name) => {

    console.log("Welcome " + name);

})("Rahul");


// ============================================================
// CALLBACK VS IIFE
// ============================================================

/*

| Feature                  | Callback Function                  | IIFE                         |
|--------------------------|------------------------------------|------------------------------|
| Meaning                  | Function passed to another        | Function executed immediately|
| Execution                | Called by another function        | Executes immediately         |
| Passed as argument       | Yes                               | Not required                 |
| Can receive parameters   | Yes                               | Yes                          |
| Can return a value       | Yes                               | Yes                          |
| Main purpose             | Execute code at a specific time   | Immediate execution          |
| Common usage             | Events, async, array methods      | Initialization, private scope|

*/


// ============================================================
// EASY WAY TO REMEMBER
// ============================================================

/*

CALLBACK:

"Pass a function → Another function calls it"

IIFE:

"Create a function → Execute it immediately"


Callback:

mainFunction(callbackFunction)
              ↓
          callback()
              ↓
      callback executes


IIFE:

(function () {
    // code
})();

        ↓
   Executes immediately

*/


// ============================================================
// TYPES OF FUNCTIONS COVERED
// ============================================================

/*

1. Function Declaration

2. Function Expression

3. Anonymous Function

4. Arrow Function

5. Callback Function

6. IIFE
   Immediately Invoked Function Expression

*/