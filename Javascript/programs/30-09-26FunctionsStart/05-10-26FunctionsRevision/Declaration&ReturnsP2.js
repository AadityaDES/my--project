// ============================================================
// TYPES OF FUNCTIONS
// ============================================================

// 1. FUNCTION DECLARATION
// ============================================================

/*
Syntax:

function functionName(parameters) {
    // Code
    return value; // Optional
}
*/

function sayHi() {
    return "Hi";
}

console.log(sayHi()); // Hi


// ============================================================
// 2. FUNCTION WITH PARAMETERS AND RETURN
// ============================================================

function greet(name) {

    console.log("Hello: " + name);

    return "Hello: " + name;
}

console.log(greet("Amit"));


// ============================================================
// 3. DEFAULT PARAMETERS
// ============================================================

// A default parameter is used when no argument
// or undefined is passed for that parameter.

function greetUser(name = "Guest") {

    console.log("Welcome: " + name);
}

greetUser("Rahul"); // Welcome: Rahul

greetUser();        // Welcome: Guest


// ============================================================
// 4. MISSING ARGUMENTS
// ============================================================

// If an argument is missing, its parameter becomes undefined.

function add(a, b) {

    console.log(a + b);
}

add(3); // NaN

// Complete Flow:
// a = 3
// b = undefined
// 3 + undefined = NaN


// ============================================================
// 5. EXTRA ARGUMENTS
// ============================================================

// Extra arguments are not assigned to additional named
// parameters, but can be accessed using arguments or rest parameters.

function sum(a, b) {

    return a + b;
}

console.log(sum(1, 2, 3, 4)); // 3

// Complete Flow:
// a = 1
// b = 2
// 3 and 4 are not assigned to named parameters a or b.
// 1 + 2 = 3


// ============================================================
// 6. RETURN STATEMENT
// ============================================================

// return sends a value back to the place
// where the function was called.
//
// Without an explicit return statement,
// a JavaScript function returns undefined.

function multiply(a, b) {

    return a * b;
}

let result = multiply(5, 4);

console.log(result); // 20


// ============================================================
// 7. RETURNING DIFFERENT DATA TYPES
// ============================================================

// Returning a String

function getName() {
    return "Amit";
}

console.log(getName()); // Amit


// Returning a Number

function getNumber() {
    return 100;
}

console.log(getNumber()); // 100


// Returning a Boolean

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(10)); // true


// Returning an Array

function getColors() {
    return ["Red", "Green", "Blue"];
}

console.log(getColors());


// Returning an Object

function getUser() {

    return {
        name: "Amit",
        role: "QA"
    };
}

console.log(getUser());


// Returning a Function

function outer() {

    return function () {
        console.log("Inner Function");
    };
}

let innerFunction = outer();

innerFunction();


// ============================================================
// 8. CODE AFTER RETURN
// ============================================================

// return immediately stops function execution.
// Statements after return in the same execution path
// will not execute.

function test() {

    return "Hello";

    // This statement is unreachable.
    // console.log("This never runs");
}

console.log(test()); // Hello