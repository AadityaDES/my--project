// ============================================================
// 1. ARRAY DESTRUCTURING
// ============================================================

/*
Definition:
Array destructuring is a short way to extract values from an array
and store them in separate variables.

Values are assigned based on their positions (indexes).

Index 0 -> First variable
Index 1 -> Second variable
Index 2 -> Third variable
*/


// ============================================================
// 2. ACCESSING ARRAY VALUES WITHOUT DESTRUCTURING
// ============================================================

// Creating an array of colors
let colors = ["Red", "Green", "Blue"];

// Accessing values using indexes
const firstColor = colors[0];
const secondColor = colors[1];
const thirdColor = colors[2];

// Displaying the values
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

/*
Output:
Red
Green
Blue
*/

console.log("----------------------");


// ============================================================
// 3. ACCESSING ARRAY VALUES WITH DESTRUCTURING
// ============================================================

// Creating an array of colors
let colors2 = ["Red", "Green", "Blue"];

// Extracting values into separate variables
let [firstColor1, secondColor1, thirdColor1] = colors2;

// Displaying the extracted values
console.log(firstColor1);
console.log(secondColor1);
console.log(thirdColor1);

/*
Output:
Red
Green
Blue
*/


// ============================================================
// 4. NUMBER ARRAY DESTRUCTURING
// ============================================================

const scores = [74, 55, 88];

console.log(scores);

// Extracting array values into variables
let [f1, f2, f3, f4] = scores;

// f1 = 74
// f2 = 55
// f3 = 88
// f4 = undefined because the array has only three elements

console.log("Scores:", f1, f2, f3, f4);

// Performing an operation on the extracted value
console.log(f1 + 30);

/*
Output:
[ 74, 55, 88 ]
Scores: 74 55 88 undefined
104
*/

console.log("-----------------------------");


// ============================================================
// 5. REST SYNTAX IN ARRAY DESTRUCTURING
// ============================================================

/*
Definition:
The rest syntax (...) collects the remaining array elements
into a new array.

Rules:
1. Only one rest element is allowed in a destructuring pattern.
2. The rest element must be the last element.
*/

// Creating an array of marks
const marks = [1, 88, 55, 89, 77, 44];

// Extracting the first two values and collecting the remaining values
const [topMark, secondMark, ...remainingMarks] = marks;

// Displaying the extracted values
console.log("Top Mark:", topMark);
console.log("Second Mark:", secondMark);
console.log("Remaining Marks:", remainingMarks);

/*
Output:
Top Mark: 1
Second Mark: 88
Remaining Marks: [ 55, 89, 77, 44 ]
*/


// ============================================================
// 6. REST PARAMETERS IN FUNCTIONS
// ============================================================

/*
Definition:
A rest parameter (...) collects all remaining arguments passed
to a function into a single array.

Syntax:

function functionName(...parameterName) {
    // Code
}
*/

// Function to add any number of arguments
function addAll(...numbers) {

    // Displaying all collected arguments
    console.log("Numbers collected by rest:", numbers);

    // Initializing the total
    let total = 0;

    // Iterating through the numbers array
    for (const number of numbers) {
        total = total + number;
    }

    // Returning the calculated total
    return total;
}

// Calling the function with three arguments
let total1 = addAll(10, 20, 30);
console.log("Total:", total1);

// Calling the function with five arguments
let total2 = addAll(1, 2, 3, 4, 5);
console.log("Total:", total2);

/*
Output:
Numbers collected by rest: [ 10, 20, 30 ]
Total: 60
Numbers collected by rest: [ 1, 2, 3, 4, 5 ]
Total: 15
*/


// ============================================================
// 7. FUNCTION WITH NORMAL PARAMETERS
// ============================================================

// This function accepts exactly two named parameters
function addAdd(n1, n2) {
    console.log(n1 + n2);
}

// Passing two arguments
addAdd(10, 20);

/*
Output:
30
*/


// ============================================================
// 8. SWAPPING TWO VARIABLES USING A THIRD VARIABLE
// ============================================================

/*
Definition:
Swapping means exchanging the values of two variables.

Initially:
a = 10
b = 20

Expected after swapping:
a = 20
b = 10
*/

let a = 10;
let b = 20;

// Displaying original values
console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

// Using a temporary variable to exchange values
let temp = a;
a = b;
b = temp;

// Displaying swapped values
console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);

/*
Output:
Before swapping:
a = 10
b = 20
After swapping:
a = 20
b = 10
*/


// ============================================================
// 9. SWAPPING WITHOUT A THIRD VARIABLE
// ============================================================

/*
This method uses addition and subtraction.

Initially:
a = 10
b = 20

Step 1: a = a + b  -> a = 30
Step 2: b = a - b  -> b = 10
Step 3: a = a - b  -> a = 20

Note:
This arithmetic approach can cause precision or overflow issues
for certain numeric types or very large values in other languages.
*/

// Resetting the variables
a = 10;
b = 20;

// Swapping values using arithmetic operations
a = a + b;
b = a - b;
a = a - b;

console.log("a =", a);
console.log("b =", b);

/*
Output:
a = 20
b = 10
*/


// ============================================================
// 10. SWAPPING USING ARRAY DESTRUCTURING
// ============================================================

/*
Definition:
Array destructuring allows us to swap two variables in one statement
without creating a temporary variable.
*/

// Resetting the variables
a = 10;
b = 20;

// Swapping values using array destructuring
[a, b] = [b, a];

// Displaying the swapped values
console.log("a =", a);
console.log("b =", b);

/*
Output:
a = 20
b = 10
*/