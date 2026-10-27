// ============================================================
// 1. let in JavaScript
// ============================================================

// let was introduced in ES6 (2015).

// let is the modern and safer way to create variables
// whose value may change during program execution.

// Syntax:
// let variableName = value;

let city = "Pune";

console.log(city);

// Think of it like:
// Create a box called "city" and put "Pune" inside it.


// ============================================================
// Characteristics of let
// ============================================================

// 1. Cannot be re-declared in the same scope

let color = "Red";

// let color = "Blue";
// SyntaxError: Identifier 'color' has already been declared


// 2. Can be re-assigned

let age = 30;

age = 40;

console.log(age);

// Output:
// 40


// 3. Block-scoped

// A variable declared using let inside a block
// can only be accessed within that block.
//
// Blocks include:
// if
// else
// for
// while
// etc.

let x = 20;

if (true) {
    let y = 10;
    console.log(y);
}

console.log(x);

// console.log(y);
// ReferenceError: y is not defined


// ============================================================
// 2. const in JavaScript
// ============================================================

// const was introduced in ES6 (2015).

// const is used to create a variable that cannot be
// re-assigned after its initial value is assigned.

// Syntax:
// const variableName = value;

const country = "India";

console.log(country);

// Think of it like:
// Create a box called "country" and put "India" inside it.
// Once assigned, the variable cannot be re-assigned.


// ============================================================
// Characteristics of const
// ============================================================

// 1. Cannot be re-declared in the same scope

const PI = 3.14;

// const PI = 3.12;
// SyntaxError: Identifier 'PI' has already been declared


// 2. Cannot be re-assigned

const max = 300;

// max = 400;
// TypeError: Assignment to constant variable.


// 3. Must be initialized at the time of declaration

// Correct:

let test;

var demo;

const name = "Raj";

// Incorrect:
//
// const value;
// SyntaxError: Missing initializer in const declaration


// 4. Block-scoped

if (true) {
    const y = 10;
    console.log(y);
}

// console.log(y);
// ReferenceError: y is not defined