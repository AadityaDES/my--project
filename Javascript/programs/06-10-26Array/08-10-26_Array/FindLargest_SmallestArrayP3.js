// ============================================================
// FIND LARGEST NUMBER IN AN ARRAY
// ============================================================

function findLargest(arr) {

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > max) {

            max = arr[i];
        }
    }

    return max;
}

let maximum = findLargest([10, 2030, 3, 223, 400, 1]);

console.log("Largest:", maximum);


// Complete Flow:
//
// Initial max = 10
//
// 2030 > 10  → true  → max = 2030
// 3 > 2030   → false
// 223 > 2030 → false
// 400 > 2030 → false
// 1 > 2030   → false
//
// Final max = 2030


// ============================================================
// FIND SMALLEST NUMBER IN AN ARRAY
// ============================================================

function findSmallest(arr) {

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < min) {

            min = arr[i];
        }
    }

    return min;
}

let minimum = findSmallest([10, 2030, 3, 223, 400, 1]);

console.log("Smallest:", minimum);


// Complete Flow:
//
// Initial min = 10
//
// 2030 < 10 → false
// 3 < 10    → true  → min = 3
// 223 < 3   → false
// 400 < 3   → false
// 1 < 3     → true  → min = 1
//
// Final min = 1


// ============================================================
// COMMON ARRAY PROGRAMS
// ============================================================

/*

1. Find Largest Number
2. Find Smallest Number
3. Find Sum / Total
4. Find Even Numbers
5. Find Odd Numbers
6. Find Duplicate Elements
7. Find Unique Elements
8. Reverse an Array
9. Sort an Array
10. Find Second Largest Number

*/


// ============================================================
// REST OPERATOR (...)
// ============================================================

// The rest operator (...) is used to collect
// multiple remaining values into a single array.
//
// Syntax:
//
// let [first, second, ...rest] = array;


// ============================================================
// 1. REST OPERATOR WITH ARRAY DESTRUCTURING
// ============================================================

let numbers = [10, 20, 30, 40, 50];

let [first, ...remaining] = numbers;

console.log("First:", first);
console.log("Remaining:", remaining);


// Output:
//
// First: 10
// Remaining: [20, 30, 40, 50]


// Complete Flow:
//
// numbers
// [10, 20, 30, 40, 50]
//
// first → 10
//
// ...remaining
// → [20, 30, 40, 50]


// ============================================================
// 2. REST WITH MULTIPLE VARIABLES
// ============================================================

let marks = [90, 49, 55, 89, 76, 33];

let [maths, science, ...otherSubjects] = marks;

console.log("Maths:", maths);
console.log("Science:", science);
console.log("Other Subjects:", otherSubjects);


// Output:
//
// Maths: 90
// Science: 49
// Other Subjects: [55, 89, 76, 33]


// ============================================================
// 3. REST OPERATOR IN FUNCTION PARAMETERS
// ============================================================

// Rest parameter allows a function to accept
// any number of arguments.
//
// The collected arguments are stored in an array.
//
// Syntax:
//
// function functionName(...parameters) {
//     // code
// }


function printNumber(...numbers) {

    console.log(numbers);
}

printNumber(10, 20, 30, 40);


// Output:
//
// [10, 20, 30, 40]


// ============================================================
// 4. NORMAL PARAMETER + REST PARAMETER
// ============================================================

// Rest parameter must be the LAST parameter.

function printNumbers(first, ...remainingNumbers) {

    console.log("First Number:", first);
    console.log("Remaining Numbers:", remainingNumbers);
}

printNumbers(10, 20, 30, 40);


// Output:
//
// First Number: 10
// Remaining Numbers: [20, 30, 40]


// ============================================================
// 5. REST PARAMETER - CALCULATE TOTAL
// ============================================================

function calculateTotal(...marks) {

    let total = 0;

    for (let mark of marks) {

        total = total + mark;
    }

    return total;
}

let result = calculateTotal(10, 20, 30, 40, 50);

console.log("Total:", result);


// Output:
//
// Total: 150


// Complete Flow:
//
// calculateTotal(10, 20, 30, 40, 50)
//
// ...marks
//     ↓
// [10, 20, 30, 40, 50]
//
// total = 0
//
// 10 → total = 10
// 20 → total = 30
// 30 → total = 60
// 40 → total = 100
// 50 → total = 150
//
// return 150


// ============================================================
// IMPORTANT REST OPERATOR RULES
// ============================================================

/*

1. Rest operator is represented by three dots (...).

2. It collects multiple remaining values.

3. In array destructuring, it collects remaining
   elements into a new array.

4. In function parameters, it collects remaining
   arguments into an array.

5. Rest parameter must always be the LAST parameter.

Correct:

function test(a, b, ...rest) {
}


Incorrect:

function test(...rest, a, b) {
}


6. A function can accept any number of arguments
   using a rest parameter.

*/