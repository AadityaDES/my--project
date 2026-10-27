// ============================================================
// 1. try...catch...finally - Exception Occurs
// ============================================================

console.log("Program 1 Started");

try {
    console.log(result); // ReferenceError: result is not defined

    console.log("This line is not executed");
}
catch (error) {
    console.log("An exception occurred:", error.message);
    console.log("Error type:", error.name);
}
finally {
    console.log("Finally block executed for Program 1");
}

console.log("Program 1 Ended");

console.log("-".repeat(30));

/*
Output:

Program 1 Started
An exception occurred: result is not defined
Error type: ReferenceError
Finally block executed for Program 1
Program 1 Ended

Explanation:
1. JavaScript starts executing the try block.
2. The variable result is not declared, so a ReferenceError occurs.
3. The remaining statement inside try is skipped.
4. The catch block handles the exception.
5. The finally block executes.
6. The program continues after the try-catch-finally block.
*/


// ============================================================
// 2. try...catch...finally - No Exception
// ============================================================

console.log("Program 2 Started");

try {
    console.log("result"); // Prints the text result

    console.log("This line is executed");
}
catch (error) {
    console.log("An exception occurred:", error.message);
    console.log("Error type:", error.name);
}
finally {
    console.log("Finally block executed for Program 2");
}

console.log("Program 2 Ended");

/*
Output:

Program 2 Started
result
This line is executed
Finally block executed for Program 2
Program 2 Ended

Explanation:
1. "result" is inside quotation marks, so JavaScript treats it as text.
2. No exception occurs.
3. The catch block is skipped.
4. The finally block executes.
5. The program continues normally.
*/