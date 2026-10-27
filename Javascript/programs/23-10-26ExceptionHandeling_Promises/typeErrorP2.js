// ============================================================
// 1. TypeError Example
// ============================================================

console.log("Program Started");

try {
    let num = 100;

    num.toUpperCase(); // TypeError: not a function

    console.log("This statement will not execute");
}
catch (error) {
    console.log("Error Message:", error.message);
    console.log("Runtime Error");
}

console.log("Program Ended");

console.log("--".repeat(20));

/*
Expected Output:

Program Started
Error Message: num.toUpperCase is not a function
Runtime Error
Program Ended
----------------------------------------

Explanation:
- num contains the number 100.
- toUpperCase() is a string method, not a number method.
- JavaScript throws a TypeError.
- The remaining statement inside try is skipped.
- The catch block handles the error.
- The program continues after catch.
*/


// ============================================================
// 2. RangeError: Invalid Array Length
// ============================================================

console.log("Program Started");

try {
    let arr = new Array(-5);

    console.log(arr.length);
    console.log(10);
}
catch (error) {
    console.log("Error Message:", error.message);
    console.log("Invalid Array Length");
}

console.log("Program Ended");

/*
Expected Output (typical JavaScript runtime):

Program Started
Error Message: Invalid array length
Invalid Array Length
Program Ended

Explanation:
- JavaScript attempts to create an array with a length of -5.
- A RangeError occurs because an array length cannot be negative.
- The remaining statements inside try are skipped.
- The catch block handles the exception.
- The program continues after catch.

Note:
The exact error message may differ between JavaScript engines,
but the error type is RangeError.
*/