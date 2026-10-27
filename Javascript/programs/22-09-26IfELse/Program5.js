// Conditional Statements - Practice Examples
// ============================================================
// Example 1: Find Largest of Two Numbers
let a = 300;
let b = 85;

if (a > b) {
    // 300 > 85 -> true

    console.log("Largest Number:", a);
}
else if (b > a) {
    console.log("Largest Number:", b);
}
else {
    console.log("Both numbers are equal");
}

// Output:
// Largest Number: 300

// ============================================================
// Example 2: Find Largest of Three Numbers
// ============================================================

let x = 500;
let y = 300;
let z = 200;

if (x >= y && x >= z) {
    // 500 >= 300 -> true
    // 500 >= 200 -> true
    // true && true -> true

    console.log("Largest Number:", x);
}
else if (y >= x && y >= z) {
    console.log("Largest Number:", y);
}
else {
    console.log("Largest Number:", z);
}

// Output:
// Largest Number: 500

// ============================================================
// Example 3: Find Largest of Three Numbers
// ============================================================

x = 100;
y = 300;
z = 200;

if (x >= y && x >= z) {
    // 100 >= 300 -> false
    // Condition is false.

    console.log("Largest Number:", x);
}
else if (y >= x && y >= z) {
    // 300 >= 100 -> true
    // 300 >= 200 -> true
    // true && true -> true

    console.log("Largest Number:", y);
}
else {
    console.log("Largest Number:", z);
}

// Output:
// Largest Number: 300

// ============================================================
// Example 4: Leap Year - Nested if
// ============================================================

// Leap Year Rules:
//
// 1. If the year is divisible by 4, it can be a leap year.
// 2. If it is also divisible by 100, it must be divisible
//    by 400 to be a leap year.
//
// Examples:
// 2000 -> Leap Year
// 2100 -> Not a Leap Year
// 2024 -> Leap Year
// 2023 -> Not a Leap Year

let year = 2000;

if (year % 4 === 0) {

    if (year % 100 === 0) {

        if (year % 400 === 0) {
            console.log("Leap Year");
        }
        else {
            console.log("Not a Leap Year");
        }
    }
    else {
        console.log("Leap Year");
    }
}
else {
    console.log("Not a Leap Year");
}

// Output:
// Leap Year

// ============================================================
// Example 5: Leap Year - Logical Operators + Ternary
// ============================================================

// A year is a leap year when:
//
// year is divisible by 400
// OR
// year is divisible by 4 AND not divisible by 100

year = 2100;

let result = (
    year % 400 === 0 ||
    (year % 4 === 0 && year % 100 !== 0)
)
    ? "Leap Year"
    : "Not a Leap Year";

console.log(result);

// Output:
// Not a Leap Year

// ============================================================
// More Leap Year Examples
// ============================================================

year = 2024;

result = (
    year % 400 === 0 ||
    (year % 4 === 0 && year % 100 !== 0)
)
    ? "Leap Year"
    : "Not a Leap Year";

console.log(result);

// Output:
// Leap Year

year = 2023;

result = (
    year % 400 === 0 ||
    (year % 4 === 0 && year % 100 !== 0)
)
    ? "Leap Year"
    : "Not a Leap Year";

console.log(result);

// Output:
// Not a Leap Year

// ============================================================
// Programming Language Comparison
// ============================================================

// Different programming languages have different
// numbers of reserved keywords, built-in features,
// and language constructs.

// Java
// JavaScript
// TypeScript
// Python

// The exact number of keywords/features depends on
// the language version and what is being counted.