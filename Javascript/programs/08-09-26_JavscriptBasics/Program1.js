// ============================================================
// JavaScript Basics
// ============================================================


// 1. What is Programming?
// ------------------------------------------------------------
// Programming is the process of writing instructions for a
// computer to perform a specific task.
//
// A programmer writes these instructions using a programming
// language such as Java, JavaScript, Python, C++, etc.
// ------------------------------------------------------------


// 2. What is JavaScript?
// ------------------------------------------------------------
// JavaScript is a high-level, dynamically typed programming
// language.
//
// It is widely used for web development and automation testing.
//
// As an Automation Test Engineer, JavaScript is commonly used
// with tools such as Playwright and Selenium.
//
// JavaScript can run in:
// 1. Browser
// 2. Server
//
// Node.js allows JavaScript to run outside the browser.
// ------------------------------------------------------------


// 3. Variable
// ------------------------------------------------------------
// A variable is a named container used to store a value.
//
// Example:
// Name = Raj
//
// name  → Label / Variable
// Raj   → Value / Content
//
// JavaScript provides three keywords to declare variables:
// 1. var
// 2. let
// 3. const
// ------------------------------------------------------------


// Example of Variable

let name = "Rohit";
let number = 100;
let boo = true;
let test1 = 10.5;


// A variable can store different types of values.
//
// "Rohit" → String
// 100     → Number
// true    → Boolean
// 10.5    → Number


// ============================================================
// 4. Dynamic Typing
// ============================================================

// JavaScript is dynamically typed.
//
// We do not need to declare the data type of a variable.
//
// Example:
//
// Java:
//
// String name = "Rohit";
// int number = 100;
//
// JavaScript:

let studentName = "Rohit";
let age = 100;

// The same variable can hold different types of values
// because JavaScript is dynamically typed.

let value = 10;

value = "Hello";

value = true;


// The variable "value" can hold:
// Number → 10
// String → "Hello"
// Boolean → true


// ============================================================
// 6. JavaScript Runtime
// ============================================================

// JavaScript does not require us to manually compile our
// JavaScript code before running it.
//
// JavaScript code is executed by a JavaScript engine.
//
// Browser → JavaScript Engine
// Node.js → V8 JavaScript Engine
//
// Examples of JavaScript engines:
// Chrome / Node.js → V8
// Firefox            → SpiderMonkey
// Safari             → JavaScriptCore



// ============================================================
// 7. JavaScript Can Run in Browser and Server
// ============================================================

// Browser:
// JavaScript can interact with web pages and browser features.
//
// Server:
// JavaScript can run on the server using Node.js.
//
// Example:
//
// Browser
// JavaScript → Browser → Web Application
//
// Server
// JavaScript → Node.js → Server Application



// ============================================================
// 8. Single Threaded and Event Loop
// ============================================================

// JavaScript is single-threaded.
//
// It executes JavaScript code using a single main thread.
//
// JavaScript uses an Event Loop to handle asynchronous
// operations such as:
// 1. API calls
// 2. Timers
// 3. File operations
// 4. Browser events
//
// This allows JavaScript to handle multiple tasks efficiently
// without blocking the main execution thread.


// ============================================================
// 9. Object-Oriented Programming
// ============================================================

// JavaScript supports Object-Oriented Programming (OOP).
//
// Important OOP concepts include:
// 1. Encapsulation
// 2. Inheritance
// 3. Polymorphism
// 4. Abstraction
//
// These concepts are very useful when building large
// automation frameworks.


// ============================================================
// 10. Platform Independent
// ============================================================

// JavaScript is platform independent.
//
// The same JavaScript code can run on different operating
// systems such as:
// 1. Windows
// 2. macOS
// 3. Linux
//
// As long as the required JavaScript runtime or browser
// environment is available.


// ============================================================
// 11. var, let and const
// ============================================================

// JavaScript provides three keywords for declaring variables:
//
// 1. var
// 2. let
// 3. const
//
// Example:

var city = "Pune";
let employee = "Rohit";
const company = "ABC";


// var:
// Can be redeclared and reassigned.
//
// let:
// Cannot be redeclared in the same scope but can be reassigned.
//
// const:
// Cannot be redeclared or reassigned.
//
// In modern JavaScript, prefer:
// let → when the value needs to change
// const → when the value should not be reassigned