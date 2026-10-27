// ============================================================
// JavaScript Functions
// ============================================================

// A function in JavaScript is a reusable block of code
// designed to perform a specific task.

/*
Syntax:

function functionName(parameters) {
    // Code
    return value; // Optional
}
*/


// ============================================================
// Without Function
// ============================================================

let a = 20;
let b = 40;

console.log(a + b);


let x = 30;
let y = 40;

console.log(x + y);

console.log("----------------");


// ============================================================
// Example 1: Function with Parameters
// ============================================================

function addition(number1, number2) {
    console.log(number1 + number2);
}

// Function Calling

addition(10, 20);
addition(20, 40);
addition(100, 200);

console.log("----------------");

/*
Complete Flow:

addition(10, 20)

number1 = 10
number2 = 20

10 + 20 = 30

Output:
30


addition(20, 40)

number1 = 20
number2 = 40

20 + 40 = 60

Output:
60


addition(100, 200)

number1 = 100
number2 = 200

100 + 200 = 300

Output:
300
*/


// ============================================================
// Example 2: Function for Filling Form Data
// ============================================================

function fillForm(name, email, phone) {

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
}


// Function Calling

fillForm("Rahul", "Rahul@gmail.com", 8474747444);

console.log();

fillForm("Ketan", "Ketan@gmail.com", 74646466444);


/*
Complete Flow:

fillForm("Rahul", "Rahul@gmail.com", 8474747444)

name  = "Rahul"
email = "Rahul@gmail.com"
phone = 8474747444

Output:

Name: Rahul
Email: Rahul@gmail.com
Phone: 8474747444


fillForm("Ketan", "Ketan@gmail.com", 74646466444)

name  = "Ketan"
email = "Ketan@gmail.com"
phone = 74646466444

Output:

Name: Ketan
Email: Ketan@gmail.com
Phone: 74646466444
*/


// ============================================================
// Example 3: Function Without Parameters
// ============================================================

function sayHello() {
    console.log("Hello World");
}


// Function Calling

sayHello();
sayHello();


/*
Complete Flow:

sayHello()
    ↓
Execute function body
    ↓
console.log("Hello World")
    ↓
Hello World

Second Function Call:

sayHello()
    ↓
Execute function body
    ↓
console.log("Hello World")
    ↓
Hello World
*/


// ============================================================
// Important Terminology
// ============================================================

// Function Declaration:
// The process of creating/defining a function.

// Example:

function addition1(a, b) {
    console.log(a + b);
}


// Parameters:
// Variables written inside the function definition.

// a and b are parameters.


// Arguments:
// Actual values passed while calling the function.

// Example:

addition1(10, 20);

// 10 and 20 are arguments.


// Function Call / Invocation:
// Executing a function.

// Example:

sayHello();


// ============================================================
// Why Do We Use Functions?
// ============================================================

// 1. Code Reusability
// 2. Avoid duplicate code
// 3. Easy maintenance
// 4. Better code organization
// 5. Accept input using parameters
// 6. Return results using return
// 7. Useful for automation testing