// ============================================================
// throw Keyword
// ============================================================

/*
The throw keyword is used to raise an exception manually.
When JavaScript encounters throw, it immediately stops
executing the remaining statements in the current try block
and transfers control to the catch block, if one is available.
*/

function divide(a, b) {

    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }

    return a / b;
}

try {
    console.log(divide(4, 2));
    console.log(divide(4, 2));
    console.log(divide(40, 0));

    console.log("This line is not executed");
}
catch (error) {
    console.log("Error:", error.message);
}

console.log("--".repeat(30));

/*
Expected Output:

2
2
Error: Division by zero is not allowed
------------------------------------------------------------

Explanation:

1. divide(4, 2) returns 2.
2. The second divide(4, 2) also returns 2.
3. divide(40, 0) checks whether b === 0.
4. Because the condition is true, throw raises an Error.
5. JavaScript skips the remaining statements inside try.
6. The catch block displays the error message.
7. Execution continues after the catch block.
*/