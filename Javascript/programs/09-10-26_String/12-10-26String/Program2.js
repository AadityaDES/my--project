// ============================================================
// 1. STRING CONCATENATION
// ============================================================

/*
String concatenation means joining two or more strings.

JavaScript supports multiple ways to concatenate strings.
*/

let part1 = "Hello";
let part2 = "World";
let part3 = "!";

// Method 1: Using the + operator

let combined = part1 + " " + part2 + " " + part3;
console.log(combined);
// Hello World!


// Method 2: Using template literals
// Template literals use backticks (`).
// ${variable} inserts a variable's value into a string.

console.log(`${part1} ${part2} ${part3}`);
// Hello World!


// Method 3: Using console.log() with commas
// console.log() separates multiple arguments with spaces.
// This displays the values but does not create a combined string.

console.log(part1, part2, part3);
// Hello World !


// Method 4: Using concat()
// concat() returns a new string.

let concatResult = part1.concat(" ", part2);
console.log(concatResult);
// Hello World

let final = concatResult.concat(" ", part3);
console.log(final);
// Hello World !


// ============================================================
// 2. STRING COMPARISON
// ============================================================

/*
==  : Compares values after type conversion when necessary.
=== : Compares value and type without type conversion.
!=  : Checks whether values are unequal after type conversion.
!== : Checks whether value or type differs.

String comparisons are case-sensitive.
*/

let s11 = "Hello";
let s22 = "Hello";

console.log(s11 == s22);  // true
console.log(s11 === s22); // true

console.log("5" == 5);    // true
console.log("5" === 5);   // false


// Case-sensitive comparison

let actual = "Welcome Page";
let expected = "Welcome page";

console.log(actual === expected); // false
console.log(actual !== expected); // true


// Case-insensitive comparison
// Convert both strings to the same case before comparing.

console.log(actual.toUpperCase() !== expected.toUpperCase());
// false

console.log(actual.toUpperCase() === expected.toUpperCase());
// true


// ============================================================
// 3. repeat()
// ============================================================

/*
repeat(count) repeats a string the specified number of times.

Syntax:
string.repeat(count);

It returns a new string.
The count must be a non-negative number.
*/

let star = "*";

console.log(star.repeat(20));
// ********************


// ============================================================
// 4. RIGHT-ANGLED TRIANGLE
// ============================================================

/*
Complete Flow:

i = 1 -> repeat(1) -> *
i = 2 -> repeat(2) -> **
i = 3 -> repeat(3) -> ***
i = 4 -> repeat(4) -> ****
i = 5 -> repeat(5) -> *****
*/

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

/*
Output:

*
**
***
****
*****
*/


// ============================================================
// 5. INVERTED TRIANGLE
// ============================================================

/*
Complete Flow:

i = 5 -> repeat(5) -> *****
i = 4 -> repeat(4) -> ****
i = 3 -> repeat(3) -> ***
i = 2 -> repeat(2) -> **
i = 1 -> repeat(1) -> *
*/

for (let i = 5; i >= 1; i--) {
    console.log("*".repeat(i));
}

/*
Output:

*****
****
***
**
*
*/


// ============================================================
// 6. PYRAMID PATTERN
// ============================================================

/*
Formula:

Spaces = n - i
Stars  = 2 * i - 1

For n = 3:

i = 1 -> 2 spaces + 1 star
i = 2 -> 1 space  + 3 stars
i = 3 -> 0 spaces + 5 stars
*/

console.log("----------------------------------");

for (let i = 1; i <= 3; i++) {
    console.log(" ".repeat(3 - i) + "*".repeat(2 * i - 1));
}

/*
Output:

  *
 ***
*****
*/


// ============================================================
// 7. DIAMOND PATTERN
// ============================================================

/*
The diamond combines:
1. An increasing pyramid.
2. A decreasing pyramid.

The middle row is printed only once.
*/

console.log("----------------------------------");

let n = 5;

// Upper half, including the middle row

for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}

// Lower half, excluding the middle row

for (let i = n - 1; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}

/*
Output:

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/


// ============================================================
// 8. const WITH OBJECTS
// ============================================================

/*
const prevents reassignment of the variable.

However, if the variable refers to an object,
the object's properties can still be modified.

Reassignment: Not allowed.
Property modification: Allowed.
*/

const user = { name1: "Rahul" };

console.log(user);
// { name1: "Rahul" }


// This causes a TypeError because user cannot be reassigned.
// user = { name1: "Amit" };

console.log(user);
// { name1: "Rahul" }


// This is allowed because we are modifying a property.

user.name1 = "Rohit";

console.log(user);
// { name1: "Rohit" }


// ============================================================
// 9. FIRST-CLASS FUNCTIONS
// ============================================================

/*
JavaScript treats functions as first-class values.

This means a function can be:

1. Assigned to a variable.
2. Passed as an argument to another function.
3. Returned from another function.
4. Stored in an array or object.
*/

// Example 1: Assigning a function to a variable

const greet = function () {
    console.log("Hello Students");
};

greet();
// Hello Students


// Example 2: Storing a function in an array

const operations = [
    function () {
        return "Addition";
    },
    function () {
        return "Subtraction";
    }
];

console.log(operations[0]()); // Addition
console.log(operations[1]()); // Subtraction


// ============================================================
// 10. HIGHER-ORDER FUNCTIONS
// ============================================================

/*
A higher-order function is a function that does at least
one of the following:

1. Accepts another function as an argument.
2. Returns a function.

A callback is a function passed to another function
to be called by that function.
*/

// Example 1: Passing a function as an argument

function greetStudent(name) {
    console.log("Hello " + name);
}

function processStudent(callback) {
    callback("Rahul");
}

processStudent(greetStudent);
// Hello Rahul


// Example 2: Returning a function

function outerFunction() {
    return function () {
        console.log("Inner function executed");
    };
}

const result = outerFunction();

result();
// Inner function executed