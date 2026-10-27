// ============================================================
// 1. ARRAY DESTRUCTURING (ES6)
// ============================================================

/*
Array destructuring allows us to extract array elements
and assign them to variables in a single statement.

Before ES6:

let first = student[0];
let second = student[1];
let third = student[2];

After ES6:

let [first, second, third] = student;
*/

let student = ["Rohit", "Virat", "Rahul"];

let [first, second, third] = student;

console.log(first);  // Rohit
console.log(second); // Virat
console.log(third);  // Rahul

console.log("-".repeat(30));


// ============================================================
// 2. ARRAY DESTRUCTURING WITH NUMBERS
// ============================================================

let number = [10, 20, 30];

// Traditional approach:
// let a = number[0];
// let b = number[1];
// let c = number[2];

let [a, b, c] = number;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

console.log("-".repeat(30));


// ============================================================
// 3. SKIPPING ARRAY ELEMENTS
// ============================================================

/*
Empty positions in the destructuring pattern skip elements.

let [first, , third] = number;

The second element is skipped.
*/

let [x, , test] = number;

console.log(x);    // 10
console.log(test); // 30

console.log("-".repeat(30));


// ============================================================
// 4. DEFAULT VALUES IN DESTRUCTURING
// ============================================================

/*
A default value is used when an element is missing
or its value is undefined.
*/

let cities = ["Pune"];

let [city1, city2 = "Mumbai"] = cities;

console.log(city1); // Pune
console.log(city2); // Mumbai


// Default value is not used when the value is null.

let [city3 = "Delhi"] = [null];

console.log(city3); // null

console.log("-".repeat(30));


// ============================================================
// 5. REST OPERATOR IN ARRAY DESTRUCTURING
// ============================================================

/*
Rest syntax (...) collects all remaining array elements
into a new array.

Rules:
1. Only one rest element is allowed in a destructuring pattern.
2. The rest element must be the last element.
*/

let number1 = [10, 20, 30, 40, 50, 60, 70];

let [firstNumber, secondNumber, ...otherNumbers] = number1;

console.log(firstNumber);  // 10
console.log(secondNumber); // 20
console.log(otherNumbers); // [30, 40, 50, 60, 70]

console.log("-".repeat(30));


// ============================================================
// 6. REST PARAMETERS IN FUNCTIONS
// ============================================================

/*
A rest parameter collects the remaining function arguments
into an array.

Syntax:
function functionName(...parameters) {
    // Statements
}

The rest parameter must be the last parameter.
*/

function add(...numbers) {

    console.log("Numbers:", numbers);

    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    console.log("Sum:", sum);
}

add(1, 2);
// Numbers: [1, 2]
// Sum: 3

add(10, 20, 30);
// Numbers: [10, 20, 30]
// Sum: 60

add(10, 20, 30, 40);
// Numbers: [10, 20, 30, 40]
// Sum: 100

console.log("-".repeat(30));


// ============================================================
// 7. REST PARAMETER WITH A FIXED PARAMETER
// ============================================================

function display(firstValue, ...remainingValues) {

    console.log("First value:", firstValue);
    console.log("Remaining values:", remainingValues);
}

display(10, 20, 30, 40);

/*
Output:
First value: 10
Remaining values: [20, 30, 40]
*/

console.log("-".repeat(30));


// ============================================================
// 8. SWAPPING VARIABLES USING DESTRUCTURING
// ============================================================

let firstValue = 100;
let secondValue = 200;

[firstValue, secondValue] = [secondValue, firstValue];

console.log(firstValue);  // 200
console.log(secondValue); // 100

console.log("-".repeat(30));


// ============================================================
// 9. SPREAD SYNTAX
// ============================================================

/*
Spread syntax (...) expands iterable elements into
individual elements or arguments.
*/

let originalNumbers = [10, 20, 30];

let copiedNumbers = [...originalNumbers, 40];

console.log(originalNumbers); // [10, 20, 30]
console.log(copiedNumbers);   // [10, 20, 30, 40]

console.log(Math.max(...originalNumbers)); // 30