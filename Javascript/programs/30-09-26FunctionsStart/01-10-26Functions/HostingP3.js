// JAVASCRIPT HOISTING
// Hoisting is a JavaScript mechanism where declarations
// of variables and functions are processed before code execution.
// ============================================================
// 1. var Hoisting
// var a;
// Declaration is hoisted.

console.log(a); // undefined

var a = 10;

console.log(a); // 10

// ============================================================
// 2. Function Declaration Hoisting
// ============================================================

// Function declarations are fully hoisted.
//
// Therefore, we can call the function before
// its declaration.

greet();

function greet() {

    console.log("Hello Students");
}


// ============================================================
// 3. let Hoisting
// ============================================================

// let is hoisted but remains in the
// Temporal Dead Zone (TDZ).

// console.log(b);
// let b = 10;

// Error:
// ReferenceError: Cannot access 'b' before initialization


// ============================================================
// 4. const Hoisting
// ============================================================

// const is also hoisted but remains in the
// Temporal Dead Zone (TDZ).

// console.log(c);
// const c = 20;

// Error:
// ReferenceError: Cannot access 'c' before initialization


// ============================================================
// 5. Function Declaration with Parameters
// ============================================================

// Function declaration is fully hoisted,
// so we can call it before the function declaration.

console.log(test(10, 20));

function test(a, b) {

    return a + b;
}


// Output:
// 30


// ============================================================
// QUICK SUMMARY
// ============================================================

// var
// → Declaration is hoisted
// → Initialized with undefined
//
// let
// → Declaration is hoisted

//
// const
// → Declaration is hoisted

//
// Function Declaration
// → Fully hoisted
// → Can be called before declaration