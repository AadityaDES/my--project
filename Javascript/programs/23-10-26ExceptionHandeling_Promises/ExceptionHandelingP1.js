
// ============================================================
// 1. Exception Handling
// ============================================================

// JavaScript executes statements from top to bottom.

console.log(10);
console.log(20);
console.log(30);
// console.log(number);
console.log(40);
console.log(50);

/*
Explanation:

- JavaScript executes statements one by one.
- The variable 'number' is not declared.
- If we uncomment console.log(number), a ReferenceError occurs.
- Without exception handling, the remaining statements in the
  current script will not execute after an uncaught exception.
*/


// ============================================================
// 2. What Is Exception Handling?
// ============================================================

/*

What is an Exception?
An exception is an unexpected event that occurs during program
execution and interrupts the normal flow of execution.

Exception Handling:
Exception handling is a mechanism used to handle runtime errors
and maintain the normal flow of a program wherever possible.

JavaScript Exception Handling Keywords:

try     - Contains code that may cause an exception.
catch   - Handles an exception thrown from the associated try block.
finally - Executes whether an exception occurs or not, under
          normal control flow.
throw   - Used to raise an exception, including a custom exception.
*/


// ============================================================
// 3. Syntax of Exception Handling
// ============================================================

try {
    // Code that may cause an exception
}
catch (error) {
    // Handle the exception
}
finally { // Optional
    // Cleanup code that should normally execute
}

console.log("--".repeat(20));


// ============================================================
// 4. ReferenceError Example
// ============================================================

try {
    console.log(10);
    console.log(20);
    console.log(30 / 0);
    console.log(number); // ReferenceError
    console.log(35);     // This line will not execute
}
catch (error) {
    console.log("Error Message:", error.message);
    console.log("Error Type:", error.name);
}

console.log(40);
console.log(50);

/*
Expected Output:

10
20
Infinity
Error Message: number is not defined
Error Type: ReferenceError
40
50

Explanation:

1. 10 and 20 are printed.
2. 30 / 0 produces Infinity. It does NOT throw an exception.
3. JavaScript encounters the undeclared variable 'number'.
4. A ReferenceError occurs.
5. The remaining statements inside try are skipped.
6. The catch block handles the error.
7. The program continues and prints 40 and 50.
*/