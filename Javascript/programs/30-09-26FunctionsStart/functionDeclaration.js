// ============================================================
// Types of Functions in JavaScript
// ============================================================

/*
Types of Functions:

1. Function Declaration
2. Function Expression
3. Anonymous Function
4. Arrow Function
5. Callback Function
6. IIFE (Immediately Invoked Function Expression)
*/


// ============================================================
// 1. Function Declaration
// ============================================================

// A Function Declaration is a named function created using
// the 'function' keyword.

// Function Declaration is hoisted in JavaScript,
// so it can be called before or after its declaration.

/*
Syntax:

function functionName(parameters) {
    // Code
}
*/


// ============================================================
// Example 1: Simple Function
// ============================================================

function greet() {
    console.log("Good Morning");
}

greet();


/*
Complete Flow:

greet()
   ↓
Function is called
   ↓
Function body executes
   ↓
console.log("Good Morning")
   ↓
Output: Good Morning
*/


// ============================================================
// Example 2: Multiply Two Numbers
// ============================================================

function multiply(x, y) {
    console.log(`${x} X ${y} = ${x * y}`);
}

multiply(4, 5);
multiply(10, 2);
multiply(20, 5);


/*
Complete Flow:

multiply(4, 5)

x = 4
y = 5

4 * 5 = 20

Output:
4 X 5 = 20


multiply(10, 2)

x = 10
y = 2

10 * 2 = 20

Output:
10 X 2 = 20


multiply(20, 5)

x = 20
y = 5

20 * 5 = 100

Output:
20 X 5 = 100
*/


// ============================================================
// Example 3: Launch Browser
// ============================================================

function launchBrowser(browserName) {
    console.log(`Launching ${browserName} Browser`);
}

launchBrowser("Chrome");
launchBrowser("Firefox");
launchBrowser("Edge");


/*
Complete Flow:

launchBrowser("Chrome")
browserName = "Chrome"
Output:
Launching Chrome Browser

launchBrowser("Firefox")
browserName = "Firefox"
Output:
Launching Firefox Browser

launchBrowser("Edge")
browserName = "Edge"
Output:
Launching Edge Browser
*/


// ============================================================
// Example 4: Check Even or Odd Number
// ============================================================

function checkEvenOdd(num) {

    if (num % 2 === 0) {
        console.log(`${num} is Even`);
    }
    else {
        console.log(`${num} is Odd`);
    }
}

checkEvenOdd(10);
checkEvenOdd(13);


/*
Complete Flow:

checkEvenOdd(10)

num = 10

10 % 2
= 0

0 === 0
-> true

Output:
10 is Even


checkEvenOdd(13)

num = 13

13 % 2
= 1

1 === 0
-> false

Output:
13 is Odd
*/


// ============================================================
// Example 5: Print Multiplication Table
// ============================================================

function printTable(num) {

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }

    console.log("----------------------------------");
}

printTable(5);
printTable(15);


/*
Complete Flow:

printTable(5)

num = 5

5 X 1 = 5
5 X 2 = 10
5 X 3 = 15
5 X 4 = 20
5 X 5 = 25
5 X 6 = 30
5 X 7 = 35
5 X 8 = 40
5 X 9 = 45
5 X 10 = 50


printTable(15)

num = 15

15 X 1 = 15
15 X 2 = 30
15 X 3 = 45
15 X 4 = 60
15 X 5 = 75
15 X 6 = 90
15 X 7 = 105
15 X 8 = 120
15 X 9 = 135
15 X 10 = 150
*/


// ============================================================
// Example 6: Area of Rectangle
// ============================================================

function rectangleArea(length, width) {

    console.log(`Area = ${length * width}`);
}

rectangleArea(10, 5);
rectangleArea(12, 5);


/*
Complete Flow:

rectangleArea(10, 5)

length = 10
width = 5

Area = 10 * 5
Area = 50

Output:
Area = 50


rectangleArea(12, 5)

length = 12
width = 5

Area = 12 * 5
Area = 60

Output:
Area = 60
*/


// ============================================================
// Important Points
// ============================================================

// 1. Function Declaration uses the 'function' keyword.

// 2. Function Declaration has a function name.

// 3. Parameters receive values passed to the function.

// 4. Arguments are the actual values passed during
//    function calling.

// 5. A function can be called multiple times.

// 6. Functions help us achieve code reusability.

// 7. Function Declaration is hoisted.

// Example:

greet2();

function greet2() {
    console.log("Hello");
}

// This works because Function Declarations are hoisted.

// 8. A function can contain:
//    - Variables
//    - if/else
//    - loops
//    - arrays
//    - objects
//    - other function calls

// 9. A function may or may not have parameters.

// 10. A function may or may not return a value.