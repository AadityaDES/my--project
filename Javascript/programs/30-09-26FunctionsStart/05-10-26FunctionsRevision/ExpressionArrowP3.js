// ============================================================
// 1. FUNCTION EXPRESSION
// ============================================================

// Syntax:
//
// const variableName = function (parameters) {
//     // Code
// };

const greet = function () {
    console.log("Hello from Function Expression");
};

greet();

const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(2, 3)); // 6


// ============================================================
// 2. FUNCTION DECLARATION VS FUNCTION EXPRESSION
// ============================================================

// Function Declaration:
// Function declarations are fully hoisted.
// They can be called before their declaration.

sayHello();

function sayHello() {
    console.log("Hi");
}


// Function Expression:
// The function is assigned to a variable.
// The function cannot be called before the assignment
// has executed.

let sayBye = function () {
    console.log("Bye!");
};

sayBye();

console.log("--------------------------------------");


// ============================================================
// 3. ARROW FUNCTIONS
// ============================================================

// Arrow functions were introduced in ES6 (2015).
//
// They use the arrow operator => instead of the function keyword.
//
// Syntax:
//
// const functionName = (parameters) => {
//     // Code
// };


// ============================================================
// EXAMPLE 1: Arrow Function Without Parameters
// ============================================================

const hello = () => {
    console.log("Hello Arrow!");
};

hello();


// ============================================================
// EXAMPLE 2: Arrow Function with One Parameter
// ============================================================

const square = (num) => {
    return num * num;
};

console.log(square(5)); // 25

// ============================================================
// EXAMPLE 3: Arrow Function with Multiple Parameters
// ============================================================

const add = (a, b) => {
    return a + b;
};

let addition = add(10, 20);

console.log(addition); // 30


// ============================================================
// 4. SHORTER ARROW FUNCTION SYNTAX
// ============================================================

// When the function body contains only one expression,
// curly braces and the return keyword can be omitted.

const squareNumber = num => num * num;
console.log(squareNumber(4)); // 16

const addNumbers = (a, b) => a + b;
console.log(addNumbers(10, 20)); // 30

// ============================================================
// 5. IMPORTANT FEATURES OF ARROW FUNCTIONS
// ============================================================

// 1. Arrow functions provide shorter syntax.
//
// 2. Arrow functions do not have their own `this`.
//    They inherit `this` from the surrounding scope.
//
// 3. Arrow functions cannot be used as constructors with `new`.
//
// 4. Arrow functions are not fully hoisted like function declarations.
//    They follow the hoisting rules of the variable used to store them.
//
// 5. Arrow functions can accept parameters and return values.