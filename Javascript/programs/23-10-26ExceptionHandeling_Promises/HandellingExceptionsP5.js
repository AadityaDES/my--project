// ============================================================
// Handling Different Types of Exceptions
// ============================================================

try {
    let num = 10 + undefined;

    console.log("Number:", num); // NaN

    if (Number.isNaN(num)) { // true
        throw new TypeError("Value is not a valid number");
    }

    if (num < 0) {
        throw new RangeError("Negative number is not allowed");
    }

    console.log("Number is valid:", num);
}
catch (error) {

    if (error instanceof TypeError) { // true
        console.log("TypeError caught:", error.message);
    }
    else if (error instanceof ReferenceError) {
        console.log("ReferenceError caught:", error.message);
    }
    else if (error instanceof RangeError) {
        console.log("RangeError caught:", error.message);
    }
    else {
        console.log("General error:", error.message);
    }
}
finally {
    console.log("Program completed");
}

/*
Expected Output:

Number: NaN
TypeError caught: Value is not a valid number
Program completed
*/