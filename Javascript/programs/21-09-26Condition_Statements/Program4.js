// ============================================================
// 4. Nested if Statement
// ============================================================

// Definition:
// A nested if means writing one if statement inside
// another if statement.

// The inner if executes only when the outer if condition
// is true.

// Syntax:
//
// if (condition1) {
//     // Outer if block
//
//     if (condition2) {
//         // Inner if block
//     }
// }

// ============================================================
// Example 1: Voting Eligibility
// ============================================================

// Conditions:
// 1. Person must be 18 or older.
// 2. Person must be a citizen.

// Only when the age requirement is satisfied,
// the citizenship condition will be checked.

let age = 27;
let isCitizen = false;

if (age >= 18) {
    // 27 >= 18 -> true

    console.log("Age requirement met");

    if (isCitizen) {
        // false -> inner if condition is false

        console.log("You are eligible to vote");
    }
    else {
        console.log("Only citizens can vote");
    }
}
else {
    console.log("You must be 18 or older to vote");
}

// Output:
// Age requirement met
// Only citizens can vote

// ============================================================
// Example 2: Age = 17
// ============================================================

age = 17;
isCitizen = false;

if (age >= 18) {
    // 17 >= 18 -> false
    // Inner if will not execute.

    console.log("Age requirement met");

    if (isCitizen) {
        console.log("You are eligible to vote");
    }
    else {
        console.log("Only citizens can vote");
    }
}
else {
    console.log("You must be 18 or older to vote");
}

// Output:
// You must be 18 or older to vote

// ============================================================
// Example 3: Age = 19 and Citizen = true
// ============================================================

age = 19;
isCitizen = true;

if (age >= 18) {
    // 19 >= 18 -> true

    console.log("Age requirement met");

    if (isCitizen) {
        // true -> inner condition is true

        console.log("You are eligible to vote");
    }
    else {
        console.log("Only citizens can vote");
    }
}
else {
    console.log("You must be 18 or older to vote");
}

// Output:
// Age requirement met
// You are eligible to vote

console.log("----------------------------");

// ============================================================
// Example 4: Login Validation with Nested if
// ============================================================

// Login process:
// 1. Validate username and password.
// 2. If credentials are correct, verify OTP.
// 3. If OTP is verified, login is successful.

let username = "Admin";
let password = "admin123";
let otpVerified = true;

if (username === "Admin" && password === "admin123") {
    // Username and password are correct.

    console.log("Username and password are correct");

    if (otpVerified) {
        // OTP verification -> true

        console.log("Login successful");
    }
    else {
        console.log("OTP verification failed");
    }
}
else {
    console.log("Invalid username or password");
}

// Output:
// Username and password are correct
// Login successful

// ============================================================
// Example 5: Login with OTP Verification Failed
// ============================================================

username = "Admin";
password = "admin123";
otpVerified = false;

if (username === "Admin") {
    // Username is correct.

    if (password === "admin123") {
        // Password is correct.

        console.log("Username and password are correct");

        if (otpVerified) {
            // false -> OTP verification failed

            console.log("Login successful");
        }
        else {
            console.log("OTP verification failed");
        }
    }
    else {
        console.log("Invalid password");
    }
}
else {
    console.log("Invalid username");
}

// Output:
// Username and password are correct
// OTP verification failed

// ============================================================
// Nested if vs if...else if
// ============================================================

// Nested if:
// Used when one condition depends on another condition.
//
// Example:
// Age >= 18
//     ↓
// Check citizenship
//     ↓
// Check voting eligibility

// if...else if:
// Used when there are multiple alternative conditions.
//
// Example:
// Marks >= 90 -> A+
// Marks >= 80 -> A
// Marks >= 60 -> B
// Otherwise   -> Fail

// ============================================================
// Automation Testing Example
// ============================================================

// Nested if can be useful when one validation depends
// on another validation.

// Example:
// First check whether the user is logged in.
// Then check whether the user has admin access.

let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn) {
    console.log("User is logged in");

    if (isAdmin) {
        console.log("Admin dashboard is accessible");
    }
    else {
        console.log("User does not have admin access");
    }
}
else {
    console.log("User is not logged in");
}

// ============================================================
// Important Points
// ============================================================

// 1. Nested if means an if statement inside another if.

// 2. The inner if is checked only when the outer if
//    condition is true.

// 3. Multiple levels of nesting are possible,
//    but excessive nesting can make code difficult to read.

// 4. Nested if is useful when one condition depends
//    on another condition.

// 5. Use === for strict comparison when comparing values.

// 6. Nested if is commonly used in automation for:
//    - Login validation
//    - Role-based access
//    - OTP validation
//    - Multiple dependent validations
//    - Conditional test execution