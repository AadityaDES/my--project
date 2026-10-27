// ============================================================
// FUNCTIONS IN JAVASCRIPT
// ============================================================

// A function is a block of code designed to perform a
// specific task.
//
// Functions help in:
// 1. Code reusability
// 2. Reducing code duplication
// 3. Improving code organization
// 4. Making code easier to maintain

// ============================================================
// 1. WITHOUT FUNCTION - REPEATED CODE
// ============================================================

console.log("Welcome User1");
console.log("Welcome User2");
console.log("Welcome User3");
console.log("Welcome User4");
console.log("Welcome User5");

console.log("-----------------------------");

// ============================================================
// 2. WITH FUNCTION - CODE REUSABILITY
// ============================================================

// Function declaration

function greetUser(name) {

    console.log("Welcome " + name);
}

// Function calls

greetUser("User1");
greetUser("User2");
greetUser("User3");
greetUser("User4");
greetUser("User5");

console.log("-----------------------------");


// ============================================================
// 3. FUNCTION WITH MULTIPLE PARAMETERS
// ============================================================

// username and password are parameters.

function login(username, password) {

    console.log("Entering username: " + username);
    console.log("Entering password: " + password);
    console.log("Clicking Login button");
}

// Calling the same function with different arguments

login("admin", "admin123");

console.log("-----------------------------");

login("admin", "user123");

console.log("------------------------------------");


// ============================================================
// 4. BASIC FUNCTION SYNTAX
// ============================================================

/*
function functionName(parameters) {

    // Code to execute

    return value; // Optional
}
*/

// ============================================================
// 5. FUNCTION WITHOUT PARAMETERS
// ============================================================

function sayHello() {

    console.log("Hello Java");
}

sayHello();

console.log("------------------------------------");


// ============================================================
// 6. FUNCTION WITH PARAMETERS AND RETURN
// ============================================================

function add(a, b) {

    return a + b; // Sends the sum back to the caller
}

let result = add(10, 20);

console.log("Addition:", result);
/*
/*
function functionName(parameters) {

    // Code to execute

    return value; // Optional
}
*/

/*
Simple explanation for students
1. Function declaration: Creating a function using the function keyword.
2. Parameters: Variables defined inside the function parentheses, such as name, username, and password.
3. Arguments: Actual values passed when calling the function, such as "User1" and "admin123".
4. Function call: Executing the function, such as greetUser("User1").
5. Return: Sends a value back to the caller so it can be stored or reused.
*/