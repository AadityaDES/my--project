// ============================================================
// Default Parameters in JavaScript
// ============================================================

// A default parameter is a value assigned to a parameter
// when no argument is passed for that parameter.

/*
Syntax:

function functionName(parameter = defaultValue) {
    // Code
}
*/


// ============================================================
// Example 1: Default Parameter
// ============================================================

function greetUser(name = "Guest") {
    console.log("Welcome:", name);
}

greetUser();           // Guest
greetUser("Akash");    // Akash


/*
Complete Flow:

greetUser()

No argument is passed.
name = "Guest"

Output:
Welcome: Guest


greetUser("Akash")

Argument "Akash" is passed.
name = "Akash"

Output:
Welcome: Akash
*/


console.log("--------------------");


// ============================================================
// Example 2: Default Browser
// ============================================================

function openBrowser(browser = "Chrome") {
    console.log("Opening", browser, "Browser");
}

openBrowser();
openBrowser("Firefox");


/*
Complete Flow:

openBrowser()

No argument is passed.
browser = "Chrome"

Output:
Opening Chrome Browser


openBrowser("Firefox")

browser = "Firefox"

Output:
Opening Firefox Browser
*/


// ============================================================
// Example 3: Multiple Parameters
// ============================================================

function createUser(name = "Ketan", role, level) {
    console.log(`${name} - ${role} - Level ${level}`);
}

createUser("Test");
createUser("Lead", 5);
createUser("Chetan", "QA Lead", 5);


/*
Complete Flow:

createUser("Test")

name = "Test"
role = undefined
level = undefined

Output:
Test - undefined - Level undefined


createUser("Lead", 5)

name = "Lead"
role = 5
level = undefined

Output:
Lead - 5 - Level undefined


createUser("Chetan", "QA Lead", 5)

name = "Chetan"
role = "QA Lead"
level = 5

Output:
Chetan - QA Lead - Level 5
*/


// ============================================================
// Example 4: Missing Argument
// ============================================================

function add(a, b) {
    console.log(a + b);
}

add(10);
add(10, 20);


/*
Complete Flow:

add(10)

a = 10
b = undefined

10 + undefined
= NaN

Output:
NaN


add(10, 20)

a = 10
b = 20

10 + 20
= 30

Output:
30
*/


// ============================================================
// Example 5: Extra Arguments
// ============================================================

function sum(a, b, c) {
    console.log(a + b + c);
}

sum(10, 20, 30);
sum(10, 20, 30, 40);


/*
Complete Flow:

sum(10, 20, 30)

a = 10
b = 20
c = 30

10 + 20 + 30
= 60

Output:
60


sum(10, 20, 30, 40)

a = 10
b = 20
c = 30

Fourth argument = 40

The function has only three declared parameters,
so 40 is not assigned to a, b, or c.

Output:
60
*/


// ============================================================
// Important Points
// ============================================================

// 1. Default parameter is used when an argument is not provided.

// 2. If an argument is provided, the provided value is used.

// Example:

function test(value = 100) {
    console.log(value);
}

test();       // 100
test(500);    // 500


// 3. Missing arguments receive undefined.

// Example:

function addition(a, b) {
    console.log(a + b);
}

addition(10);
// a = 10
// b = undefined
// Result = NaN


// 4. Extra arguments do not automatically cause an error.

// Example:

function display(a, b) {
    console.log(a, b);
}

display(10, 20, 30, 40);

// a = 10
// b = 20
// 30 and 40 are extra arguments.